/**
 * Pseudocode panel with line highlighting keyed by algorithm step ids.
 * Renders editor-style syntax tokens for readability.
 * Also owns the avl_insert recursion call-stack overlay.
 */

window.PseudocodeView = (function () {
  /** Stable step ids used by the executor. */
  const STEP_IDS = {
    // update_height
    uhHl: "uhHl",
    uhHr: "uhHr",
    uhSet: "uhSet",
    // balance_factor
    bfReturn: "bfReturn",
    // rotate_left
    rotL_y: "rotL_y",
    rotL_T2: "rotL_T2",
    rotL_yLeft: "rotL_yLeft",
    rotL_zRight: "rotL_zRight",
    rotL_updZ: "rotL_updZ",
    rotL_updY: "rotL_updY",
    rotL_return: "rotL_return",
    // rotate_right
    rotR_y: "rotR_y",
    rotR_T2: "rotR_T2",
    rotR_yRight: "rotR_yRight",
    rotR_zLeft: "rotR_zLeft",
    rotR_updZ: "rotR_updZ",
    rotR_updY: "rotR_updY",
    rotR_return: "rotR_return",
    // avl_insert
    mainLoop: "mainLoop",
    callInsert: "callInsert",
    checkNull: "checkNull",
    returnNew: "returnNew",
    checkLess: "checkLess",
    goLeft: "goLeft",
    checkGreater: "checkGreater",
    goRight: "goRight",
    returnDup: "returnDup",
    updateHeight: "updateHeight",
    calcBf: "calcBf",
    caseLL: "caseLL",
    rotateRightLL: "rotateRightLL",
    caseRR: "caseRR",
    rotateLeftRR: "rotateLeftRR",
    caseLR: "caseLR",
    rotateLeftLR: "rotateLeftLR",
    rotateRightLR: "rotateRightLR",
    caseRL: "caseRL",
    rotateRightRL: "rotateRightRL",
    rotateLeftRL: "rotateLeftRL",
    returnNode: "returnNode",
  };

  const KEYWORDS = new Set([
    "procedure",
    "end_procedure",
    "end_if",
    "end_while",
    "end_for",
    "if",
    "then",
    "else",
    "else if",
    "while",
    "do",
    "for",
    "each",
    "in",
    "return",
    "and",
    "new",
    "thủ_tục",
    "kết_thúc_thủ_tục",
    "kết_thúc_nếu",
    "kết_thúc_trong_khi",
    "kết_thúc_với",
    "nếu",
    "thì",
    "không_thì",
    "trong_khi",
    "làm",
    "với",
    "mỗi",
    "trong",
    "trả_về",
    "và",
    "mới",
  ]);

  const BUILTINS = new Set([
    "avl_insert",
    "create_node",
    "update_height",
    "balance_factor",
    "rotate_left",
    "rotate_right",
    "height",
    "max",
    "Node",
    "chèn_avl",
    "tạo_nút",
    "cập_nhật_cao",
    "hệ_số_cân_bằng",
    "xoay_trái",
    "xoay_phải",
    "chiều_cao",
    "max",
    "Nút",
    "null",
    "sequence",
    "dãy",
  ]);

  let hostEl = null;
  let framesEl = null;
  let activeId = null;
  /** @type {{node: *, key: *}[]} */
  let callStack = [];

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function span(cls, text) {
    return `<span class="${cls}">${escapeHtml(text)}</span>`;
  }

  function highlightLine(text) {
    if (!text) return "";

    const commentIdx = text.indexOf("//");
    let codePart = text;
    let commentPart = "";
    if (commentIdx >= 0) {
      codePart = text.slice(0, commentIdx);
      commentPart = text.slice(commentIdx);
    }

    const tokenRe =
      /(\s+)|(\d+(?:\.\d+)?)|([\p{L}_][\p{L}\p{N}_]*)|(←|−|≠|≥|≤|[+\-*/%<>=.\[\],()])/gu;

    let html = "";
    let last = 0;
    let match;

    while ((match = tokenRe.exec(codePart)) !== null) {
      if (match.index > last) {
        html += span("tok-plain", codePart.slice(last, match.index));
      }

      const [full, space, num, ident, op] = match;
      if (space) {
        html += escapeHtml(space);
      } else if (num) {
        html += span("tok-num", num);
      } else if (ident) {
        if (KEYWORDS.has(ident)) {
          html += span("tok-kw", ident);
        } else if (BUILTINS.has(ident)) {
          html += span("tok-fn", ident);
        } else {
          html += span("tok-var", ident);
        }
      } else if (op) {
        const cls = /[()\[\],.]/.test(op) ? "tok-punct" : "tok-op";
        html += span(cls, op);
      } else {
        html += span("tok-plain", full);
      }
      last = match.index + full.length;
    }

    if (last < codePart.length) {
      html += span("tok-plain", codePart.slice(last));
    }

    if (commentPart) {
      html += span("tok-comment", commentPart);
    }

    return html;
  }

  function render() {
    if (!hostEl || !window.I18n) return;
    const lines = window.I18n.pseudoLines();
    const frag = document.createDocumentFragment();

    lines.forEach((line, index) => {
      const row = document.createElement("div");
      row.className = "pseudo-line";
      if (!line.text) row.classList.add("pseudo-blank");
      if (line.id) row.dataset.stepId = line.id;
      if (line.id && line.id === activeId) row.classList.add("is-active");

      const num = document.createElement("span");
      num.className = "pseudo-num";
      num.textContent = line.text ? String(index + 1) : "";

      const code = document.createElement("code");
      code.className = "pseudo-code";
      code.style.paddingLeft = `${(line.indent || 0) * 1.25}rem`;
      if (line.text) {
        code.innerHTML = highlightLine(line.text);
      } else {
        code.textContent = " ";
      }

      row.appendChild(num);
      row.appendChild(code);
      frag.appendChild(row);
    });

    hostEl.innerHTML = "";
    hostEl.appendChild(frag);

    if (activeId) {
      const active = hostEl.querySelector(".pseudo-line.is-active");
      if (active) {
        active.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }

    renderCallStack();
  }

  function renderCallStack() {
    if (!framesEl) return;
    framesEl.innerHTML = "";

    if (!callStack.length) {
      const empty = document.createElement("div");
      empty.className = "recursion-empty";
      empty.textContent = "—";
      framesEl.appendChild(empty);
      return;
    }

    callStack.forEach((frame, index) => {
      if (index > 0) {
        const arrow = document.createElement("div");
        arrow.className = "recursion-arrow";
        arrow.setAttribute("aria-hidden", "true");
        arrow.textContent = "↓";
        framesEl.appendChild(arrow);
      }

      const row = document.createElement("div");
      row.className = "recursion-frame";
      if (index === callStack.length - 1) row.classList.add("is-active");
      row.textContent = window.I18n
        ? window.I18n.callFrame(frame.node, frame.key)
        : `avl_insert(${frame.node == null ? "null" : frame.node}, ${frame.key})`;
      row.title = row.textContent;
      framesEl.appendChild(row);
    });

    const last = framesEl.querySelector(".recursion-frame.is-active");
    if (last) last.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  function pushCall(nodeArg, keyArg) {
    callStack.push({ node: nodeArg, key: keyArg });
    renderCallStack();
  }

  function popCall() {
    if (callStack.length) callStack.pop();
    renderCallStack();
  }

  function clearCallStack() {
    callStack = [];
    renderCallStack();
  }

  function init(host) {
    hostEl = host;
    framesEl = document.getElementById("recursion-frames");
    render();
  }

  function highlight(stepId) {
    activeId = stepId || null;
    if (!hostEl) return;
    hostEl.querySelectorAll(".pseudo-line.is-active").forEach((el) => {
      el.classList.remove("is-active");
    });
    if (!stepId) return;
    const targets = hostEl.querySelectorAll(
      `.pseudo-line[data-step-id="${stepId}"]`
    );
    targets.forEach((target, index) => {
      target.classList.add("is-active");
      if (index === targets.length - 1) {
        target.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    });
  }

  function clearHighlight() {
    highlight(null);
  }

  function refresh() {
    render();
  }

  return {
    STEP_IDS,
    init,
    highlight,
    clearHighlight,
    refresh,
    pushCall,
    popCall,
    clearCallStack,
  };
})();

window.AVLI_STEP_IDS = window.PseudocodeView.STEP_IDS;
