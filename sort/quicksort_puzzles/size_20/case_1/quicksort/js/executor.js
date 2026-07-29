/**
 * Instrumented Quick Sort executor.
 * Steps highlight pseudocode lines, animate the 3D array, and grow the trace table.
 */

window.QuickSortExecutor = (function () {
  let running = false;
  let paused = false;
  let abort = false;
  let stepMode = false;
  let stepResolve = null;
  let stepCounter = 0;
  let speed = 5;

  const vars = {
    low: null,
    high: null,
    i: null,
    j: null,
    pivot: null,
    pi: null,
  };

  function ids() {
    return window.QS_STEP_IDS || window.PseudocodeView.STEP_IDS;
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
      runBtn.disabled = false;
      pauseBtn.disabled = true;
      stepBtn.disabled = false;
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
    const cells = [
      stepCounter,
      label,
      formatArray(arr),
      vars.low ?? "—",
      vars.high ?? "—",
      vars.i ?? "—",
      vars.j ?? "—",
      vars.pivot ?? "—",
      vars.pi ?? "—",
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
      window.ArrayViz.setPointers(vars.i, vars.j);
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
    appendTrace(stepId);
    await waitGate();
  }

  async function swap(a, b) {
    await window.ArrayViz.swapAnimate(a, b, swapDuration());
  }

  async function partition(low, high) {
    const step = ids();
    vars.low = low;
    vars.high = high;

    await doStep(step.setPivot, async () => {
      const arr = window.ArrayViz.getArray();
      vars.pivot = arr[high];
      vars.i = null;
      vars.j = null;
      vars.pi = null;
      window.ArrayViz.setPivot(high);
    });

    await doStep(step.initI, async () => {
      vars.i = low - 1;
      window.ArrayViz.clearHighlights();
      window.ArrayViz.setPivot(high);
    });

    await doStep(step.forJ, async () => {
      vars.j = low;
    });

    for (let j = low; j < high; j++) {
      vars.j = j;
      window.ArrayViz.setHighlight(j);

      let less = false;
      await doStep(step.compare, async () => {
        const arr = window.ArrayViz.getArray();
        less = arr[j] < vars.pivot;
        window.ArrayViz.setPivot(high);
        const text = window.I18n
          ? window.I18n.compareText(arr[j], vars.pivot, less)
          : `Compare: ${arr[j]} < ${vars.pivot} → ${less}`;
        window.ArrayViz.setCompare(j, high, text);
      });

      window.ArrayViz.clearCompare();

      if (less) {
        await doStep(step.incI, async () => {
          vars.i += 1;
        });

        await doStep(step.swapIJ, async () => {
          await swap(vars.i, j);
          window.ArrayViz.setPivot(high);
        });
      }
    }

    const pivotDest = vars.i + 1;
    await doStep(step.swapPivot, async () => {
      await swap(pivotDest, high);
      window.ArrayViz.markSorted(pivotDest);
      window.ArrayViz.clearHighlights();
    });

    vars.pi = pivotDest;
    await doStep(step.returnPi, async () => {
      vars.pi = pivotDest;
    });

    return pivotDest;
  }

  async function quickSort(low, high) {
    const step = ids();
    vars.low = low;
    vars.high = high;
    vars.i = null;
    vars.j = null;
    vars.pivot = null;
    vars.pi = null;

    await doStep(step.markRange, async () => {
      window.ArrayViz.markRange(low, high);
    });

    let shouldPartition = false;
    await doStep(step.checkLowHigh, async () => {
      shouldPartition = low < high;
      const n = window.ArrayViz.getArray().length;
      const text = window.I18n
        ? window.I18n.rangeCompareText(low, high, shouldPartition)
        : `Compare: low(${low}) < high(${high}) → ${shouldPartition}`;
      const lowIdx = low >= 0 && low < n ? low : null;
      const highIdx = high >= 0 && high < n ? high : null;
      window.ArrayViz.setCompare(lowIdx, highIdx, text);
    });
    window.ArrayViz.clearCompare();

    if (!shouldPartition) {
      if (low === high && low >= 0) {
        window.ArrayViz.markSorted(low);
      }
      return;
    }

    await doStep(step.callPartition, async () => {});

    const pi = await partition(low, high);
    vars.pi = pi;
    vars.low = low;
    vars.high = high;

    await doStep(step.sortLeft, async () => {
      window.ArrayViz.markRange(low, pi - 1);
    });
    await quickSort(low, pi - 1);

    vars.low = low;
    vars.high = high;
    vars.pi = pi;
    await doStep(step.sortRight, async () => {
      window.ArrayViz.markRange(pi + 1, high);
    });
    await quickSort(pi + 1, high);
  }

  async function runProgram() {
    const step = ids();
    const n = window.ArrayViz.getArray().length;
    if (n === 0) return;

    clearTrace({ keepPuzzleFills: true });
    Object.keys(vars).forEach((k) => (vars[k] = null));
    syncPointers();
    running = true;
    paused = false;
    abort = false;
    setButtons();

    try {
      await doStep(step.mainCall, async () => {
        window.ArrayViz.markRange(0, n - 1);
      });
      await quickSort(0, n - 1);
      window.ArrayViz.markAllSorted();
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
      rerun();
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
      rerun();
      return;
    }

    if (!running) return;
    paused = true;
    setButtons();
  }

  function step() {
    if (window.TracePuzzle && window.TracePuzzle.isTaskComplete && window.TracePuzzle.isTaskComplete()) {
      rerun();
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
