/**
 * Instrumented BST insertion executor.
 * Steps highlight pseudocode, animate the 3D tree, and grow the trace table.
 */

window.BstInsertExecutor = (function () {
  let running = false;
  let paused = false;
  let abort = false;
  let stepMode = false;
  let stepResolve = null;
  let stepCounter = 0;
  let speed = 5;

  const vars = {
    key: null,
    current: null,
    parent: null,
    side: null,
    root: null,
  };

  function ids() {
    return window.BSTI_STEP_IDS || window.PseudocodeView.STEP_IDS;
  }

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function stepDelay() {
    return Math.round(900 - speed * 70);
  }

  function compareDuration() {
    // Include ~500ms wonder/shake inside the compare timeline.
    return Math.round(1700 - speed * 90);
  }

  function nullLabel() {
    return window.I18n ? window.I18n.t("labelNull") : "null";
  }

  function sideLabel(side) {
    if (!side) return "—";
    if (side === "left") return window.I18n ? window.I18n.t("labelLeft") : "left";
    if (side === "right") return window.I18n ? window.I18n.t("labelRight") : "right";
    return side;
  }

  function setButtons() {
    const runBtn = document.getElementById("btn-run");
    const pauseBtn = document.getElementById("btn-pause");
    const stepBtn = document.getElementById("btn-step");
    const randomBtn = document.getElementById("btn-random");
    const applyBtn = document.getElementById("btn-apply");
    const seqInput = document.getElementById("insert-sequence");
    const speedInput = document.getElementById("speed");
    const resetBtn = document.getElementById("btn-reset");
    const rerunBtn = document.getElementById("btn-rerun");

    if (!runBtn) return;

    const puzzleDone =
      window.TracePuzzle &&
      window.TracePuzzle.isTaskComplete &&
      window.TracePuzzle.isTaskComplete();

    if (puzzleDone) {
      runBtn.disabled = true;
      pauseBtn.disabled = true;
      stepBtn.disabled = true;
      if (randomBtn) randomBtn.disabled = true;
      if (applyBtn) applyBtn.disabled = true;
      if (seqInput) seqInput.disabled = true;
      if (speedInput) speedInput.disabled = false;
      if (resetBtn) resetBtn.disabled = false;
      if (rerunBtn) rerunBtn.disabled = false;
      return;
    }

    runBtn.disabled = running && !paused;
    pauseBtn.disabled = !running || paused;
    stepBtn.disabled = running && !paused && !stepMode;
    if (randomBtn) randomBtn.disabled = running && !paused;
    if (applyBtn) applyBtn.disabled = running && !paused;
    if (seqInput) seqInput.disabled = running && !paused;
    if (speedInput) speedInput.disabled = false;
    if (resetBtn) resetBtn.disabled = false;
    if (rerunBtn) rerunBtn.disabled = false;
  }

  function highlight(stepId) {
    if (window.PseudocodeView) window.PseudocodeView.highlight(stepId);
  }

  function clearHighlight() {
    if (window.PseudocodeView) window.PseudocodeView.clearHighlight();
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

    const tr = document.createElement("tr");
    tr.className = "latest";
    tr.dataset.stepId = stepId;
    const cells = [
      stepCounter,
      label,
      vars.key ?? "—",
      vars.current == null ? nullLabel() : vars.current,
      vars.parent == null ? nullLabel() : vars.parent,
      sideLabel(vars.side),
      vars.root == null ? nullLabel() : vars.root,
    ];
    cells.forEach((c) => {
      const td = document.createElement("td");
      td.textContent = String(c);
      tr.appendChild(td);
    });
    body.appendChild(tr);
    tr.scrollIntoView({ block: "nearest", behavior: "smooth" });
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
    appendTrace(stepId);
    await waitGate();
  }

  function syncRootVar() {
    vars.root = window.TreeViz.getRootValue();
  }

  async function animateCompareAgainst(nodeId, key) {
    const nodeVal = window.TreeViz.getNodeValue(nodeId);
    const text = window.I18n
      ? window.I18n.compareText(key, nodeVal, "<", key < nodeVal)
      : `Compare: ${key} < ${nodeVal}`;
    window.TreeViz.setCompare(text);
    await window.TreeViz.animateCompare(nodeId, key, compareDuration());
    return key < nodeVal;
  }

  async function bstInsert(key) {
    const step = ids();
    vars.key = key;
    vars.current = null;
    vars.parent = null;
    vars.side = null;
    syncRootVar();

    window.TreeViz.beginInsert(key);

    await doStep(step.createNode, async () => {
      /* new node conceptually created; visualization still flying */
    });

    let isEmpty = false;
    await doStep(step.checkEmpty, async () => {
      isEmpty = window.TreeViz.getRootId() == null;
      const text = window.I18n
        ? window.I18n.compareText(
            vars.root == null ? nullLabel() : vars.root,
            nullLabel(),
            "=",
            isEmpty
          )
        : `root = null → ${isEmpty}`;
      window.TreeViz.setCompare(text);
    });
    window.TreeViz.clearCompare();

    if (isEmpty) {
      await doStep(step.returnNew, async () => {
        const id = window.TreeViz.createRoot(key);
        window.TreeViz.setCurrent(id);
        syncRootVar();
        vars.current = key;
        vars.parent = null;
        await delay(Math.max(280, stepDelay() * 0.5));
        window.TreeViz.clearCurrent();
      });
      return;
    }

    let currentId = window.TreeViz.getRootId();
    let parentId = null;

    await doStep(step.setCurrent, async () => {
      vars.current = window.TreeViz.getNodeValue(currentId);
      window.TreeViz.setCurrent(currentId);
      const node = window.TreeViz.nodeById(currentId);
      if (node) {
        window.TreeViz.setFlyingTarget(
          node.displayX - 50,
          node.displayY - 40,
          node.displayZ + 20
        );
        await window.TreeViz.waitUntilFlyingNear(8);
      }
    });

    await doStep(step.setParent, async () => {
      vars.parent = null;
      parentId = null;
    });

    while (true) {
      if (abort) throw new Error("aborted");

      let loopCond = false;
      await doStep(step.whileLoop, async () => {
        loopCond = currentId != null;
        const curLabel = vars.current == null ? nullLabel() : vars.current;
        const text = window.I18n
          ? window.I18n.compareText(curLabel, nullLabel(), "≠", loopCond)
          : `current ≠ null → ${loopCond}`;
        window.TreeViz.setCompare(text);
      });
      window.TreeViz.clearCompare();

      if (!loopCond) break;

      await doStep(step.parentAssign, async () => {
        parentId = currentId;
        vars.parent = vars.current;
      });

      let goLeft = false;
      await doStep(step.checkLess, async () => {
        goLeft = await animateCompareAgainst(currentId, key);
        vars.side = goLeft ? "left" : "right";
      });
      window.TreeViz.clearCompare();

      if (goLeft) {
        await doStep(step.goLeft, async () => {
          const nextId = window.TreeViz.getChildId(currentId, "left");
          currentId = nextId;
          vars.current =
            currentId == null ? null : window.TreeViz.getNodeValue(currentId);
          if (currentId != null) {
            window.TreeViz.setCurrent(currentId);
            const node = window.TreeViz.nodeById(currentId);
            if (node) {
              window.TreeViz.setFlyingTarget(
                node.displayX - 50,
                node.displayY - 30,
                node.displayZ + 16
              );
              await window.TreeViz.waitUntilFlyingNear(8);
            }
          } else if (parentId != null) {
            window.TreeViz.setCurrent(parentId);
          }
        });
      } else {
        await doStep(step.goRight, async () => {
          const nextId = window.TreeViz.getChildId(currentId, "right");
          currentId = nextId;
          vars.current =
            currentId == null ? null : window.TreeViz.getNodeValue(currentId);
          if (currentId != null) {
            window.TreeViz.setCurrent(currentId);
            const node = window.TreeViz.nodeById(currentId);
            if (node) {
              window.TreeViz.setFlyingTarget(
                node.displayX - 50,
                node.displayY - 30,
                node.displayZ + 16
              );
              await window.TreeViz.waitUntilFlyingNear(8);
            }
          } else if (parentId != null) {
            window.TreeViz.setCurrent(parentId);
          }
        });
      }
    }

    let attachLeft = false;
    await doStep(step.attachCheck, async () => {
      window.TreeViz.setCurrent(parentId);
      attachLeft = await animateCompareAgainst(parentId, key);
      vars.side = attachLeft ? "left" : "right";
      vars.current = null;
    });
    window.TreeViz.clearCompare();

    if (attachLeft) {
      await doStep(step.attachLeft, async () => {
        window.TreeViz.attachChild(parentId, "left", key);
        window.TreeViz.clearCurrent();
        syncRootVar();
      });
    } else {
      await doStep(step.attachRight, async () => {
        window.TreeViz.attachChild(parentId, "right", key);
        window.TreeViz.clearCurrent();
        syncRootVar();
      });
    }

    await doStep(step.returnRoot, async () => {
      syncRootVar();
    });
  }

  async function runProgram() {
    const step = ids();
    const sequence = window.TreeViz.getSequence();
    if (!sequence.length) return;

    clearTrace({ keepPuzzleFills: true });
    Object.keys(vars).forEach((k) => (vars[k] = null));
    window.TreeViz.clearOutcome();
    window.TreeViz.resetVisualFromSequence();
    running = true;
    paused = false;
    abort = false;
    setButtons();

    let finishedOk = false;
    try {
      for (let i = 0; i < sequence.length; i++) {
        if (abort) throw new Error("aborted");
        const key = sequence[i];
        vars.key = key;
        vars.current = null;
        vars.parent = null;
        vars.side = null;
        syncRootVar();

        await doStep(step.mainLoop, async () => {
          /* highlight for-each */
        });

        await doStep(step.callInsert, async () => {
          /* enter bst_insert */
        });

        await bstInsert(key);
      }

      window.TreeViz.setResultDone(sequence.length);
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
      if (window.TracePuzzle && window.TracePuzzle.onRunFinished) {
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

  function run() {
    if (
      window.TracePuzzle &&
      window.TracePuzzle.isTaskComplete &&
      window.TracePuzzle.isTaskComplete()
    ) {
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
    if (
      window.TracePuzzle &&
      window.TracePuzzle.isTaskComplete &&
      window.TracePuzzle.isTaskComplete()
    ) {
      return;
    }
    if (!running) return;
    paused = true;
    setButtons();
  }

  function step() {
    if (
      window.TracePuzzle &&
      window.TracePuzzle.isTaskComplete &&
      window.TracePuzzle.isTaskComplete()
    ) {
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
    if (window.TreeViz) {
      window.TreeViz.clearOutcome();
      window.TreeViz.resetVisualFromSequence();
    }
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
    if (window.TreeViz) {
      window.TreeViz.clearOutcome();
      window.TreeViz.resetVisualFromSequence();
    }
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
    setButtons,
    isBusy,
    clearTrace,
  };
})();
