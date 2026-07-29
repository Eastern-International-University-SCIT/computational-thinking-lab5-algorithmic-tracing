/**
 * Instrumented Fibonacci Search executor.
 * Steps highlight pseudocode lines, animate the 3D array, and grow the trace table.
 */

window.FibonacciSearchExecutor = (function () {
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
    fibM: null,
    fibMMm1: null,
    fibMMm2: null,
    offset: null,
    i: null,
    result: null,
  };

  function ids() {
    return window.FS_STEP_IDS || window.PseudocodeView.STEP_IDS;
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
      vars.fibM ?? "—",
      vars.fibMMm1 ?? "—",
      vars.fibMMm2 ?? "—",
      vars.offset ?? "—",
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
      const offsetPtr =
        vars.offset != null && vars.offset >= 0 ? vars.offset : null;
      window.ArrayViz.setPointers(offsetPtr, vars.i, null);
    }
  }

  function markSearchRange() {
    if (!window.ArrayViz || vars.n == null) return;
    const n = vars.n;
    if (vars.fibM == null || vars.fibMMm2 == null) {
      window.ArrayViz.markRange(0, n - 1);
      return;
    }
    // Active window roughly [offset+1, min(offset+fibMMm2, n-1)]
    const low = Math.max(0, (vars.offset == null ? -1 : vars.offset) + 1);
    const high = Math.min(
      n - 1,
      (vars.offset == null ? -1 : vars.offset) + vars.fibMMm2
    );
    if (low <= high) {
      window.ArrayViz.markRange(low, high);
    } else {
      window.ArrayViz.markRange(-1, -1);
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
    else if (op === ">") result = left > key;
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

  async function fibonacciSearch(n, key) {
    const step = ids();
    vars.n = n;
    vars.key = key;

    await doStep(step.setFibMMm2, async () => {
      vars.fibMMm2 = 0;
    });

    await doStep(step.setFibMMm1, async () => {
      vars.fibMMm1 = 1;
    });

    await doStep(step.setFibM, async () => {
      vars.fibM = vars.fibMMm1 + vars.fibMMm2;
    });

    // Grow Fibonacci until fibM ≥ n
    while (true) {
      if (abort) throw new Error("aborted");

      let growCond = false;
      await doStep(step.whileFibGrow, async () => {
        growCond = vars.fibM < n;
        const text = window.I18n
          ? window.I18n.compareText(vars.fibM, n, "<", growCond)
          : `Compare: fibM < n (${vars.fibM} < ${n}) → ${growCond}`;
        window.ArrayViz.setCompare(-1, -1, text);
      });
      window.ArrayViz.clearCompare();

      if (!growCond) break;

      await doStep(step.growFibMMm2, async () => {
        vars.fibMMm2 = vars.fibMMm1;
      });
      await doStep(step.growFibMMm1, async () => {
        vars.fibMMm1 = vars.fibM;
      });
      await doStep(step.growFibM, async () => {
        vars.fibM = vars.fibMMm1 + vars.fibMMm2;
      });
    }

    await doStep(step.setOffset, async () => {
      vars.offset = -1;
      markSearchRange();
    });

    while (true) {
      if (abort) throw new Error("aborted");

      let loopCond = false;
      await doStep(step.whileFibM, async () => {
        loopCond = vars.fibM > 1;
        const text = window.I18n
          ? window.I18n.compareText(vars.fibM, 1, ">", loopCond)
          : `Compare: fibM > 1 (${vars.fibM} > 1) → ${loopCond}`;
        window.ArrayViz.setCompare(-1, -1, text);
        markSearchRange();
      });
      window.ArrayViz.clearCompare();

      if (!loopCond) break;

      await doStep(step.setI, async () => {
        vars.i = Math.min(vars.offset + vars.fibMMm2, n - 1);
        markSearchRange();
        if (vars.i >= 0 && vars.i < n) {
          window.ArrayViz.setHighlight(vars.i);
        }
      });

      let less = false;
      await doStep(step.checkLess, async () => {
        if (vars.i >= 0 && vars.i < n) {
          less = await animateCompare(vars.i, key, "<");
        } else {
          less = false;
        }
      });
      window.ArrayViz.clearCompare();

      if (less) {
        await doStep(step.shrinkRightFibM, async () => {
          vars.fibM = vars.fibMMm1;
        });
        await doStep(step.shrinkRightFibMMm1, async () => {
          vars.fibMMm1 = vars.fibMMm2;
        });
        await doStep(step.shrinkRightFibMMm2, async () => {
          vars.fibMMm2 = vars.fibM - vars.fibMMm1;
        });
        await doStep(step.updateOffset, async () => {
          vars.offset = vars.i;
          markSearchRange();
        });
        continue;
      }

      let greater = false;
      await doStep(step.checkGreater, async () => {
        if (vars.i >= 0 && vars.i < n) {
          greater = await animateCompare(vars.i, key, ">");
        } else {
          greater = false;
        }
      });
      window.ArrayViz.clearCompare();

      if (greater) {
        await doStep(step.shrinkLeftFibM, async () => {
          vars.fibM = vars.fibMMm2;
        });
        await doStep(step.shrinkLeftFibMMm1, async () => {
          vars.fibMMm1 = vars.fibMMm1 - vars.fibMMm2;
        });
        await doStep(step.shrinkLeftFibMMm2, async () => {
          vars.fibMMm2 = vars.fibM - vars.fibMMm1;
        });
        markSearchRange();
      } else {
        await doStep(step.returnFound, async () => {
          vars.result = vars.i;
          window.ArrayViz.clearHighlights();
          window.ArrayViz.markRange(-1, -1);
          window.ArrayViz.setFoundIndex(vars.i);
          showFound(key, vars.i);
        });
        return;
      }
    }

    let lastHit = false;
    const lastIndex = vars.offset + 1;
    await doStep(step.checkLast, async () => {
      const fibOk = !!vars.fibMMm1;
      if (fibOk && lastIndex >= 0 && lastIndex < n) {
        lastHit = await animateCompare(lastIndex, key, "=");
      } else {
        lastHit = false;
        const text = window.I18n
          ? `${window.I18n.t("comparePrefix")}: fibMMm1=${vars.fibMMm1} → ${window.I18n.t("falseWord")}`
          : `Compare: last check skipped → false`;
        window.ArrayViz.setCompare(-1, -1, text);
      }
    });
    window.ArrayViz.clearCompare();

    if (lastHit) {
      await doStep(step.returnLast, async () => {
        vars.i = lastIndex;
        vars.result = lastIndex;
        window.ArrayViz.clearHighlights();
        window.ArrayViz.markRange(-1, -1);
        window.ArrayViz.setFoundIndex(lastIndex);
        showFound(key, lastIndex);
      });
      return;
    }

    await doStep(step.returnMiss, async () => {
      vars.result = "NOT_FOUND";
      window.ArrayViz.clearHighlights();
      window.ArrayViz.markRange(-1, -1);
      let missAt = vars.i;
      if (missAt == null || missAt < 0 || missAt >= n) {
        missAt =
          lastIndex >= 0 && lastIndex < n
            ? lastIndex
            : n > 0
              ? Math.floor((n - 1) / 2)
              : -1;
      }
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

    try {
      vars.n = n;
      vars.key = searchKey;
      if (window.ArrayViz.setKeyValue) {
        window.ArrayViz.setKeyValue(searchKey);
      }
      await doStep(step.mainCall, async () => {
        window.ArrayViz.markRange(0, n - 1);
      });
      await fibonacciSearch(n, searchKey);
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
