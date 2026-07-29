/**
 * Instrumented Natural Merge Sort executor.
 * Steps highlight pseudocode lines, animate the 3D array, and grow the trace table.
 */

window.NaturalMergeSortExecutor = (function () {
  let running = false;
  let paused = false;
  let abort = false;
  let stepMode = false;
  let stepResolve = null;
  let stepCounter = 0;
  let speed = 5;

  const vars = {
    n: null,
    left: null,
    mid: null,
    right: null,
    i: null,
    j: null,
    k: null,
    merged: null,
    iRow: "A",
    jRow: "A",
  };

  function ids() {
    return window.NMS_STEP_IDS || window.PseudocodeView.STEP_IDS;
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

  function formatArray(arr) {
    return "[" + arr.join(", ") + "]";
  }

  function formatMerged(value) {
    if (value == null) return "—";
    if (window.I18n && window.I18n.boolText) {
      return window.I18n.boolText(value);
    }
    return value ? "true" : "false";
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
    if (vars.merged != null) tr.dataset.merged = String(vars.merged);
    const cells = [
      stepCounter,
      label,
      formatArray(arr),
      vars.n ?? "—",
      vars.left ?? "—",
      vars.mid ?? "—",
      vars.right ?? "—",
      vars.i ?? "—",
      vars.j ?? "—",
      vars.k ?? "—",
      formatMerged(vars.merged),
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
      if (tr.dataset.merged != null) {
        const raw = tr.dataset.merged;
        const value = raw === "true" ? true : raw === "false" ? false : null;
        cells[cells.length - 1].textContent = formatMerged(value);
      }
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

  function syncMerged() {
    if (window.ArrayViz && window.ArrayViz.setMerged) {
      window.ArrayViz.setMerged(vars.merged);
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
    syncMerged();
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
  }

  async function naturalMergeSort(n) {
    const step = ids();
    vars.n = n;

    // Safety: avoid infinite loops on bad state
    let passGuard = 0;
    const maxPasses = n + 2;

    while (true) {
      if (abort) throw new Error("aborted");
      passGuard += 1;
      if (passGuard > maxPasses) break;

      await doStep(step.repeatPass, async () => {
        window.ArrayViz.clearRuns();
        window.ArrayViz.clearMarkers();
        window.ArrayViz.clearHighlights();
        if (window.ArrayViz.clearMemory) window.ArrayViz.clearMemory();
        vars.left = null;
        vars.mid = null;
        vars.right = null;
        vars.j = null;
        vars.k = null;
        vars.iRow = "A";
        vars.jRow = "A";
      });

      vars.i = 0;
      vars.merged = false;
      await doStep(step.initScan, async () => {
        vars.merged = false;
        window.ArrayViz.setMerged(false);
        window.ArrayViz.setMergedHighlight(false);
      });

      await doStep(step.whileScan, async () => {});

      while (vars.i < n) {
        if (abort) throw new Error("aborted");

        const scanI = vars.i;
        vars.left = scanI;
        vars.mid = null;
        vars.right = null;
        vars.j = null;
        vars.k = null;

        await doStep(step.setLeft, async () => {
          window.ArrayViz.setRuns(scanI, scanI, -1, -1);
          window.ArrayViz.setMarkers(scanI, null, null);
        });

        // Extend left natural run
        await doStep(step.extendLeft, async () => {
          while (vars.i < n - 1) {
            const arr = window.ArrayViz.getArray();
            const le = arr[vars.i] <= arr[vars.i + 1];
            const text = window.I18n
              ? window.I18n.compareText(arr[vars.i], arr[vars.i + 1], "≤", le)
              : `Compare: ${arr[vars.i]} ≤ ${arr[vars.i + 1]} → ${le}`;
            window.ArrayViz.setCompare(vars.i, vars.i + 1, text);
            window.ArrayViz.setPointers(vars.i, null, null);
            await waitGate();
            window.ArrayViz.clearCompare();
            if (!le) break;
            vars.i += 1;
            window.ArrayViz.setRuns(scanI, vars.i, -1, -1);
            window.ArrayViz.setPointers(vars.i, null, null);
            await waitGate();
          }
        });

        vars.mid = vars.i;
        await doStep(step.setMid, async () => {
          window.ArrayViz.setRuns(vars.left, vars.mid, -1, -1);
          window.ArrayViz.setMarkers(vars.left, vars.mid, null);
        });

        vars.i += 1;
        await doStep(step.advancePastMid, async () => {});

        let noRight = false;
        await doStep(step.checkHasRight, async () => {
          noRight = vars.i >= n;
          const text = window.I18n
            ? window.I18n.compareText(vars.i, n, "≥", noRight)
            : `Compare: i(${vars.i}) ≥ n(${n}) → ${noRight}`;
          window.ArrayViz.setCompare(
            vars.i < n ? vars.i : n - 1,
            null,
            text
          );
        });
        window.ArrayViz.clearCompare();

        if (noRight) {
          await doStep(step.breakOddRun, async () => {
            window.ArrayViz.clearRuns();
          });
          break;
        }

        const rightStart = vars.i;
        await doStep(step.extendRight, async () => {
          window.ArrayViz.setRuns(vars.left, vars.mid, rightStart, rightStart);
          while (vars.i < n - 1) {
            const arr = window.ArrayViz.getArray();
            const le = arr[vars.i] <= arr[vars.i + 1];
            const text = window.I18n
              ? window.I18n.compareText(arr[vars.i], arr[vars.i + 1], "≤", le)
              : `Compare: ${arr[vars.i]} ≤ ${arr[vars.i + 1]} → ${le}`;
            window.ArrayViz.setCompare(vars.i, vars.i + 1, text);
            window.ArrayViz.setPointers(vars.i, null, null);
            await waitGate();
            window.ArrayViz.clearCompare();
            if (!le) break;
            vars.i += 1;
            window.ArrayViz.setRuns(vars.left, vars.mid, rightStart, vars.i);
            window.ArrayViz.setPointers(vars.i, null, null);
            await waitGate();
          }
        });

        vars.right = vars.i;
        await doStep(step.setRight, async () => {
          window.ArrayViz.setRuns(vars.left, vars.mid, vars.mid + 1, vars.right);
          window.ArrayViz.setMarkers(vars.left, vars.mid, vars.right);
        });

        const mergeLeft = vars.left;
        const mergeMid = vars.mid;
        const mergeRight = vars.right;

        await doStep(step.callMerge, async () => {});
        await merge(mergeLeft, mergeMid, mergeRight);

        // Restore outer-scan bounds after merge's i/j/k overwrite
        vars.left = mergeLeft;
        vars.mid = mergeMid;
        vars.right = mergeRight;
        vars.i = null;
        vars.j = null;
        vars.k = null;
        vars.iRow = "A";
        vars.jRow = "A";

        vars.merged = true;
        await doStep(step.setMergedTrue, async () => {
          vars.merged = true;
          window.ArrayViz.setMerged(true);
          window.ArrayViz.clearRuns();
          window.ArrayViz.clearHighlights();
        });

        vars.i = mergeRight + 1;
        await doStep(step.advanceAfterMerge, async () => {
          window.ArrayViz.clearMarkers();
          vars.left = null;
          vars.mid = null;
          vars.right = null;
        });
      }

      let done = false;
      await doStep(step.checkUntil, async () => {
        done = !vars.merged;
        const text = window.I18n
          ? window.I18n.mergedCompareText(vars.merged, done)
          : `Compare: not merged (${vars.merged}) → ${done}`;
        window.ArrayViz.setMergedHighlight(true, text);
      });
      window.ArrayViz.setMergedHighlight(false);
      window.ArrayViz.clearCompare();

      if (done) break;
    }
  }

  async function runProgram() {
    const step = ids();
    const n = window.ArrayViz.getArray().length;
    if (n === 0) return;

    clearTrace({ keepPuzzleFills: true });
    Object.keys(vars).forEach((k) => (vars[k] = null));
    vars.iRow = "A";
    vars.jRow = "A";
    syncPointers();
    syncMerged();
    running = true;
    paused = false;
    abort = false;
    setButtons();

    try {
      vars.n = n;
      await doStep(step.mainCall, async () => {
        window.ArrayViz.markRange(0, n - 1);
      });
      await naturalMergeSort(n);
      window.ArrayViz.markAllSorted();
      if (window.ArrayViz.setMergedHighlight) {
        window.ArrayViz.setMergedHighlight(false);
      }
      clearHighlight();
    } catch (err) {
      if (!err || err.message !== "aborted") {
        console.error(err);
      }
      clearHighlight();
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
    clearTrace();
    Object.keys(vars).forEach((k) => (vars[k] = null));
    vars.iRow = "A";
    vars.jRow = "A";
    syncPointers();
    syncMerged();
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
