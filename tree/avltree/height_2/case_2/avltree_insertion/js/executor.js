/**
 * Instrumented AVL insertion executor.
 * Steps highlight pseudocode, animate the 3D tree, and grow the trace table.
 * Trace columns track algorithm variables (not the whole tree).
 */

window.AvlInsertExecutor = (function () {
  let running = false;
  let paused = false;
  let abort = false;
  let stepMode = false;
  let stepResolve = null;
  let stepCounter = 0;
  let speed = 5;

  const vars = {
    key: null,
    node: null,
    bf: null,
    case: null,
    new_root: null,
    temp: undefined,
    height_left: null,
    height_right: null,
    root: null,
  };

  function ids() {
    return window.AVLI_STEP_IDS || window.PseudocodeView.STEP_IDS;
  }

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function stepDelay() {
    return Math.round(900 - speed * 70);
  }

  function compareDuration() {
    return Math.round(1700 - speed * 90);
  }

  function rotateScale() {
    return Math.max(0.45, 1.15 - speed * 0.07);
  }

  function heightAnimDuration() {
    return Math.round(900 - speed * 55);
  }

  function nullLabel() {
    return window.I18n ? window.I18n.t("labelNull") : "null";
  }

  function formatBf(bf) {
    if (bf == null) return "—";
    if (bf > 0) return "+" + bf;
    return String(bf);
  }

  function valOrNull(v) {
    return v == null ? nullLabel() : v;
  }

  function dash(v) {
    return v == null ? "—" : String(v);
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

  function pushCall(nodeArg, keyArg) {
    if (window.PseudocodeView && window.PseudocodeView.pushCall) {
      window.PseudocodeView.pushCall(nodeArg, keyArg);
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

  function formatTemp(v) {
    if (v === undefined) return "—";
    if (v == null) return nullLabel();
    return String(v);
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
      vars.node == null ? nullLabel() : vars.node,
      formatBf(vars.bf),
      vars.case == null ? "—" : vars.case,
      dash(vars.new_root),
      formatTemp(vars.temp),
      dash(vars.height_left),
      dash(vars.height_right),
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
    if (window.TracePuzzle && window.TracePuzzle.shouldGate(stepCounter + 1)) {
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

  function clearHelperVars() {
    vars.new_root = null;
    vars.temp = undefined;
    vars.height_left = null;
    vars.height_right = null;
  }

  function varName(en, vi) {
    return window.I18n && window.I18n.getLang() === "vi" ? vi : en;
  }

  async function flyToward(nodeId) {
    const node = window.TreeViz.nodeById(nodeId);
    if (!node) return;
    window.TreeViz.setFlyingTarget(
      node.displayX - 50,
      node.displayY - 40,
      node.displayZ + 20
    );
    await window.TreeViz.waitUntilFlyingNear(8);
  }

  async function flyTowardNull(parentId, side) {
    const pos = window.TreeViz.getNullChildWorldPos(parentId, side);
    if (!pos) return;
    window.TreeViz.setFlyingTarget(
      pos.displayX - 20,
      pos.displayY - 20,
      pos.displayZ + 12
    );
    await window.TreeViz.waitUntilFlyingNear(8);
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

  /** Collapsed create_node(key) with NODE_CREATED animation. */
  async function createNodeProc(key, viaNull) {
    const step = ids();
    let newId = null;

    await doStep(step.returnNew, async () => {
      if (window.TreeViz.getRootId() == null) {
        newId = window.TreeViz.createRoot(key);
      } else if (viaNull && viaNull.parentId != null) {
        // Appear at the null slot CURRENT is pointing to — do not slide to root.
        newId = window.TreeViz.createNodeAtNull(
          key,
          viaNull.parentId,
          viaNull.side
        );
      } else {
        newId = window.TreeViz.createNode(key);
      }
      window.TreeViz.setCurrent(newId);
      vars.node = key;
      vars.bf = 0;
      clearHelperVars();
      syncRootVar();
      await window.TreeViz.animateCreateNode(newId);
      vars.node = key;
      vars.bf = 0;
      syncRootVar();
    });

    return newId;
  }

  /** Expanded update_height(node) with 3D height-label animation. */
  async function updateHeightProc(nodeId, options) {
    const step = ids();
    const nodeVal = window.TreeViz.getNodeValue(nodeId);
    vars.node = nodeVal;
    const animMs = heightAnimDuration();
    const keepCurrentId =
      options && options.keepCurrentId != null ? options.keepCurrentId : nodeId;
    // Rotate helpers call update_height without balance_factor; sync bf after
    // height so labels stay correct. Insert leaves bf for balance_factor anim.
    const syncBf = !!(options && options.syncBf);

    await doStep(step.uhHl, async () => {
      const leftId = window.TreeViz.getChildId(nodeId, "left");
      vars.height_left = window.TreeViz.getNodeHeight(leftId);
      window.TreeViz.setCurrent(keepCurrentId);
      window.TreeViz.setCompare(
        `${varName("height_left", "chiều_cao_trái")} ← ${vars.height_left}`
      );
      await window.TreeViz.animateHeightRead(
        nodeId,
        "left",
        vars.height_left,
        animMs
      );
    });
    window.TreeViz.clearCompare();

    await doStep(step.uhHr, async () => {
      const rightId = window.TreeViz.getChildId(nodeId, "right");
      vars.height_right = window.TreeViz.getNodeHeight(rightId);
      window.TreeViz.setCurrent(keepCurrentId);
      window.TreeViz.setCompare(
        `${varName("height_right", "chiều_cao_phải")} ← ${vars.height_right}`
      );
      await window.TreeViz.animateHeightRead(
        nodeId,
        "right",
        vars.height_right,
        animMs
      );
    });
    window.TreeViz.clearCompare();

    await doStep(step.uhSet, async () => {
      const nextHeight =
        1 + Math.max(Number(vars.height_left), Number(vars.height_right));
      const nodeName = varName("node.height", "nút.cao");
      const hlName = varName("height_left", "chiều_cao_trái");
      const hrName = varName("height_right", "chiều_cao_phải");
      window.TreeViz.setCurrent(keepCurrentId);
      window.TreeViz.setCompare(
        `${nodeName} ← 1 + max(${hlName}=${vars.height_left}, ${hrName}=${vars.height_right}) = ${nextHeight}`
      );
      await window.TreeViz.animateHeightCombine(nodeId, nextHeight, animMs + 120);
      if (syncBf) {
        vars.bf = window.TreeViz.recomputeNodeBf(nodeId);
      } else {
        vars.bf = window.TreeViz.getBalanceFactor(nodeId);
      }
      syncRootVar();
    });
    window.TreeViz.clearCompare();
  }

  /** Expanded balance_factor(node). Returns bf. */
  async function balanceFactorProc(nodeId) {
    const step = ids();
    let bf = 0;
    vars.node = window.TreeViz.getNodeValue(nodeId);
    const animMs = heightAnimDuration();

    await doStep(step.bfReturn, async () => {
      const leftId = window.TreeViz.getChildId(nodeId, "left");
      const rightId = window.TreeViz.getChildId(nodeId, "right");
      const hl = window.TreeViz.getNodeHeight(leftId);
      const hr = window.TreeViz.getNodeHeight(rightId);
      bf = hl - hr;
      vars.height_left = hl;
      vars.height_right = hr;
      vars.bf = bf;
      window.TreeViz.setCurrent(nodeId);
      window.TreeViz.setCompare(
        `height(left)=${hl} − height(right)=${hr} → ${varName("balance factor", "hệ số cân bằng")}=${formatBf(bf)}`
      );
      await window.TreeViz.animateBalanceFactor(nodeId, hl, hr, bf, animMs);
      syncRootVar();
    });
    window.TreeViz.clearCompare();
    return bf;
  }

  function setRotateRoleArrows(nodeId, newRootId, tempId, tempSide, tempAnchorId) {
    window.TreeViz.setCurrent(nodeId);
    if (newRootId != null) {
      window.TreeViz.setRoleArrow("new_root", newRootId, null);
    } else {
      window.TreeViz.setRoleArrow("new_root", null, null);
    }
    // undefined → temp not assigned yet; null → assigned and is null child
    if (tempId === undefined) {
      window.TreeViz.setRoleArrow("temp", null, null);
    } else if (tempId != null) {
      window.TreeViz.setRoleArrow("temp", tempId, null);
    } else {
      const anchor =
        tempAnchorId != null
          ? tempAnchorId
          : newRootId != null
            ? newRootId
            : nodeId;
      if (anchor != null) {
        window.TreeViz.setRoleArrow("temp", null, {
          parentId: anchor,
          side: tempSide,
        });
      } else {
        window.TreeViz.setRoleArrow("temp", null, null);
      }
    }
  }

  /**
   * Expanded rotate_left(node) with break / rotate / reconnect animation.
   * Returns new subtree root id (new_root).
   */
  async function rotateLeftProc(nodeId) {
    const step = ids();
    const nodeVal = window.TreeViz.getNodeValue(nodeId);
    let newRootId = window.TreeViz.getChildId(nodeId, "right");
    let tempId =
      newRootId != null ? window.TreeViz.getChildId(newRootId, "left") : null;

    vars.node = nodeVal;
    window.TreeViz.setCurrent(nodeId);
    window.TreeViz.clearRoleArrows();

    await doStep(step.rotL_y, async () => {
      vars.new_root =
        newRootId == null ? null : window.TreeViz.getNodeValue(newRootId);
      setRotateRoleArrows(nodeId, newRootId, undefined, "left", newRootId);
      window.TreeViz.setCompare(
        `${varName("new_root", "gốc_mới")} ← ${valOrNull(vars.new_root)}`
      );
    });
    window.TreeViz.clearCompare();

    await doStep(step.rotL_T2, async () => {
      vars.temp = tempId == null ? null : window.TreeViz.getNodeValue(tempId);
      setRotateRoleArrows(nodeId, newRootId, tempId, "left", newRootId);
      window.TreeViz.setCompare(
        `${varName("temp", "tạm")} ← ${valOrNull(vars.temp)}`
      );
    });
    window.TreeViz.clearCompare();

    await doStep(step.rotL_yLeft, async () => {
      setRotateRoleArrows(nodeId, newRootId, tempId, "left", newRootId);
      window.TreeViz.setCompare(
        `${varName("new_root.left ← node", "gốc_mới.trái ← nút")}  (break → rotate → reconnect)`
      );
      newRootId = await window.TreeViz.rotateLeftAnimated(nodeId, rotateScale());
      // After left rotate, temp (former new_root.left) is now node.right (edge still hidden).
      tempId = window.TreeViz.getChildId(nodeId, "right");
      setRotateRoleArrows(nodeId, newRootId, tempId, "right", nodeId);
      vars.new_root = window.TreeViz.getNodeValue(newRootId);
      syncRootVar();
    });
    window.TreeViz.clearCompare();

    await doStep(step.rotL_zRight, async () => {
      setRotateRoleArrows(nodeId, newRootId, tempId, "right", nodeId);
      window.TreeViz.setCompare(
        `${varName("node.right ← temp", "nút.phải ← tạm")}  (reconnect)`
      );
      if (tempId != null) {
        await window.TreeViz.animateReconnectEdges(
          [[nodeId, tempId]],
          500 * rotateScale()
        );
      }
    });
    window.TreeViz.clearCompare();

    await doStep(step.rotL_updZ, async () => {
      setRotateRoleArrows(nodeId, newRootId, tempId, "right", nodeId);
    });
    await updateHeightProc(nodeId, { keepCurrentId: nodeId, syncBf: true });
    setRotateRoleArrows(nodeId, newRootId, tempId, "right", nodeId);

    await doStep(step.rotL_updY, async () => {
      setRotateRoleArrows(nodeId, newRootId, tempId, "right", nodeId);
    });
    await updateHeightProc(newRootId, { keepCurrentId: nodeId, syncBf: true });
    setRotateRoleArrows(nodeId, newRootId, tempId, "right", nodeId);

    await doStep(step.rotL_return, async () => {
      vars.node = window.TreeViz.getNodeValue(newRootId);
      vars.new_root = vars.node;
      vars.bf = window.TreeViz.getBalanceFactor(newRootId);
      window.TreeViz.clearRoleArrows();
      window.TreeViz.setCurrent(newRootId);
      syncRootVar();
    });

    return newRootId;
  }

  /**
   * Expanded rotate_right(node) with break / rotate / reconnect animation.
   * Returns new subtree root id (new_root).
   */
  async function rotateRightProc(nodeId) {
    const step = ids();
    const nodeVal = window.TreeViz.getNodeValue(nodeId);
    let newRootId = window.TreeViz.getChildId(nodeId, "left");
    let tempId =
      newRootId != null ? window.TreeViz.getChildId(newRootId, "right") : null;

    vars.node = nodeVal;
    window.TreeViz.setCurrent(nodeId);
    window.TreeViz.clearRoleArrows();

    await doStep(step.rotR_y, async () => {
      vars.new_root =
        newRootId == null ? null : window.TreeViz.getNodeValue(newRootId);
      setRotateRoleArrows(nodeId, newRootId, undefined, "right", newRootId);
      window.TreeViz.setCompare(
        `${varName("new_root", "gốc_mới")} ← ${valOrNull(vars.new_root)}`
      );
    });
    window.TreeViz.clearCompare();

    await doStep(step.rotR_T2, async () => {
      vars.temp = tempId == null ? null : window.TreeViz.getNodeValue(tempId);
      setRotateRoleArrows(nodeId, newRootId, tempId, "right", newRootId);
      window.TreeViz.setCompare(
        `${varName("temp", "tạm")} ← ${valOrNull(vars.temp)}`
      );
    });
    window.TreeViz.clearCompare();

    await doStep(step.rotR_yRight, async () => {
      setRotateRoleArrows(nodeId, newRootId, tempId, "right", newRootId);
      window.TreeViz.setCompare(
        `${varName("new_root.right ← node", "gốc_mới.phải ← nút")}  (break → rotate → reconnect)`
      );
      newRootId = await window.TreeViz.rotateRightAnimated(nodeId, rotateScale());
      // After right rotate, temp (former new_root.right) is now node.left (edge still hidden).
      tempId = window.TreeViz.getChildId(nodeId, "left");
      setRotateRoleArrows(nodeId, newRootId, tempId, "left", nodeId);
      vars.new_root = window.TreeViz.getNodeValue(newRootId);
      syncRootVar();
    });
    window.TreeViz.clearCompare();

    await doStep(step.rotR_zLeft, async () => {
      setRotateRoleArrows(nodeId, newRootId, tempId, "left", nodeId);
      window.TreeViz.setCompare(
        `${varName("node.left ← temp", "nút.trái ← tạm")}  (reconnect)`
      );
      if (tempId != null) {
        await window.TreeViz.animateReconnectEdges(
          [[nodeId, tempId]],
          500 * rotateScale()
        );
      }
    });
    window.TreeViz.clearCompare();

    await doStep(step.rotR_updZ, async () => {
      setRotateRoleArrows(nodeId, newRootId, tempId, "left", nodeId);
    });
    await updateHeightProc(nodeId, { keepCurrentId: nodeId, syncBf: true });
    setRotateRoleArrows(nodeId, newRootId, tempId, "left", nodeId);

    await doStep(step.rotR_updY, async () => {
      setRotateRoleArrows(nodeId, newRootId, tempId, "left", nodeId);
    });
    await updateHeightProc(newRootId, { keepCurrentId: nodeId, syncBf: true });
    setRotateRoleArrows(nodeId, newRootId, tempId, "left", nodeId);

    await doStep(step.rotR_return, async () => {
      vars.node = window.TreeViz.getNodeValue(newRootId);
      vars.new_root = vars.node;
      vars.bf = window.TreeViz.getBalanceFactor(newRootId);
      window.TreeViz.clearRoleArrows();
      window.TreeViz.setCurrent(newRootId);
      syncRootVar();
    });

    return newRootId;
  }

  /**
   * Recursive AVL insert.
   * @param {number|null} nodeId
   * @param {*} key
   * @param {{parentId:number, side:'left'|'right'}|null} viaNull
   *        When descending into a null child, identifies which null sphere CURRENT should target.
   */
  async function avlInsert(nodeId, key, viaNull) {
    const step = ids();
    const nodeArg = nodeId == null ? null : window.TreeViz.getNodeValue(nodeId);
    vars.key = key;
    vars.node = nodeArg;
    vars.bf = null;
    vars.case = null;
    clearHelperVars();
    syncRootVar();
    pushCall(nodeArg, key);

    try {
      if (nodeId != null) {
        window.TreeViz.setCurrent(nodeId);
        await flyToward(nodeId);
      } else if (viaNull && viaNull.parentId != null) {
        window.TreeViz.setCurrentNull(viaNull.parentId, viaNull.side);
        await flyTowardNull(viaNull.parentId, viaNull.side);
      } else {
        window.TreeViz.clearCurrent();
      }

      let isNull = false;
      await doStep(step.checkNull, async () => {
        isNull = nodeId == null;
        if (isNull && viaNull && viaNull.parentId != null) {
          window.TreeViz.setCurrentNull(viaNull.parentId, viaNull.side);
        }
        const nodeLabel = vars.node == null ? nullLabel() : vars.node;
        const text = window.I18n
          ? window.I18n.compareText(nodeLabel, nullLabel(), "=", isNull)
          : `node = null → ${isNull}`;
        window.TreeViz.setCompare(text);
      });
      window.TreeViz.clearCompare();

      if (isNull) {
        return await createNodeProc(key, viaNull);
      }

      let goLeft = false;
      await doStep(step.checkLess, async () => {
        goLeft = await animateCompareAgainst(nodeId, key);
      });
      window.TreeViz.clearCompare();

      if (goLeft) {
        await doStep(step.goLeft, async () => {
          vars.node = window.TreeViz.getNodeValue(nodeId);
          vars.case = null;
          clearHelperVars();
          syncRootVar();
          const childId = window.TreeViz.getChildId(nodeId, "left");
          if (childId == null) {
            window.TreeViz.setCurrentNull(nodeId, "left");
          }
        });
        const childId = window.TreeViz.getChildId(nodeId, "left");
        const returned = await avlInsert(
          childId,
          key,
          childId == null ? { parentId: nodeId, side: "left" } : null
        );
        await window.TreeViz.assignChildAnimated(
          nodeId,
          "left",
          returned,
          500 * rotateScale()
        );
        window.TreeViz.setCurrent(nodeId);
        vars.node = window.TreeViz.getNodeValue(nodeId);
        vars.case = null;
        clearHelperVars();
        syncRootVar();
        await window.TreeViz.waitLayoutSettle(180);
      } else {
        let goRight = false;
        await doStep(step.checkGreater, async () => {
          const nodeVal = window.TreeViz.getNodeValue(nodeId);
          goRight = key > nodeVal;
          const text = window.I18n
            ? window.I18n.compareText(key, nodeVal, ">", goRight)
            : `Compare: ${key} > ${nodeVal}`;
          window.TreeViz.setCompare(text);
          if (goRight) {
            await window.TreeViz.animateCompare(
              nodeId,
              key,
              compareDuration() * 0.55
            );
          }
        });
        window.TreeViz.clearCompare();

        if (goRight) {
          await doStep(step.goRight, async () => {
            vars.node = window.TreeViz.getNodeValue(nodeId);
            vars.case = null;
            clearHelperVars();
            syncRootVar();
            const childId = window.TreeViz.getChildId(nodeId, "right");
            if (childId == null) {
              window.TreeViz.setCurrentNull(nodeId, "right");
            }
          });
          const childId = window.TreeViz.getChildId(nodeId, "right");
          const returned = await avlInsert(
            childId,
            key,
            childId == null ? { parentId: nodeId, side: "right" } : null
          );
          await window.TreeViz.assignChildAnimated(
            nodeId,
            "right",
            returned,
            500 * rotateScale()
          );
          window.TreeViz.setCurrent(nodeId);
          vars.node = window.TreeViz.getNodeValue(nodeId);
          vars.case = null;
          clearHelperVars();
          syncRootVar();
          await window.TreeViz.waitLayoutSettle(180);
        } else {
          await doStep(step.returnDup, async () => {
            vars.node = window.TreeViz.getNodeValue(nodeId);
            syncRootVar();
            window.TreeViz.clearFlying();
            window.TreeViz.setCurrent(nodeId);
          });
          return nodeId;
        }
      }

      window.TreeViz.setCurrent(nodeId);
      vars.node = window.TreeViz.getNodeValue(nodeId);
      clearHelperVars();

      await doStep(step.updateHeight, async () => {
        /* enter update_height */
      });
      await updateHeightProc(nodeId);

      await doStep(step.calcBf, async () => {
        /* enter balance_factor */
      });
      const bf = await balanceFactorProc(nodeId);

      const nodeVal = window.TreeViz.getNodeValue(nodeId);
      const leftId = window.TreeViz.getChildId(nodeId, "left");
      const rightId = window.TreeViz.getChildId(nodeId, "right");
      const leftVal = leftId != null ? window.TreeViz.getNodeValue(leftId) : null;
      const rightVal =
        rightId != null ? window.TreeViz.getNodeValue(rightId) : null;

      let isLL = false;
      await doStep(step.caseLL, async () => {
        isLL = bf > 1 && leftVal != null && key < leftVal;
        vars.case = isLL ? "LL" : null;
        window.TreeViz.setCompare(`LL? bf=${formatBf(bf)} → ${isLL}`);
      });
      window.TreeViz.clearCompare();

      if (isLL) {
        await doStep(step.rotateRightLL, async () => {
          vars.case = "LL";
        });
        return await rotateRightProc(nodeId);
      }

      let isRR = false;
      await doStep(step.caseRR, async () => {
        isRR = bf < -1 && rightVal != null && key > rightVal;
        vars.case = isRR ? "RR" : null;
        window.TreeViz.setCompare(`RR? bf=${formatBf(bf)} → ${isRR}`);
      });
      window.TreeViz.clearCompare();

      if (isRR) {
        await doStep(step.rotateLeftRR, async () => {
          vars.case = "RR";
        });
        return await rotateLeftProc(nodeId);
      }

      let isLR = false;
      await doStep(step.caseLR, async () => {
        isLR = bf > 1 && leftVal != null && key > leftVal;
        vars.case = isLR ? "LR" : null;
        window.TreeViz.setCompare(`LR? bf=${formatBf(bf)} → ${isLR}`);
      });
      window.TreeViz.clearCompare();

      if (isLR) {
        await doStep(step.rotateLeftLR, async () => {
          vars.case = "LR";
        });
        const left = window.TreeViz.getChildId(nodeId, "left");
        const newLeft = await rotateLeftProc(left);
        await window.TreeViz.assignChildAnimated(
          nodeId,
          "left",
          newLeft,
          500 * rotateScale()
        );

        await doStep(step.rotateRightLR, async () => {
          vars.case = "LR";
          vars.node = nodeVal;
        });
        return await rotateRightProc(nodeId);
      }

      let isRL = false;
      await doStep(step.caseRL, async () => {
        isRL = bf < -1 && rightVal != null && key < rightVal;
        vars.case = isRL ? "RL" : null;
        window.TreeViz.setCompare(`RL? bf=${formatBf(bf)} → ${isRL}`);
      });
      window.TreeViz.clearCompare();

      if (isRL) {
        await doStep(step.rotateRightRL, async () => {
          vars.case = "RL";
        });
        const right = window.TreeViz.getChildId(nodeId, "right");
        const newRight = await rotateRightProc(right);
        await window.TreeViz.assignChildAnimated(
          nodeId,
          "right",
          newRight,
          500 * rotateScale()
        );

        await doStep(step.rotateLeftRL, async () => {
          vars.case = "RL";
          vars.node = nodeVal;
        });
        return await rotateLeftProc(nodeId);
      }

      await doStep(step.returnNode, async () => {
        vars.case = null;
        clearHelperVars();
        vars.bf = window.TreeViz.getBalanceFactor(nodeId);
        vars.node = window.TreeViz.getNodeValue(nodeId);
        syncRootVar();
      });

      return nodeId;
    } finally {
      popCall();
    }
  }

  async function runProgram() {
    const step = ids();
    const sequence = window.TreeViz.getSequence();
    if (!sequence.length) return;

    clearTrace({ keepPuzzleFills: true });
    clearCallStack();
    Object.keys(vars).forEach((k) => (vars[k] = null));
    vars.temp = undefined;
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
        vars.node = null;
        vars.bf = null;
        vars.case = null;
        clearHelperVars();
        syncRootVar();

        await doStep(step.mainLoop, async () => {
          /* highlight for-each */
        });

        await doStep(step.callInsert, async () => {
          window.TreeViz.beginInsert(key);
        });

        const newRoot = await avlInsert(window.TreeViz.getRootId(), key);
        if (newRoot != null) {
          window.TreeViz.setRootId(newRoot);
        }
        window.TreeViz.recomputeAllHeights();
        window.TreeViz.computeTreeLayout();
        window.TreeViz.clearCurrent();
        syncRootVar();
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
      clearCallStack();
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

  function refreshTrace() {
    if (window.TracePuzzle) {
      window.TracePuzzle.refreshLanguage();
      return;
    }
  }

  function rerun() {
    if (running) {
      abort = true;
      paused = false;
      stepMode = false;
      if (window.TracePuzzle && window.TracePuzzle.abortGate) {
        window.TracePuzzle.abortGate();
      }
      if (stepResolve) {
        stepResolve();
        stepResolve = null;
      }
      const start = () => {
        if (running) {
          setTimeout(start, 40);
          return;
        }
        abort = false;
        stepMode = false;
        runProgram();
      };
      setTimeout(start, 40);
      return;
    }
    stepMode = false;
    runProgram();
  }

  function reset() {
    if (window.TracePuzzle && window.TracePuzzle.abortGate) {
      window.TracePuzzle.abortGate();
    }
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
    clearCallStack();
    Object.keys(vars).forEach((k) => (vars[k] = null));
    vars.temp = undefined;
    if (window.TreeViz) {
      window.TreeViz.clearOutcome();
      window.TreeViz.clearHeightAnim();
      window.TreeViz.clearBfAnim();
      window.TreeViz.clearRoleArrows();
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
    reset,
    rerun,
    refreshTrace,
    setSpeed,
    isBusy,
    clearTrace,
    setButtons,
  };
})();
