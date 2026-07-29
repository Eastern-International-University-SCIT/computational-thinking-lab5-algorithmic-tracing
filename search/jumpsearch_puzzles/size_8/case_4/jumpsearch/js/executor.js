/**
 * Instrumented Jump Search executor.
 * Steps highlight pseudocode lines, animate the 3D array, and grow the trace table.
 */

window.JumpSearchExecutor = (function () {
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
    step_length: null,
    step: null,
    step_or_n: null,
    prev: null,
    result: null,
  };

  function ids() {
    return window.JS_STEP_IDS || window.PseudocodeView.STEP_IDS;
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
      const speedInput = document.getElementById("speed");
      const resetBtn = document.getElementById("btn-reset");
      if (speedInput) speedInput.disabled = false;
      if (resetBtn) resetBtn.disabled = false;
      const rerunBtn = document.getElementById("btn-rerun");
      if (rerunBtn) rerunBtn.disabled = false;
      return;
    }
    runBtn.disabled = running && !paused;
    pauseBtn.disabled = !running || paused;
    stepBtn.disabled = running && !paused && !stepMode;
    randomBtn.disabled = running && !paused;
    sizeInput.disabled = running && !paused;
    if (keyInput) keyInput.disabled = running && !paused;
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
    if (window.TracePuzzle) {
      window.TracePuzzle.markActiveStep(stepCounter);
      return;
    }
    const body = document.getElementById("trace-body");
    const empty = document.getElementById("trace-empty");
    if (!body) return;

    if (empty) empty.classList.add("hidden");
    body.querySelectorAll("tr.latest").forEach((r) => r.classList.remove("latest"));
    const label = window.I18n
      ? window.I18n.stepLabel(stepId)
      : stepId;
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
      vars.step_length ?? "—",
      vars.step ?? "—",
      vars.step_or_n ?? "—",
      vars.prev ?? "—",
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
      if (!cells || cells.length < 2) return;
      cells[1].textContent = window.I18n.stepLabel(stepId);
      if (tr.dataset.result != null) {
        cells[cells.length - 1].textContent = formatResult(tr.dataset.result);
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
      // Point step_or_n at the box used by A[step_or_n − 1]
      let stepOrNIdx = null;
      if (vars.step_or_n != null && Number.isFinite(vars.step_or_n)) {
        const probe = vars.step_or_n - 1;
        if (probe >= 0 && vars.n != null && probe < vars.n) {
          stepOrNIdx = probe;
        }
      }
      window.ArrayViz.setPointers(vars.prev, vars.step, stepOrNIdx);
    }
  }

  function syncStepSpan() {
    if (window.ArrayViz && window.ArrayViz.setStepSpan) {
      window.ArrayViz.setStepSpan(vars.step, vars.step_length);
    }
  }

  function markJumpBlock() {
    if (!window.ArrayViz || vars.prev == null || vars.n == null) return;
    const high =
      (vars.step_or_n != null ? vars.step_or_n : Math.min(vars.step || 0, vars.n)) -
      1;
    const low = vars.prev;
    if (high >= low && low >= 0) {
      window.ArrayViz.markRange(low, high);
    }
  }

  async function doStep(stepId, mutate) {
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
    syncStepSpan();
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

  async function jumpSearch(n, key) {
    const step = ids();
    vars.n = n;
    vars.key = key;

    await doStep(step.setStepLength, async () => {
      vars.step_length = Math.floor(Math.sqrt(n));
    });

    await doStep(step.setStep, async () => {
      vars.step = vars.step_length;
      syncStepSpan();
    });

    await doStep(step.setPrev, async () => {
      vars.prev = 0;
      markJumpBlock();
    });

    await doStep(step.setStepOrN, async () => {
      vars.step_or_n = Math.min(vars.step, n);
      markJumpBlock();
    });

    // Jump phase
    while (true) {
      if (abort) throw new Error("aborted");

      const probe = vars.step_or_n - 1;
      let jumpCond = false;
      await doStep(step.whileJump, async () => {
        markJumpBlock();
        if (probe >= 0 && probe < n) {
          jumpCond = await animateCompare(probe, key, "<");
        } else {
          jumpCond = false;
        }
      });
      window.ArrayViz.clearCompare();

      if (!jumpCond) break;

      await doStep(step.updatePrev, async () => {
        vars.prev = vars.step;
        markJumpBlock();
      });

      await doStep(step.updateStep, async () => {
        vars.step = vars.step + vars.step_length;
        syncStepSpan();
        markJumpBlock();
      });

      let pastEnd = false;
      await doStep(step.checkPrevGeN, async () => {
        pastEnd = vars.prev >= n;
        const text = window.I18n
          ? window.I18n.compareText(vars.prev, n, "≥", pastEnd)
          : `Compare: prev ≥ n (${vars.prev} ≥ ${n}) → ${pastEnd}`;
        window.ArrayViz.setCompare(-1, -1, text);
      });
      window.ArrayViz.clearCompare();

      if (pastEnd) {
        await doStep(step.returnMissJump, async () => {
          vars.result = "NOT_FOUND";
          window.ArrayViz.clearHighlights();
          window.ArrayViz.markRange(-1, -1);
          if (n > 0) window.ArrayViz.setMissIndex(n - 1);
          showMiss(key);
        });
        return;
      }

      await doStep(step.updateStepOrN, async () => {
        vars.step_or_n = Math.min(vars.step, n);
        markJumpBlock();
      });
    }

    // Linear scan within the block
    while (true) {
      if (abort) throw new Error("aborted");

      let linearCond = false;
      await doStep(step.whileLinear, async () => {
        markJumpBlock();
        if (vars.prev >= 0 && vars.prev < n) {
          linearCond = await animateCompare(vars.prev, key, "<");
        } else {
          linearCond = false;
        }
      });
      window.ArrayViz.clearCompare();

      if (!linearCond) break;

      await doStep(step.incPrev, async () => {
        vars.prev = vars.prev + 1;
      });

      let atBound = false;
      await doStep(step.checkBound, async () => {
        atBound = vars.prev === vars.step_or_n;
        const text = window.I18n
          ? window.I18n.compareText(
              vars.prev,
              vars.step_or_n,
              "=",
              atBound
            )
          : `Compare: prev = step_or_n (${vars.prev} = ${vars.step_or_n}) → ${atBound}`;
        window.ArrayViz.setCompare(-1, -1, text);
      });
      window.ArrayViz.clearCompare();

      if (atBound) {
        await doStep(step.returnMissLinear, async () => {
          vars.result = "NOT_FOUND";
          window.ArrayViz.clearHighlights();
          window.ArrayViz.markRange(-1, -1);
          const missAt = Math.min(vars.prev, n - 1);
          if (missAt >= 0) window.ArrayViz.setMissIndex(missAt);
          showMiss(key);
        });
        return;
      }
    }

    let equal = false;
    await doStep(step.checkEqual, async () => {
      if (vars.prev >= 0 && vars.prev < n) {
        equal = await animateCompare(vars.prev, key, "=");
      } else {
        equal = false;
      }
    });
    window.ArrayViz.clearCompare();

    if (equal) {
      await doStep(step.returnFound, async () => {
        vars.result = vars.prev;
        window.ArrayViz.clearHighlights();
        window.ArrayViz.markRange(-1, -1);
        window.ArrayViz.setFoundIndex(vars.prev);
        showFound(key, vars.prev);
      });
      return;
    }

    await doStep(step.returnMiss, async () => {
      vars.result = "NOT_FOUND";
      window.ArrayViz.clearHighlights();
      window.ArrayViz.markRange(-1, -1);
      const missAt =
        vars.prev != null && vars.prev >= 0 && vars.prev < n
          ? vars.prev
          : n > 0
            ? n - 1
            : -1;
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
    syncStepSpan();
    running = true;
    paused = false;
    abort = false;
    setButtons();

    try {
      vars.n = n;
      vars.key = searchKey;
      if (window.ArrayViz.setKeyValue) {
        window.ArrayViz.setKeyValue(searchKey);
      }
      await doStep(step.mainCall, async () => {
        window.ArrayViz.markRange(0, n - 1);
      });
      await jumpSearch(n, searchKey);
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
    syncStepSpan();
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
