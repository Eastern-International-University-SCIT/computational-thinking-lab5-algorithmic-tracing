/**
 * Instrumented Merge Sort executor.
 * Steps highlight pseudocode lines, animate the 3D array, and grow the trace table.
 */

window.MergeSortExecutor = (function () {
  let running = false;
  let paused = false;
  let abort = false;
  let stepMode = false;
  let stepResolve = null;
  let stepCounter = 0;
  let speed = 5;

  const vars = {
    left: null,
    mid: null,
    right: null,
    i: null,
    j: null,
    k: null,
    iRow: "A",
    jRow: "A",
  };

  function ids() {
    return window.MS_STEP_IDS || window.PseudocodeView.STEP_IDS;
  }

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function stepDelay() {
    return Math.round(900 - speed * 70);
  }

  function writeDuration() {
    return Math.round(650 - speed * 40);
  }

  function setButtons() {
    const runBtn = document.getElementById("btn-run");
    const pauseBtn = document.getElementById("btn-pause");
    const stepBtn = document.getElementById("btn-step");
    const randomBtn = document.getElementById("btn-random");
    const sizeInput = document.getElementById("array-size");

    if (!runBtn) return;

    const puzzleDone = window.TracePuzzle && window.TracePuzzle.isTaskComplete && window.TracePuzzle.isTaskComplete();
    if (puzzleDone) {
      runBtn.disabled = true;
      pauseBtn.disabled = true;
      stepBtn.disabled = true;
      if (randomBtn) randomBtn.disabled = true;
      if (sizeInput) sizeInput.disabled = true;
      const speedInput = document.getElementById("speed");
      const resetBtn = document.getElementById("btn-reset");
      const rerunBtn = document.getElementById("btn-rerun");
      if (speedInput) speedInput.disabled = false;
      if (resetBtn) resetBtn.disabled = false;
      if (rerunBtn) rerunBtn.disabled = false;
      return;
    }
    runBtn.disabled = running && !paused;
    pauseBtn.disabled = !running || paused;
    stepBtn.disabled = running && !paused && !stepMode;
    randomBtn.disabled = running && !paused;
    sizeInput.disabled = running && !paused;
  }

  function highlight(stepId) {
    if (window.PseudocodeView) window.PseudocodeView.highlight(stepId);
  }

  function clearHighlight() {
    if (window.PseudocodeView) window.PseudocodeView.clearHighlight();
  }

  function pushCall(leftArg, rightArg) {
    if (window.PseudocodeView && window.PseudocodeView.pushCall) {
      window.PseudocodeView.pushCall(leftArg, rightArg);
    }
  }

  function popCall() {
    if (window.PseudocodeView && window.PseudocodeView.popCall) {
      window.PseudocodeView.popCall();
    }
  }

  function clearCallStack() {
    if (window.PseudocodeView && window.PseudocodeView.clearCallStack) {
      window.PseudocodeView.clearCallStack();
    }
  }

  function formatArray(arr) {
    return "[" + arr.join(", ") + "]";
  }

  function appendTrace(stepId) {
    stepCounter += 1;
    if (window.TracePuzzle) {
      window.TracePuzzle.markActiveStep(stepCounter);
      return;
    }
    const body = document.getElementById("trace-body");
    const empty = document.getElementById("trace-empty");
    if (!body) return;

    if (empty) empty.classList.add("hidden");
    body.querySelectorAll("tr.latest").forEach((r) => r.classList.remove("latest"));

    stepCounter += 1;
    const label = window.I18n ? window.I18n.stepLabel(stepId) : stepId;
    const arr = window.ArrayViz.getArray();

    const tr = document.createElement("tr");
    tr.className = "latest";
    tr.dataset.stepId = stepId;
    const cells = [
      stepCounter,
      label,
      formatArray(arr),
      vars.left ?? "—",
      vars.mid ?? "—",
      vars.right ?? "—",
      vars.i ?? "—",
      vars.j ?? "—",
      vars.k ?? "—",
    ];
    cells.forEach((c) => {
      const td = document.createElement("td");
      td.textContent = String(c);
      tr.appendChild(td);
    });
    body.appendChild(tr);
    tr.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  function refreshTrace() {
    if (window.TracePuzzle) {
      window.TracePuzzle.refreshLanguage();
      return;
    }
    const body = document.getElementById("trace-body");
    if (!body || !window.I18n) return;

    body.querySelectorAll("tr[data-step-id]").forEach((tr) => {
      const stepId = tr.dataset.stepId;
      const cells = tr.children;
      if (!cells || cells.length < 2) return;
      cells[1].textContent = window.I18n.stepLabel(stepId);
    });
  }

  function clearTrace(options) {
    stepCounter = 0;
    if (window.TracePuzzle) {
      if (options && options.keepPuzzleFills && window.TracePuzzle.prepareRun) {
        window.TracePuzzle.prepareRun({ force: !!(options && options.force) });
      } else {
        window.TracePuzzle.reset();
      }
      return;
    }
    const body = document.getElementById("trace-body");
    const empty = document.getElementById("trace-empty");
    if (body) body.innerHTML = "";
    if (empty) empty.classList.remove("hidden");
  }

  async function waitGate() {
    if (abort) throw new Error("aborted");
    while (paused && !abort && !stepMode) {
      await delay(40);
    }
    if (abort) throw new Error("aborted");
    if (stepMode) {
      await new Promise((resolve) => {
        stepResolve = resolve;
      });
      stepResolve = null;
      if (abort) throw new Error("aborted");
    } else {
      await delay(stepDelay());
    }
  }

  function syncPointers() {
    if (window.ArrayViz && window.ArrayViz.setPointers) {
      window.ArrayViz.setPointers(vars.i, vars.j, vars.k, {
        iRow: vars.iRow || "A",
        jRow: vars.jRow || "A",
      });
    }
  }

  function syncMarkers() {
    if (window.ArrayViz && window.ArrayViz.setMarkers) {
      window.ArrayViz.setMarkers(vars.left, vars.mid, vars.right);
    }
  }

  async function doStep(stepId, mutate) {
    if (window.TracePuzzle && window.TracePuzzle.shouldGate(stepCounter + 1)) {
      await window.TracePuzzle.awaitGate();
      if (abort) throw new Error("aborted");
    }
    highlight(stepId);
    if (typeof mutate === "function") {
      await mutate();
    }
    syncPointers();
    syncMarkers();
    appendTrace(stepId);
    await waitGate();
  }

  async function writeAt(index, value, row, memIndex) {
    if (row && memIndex != null && window.ArrayViz.writeFromMemory) {
      await window.ArrayViz.writeFromMemory(
        index,
        value,
        row,
        memIndex,
        Math.round(writeDuration() * 1.25)
      );
    } else {
      await window.ArrayViz.writeAnimate(index, value, writeDuration());
    }
  }

  /**
   * Merge A[left..mid] with A[mid+1..right] using temporary Memory arrays L / R.
   * During merge, i indexes L and j indexes R; k indexes A.
   */
  async function merge(left, mid, right) {
    const step = ids();
    vars.left = left;
    vars.mid = mid;
    vars.right = right;

    const arr = window.ArrayViz.getArray();
    const L = arr.slice(left, mid + 1);
    const R = arr.slice(mid + 1, right + 1);

    await doStep(step.copyRuns, async () => {
      window.ArrayViz.setRuns(left, mid, mid + 1, right);
      window.ArrayViz.clearHighlights();
      await window.ArrayViz.setMemoryAnimate(
        L,
        R,
        left,
        mid,
        right,
        Math.round(writeDuration() * 1.35)
      );
      vars.i = null;
      vars.j = null;
      vars.k = null;
      vars.iRow = "L";
      vars.jRow = "R";
    });

    let i = 0;
    let j = 0;
    let k = left;
    vars.i = 0;
    vars.j = 0;
    vars.k = k;
    vars.iRow = "L";
    vars.jRow = "R";

    await doStep(step.initMergePointers, async () => {
      window.ArrayViz.setRuns(left, mid, mid + 1, right);
    });

    await doStep(step.whileBoth, async () => {});

    while (i < L.length && j < R.length) {
      if (abort) throw new Error("aborted");

      vars.i = i;
      vars.j = j;
      vars.k = k;
      vars.iRow = "L";
      vars.jRow = "R";

      let takeL = false;
      await doStep(step.compareMerge, async () => {
        takeL = L[i] <= R[j];
        const text = window.I18n
          ? window.I18n.compareText(L[i], R[j], "≤", takeL)
          : `Compare: ${L[i]} ≤ ${R[j]} → ${takeL}`;
        window.ArrayViz.setCompare(i, j, text, { aRow: "L", bRow: "R" });
      });
      window.ArrayViz.clearCompare();

      if (takeL) {
        await doStep(step.takeLeft, async () => {
          await writeAt(k, L[i], "L", i);
          i += 1;
          vars.i = i < L.length ? i : null;
        });
      } else {
        await doStep(step.takeRight, async () => {
          await writeAt(k, R[j], "R", j);
          j += 1;
          vars.j = j < R.length ? j : null;
        });
      }

      k += 1;
      vars.k = k <= right ? k : null;
      await doStep(step.incK, async () => {
        window.ArrayViz.clearHighlights();
      });
    }

    if (i < L.length) {
      await doStep(step.drainLeft, async () => {
        while (i < L.length) {
          if (abort) throw new Error("aborted");
          vars.i = i;
          vars.j = null;
          vars.k = k;
          vars.iRow = "L";
          vars.jRow = "R";
          window.ArrayViz.setPointers(vars.i, null, vars.k, {
            iRow: "L",
            jRow: "R",
          });
          await writeAt(k, L[i], "L", i);
          i += 1;
          k += 1;
          await waitGate();
        }
        vars.i = null;
        vars.k = null;
      });
    }

    if (j < R.length) {
      await doStep(step.drainRight, async () => {
        while (j < R.length) {
          if (abort) throw new Error("aborted");
          vars.i = null;
          vars.j = j;
          vars.k = k;
          vars.iRow = "L";
          vars.jRow = "R";
          window.ArrayViz.setPointers(null, vars.j, vars.k, {
            iRow: "L",
            jRow: "R",
          });
          await writeAt(k, R[j], "R", j);
          j += 1;
          k += 1;
          await waitGate();
        }
        vars.j = null;
        vars.k = null;
      });
    }

    vars.i = null;
    vars.j = null;
    vars.k = null;
    vars.iRow = "A";
    vars.jRow = "A";
    window.ArrayViz.clearHighlights();
    window.ArrayViz.clearMemory();
    window.ArrayViz.clearRuns();
  }

  /**
   * Top-down Merge Sort on A[left..right].
   */
  async function mergeSort(left, right) {
    const step = ids();
    vars.left = left;
    vars.right = right;
    vars.mid = null;
    vars.i = null;
    vars.j = null;
    vars.k = null;
    vars.iRow = "A";
    vars.jRow = "A";
    pushCall(left, right);

    try {
      await doStep(step.markRange, async () => {
        window.ArrayViz.clearMemory();
        window.ArrayViz.clearHighlights();
        if (left === right) {
          window.ArrayViz.markRange(left, right);
          window.ArrayViz.clearRuns();
        } else {
          const midPreview = Math.floor((left + right) / 2);
          window.ArrayViz.setRuns(left, midPreview, midPreview + 1, right);
        }
        window.ArrayViz.setMarkers(left, null, right);
      });

      let canSplit = false;
      await doStep(step.checkLeftRight, async () => {
        canSplit = left < right;
        const text = window.I18n
          ? window.I18n.compareText(left, right, "<", canSplit)
          : `Compare: left(${left}) < right(${right}) → ${canSplit}`;
        window.ArrayViz.setCompare(left, right, text);
      });
      window.ArrayViz.clearCompare();

      if (!canSplit) {
        window.ArrayViz.clearRuns();
        window.ArrayViz.clearMarkers();
        return;
      }

      const mid = Math.floor((left + right) / 2);
      vars.mid = mid;
      await doStep(step.setMid, async () => {
        window.ArrayViz.setRuns(left, mid, mid + 1, right);
        window.ArrayViz.setMarkers(left, mid, right);
      });

      await doStep(step.sortLeft, async () => {
        window.ArrayViz.setRuns(left, mid, -1, -1);
        window.ArrayViz.setMarkers(left, mid, null);
      });
      await mergeSort(left, mid);

      // Restore outer call bounds after left recursion
      vars.left = left;
      vars.mid = mid;
      vars.right = right;
      vars.i = null;
      vars.j = null;
      vars.k = null;
      vars.iRow = "A";
      vars.jRow = "A";

      await doStep(step.sortRight, async () => {
        window.ArrayViz.setRuns(-1, -1, mid + 1, right);
        window.ArrayViz.setMarkers(null, mid, right);
      });
      await mergeSort(mid + 1, right);

      vars.left = left;
      vars.mid = mid;
      vars.right = right;
      vars.i = null;
      vars.j = null;
      vars.k = null;
      vars.iRow = "A";
      vars.jRow = "A";

      await doStep(step.callMerge, async () => {
        window.ArrayViz.setRuns(left, mid, mid + 1, right);
        window.ArrayViz.setMarkers(left, mid, right);
      });
      await merge(left, mid, right);

      window.ArrayViz.clearMarkers();
      window.ArrayViz.clearRuns();
    } finally {
      popCall();
    }
  }

  async function runProgram() {
    const step = ids();
    const n = window.ArrayViz.getArray().length;
    if (n === 0) return;

    clearTrace({ keepPuzzleFills: true });
    clearCallStack();
    Object.keys(vars).forEach((k) => (vars[k] = null));
    vars.iRow = "A";
    vars.jRow = "A";
    syncPointers();
    running = true;
    paused = false;
    abort = false;
    setButtons();

    try {
      await doStep(step.mainCall, async () => {
        window.ArrayViz.markRange(0, n - 1);
        vars.left = 0;
        vars.right = n - 1;
      });
      await mergeSort(0, n - 1);
      window.ArrayViz.markAllSorted();
      clearHighlight();
      clearCallStack();
    } catch (err) {
      if (!err || err.message !== "aborted") {
        console.error(err);
      }
      clearHighlight();
      clearCallStack();
    } finally {
      running = false;
      paused = false;
      stepMode = false;
      if (stepResolve) {
        stepResolve();
        stepResolve = null;
      }
      if (window.TracePuzzle && window.TracePuzzle.onRunFinished) {
        window.TracePuzzle.onRunFinished(!abort);
      }
      setButtons();
    }
  }

  function init() {
    setButtons();
  }

  function setSpeed(value) {
    speed = Number(value) || 5;
  }

  function run() {
    if (window.TracePuzzle && window.TracePuzzle.isTaskComplete && window.TracePuzzle.isTaskComplete()) {
      return;
    }

    if (running && paused) {
      paused = false;
      stepMode = false;
      if (stepResolve) {
        stepResolve();
        stepResolve = null;
      }
      setButtons();
      return;
    }
    if (running) return;
    stepMode = false;
    runProgram();
  }

  function pause() {
    if (window.TracePuzzle && window.TracePuzzle.isTaskComplete && window.TracePuzzle.isTaskComplete()) {
      return;
    }

    if (!running) return;
    paused = true;
    setButtons();
  }

  function step() {
    if (window.TracePuzzle && window.TracePuzzle.isTaskComplete && window.TracePuzzle.isTaskComplete()) {
      return;
    }

    if (!running) {
      stepMode = true;
      paused = false;
      runProgram();
      return;
    }
    paused = false;
    stepMode = true;
    if (stepResolve) {
      const r = stepResolve;
      stepResolve = null;
      r();
    }
    setButtons();
  }

  function reset() {
    const wasRunning = running;
    abort = true;
    paused = false;
    stepMode = false;
    if (stepResolve) {
      stepResolve();
      stepResolve = null;
    }
    running = false;
    if (!wasRunning) abort = false;
    clearHighlight();
    clearCallStack();
    clearTrace({ keepPuzzleFills: true });
    Object.keys(vars).forEach((k) => (vars[k] = null));
    vars.iRow = "A";
    vars.jRow = "A";
    syncPointers();
    if (window.ArrayViz) {
      if (window.ArrayViz.clearRuns) window.ArrayViz.clearRuns();
      if (window.ArrayViz.clearMarkers) window.ArrayViz.clearMarkers();
      if (window.ArrayViz.clearMemory) window.ArrayViz.clearMemory();
      if (window.ArrayViz.setMergedHighlight) {
        window.ArrayViz.setMergedHighlight(false);
      }
    }
    setButtons();
  }

  function isBusy() {
    return running;
  }

  function rerun() {
    const wasRunning = running;
    abort = true;
    paused = false;
    stepMode = false;
    if (stepResolve) { stepResolve(); stepResolve = null; }
    if (window.TracePuzzle && window.TracePuzzle.abortGate) window.TracePuzzle.abortGate();
    running = false;
    clearHighlight();
    clearTrace({ keepPuzzleFills: true, force: true });
    Object.keys(vars).forEach((k) => (vars[k] = null));
    if (window.ArrayViz && window.ArrayViz.clearOutcome) window.ArrayViz.clearOutcome();
    if (typeof syncPointers === 'function') syncPointers();
    setButtons();
    const startReplay = () => {
      if (running) { setTimeout(startReplay, 40); return; }
      abort = false;
      stepMode = false;
      runProgram();
    };
    setTimeout(startReplay, wasRunning ? 40 : 0);
  }

  return {
    init,
    run,
    pause,
    step,
    reset,
    setSpeed,
    isBusy,
    rerun,
    setButtons,
    clearTrace,
    refreshTrace,
  };
})();
