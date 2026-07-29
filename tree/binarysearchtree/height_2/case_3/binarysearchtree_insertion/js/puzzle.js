/**
 * Trace-fill puzzle for BST insertion.
 * Students drag Line (stepId) chips into blank rows.
 * Pieces are a multiset taken only from blank Line cells.
 * Execution gates on each blank row until that row is fully correct.
 *
 * INSTANCE is embedded by generate_bst_insertion_puzzles.js.
 */

window.TracePuzzle = (function () {
  const INSTANCE = {
  "sequence": [
    300,
    200,
    100,
    400
  ],
  "height": 2,
  "balanced": true,
  "varFields": [
    "key",
    "current",
    "parent",
    "side",
    "root"
  ],
  "blankFields": [
    "stepId"
  ],
  "tableFields": [
    "key",
    "current",
    "parent",
    "side",
    "root"
  ],
  "executorGlobal": "BstInsertExecutor",
  "pickedSteps": [
    17,
    21,
    22,
    24,
    26,
    27,
    28,
    34,
    37,
    38,
    41,
    44,
    45
  ],
  "answers": {
    "17": {
      "stepId": "attachCheck"
    },
    "21": {
      "stepId": "callInsert"
    },
    "22": {
      "stepId": "createNode"
    },
    "24": {
      "stepId": "setCurrent"
    },
    "26": {
      "stepId": "whileLoop"
    },
    "27": {
      "stepId": "parentAssign"
    },
    "28": {
      "stepId": "checkLess"
    },
    "34": {
      "stepId": "whileLoop"
    },
    "37": {
      "stepId": "returnRoot"
    },
    "38": {
      "stepId": "mainLoop"
    },
    "41": {
      "stepId": "checkEmpty"
    },
    "44": {
      "stepId": "whileLoop"
    },
    "45": {
      "stepId": "parentAssign"
    }
  },
  "pieces": {
    "stepId": [
      {
        "id": 3,
        "value": "createNode"
      },
      {
        "id": 1,
        "value": "attachCheck"
      },
      {
        "id": 11,
        "value": "checkEmpty"
      },
      {
        "id": 9,
        "value": "returnRoot"
      },
      {
        "id": 4,
        "value": "setCurrent"
      },
      {
        "id": 10,
        "value": "mainLoop"
      },
      {
        "id": 2,
        "value": "callInsert"
      },
      {
        "id": 7,
        "value": "checkLess"
      },
      {
        "id": 8,
        "value": "whileLoop"
      },
      {
        "id": 12,
        "value": "whileLoop"
      },
      {
        "id": 13,
        "value": "parentAssign"
      },
      {
        "id": 6,
        "value": "parentAssign"
      },
      {
        "id": 5,
        "value": "whileLoop"
      }
    ]
  },
  "rows": [
    {
      "step": 1,
      "stepId": "mainLoop",
      "key": 300,
      "current": null,
      "parent": null,
      "side": null,
      "root": null
    },
    {
      "step": 2,
      "stepId": "callInsert",
      "key": 300,
      "current": null,
      "parent": null,
      "side": null,
      "root": null
    },
    {
      "step": 3,
      "stepId": "createNode",
      "key": 300,
      "current": null,
      "parent": null,
      "side": null,
      "root": null
    },
    {
      "step": 4,
      "stepId": "checkEmpty",
      "key": 300,
      "current": null,
      "parent": null,
      "side": null,
      "root": null
    },
    {
      "step": 5,
      "stepId": "returnNew",
      "key": 300,
      "current": 300,
      "parent": null,
      "side": null,
      "root": 300
    },
    {
      "step": 6,
      "stepId": "mainLoop",
      "key": 200,
      "current": null,
      "parent": null,
      "side": null,
      "root": 300
    },
    {
      "step": 7,
      "stepId": "callInsert",
      "key": 200,
      "current": null,
      "parent": null,
      "side": null,
      "root": 300
    },
    {
      "step": 8,
      "stepId": "createNode",
      "key": 200,
      "current": null,
      "parent": null,
      "side": null,
      "root": 300
    },
    {
      "step": 9,
      "stepId": "checkEmpty",
      "key": 200,
      "current": null,
      "parent": null,
      "side": null,
      "root": 300
    },
    {
      "step": 10,
      "stepId": "setCurrent",
      "key": 200,
      "current": 300,
      "parent": null,
      "side": null,
      "root": 300
    },
    {
      "step": 11,
      "stepId": "setParent",
      "key": 200,
      "current": 300,
      "parent": null,
      "side": null,
      "root": 300
    },
    {
      "step": 12,
      "stepId": "whileLoop",
      "key": 200,
      "current": 300,
      "parent": null,
      "side": null,
      "root": 300
    },
    {
      "step": 13,
      "stepId": "parentAssign",
      "key": 200,
      "current": 300,
      "parent": 300,
      "side": null,
      "root": 300
    },
    {
      "step": 14,
      "stepId": "checkLess",
      "key": 200,
      "current": 300,
      "parent": 300,
      "side": "left",
      "root": 300
    },
    {
      "step": 15,
      "stepId": "goLeft",
      "key": 200,
      "current": null,
      "parent": 300,
      "side": "left",
      "root": 300
    },
    {
      "step": 16,
      "stepId": "whileLoop",
      "key": 200,
      "current": null,
      "parent": 300,
      "side": "left",
      "root": 300
    },
    {
      "step": 17,
      "stepId": "attachCheck",
      "key": 200,
      "current": null,
      "parent": 300,
      "side": "left",
      "root": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 18,
      "stepId": "attachLeft",
      "key": 200,
      "current": null,
      "parent": 300,
      "side": "left",
      "root": 300
    },
    {
      "step": 19,
      "stepId": "returnRoot",
      "key": 200,
      "current": null,
      "parent": 300,
      "side": "left",
      "root": 300
    },
    {
      "step": 20,
      "stepId": "mainLoop",
      "key": 100,
      "current": null,
      "parent": null,
      "side": null,
      "root": 300
    },
    {
      "step": 21,
      "stepId": "callInsert",
      "key": 100,
      "current": null,
      "parent": null,
      "side": null,
      "root": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 22,
      "stepId": "createNode",
      "key": 100,
      "current": null,
      "parent": null,
      "side": null,
      "root": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 23,
      "stepId": "checkEmpty",
      "key": 100,
      "current": null,
      "parent": null,
      "side": null,
      "root": 300
    },
    {
      "step": 24,
      "stepId": "setCurrent",
      "key": 100,
      "current": 300,
      "parent": null,
      "side": null,
      "root": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 25,
      "stepId": "setParent",
      "key": 100,
      "current": 300,
      "parent": null,
      "side": null,
      "root": 300
    },
    {
      "step": 26,
      "stepId": "whileLoop",
      "key": 100,
      "current": 300,
      "parent": null,
      "side": null,
      "root": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 27,
      "stepId": "parentAssign",
      "key": 100,
      "current": 300,
      "parent": 300,
      "side": null,
      "root": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 28,
      "stepId": "checkLess",
      "key": 100,
      "current": 300,
      "parent": 300,
      "side": "left",
      "root": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 29,
      "stepId": "goLeft",
      "key": 100,
      "current": 200,
      "parent": 300,
      "side": "left",
      "root": 300
    },
    {
      "step": 30,
      "stepId": "whileLoop",
      "key": 100,
      "current": 200,
      "parent": 300,
      "side": "left",
      "root": 300
    },
    {
      "step": 31,
      "stepId": "parentAssign",
      "key": 100,
      "current": 200,
      "parent": 200,
      "side": "left",
      "root": 300
    },
    {
      "step": 32,
      "stepId": "checkLess",
      "key": 100,
      "current": 200,
      "parent": 200,
      "side": "left",
      "root": 300
    },
    {
      "step": 33,
      "stepId": "goLeft",
      "key": 100,
      "current": null,
      "parent": 200,
      "side": "left",
      "root": 300
    },
    {
      "step": 34,
      "stepId": "whileLoop",
      "key": 100,
      "current": null,
      "parent": 200,
      "side": "left",
      "root": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 35,
      "stepId": "attachCheck",
      "key": 100,
      "current": null,
      "parent": 200,
      "side": "left",
      "root": 300
    },
    {
      "step": 36,
      "stepId": "attachLeft",
      "key": 100,
      "current": null,
      "parent": 200,
      "side": "left",
      "root": 300
    },
    {
      "step": 37,
      "stepId": "returnRoot",
      "key": 100,
      "current": null,
      "parent": 200,
      "side": "left",
      "root": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 38,
      "stepId": "mainLoop",
      "key": 400,
      "current": null,
      "parent": null,
      "side": null,
      "root": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 39,
      "stepId": "callInsert",
      "key": 400,
      "current": null,
      "parent": null,
      "side": null,
      "root": 300
    },
    {
      "step": 40,
      "stepId": "createNode",
      "key": 400,
      "current": null,
      "parent": null,
      "side": null,
      "root": 300
    },
    {
      "step": 41,
      "stepId": "checkEmpty",
      "key": 400,
      "current": null,
      "parent": null,
      "side": null,
      "root": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 42,
      "stepId": "setCurrent",
      "key": 400,
      "current": 300,
      "parent": null,
      "side": null,
      "root": 300
    },
    {
      "step": 43,
      "stepId": "setParent",
      "key": 400,
      "current": 300,
      "parent": null,
      "side": null,
      "root": 300
    },
    {
      "step": 44,
      "stepId": "whileLoop",
      "key": 400,
      "current": 300,
      "parent": null,
      "side": null,
      "root": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 45,
      "stepId": "parentAssign",
      "key": 400,
      "current": 300,
      "parent": 300,
      "side": null,
      "root": 300,
      "missing": {
        "stepId": true
      }
    },
    {
      "step": 46,
      "stepId": "checkLess",
      "key": 400,
      "current": 300,
      "parent": 300,
      "side": "right",
      "root": 300
    },
    {
      "step": 47,
      "stepId": "goRight",
      "key": 400,
      "current": null,
      "parent": 300,
      "side": "right",
      "root": 300
    },
    {
      "step": 48,
      "stepId": "whileLoop",
      "key": 400,
      "current": null,
      "parent": 300,
      "side": "right",
      "root": 300
    },
    {
      "step": 49,
      "stepId": "attachCheck",
      "key": 400,
      "current": null,
      "parent": 300,
      "side": "right",
      "root": 300
    },
    {
      "step": 50,
      "stepId": "attachRight",
      "key": 400,
      "current": null,
      "parent": 300,
      "side": "right",
      "root": 300
    },
    {
      "step": 51,
      "stepId": "returnRoot",
      "key": 400,
      "current": null,
      "parent": 300,
      "side": "right",
      "root": 300
    }
  ]
};

  let filled = {};
  let availablePieces = {};
  let activeSection = "stepId";
  let gateResolve = null;
  let gateReject = null;
  let pendingGateStep = null;
  let panelOpen = false;
  let dragPayload = null;
  let validatedSteps = new Set();
  let taskComplete = false;
  let nextPieceId = 1;
  function puzzleStorageKey() {
    try {
      let path = window.location.pathname.replace(/\\/g, "/");
      const coursePath = path.match(/(?:^|\/)(search|sort|tree)\/.+$/i);
      if (coursePath) path = coursePath[0].replace(/^\//, "");
      return "tracelab-puzzle-state:" + path;
    } catch (_) {
      return null;
    }
  }

  function savePuzzleState() {
    try {
      const key = puzzleStorageKey();
      if (!key) return;
      localStorage.setItem(key, JSON.stringify({ filled: filled, taskComplete: taskComplete }));
    } catch (_) { /* ignore */ }
  }

  function restorePuzzleState() {
    try {
      const key = puzzleStorageKey();
      if (!key) return false;
      const raw = localStorage.getItem(key);
      if (!raw) return false;
      const saved = JSON.parse(raw);
      if (!saved || typeof saved.filled !== "object") return false;
      filled = saved.filled;
      taskComplete = !!saved.taskComplete;
      // Rebuild availablePieces: start from full set and remove placed pieces
      resetAvailablePieces();
      Object.keys(filled).forEach(function(step) {
        const rowFill = filled[step];
        Object.keys(rowFill).forEach(function(field) {
          const val = rowFill[field];
          if (val != null && val !== "") takePiece(field, val);
        });
      });
      return true;
    } catch (_) { return false; }
  }


  function t(key) {
    return window.I18n ? window.I18n.t(key) : key;
  }

  function stepLabel(stepId) {
    return window.I18n ? window.I18n.stepLabel(stepId) : stepId;
  }

  function varFields() {
    return INSTANCE.varFields || ["key", "current", "parent", "side", "root"];
  }

  function blankFieldList() {
    if (INSTANCE.blankFields && INSTANCE.blankFields.length) {
      return INSTANCE.blankFields.slice();
    }
    return ["stepId"].concat(varFields());
  }

  function tableFields() {
    if (INSTANCE.tableFields && INSTANCE.tableFields.length) {
      return INSTANCE.tableFields.slice();
    }
    return varFields();
  }

  function sectionLabel(field) {
    if (field === "stepId") return t("puzzleSectionStepId");
    const key =
      "puzzleSection" + field.charAt(0).toUpperCase() + field.slice(1);
    const labeled = t(key);
    if (labeled && labeled !== key) return labeled;
    const colKey = "col" + field.charAt(0).toUpperCase() + field.slice(1);
    const col = t(colKey);
    if (col && col !== colKey) return col;
    return field;
  }

  function displayFieldValue(field, value) {
    if (value == null || value === "") return "—";
    if (field === "stepId") return stepLabel(value);
    if (field === "side") {
      if (value === "left") return t("labelLeft") || "left";
      if (value === "right") return t("labelRight") || "right";
      if (value === "—" || value === "null") return "—";
      return String(value);
    }
    if (
      (field === "current" || field === "parent" || field === "root") &&
      (value === "null" || value === null)
    ) {
      return t("labelNull") || "null";
    }
    return String(value);
  }

  function displayRowValue(field, raw) {
    if (field === "side") {
      if (raw == null || raw === "") return "—";
      return displayFieldValue(field, raw);
    }
    if (raw == null || raw === "") {
      return displayFieldValue(field, "null");
    }
    return displayFieldValue(field, raw);
  }

  function executorApi() {
    const name = INSTANCE.executorGlobal || "BstInsertExecutor";
    return name && window[name] ? window[name] : null;
  }

  function blankRows() {
    return INSTANCE.rows.filter((row) => row.missing);
  }

  function totalBlankRows() {
    return blankRows().length;
  }

  function missingFields(row) {
    return row && row.missing ? Object.keys(row.missing) : [];
  }

  function clonePieces(src) {
    const out = {};
    Object.keys(src || {}).forEach((field) => {
      out[field] = (src[field] || []).map((piece) => ({
        id: piece.id != null ? piece.id : nextPieceId++,
        value: String(piece.value),
      }));
    });
    return out;
  }

  function resetAvailablePieces() {
    nextPieceId = 1;
    availablePieces = clonePieces(INSTANCE.pieces);
  }

  function takePiece(field, value, preferredId) {
    const list = availablePieces[field] || [];
    let idx = -1;
    if (preferredId != null) {
      idx = list.findIndex(
        (p) => p.id === preferredId && String(p.value) === String(value)
      );
    }
    if (idx < 0) {
      idx = list.findIndex((p) => String(p.value) === String(value));
    }
    if (idx < 0) return null;
    const [piece] = list.splice(idx, 1);
    return piece;
  }

  function returnPiece(field, value) {
    if (value == null || value === "") return;
    if (!availablePieces[field]) availablePieces[field] = [];
    availablePieces[field].push({
      id: nextPieceId++,
      value: String(value),
    });
  }

  function getFill(stepNumber, field) {
    const rowFill = filled[stepNumber];
    if (!rowFill) return null;
    return rowFill[field] != null ? rowFill[field] : null;
  }

  function expectedAnswer(stepNumber, field) {
    const ans =
      INSTANCE.answers[String(stepNumber)] || INSTANCE.answers[stepNumber];
    if (!ans) return null;
    return ans[field] != null ? String(ans[field]) : null;
  }

  function isBlankRowCorrect(stepNumber) {
    const row = INSTANCE.rows.find((r) => r.step === stepNumber);
    if (!row || !row.missing) return false;
    for (const field of missingFields(row)) {
      const got = getFill(stepNumber, field);
      const want = expectedAnswer(stepNumber, field);
      if (got == null || String(got) !== String(want)) return false;
    }
    return true;
  }

  function isSolved() {
    return blankRows().every((row) => isBlankRowCorrect(row.step));
  }

  function isRowSolved(stepNumber) {
    return isBlankRowCorrect(stepNumber);
  }

  function isTaskComplete() {
    return taskComplete;
  }

  function updateStats() {
    const countEl = document.getElementById("puzzle-correct-count");
    const totalEl = document.getElementById("puzzle-total-blanks");
    if (countEl) countEl.textContent = String(validatedSteps.size);
    if (totalEl) totalEl.textContent = String(totalBlankRows());
  }

  function setControlsLocked(locked) {
    const controls = document.querySelector(".controls");
    if (controls) {
      controls.classList.toggle("is-locked", locked);
      controls.setAttribute("aria-disabled", locked ? "true" : "false");
    }
    ["btn-pause", "speed"].forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      if (locked) {
        el.disabled = true;
        el.setAttribute("data-puzzle-locked", "true");
      } else if (el.getAttribute("data-puzzle-locked") === "true") {
        el.removeAttribute("data-puzzle-locked");
        if (id === "speed") el.disabled = false;
      }
    });
  }

  function setCompleteBadge(visible) {
    const badge = document.getElementById("puzzle-complete-badge");
    if (!badge) return;
    badge.hidden = !visible;
    if (visible) badge.textContent = t("puzzleComplete");
  }

  function setTaskComplete(complete) {
    taskComplete = !!complete;
    setCompleteBadge(taskComplete);
    setControlsLocked(taskComplete);
    const tracePanel = document.querySelector(".trace-panel");
    if (tracePanel) {
      tracePanel.classList.toggle("is-puzzle-complete", taskComplete);
    }
    if (taskComplete) {
      savePuzzleState();
      closePanel();
      setStatus(t("puzzleComplete"), "ok");
      let completionPath = window.location.pathname.replace(/\\/g, "/");
      const coursePath = completionPath.match(/(?:^|\/)(search|sort|tree)\/.+$/i);
      if (coursePath) completionPath = coursePath[0].replace(/^\//, "");
      const completionMessage = {
        type: "tracelab:puzzle-complete",
        path: completionPath,
      };
      try {
        window.parent.postMessage(completionMessage, "*");
      } catch (_) {
        /* The puzzle also works as a standalone page. */
      }
      try {
        if (window.opener && !window.opener.closed) {
          window.opener.postMessage(completionMessage, "*");
        }
      } catch (_) {
        /* Ignore a blocked opener. */
      }
      try {
        const storageKey = "tracelab-standalone-completions-v1";
        const stored = JSON.parse(localStorage.getItem(storageKey) || "[]");
        if (stored.indexOf(completionPath) === -1) stored.push(completionPath);
        localStorage.setItem(storageKey, JSON.stringify(stored));
      } catch (_) {
        /* Progress still reaches an embedding dashboard via postMessage. */
      }
    }
  }

  function releaseGateIfReady() {
    if (!gateResolve || pendingGateStep == null) return;
    if (!isRowSolved(pendingGateStep)) return;
    const resolve = gateResolve;
    gateResolve = null;
    gateReject = null;
    clearAwaitingFillMarks();
    pendingGateStep = null;
    resolve();
  }

  function clearAwaitingFillMarks() {
    const body = document.getElementById("trace-body");
    if (!body) return;
    body.querySelectorAll("tr.is-awaiting-fill").forEach((r) => {
      r.classList.remove("is-awaiting-fill");
    });
  }

  function revealGateRow(stepNumber) {
    if (stepNumber == null) return;
    const body = document.getElementById("trace-body");
    if (!body) return;
    clearAwaitingFillMarks();
    const tr = body.querySelector(`tr[data-puzzle-step="${stepNumber}"]`);
    if (!tr) return;
    tr.classList.add("is-awaiting-fill");
    tr.scrollIntoView({ block: "center", behavior: "smooth", inline: "nearest" });
  }

  function awaitGate() {
    if (pendingGateStep != null && isRowSolved(pendingGateStep)) {
      clearAwaitingFillMarks();
      pendingGateStep = null;
      return Promise.resolve();
    }
    const stepToReveal = pendingGateStep;
    openPanel();
    setStatus(t("puzzleBlocked"), "warn");
    revealGateRow(stepToReveal);
    requestAnimationFrame(() => {
      revealGateRow(stepToReveal);
      setTimeout(() => revealGateRow(stepToReveal), 120);
    });
    return new Promise((resolve, reject) => {
      gateResolve = () => {
        gateResolve = null;
        gateReject = null;
        clearAwaitingFillMarks();
        pendingGateStep = null;
        resolve();
      };
      gateReject = () => {
        gateResolve = null;
        gateReject = null;
        clearAwaitingFillMarks();
        pendingGateStep = null;
        reject(new Error("aborted"));
      };
    });
  }

  function abortGate() {
    if (gateReject) {
      gateReject();
      return;
    }
    if (gateResolve) {
      const r = gateResolve;
      gateResolve = null;
      pendingGateStep = null;
      r();
    }
  }

  function setStatus(message, kind) {
    const el = document.getElementById("puzzle-status");
    if (!el) return;
    el.textContent = message || "";
    el.classList.remove("is-ok", "is-warn", "is-err");
    if (kind) el.classList.add("is-" + kind);
  }

  function syncValidationForStep(stepNumber) {
    if (isBlankRowCorrect(stepNumber)) return;
    if (!validatedSteps.has(stepNumber)) return;
    validatedSteps.delete(stepNumber);
    const tr = document.querySelector(
      `#trace-body tr[data-puzzle-step="${stepNumber}"]`
    );
    if (tr) {
      tr.classList.remove("is-validated", "is-validating");
    }
    updateStats();
  }

  function updateDropCell(stepNumber, field) {
    const cell = document.querySelector(
      `#trace-body tr[data-puzzle-step="${stepNumber}"] td[data-drop-field="${field}"]`
    );
    if (!cell) return;

    const value = getFill(stepNumber, field);
    cell.classList.remove("is-filled", "is-correct", "is-wrong", "drag-over");
    cell.innerHTML = "";

    if (value == null || value === "") {
      const slot = document.createElement("span");
      slot.className = "drop-slot";
      slot.textContent = t("puzzleDropHere");
      cell.appendChild(slot);
      return;
    }

    cell.classList.add("is-filled");
    const chip = document.createElement("span");
    chip.className = "drop-chip";
    chip.draggable = !taskComplete;
    chip.textContent = displayFieldValue(field, value);
    chip.title = t("puzzleDragBackHint");
    chip.addEventListener("dragstart", (e) => {
      if (taskComplete) {
        e.preventDefault();
        return;
      }
      dragPayload = {
        source: "trace",
        field,
        value: String(value),
        stepNumber,
      };
      chip.classList.add("is-dragging");
      e.dataTransfer.setData(
        "application/x-trace-puzzle",
        JSON.stringify(dragPayload)
      );
      e.dataTransfer.effectAllowed = "move";
    });
    chip.addEventListener("dragend", () => {
      chip.classList.remove("is-dragging");
      dragPayload = null;
      clearDragOverMarks();
    });
    cell.appendChild(chip);

    const correct = String(value) === String(expectedAnswer(stepNumber, field));
    cell.classList.add(correct ? "is-correct" : "is-wrong");
  }

  function clearDragOverMarks() {
    document
      .querySelectorAll(".drop-target.drag-over, .puzzle-panel.drag-over-return")
      .forEach((el) => el.classList.remove("drag-over", "drag-over-return"));
  }

  function refreshFilledCells() {
    blankRows().forEach((row) => {
      missingFields(row).forEach((field) => updateDropCell(row.step, field));
    });

    const banner = document.getElementById("puzzle-banner");
    if (banner) {
      banner.hidden = isSolved();
    }

    const anyFilled = Object.keys(filled).some((step) => {
      const rowFill = filled[step];
      return (
        rowFill &&
        Object.keys(rowFill).some((k) => rowFill[k] != null && rowFill[k] !== "")
      );
    });

    if (isSolved()) {
      setStatus(t("puzzleSolved"), "ok");
    } else if (pendingGateStep != null && !isRowSolved(pendingGateStep)) {
      setStatus(t("puzzleBlocked"), "warn");
    } else if (anyFilled) {
      setStatus(t("puzzlePartial"), "warn");
    } else {
      setStatus("", null);
    }

    releaseGateIfReady();
  }

  function renderTraceTable() {
    const body = document.getElementById("trace-body");
    const empty = document.getElementById("trace-empty");
    if (!body) return;

    if (empty) empty.classList.add("hidden");
    body.innerHTML = "";

    const fields = tableFields();

    INSTANCE.rows.forEach((row) => {
      const tr = document.createElement("tr");
      tr.dataset.stepId = row.stepId;
      tr.dataset.puzzleStep = String(row.step);
      if (row.missing) tr.classList.add("puzzle-missing");

      const cells = [
        { text: String(row.step), field: null },
        {
          text:
            row.missing && row.missing.stepId ? null : stepLabel(row.stepId),
          field: row.missing && row.missing.stepId ? "stepId" : null,
          stepId: row.stepId,
        },
      ];

      fields.forEach((field) => {
        const blank = !!(row.missing && row.missing[field]);
        cells.push({
          text: blank ? null : displayRowValue(field, row[field]),
          field: blank ? field : null,
        });
      });

      cells.forEach((spec) => {
        const td = document.createElement("td");
        if (spec.field) {
          td.dataset.dropField = spec.field;
          td.className = "drop-target";
          td.setAttribute("aria-label", t("puzzleDropHere"));
          bindDropTarget(td, row.step, spec.field);
        } else {
          td.textContent = spec.text;
        }
        tr.appendChild(td);
      });

      body.appendChild(tr);
    });

    refreshFilledCells();
  }

  function markActiveStep(stepNumber) {
    const body = document.getElementById("trace-body");
    if (!body) return;
    body.querySelectorAll("tr.latest").forEach((r) => r.classList.remove("latest"));
    const tr = body.querySelector(`tr[data-puzzle-step="${stepNumber}"]`);
    if (!tr) return;
    tr.classList.add("latest", "is-reached");

    const row = INSTANCE.rows.find((r) => r.step === stepNumber);
    if (row && row.missing && isBlankRowCorrect(stepNumber)) {
      if (!validatedSteps.has(stepNumber)) {
        validatedSteps.add(stepNumber);
        updateStats();
      }
      tr.classList.remove("is-wrong-row");
      tr.classList.add("is-validated");
      tr.classList.remove("is-validating");
      void tr.offsetWidth;
      tr.classList.add("is-validating");
    }

    tr.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  function clearValidationMarks() {
    validatedSteps = new Set();
    const body = document.getElementById("trace-body");
    if (body) {
      body
        .querySelectorAll("tr.is-validated, tr.is-validating, tr.is-wrong-row")
        .forEach((r) => {
          r.classList.remove("is-validated", "is-validating", "is-wrong-row");
        });
    }
    updateStats();
  }

  function onRunFinished(success) {
    if (taskComplete) return;
    if (!success) return;
    if (validatedSteps.size < totalBlankRows()) return;
    if (!isSolved()) return;
    setTaskComplete(true);
    const exec = executorApi();
    if (exec && exec.setButtons) exec.setButtons();
  }

  function availableSections() {
    const sections = [];
    blankFieldList().forEach((field) => {
      if (INSTANCE.pieces[field] && INSTANCE.pieces[field].length) {
        sections.push(field);
      }
    });
    return sections;
  }

  function refreshLanguage() {
    renderChips();
    refreshSectionTabs();
    refreshFilledCells();

    const body = document.getElementById("trace-body");
    if (!body || !window.I18n) return;
    body.querySelectorAll("tr[data-step-id]").forEach((tr) => {
      const stepId = tr.dataset.stepId;
      const cells = tr.children;
      if (!cells || cells.length < 2) return;
      const lineTd = cells[1];
      if (lineTd.dataset.dropField === "stepId") {
        updateDropCell(Number(tr.dataset.puzzleStep), "stepId");
      } else {
        lineTd.textContent = window.I18n.stepLabel(stepId);
      }

      const row = INSTANCE.rows.find(
        (r) => String(r.step) === String(tr.dataset.puzzleStep)
      );
      if (!row) return;
      const fields = tableFields();
      fields.forEach((field, idx) => {
        const td = cells[2 + idx];
        if (!td) return;
        if (td.dataset.dropField) {
          updateDropCell(Number(tr.dataset.puzzleStep), td.dataset.dropField);
        } else {
          td.textContent = displayRowValue(field, row[field]);
        }
      });
    });

    const title = document.getElementById("puzzle-panel-title");
    if (title) title.textContent = t("puzzlePanelTitle");
    const hint = document.getElementById("puzzle-panel-hint");
    if (hint) hint.textContent = t("puzzlePanelHint");
    const openBtn = document.getElementById("btn-puzzle-palette");
    if (openBtn) openBtn.textContent = t("puzzleOpenPalette");
    const resetBtn = document.getElementById("btn-puzzle-reset-pieces");
    if (resetBtn) resetBtn.textContent = t("puzzleResetPieces");
    const badge = document.getElementById("puzzle-complete-badge");
    if (badge && !badge.hidden) badge.textContent = t("puzzleComplete");
    const banner = document.getElementById("puzzle-banner");
    if (banner && !banner.hidden) {
      banner.textContent = t("puzzleBanner");
    }
    updateStats();
  }

  function refreshSectionTabs() {
    const sections = availableSections();
    if (!sections.includes(activeSection)) {
      activeSection = sections[0] || "stepId";
    }
    document.querySelectorAll(".puzzle-section-btn").forEach((btn) => {
      const section = btn.dataset.section;
      const available = sections.includes(section);
      btn.hidden = !available;
      if (!available) return;
      const active = section === activeSection;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
      btn.textContent = sectionLabel(section);
    });
  }

  function shuffleInPlace(list) {
    for (let i = list.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = list[i];
      list[i] = list[j];
      list[j] = tmp;
    }
    return list;
  }

  function renderChips() {
    const host = document.getElementById("puzzle-chips");
    if (!host) return;
    host.innerHTML = "";

    const field = activeSection;
    const pieces = availablePieces[field] || [];
    shuffleInPlace(pieces);
    pieces.forEach((piece) => {
      const label = displayFieldValue(field, piece.value);
      host.appendChild(makeChip(field, piece.value, label, piece.id));
    });
  }

  function makeChip(field, value, label, pieceId) {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "puzzle-chip";
    chip.draggable = true;
    chip.dataset.field = field;
    chip.dataset.value = value;
    if (pieceId != null) chip.dataset.pieceId = String(pieceId);
    chip.textContent = label;
    chip.title = t("puzzleDragHint");

    chip.addEventListener("dragstart", (e) => {
      dragPayload = { source: "panel", field, value, pieceId };
      chip.classList.add("is-dragging");
      e.dataTransfer.setData(
        "application/x-trace-puzzle",
        JSON.stringify(dragPayload)
      );
      e.dataTransfer.effectAllowed = "move";
    });
    chip.addEventListener("dragend", () => {
      chip.classList.remove("is-dragging");
      dragPayload = null;
      clearDragOverMarks();
    });

    return chip;
  }

  function readDragPayload(e) {
    let payload = dragPayload;
    try {
      const raw = e.dataTransfer.getData("application/x-trace-puzzle");
      if (raw) payload = JSON.parse(raw);
    } catch (_) {
      /* keep dragPayload */
    }
    return payload;
  }

  function bindDropTarget(td, stepNumber, field) {
    td.addEventListener("dragover", (e) => {
      if (!dragPayload || dragPayload.field !== field) return;
      if (
        dragPayload.source === "trace" &&
        dragPayload.stepNumber === stepNumber
      ) {
        return;
      }
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      td.classList.add("drag-over");
    });
    td.addEventListener("dragleave", () => {
      td.classList.remove("drag-over");
    });
    td.addEventListener("drop", (e) => {
      e.preventDefault();
      td.classList.remove("drag-over");
      const payload = readDragPayload(e);
      if (!payload || payload.field !== field) {
        setStatus(t("puzzleWrongColumn"), "err");
        return;
      }
      if (payload.source === "trace") {
        moveFill(payload.stepNumber, stepNumber, field);
        return;
      }
      applyFill(stepNumber, field, payload.value, payload.pieceId);
    });
  }

  function bindPanelReturnZone() {
    const panel = document.getElementById("puzzle-panel");
    if (!panel) return;

    panel.addEventListener("dragover", (e) => {
      if (!dragPayload || dragPayload.source !== "trace") return;
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      panel.classList.add("drag-over-return");
    });
    panel.addEventListener("dragleave", (e) => {
      if (panel.contains(e.relatedTarget)) return;
      panel.classList.remove("drag-over-return");
    });
    panel.addEventListener("drop", (e) => {
      panel.classList.remove("drag-over-return");
      const payload = readDragPayload(e);
      if (!payload || payload.source !== "trace") return;
      e.preventDefault();
      e.stopPropagation();
      if (payload.field && availableSections().includes(payload.field)) {
        activeSection = payload.field;
        refreshSectionTabs();
      }
      clearFill(payload.stepNumber, payload.field);
    });
  }

  function applyFill(stepNumber, field, value, pieceId) {
    if (taskComplete) return;

    const taken = takePiece(field, value, pieceId);
    if (!taken) {
      setStatus(t("puzzleWrongColumn"), "err");
      renderChips();
      return;
    }

    if (!filled[stepNumber]) filled[stepNumber] = {};
    const previous = filled[stepNumber][field];
    if (previous != null && previous !== "") {
      returnPiece(field, previous);
    }
    filled[stepNumber][field] = String(taken.value);

    syncValidationForStep(stepNumber);
    savePuzzleState();
    renderChips();
    refreshFilledCells();
  }

  function moveFill(fromStep, toStep, field) {
    if (taskComplete) return;
    if (fromStep == null || toStep == null || fromStep === toStep) return;

    const value = getFill(fromStep, field);
    if (value == null || value === "") return;

    if (!filled[toStep]) filled[toStep] = {};
    const previous = filled[toStep][field];
    if (previous != null && previous !== "") {
      returnPiece(field, previous);
    }

    delete filled[fromStep][field];
    if (Object.keys(filled[fromStep]).length === 0) {
      delete filled[fromStep];
    }
    filled[toStep][field] = String(value);

    syncValidationForStep(fromStep);
    syncValidationForStep(toStep);
    savePuzzleState();
    renderChips();
    refreshFilledCells();
  }

  function clearFill(stepNumber, field) {
    if (taskComplete) return;
    if (!filled[stepNumber]) return;
    const previous = filled[stepNumber][field];
    if (previous == null || previous === "") return;

    returnPiece(field, previous);
    delete filled[stepNumber][field];
    if (Object.keys(filled[stepNumber]).length === 0) {
      delete filled[stepNumber];
    }

    syncValidationForStep(stepNumber);
    savePuzzleState();
    renderChips();
    refreshFilledCells();
  }

  function clearFills() {
    if (taskComplete) return;
    filled = {};
    resetAvailablePieces();
    clearValidationMarks();
    renderChips();
    refreshFilledCells();
    setStatus("", null);
    savePuzzleState();
  }

  function openPanel() {
    const panel = document.getElementById("puzzle-panel");
    if (!panel) return;
    panel.hidden = false;
    panelOpen = true;
    const btn = document.getElementById("btn-puzzle-palette");
    if (btn) btn.setAttribute("aria-expanded", "true");
  }

  function closePanel() {
    const panel = document.getElementById("puzzle-panel");
    if (!panel) return;
    panel.hidden = true;
    panelOpen = false;
    const btn = document.getElementById("btn-puzzle-palette");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }

  function togglePanel() {
    if (panelOpen) closePanel();
    else openPanel();
  }

  function bindPanelDrag() {
    const panel = document.getElementById("puzzle-panel");
    const handle = document.getElementById("puzzle-panel-handle");
    if (!panel || !handle) return;

    let dragging = false;
    let ox = 0;
    let oy = 0;

    handle.addEventListener("pointerdown", (e) => {
      if (e.button !== 0) return;
      dragging = true;
      const rect = panel.getBoundingClientRect();
      ox = e.clientX - rect.left;
      oy = e.clientY - rect.top;
      handle.setPointerCapture(e.pointerId);
      panel.classList.add("is-dragging-panel");
      e.preventDefault();
    });

    handle.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const x = Math.min(window.innerWidth - 80, Math.max(8, e.clientX - ox));
      const y = Math.min(window.innerHeight - 80, Math.max(8, e.clientY - oy));
      panel.style.left = x + "px";
      panel.style.top = y + "px";
      panel.style.right = "auto";
      panel.style.bottom = "auto";
    });

    function endDrag(e) {
      if (!dragging) return;
      dragging = false;
      panel.classList.remove("is-dragging-panel");
      try {
        handle.releasePointerCapture(e.pointerId);
      } catch (_) {
        /* ignore */
      }
    }

    handle.addEventListener("pointerup", endDrag);
    handle.addEventListener("pointercancel", endDrag);
  }

  function bindUi() {
    const openBtn = document.getElementById("btn-puzzle-palette");
    if (openBtn) {
      openBtn.addEventListener("click", () => togglePanel());
    }
    const closeBtn = document.getElementById("btn-puzzle-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => closePanel());
    }
    const resetBtn = document.getElementById("btn-puzzle-reset-pieces");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => clearFills());
    }
    document.querySelectorAll(".puzzle-section-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeSection = btn.dataset.section || "stepId";
        refreshSectionTabs();
        renderChips();
      });
    });
    bindPanelDrag();
    bindPanelReturnZone();
  }

  function prepareRun(options) {
    if (taskComplete && !(options && options.force)) return;
    clearAwaitingFillMarks();
    const body = document.getElementById("trace-body");
    if (body) {
      body
        .querySelectorAll(
          "tr.latest, tr.is-reached, tr.is-validated, tr.is-validating, tr.is-awaiting-fill"
        )
        .forEach((r) => {
          r.classList.remove(
            "latest",
            "is-reached",
            "is-validated",
            "is-validating",
            "is-awaiting-fill",
            "is-wrong-row"
          );
        });
    }
    validatedSteps = new Set();
    updateStats();
    renderTraceTable();
    const banner = document.getElementById("puzzle-banner");
    if (banner) {
      banner.hidden = isSolved();
      if (!banner.hidden) banner.textContent = t("puzzleBanner");
    }
  }

  function reset() {
    setTaskComplete(false);
    pendingGateStep = null;
    clearAwaitingFillMarks();
    clearFills();
    clearValidationMarks();
    renderTraceTable();
    updateStats();
    const banner = document.getElementById("puzzle-banner");
    if (banner) {
      banner.hidden = false;
      banner.textContent = t("puzzleBanner");
    }
  }

  function init() {
    resetAvailablePieces();
    bindUi();
    if (restorePuzzleState()) {
      setCompleteBadge(taskComplete);
      setControlsLocked(taskComplete);
      const tracePanel = document.querySelector(".trace-panel");
      if (tracePanel) tracePanel.classList.toggle("is-puzzle-complete", taskComplete);
      renderTraceTable();
      refreshSectionTabs();
      renderChips();
      closePanel();
      updateStats();
      if (taskComplete) {
        setStatus(t("puzzleComplete"), "ok");
      }
    } else {
      reset();
      refreshSectionTabs();
      renderChips();
      closePanel();
      updateStats();
    }
  }

  function shouldGate(nextStepNumber) {
    const row = INSTANCE.rows.find((r) => r.step === nextStepNumber);
    if (!row || !row.missing) return false;
    if (isRowSolved(nextStepNumber)) return false;
    pendingGateStep = nextStepNumber;
    return true;
  }

  return {
    INSTANCE,
    init,
    reset,
    prepareRun,
    renderTraceTable,
    refreshLanguage,
    markActiveStep,
    awaitGate,
    abortGate,
    shouldGate,
    isSolved,
    isTaskComplete,
    onRunFinished,
    openPanel,
    getInstance() {
      return INSTANCE;
    },
  };
})();
