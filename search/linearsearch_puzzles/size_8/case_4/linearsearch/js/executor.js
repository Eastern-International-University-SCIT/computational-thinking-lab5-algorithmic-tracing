/**
 * Instrumented Linear Search executor.
 * Steps highlight pseudocode lines, animate the 3D array, and grow the trace table.
 */

window.LinearSearchExecutor = (function () {
  let running = false;
  let paused = false;
  let abort = false;
  let stepMode = false;
  let stepResolve = null;
  let stepCounter = 0;
  let speed = 5;
  let searchKey = 42;

  const vars = {
    n: null,
    key: null,
    i: null,
    result: null,
  };

  function ids() {
    return window.LS_STEP_IDS || window.PseudocodeView.STEP_IDS;
  }

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function stepDelay() {
    return Math.round(900 - speed * 70);
  }

  function compareDuration() {
    return Math.round(1400 - speed * 90);
  }

  function setButtons() {
    const runBtn = document.getElementById("btn-run");
    const pauseBtn = document.getElementById("btn-pause");
    const stepBtn = document.getElementById("btn-step");
    const randomBtn = document.getElementById("btn-random");
    const sizeInput = document.getElementById("array-size");
    const keyInput = document.getElementById("search-key");
    const speedInput = document.getElementById("speed");
    const resetBtn = document.getElementById("btn-reset");

    if (!runBtn) return;

    const puzzleDone =
      window.TracePuzzle &&
      window.TracePuzzle.isTaskComplete &&
      window.TracePuzzle.isTaskComplete();

    if (puzzleDone) {
      runBtn.disabled = false;
      pauseBtn.disabled = true;
      stepBtn.disabled = false;
      if (randomBtn) randomBtn.disabled = true;
      if (sizeInput) sizeInput.disabled = true;
      if (keyInput) keyInput.disabled = true;
      if (speedInput) speedInput.disabled = false;
      if (resetBtn) resetBtn.disabled = false;
      const rerunBtn = document.getElementById("btn-rerun");
      if (rerunBtn) rerunBtn.disabled = false;
      return;
    }

    runBtn.disabled = running && !paused;
    pauseBtn.disabled = !running || paused;
    stepBtn.disabled = running && !paused && !stepMode;
    if (randomBtn) randomBtn.disabled = running && !paused;
    if (sizeInput) sizeInput.disabled = running && !paused;
    if (keyInput) keyInput.disabled = running && !paused;
    if (speedInput) speedInput.disabled = false;
    if (resetBtn) resetBtn.disabled = false;
    const rerunBtn = document.getElementById("btn-rerun");
    if (rerunBtn) rerunBtn.disabled = false;
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

  function formatResult(result) {
    if (result == null || result === "") return "—";
    if (result === "NOT_FOUND") {
      return window.I18n ? window.I18n.t("notFoundValue") : "NOT_FOUND";
    }
    return String(result);
  }

  function appendTrace(stepId) {
    stepCounter += 1;

    // Puzzle mode: the full instance table is pre-rendered; only highlight the row.
    if (window.TracePuzzle) {
      window.TracePuzzle.markActiveStep(stepCounter);
      return;
    }

    const body = document.getElementById("trace-body");
    const empty = document.getElementById("trace-empty");
    if (!body) return;

    if (empty) empty.classList.add("hidden");
    body.querySelectorAll("tr.latest").forEach((r) => r.classList.remove("latest"));

    const label = window.I18n ? window.I18n.stepLabel(stepId) : stepId;
    const arr = window.ArrayViz.getArray();

    const tr = document.createElement("tr");
    tr.className = "latest";
    tr.dataset.stepId = stepId;
    if (vars.result != null) tr.dataset.result = String(vars.result);
    const cells = [
      stepCounter,
      label,
      formatArray(arr),
      vars.n ?? "—",
      vars.key ?? "—",
      vars.i ?? "—",
      formatResult(vars.result),
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
      if (!cells || cells.length < 7) return;
      // Column 1 = Line label (language-dependent)
      cells[1].textContent = window.I18n.stepLabel(stepId);
      // Column 6 = result (NOT_FOUND is language-dependent)
      if (tr.dataset.result != null) {
        cells[6].textContent = formatResult(tr.dataset.result);
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
      // mid pointer draws the top "i" marker on the current box
      window.ArrayViz.setPointers(null, vars.i, null);
    }
  }

  function markRemaining() {
    if (!window.ArrayViz || vars.n == null) return;
    if (vars.i == null || vars.i < 0) {
      window.ArrayViz.markRange(0, vars.n - 1);
      return;
    }
    if (vars.i < vars.n) {
      window.ArrayViz.markRange(vars.i, vars.n - 1);
    } else {
      window.ArrayViz.markRange(-1, -1);
    }
  }

  async function doStep(stepId, mutate) {
    // Block before executing the missing puzzle row until students fill it in.
    if (
      window.TracePuzzle &&
      window.TracePuzzle.shouldGate(stepCounter + 1)
    ) {
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

  async function animateCompare(index, key, op) {
    if (!window.ArrayViz || !window.ArrayViz.animateCompare) return false;
    const arr = window.ArrayViz.getArray();
    if (index < 0 || index >= arr.length) return false;
    const left = arr[index];
    let result = false;
    if (op === "<") result = left < key;
    else if (op === "=") result = left === key;
    else if (op === "≥") result = left >= key;
    else if (op === "≤") result = left <= key;

    const text = window.I18n
      ? window.I18n.compareText(left, key, op, result)
      : `Compare: ${left} ${op} ${key} → ${result}`;
    window.ArrayViz.setCompare(index, -1, text);
    await window.ArrayViz.animateCompare(index, key, compareDuration());
    return result;
  }

  function showFound(key, position) {
    if (window.ArrayViz && window.ArrayViz.setResultMessage) {
      window.ArrayViz.setResultMessage("found", key, position);
    }
  }

  function showMiss(key) {
    if (window.ArrayViz && window.ArrayViz.setResultMessage) {
      window.ArrayViz.setResultMessage("miss", key, null);
    }
  }

  async function linearSearch(n, key) {
    const step = ids();
    vars.n = n;
    vars.key = key;

    await doStep(step.setI, async () => {
      vars.i = 0;
      markRemaining();
      if (n > 0) window.ArrayViz.setHighlight(0);
    });

    while (true) {
      if (abort) throw new Error("aborted");

      let loopCond = false;
      await doStep(step.whileLoop, async () => {
        loopCond = vars.i < n;
        const text = window.I18n
          ? window.I18n.compareText(vars.i, n, "<", loopCond)
          : `Compare: i < n (${vars.i} < ${n}) → ${loopCond}`;
        window.ArrayViz.setCompare(-1, -1, text);
        markRemaining();
      });
      window.ArrayViz.clearCompare();

      if (!loopCond) break;

      let equal = false;
      await doStep(step.checkEqual, async () => {
        if (vars.i >= 0 && vars.i < n) {
          equal = await animateCompare(vars.i, key, "=");
        } else {
          equal = false;
        }
      });
      window.ArrayViz.clearCompare();

      if (equal) {
        await doStep(step.returnFound, async () => {
          vars.result = vars.i;
          window.ArrayViz.clearHighlights();
          window.ArrayViz.markRange(-1, -1);
          window.ArrayViz.setFoundIndex(vars.i);
          showFound(key, vars.i);
        });
        return;
      }

      await doStep(step.incI, async () => {
        vars.i = vars.i + 1;
        markRemaining();
        if (vars.i >= 0 && vars.i < n) {
          window.ArrayViz.setHighlight(vars.i);
        }
      });
    }

    await doStep(step.returnMiss, async () => {
      vars.result = "NOT_FOUND";
      window.ArrayViz.clearHighlights();
      window.ArrayViz.markRange(-1, -1);
      const missAt = n > 0 ? n - 1 : -1;
      if (missAt >= 0) window.ArrayViz.setMissIndex(missAt);
      showMiss(key);
    });
  }

  async function runProgram() {
    const step = ids();
    const n = window.ArrayViz.getArray().length;
    if (n === 0) return;

    const keyInput = document.getElementById("search-key");
    searchKey = Number(keyInput && keyInput.value);
    if (!Number.isFinite(searchKey)) searchKey = 0;

    clearTrace({ keepPuzzleFills: true });
    Object.keys(vars).forEach((k) => (vars[k] = null));
    window.ArrayViz.clearOutcome();
    syncPointers();
    running = true;
    paused = false;
    abort = false;
    setButtons();

    let finishedOk = false;
    try {
      vars.n = n;
      vars.key = searchKey;
      if (window.ArrayViz.setKeyValue) {
        window.ArrayViz.setKeyValue(searchKey);
      }
      await doStep(step.mainCall, async () => {
        window.ArrayViz.markRange(0, n - 1);
      });
      await linearSearch(n, searchKey);
      clearHighlight();
      finishedOk = !abort;
    } catch (err) {
      if (!err || err.message !== "aborted") {
        console.error(err);
      }
      clearHighlight();
      finishedOk = false;
    } finally {
      running = false;
      paused = false;
      stepMode = false;
      if (stepResolve) {
        stepResolve();
        stepResolve = null;
      }
      if (
        window.TracePuzzle &&
        window.TracePuzzle.onRunFinished
      ) {
        window.TracePuzzle.onRunFinished(finishedOk);
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

  function setKey(value) {
    searchKey = Number(value);
    if (!Number.isFinite(searchKey)) searchKey = 0;
    if (window.ArrayViz && window.ArrayViz.setKeyValue) {
      window.ArrayViz.setKeyValue(searchKey);
    }
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

  function rerun() {
    const wasRunning = running;
    abort = true;
    paused = false;
    stepMode = false;
    if (stepResolve) {
      stepResolve();
      stepResolve = null;
    }
    if (window.TracePuzzle && window.TracePuzzle.abortGate) {
      window.TracePuzzle.abortGate();
    }
    running = false;
    clearHighlight();
    clearTrace({ keepPuzzleFills: true, force: true });
    Object.keys(vars).forEach((k) => (vars[k] = null));
    if (window.ArrayViz) window.ArrayViz.clearOutcome();
    syncPointers();
    setButtons();

    const startReplay = () => {
      if (running) {
        setTimeout(startReplay, 40);
        return;
      }
      abort = false;
      stepMode = false;
      runProgram();
    };
    setTimeout(startReplay, wasRunning ? 40 : 0);
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
    if (window.TracePuzzle && window.TracePuzzle.abortGate) {
      window.TracePuzzle.abortGate();
    }
    running = false;
    if (!wasRunning) abort = false;
    clearHighlight();
    clearTrace();
    Object.keys(vars).forEach((k) => (vars[k] = null));
    if (window.ArrayViz) window.ArrayViz.clearOutcome();
    syncPointers();
    setButtons();
  }

  function isBusy() {
    return running;
  }

  return {
    init,
    run,
    pause,
    step,
    rerun,
    reset,
    setSpeed,
    setKey,
    setButtons,
    isBusy,
    clearTrace,
    refreshTrace,
  };
})();
