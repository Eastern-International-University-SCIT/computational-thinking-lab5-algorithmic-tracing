/**
 * Instrumented Bubble Sort executor.
 * Steps highlight pseudocode lines, animate the 3D array, and grow the trace table.
 */

window.BubbleSortExecutor = (function () {
  let running = false;
  let paused = false;
  let abort = false;
  let stepMode = false;
  let stepResolve = null;
  let stepCounter = 0;
  let speed = 5;

  const vars = {
    n: null,
    i: null,
    j: null,
    swapped: null,
  };

  function ids() {
    return window.BS_STEP_IDS || window.PseudocodeView.STEP_IDS;
  }

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function stepDelay() {
    return Math.round(900 - speed * 70);
  }

  function swapDuration() {
    return Math.round(700 - speed * 45);
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

  function formatSwapped(value) {
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
    const label = window.I18n
      ? window.I18n.stepLabel(stepId)
      : stepId;
    const arr = window.ArrayViz.getArray();

    const tr = document.createElement("tr");
    tr.className = "latest";
    tr.dataset.stepId = stepId;
    if (vars.swapped != null) tr.dataset.swapped = String(vars.swapped);
    const cells = [
      stepCounter,
      label,
      formatArray(arr),
      vars.n ?? "—",
      vars.i ?? "—",
      vars.j ?? "—",
      formatSwapped(vars.swapped),
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
      if (tr.dataset.swapped != null) {
        const raw = tr.dataset.swapped;
        const value = raw === "true" ? true : raw === "false" ? false : null;
        cells[cells.length - 1].textContent = formatSwapped(value);
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
      // Bound index n−i−1: starts at the rightmost box, walks left as i grows
      const iPos =
        vars.i != null && vars.n != null ? vars.n - vars.i - 1 : null;
      window.ArrayViz.setPointers(iPos, vars.j);
    }
  }

  function syncSwapped() {
    if (window.ArrayViz && window.ArrayViz.setSwapped) {
      window.ArrayViz.setSwapped(vars.swapped);
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
    syncSwapped();
    appendTrace(stepId);
    await waitGate();
  }

  async function swap(a, b) {
    await window.ArrayViz.swapAnimate(a, b, swapDuration());
  }

  async function bubbleSort(n) {
    const step = ids();
    vars.n = n;
    let stoppedEarly = false;

    for (let i = 0; i <= n - 2; i++) {
      if (abort) throw new Error("aborted");

      vars.i = i;
      vars.j = null;
      await doStep(step.forI, async () => {
        window.ArrayViz.clearHighlights();
      });

      vars.swapped = false;
      await doStep(step.setSwapped, async () => {
        vars.swapped = false;
        window.ArrayViz.setSwapped(false);
        window.ArrayViz.setSwappedHighlight(false);
      });

      const rangeHigh = n - i - 1;
      await doStep(step.markRange, async () => {
        window.ArrayViz.markRange(0, rangeHigh);
      });

      const jMax = n - i - 2;
      await doStep(step.forJ, async () => {
        vars.j = 0;
      });

      for (let j = 0; j <= jMax; j++) {
        vars.j = j;
        window.ArrayViz.setHighlight(j);

        let greater = false;
        await doStep(step.compare, async () => {
          const arr = window.ArrayViz.getArray();
          greater = arr[j] > arr[j + 1];
          const text = window.I18n
            ? window.I18n.compareText(arr[j], arr[j + 1], greater)
            : `Compare: ${arr[j]} > ${arr[j + 1]} → ${greater}`;
          window.ArrayViz.setCompare(j, j + 1, text);
        });

        window.ArrayViz.clearCompare();

        if (greater) {
          await doStep(step.swapAdjacent, async () => {
            await swap(j, j + 1);
          });

          vars.swapped = true;
          await doStep(step.setSwappedTrue, async () => {
            vars.swapped = true;
            window.ArrayViz.setSwapped(true);
          });
        }
      }

      const sortedIndex = n - i - 1;
      await doStep(step.markSortedEnd, async () => {
        window.ArrayViz.markSorted(sortedIndex);
        window.ArrayViz.clearHighlights();
        vars.j = null;
      });

      let shouldBreak = false;
      await doStep(step.checkEarlyExit, async () => {
        shouldBreak = !vars.swapped;
        const text = window.I18n
          ? window.I18n.swappedCompareText(vars.swapped, shouldBreak)
          : `Compare: not swapped (${vars.swapped}) → ${shouldBreak}`;
        window.ArrayViz.setSwappedHighlight(true, text);
      });
      window.ArrayViz.setSwappedHighlight(false);
      window.ArrayViz.clearCompare();

      if (shouldBreak) {
        await doStep(step.breakEarly, async () => {
          // Remaining unsorted prefix is already in order.
          for (let k = 0; k < sortedIndex; k++) {
            window.ArrayViz.markSorted(k);
          }
        });
        stoppedEarly = true;
        break;
      }
    }

    if (!stoppedEarly) {
      // First element settles after the final outer pass.
      window.ArrayViz.markSorted(0);
    }
  }

  async function runProgram() {
    const step = ids();
    const n = window.ArrayViz.getArray().length;
    if (n === 0) return;

    clearTrace({ keepPuzzleFills: true });
    Object.keys(vars).forEach((k) => (vars[k] = null));
    syncPointers();
    syncSwapped();
    running = true;
    paused = false;
    abort = false;
    setButtons();

    try {
      vars.n = n;
      await doStep(step.mainCall, async () => {
        window.ArrayViz.markRange(0, n - 1);
      });
      await bubbleSort(n);
      window.ArrayViz.markAllSorted();
      if (window.ArrayViz.setSwappedHighlight) {
        window.ArrayViz.setSwappedHighlight(false);
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
    syncPointers();
    syncSwapped();
    if (window.ArrayViz && window.ArrayViz.setSwappedHighlight) {
      window.ArrayViz.setSwappedHighlight(false);
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
