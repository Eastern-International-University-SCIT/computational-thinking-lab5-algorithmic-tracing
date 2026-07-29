/**
 * Pseudocode panel with line highlighting keyed by algorithm step ids.
 * Renders editor-style syntax tokens for readability.
 */

window.PseudocodeView = (function () {
  /** Stable step ids used by the executor. */
  const STEP_IDS = {
    mainCall: "mainCall",
    setI: "setI",
    whileLoop: "whileLoop",
    checkEqual: "checkEqual",
    returnFound: "returnFound",
    incI: "incI",
    returnMiss: "returnMiss",
  };

  const KEYWORDS = new Set([
    "procedure",
    "end_procedure",
    "end_if",
    "end_while",
    "if",
    "then",
    "while",
    "do",
    "return",
    "thủ_tục",
    "kết_thúc_thủ_tục",
    "kết_thúc_nếu",
    "kết_thúc_trong_khi",
    "nếu",
    "thì",
    "trong_khi",
    "làm",
    "trả_về",
  ]);

  const BUILTINS = new Set([
    "linear_search",
    "tìm_tuần_tự",
    "NOT_FOUND",
    "KHÔNG_TÌM_THẤY",
  ]);

  let hostEl = null;
  let activeId = null;

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

  /**
   * Tokenize a pseudocode line into colored spans (keywords, functions,
   * variables, numbers, operators, comments).
   */
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
  }

  function init(host) {
    hostEl = host;
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
  };
})();

window.LS_STEP_IDS = window.PseudocodeView.STEP_IDS;
