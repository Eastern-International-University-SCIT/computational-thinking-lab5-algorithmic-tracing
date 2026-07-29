/**
 * App bootstrap: pseudocode panel, i18n, controls, and ArrayViz wiring.
 * Puzzle mode locks the array/key to the fixed execution-trace instance.
 */

(function () {
  let currentValues = [];

  function puzzleInstance() {
    return window.TracePuzzle && window.TracePuzzle.getInstance
      ? window.TracePuzzle.getInstance()
      : null;
  }

  function applyPuzzleInstance() {
    const inst = puzzleInstance();
    if (!inst) return;
    currentValues = inst.array.slice();
    window.LinearSearchExecutor.reset();
    window.ArrayViz.setArray(currentValues);
    const keyInput = document.getElementById("search-key");
    const sizeInput = document.getElementById("array-size");
    if (keyInput) {
      keyInput.value = String(inst.key);
      keyInput.readOnly = true;
      keyInput.setAttribute("aria-readonly", "true");
      keyInput.title = "Locked to puzzle instance";
    }
    if (sizeInput) {
      sizeInput.value = String(inst.array.length);
      sizeInput.readOnly = true;
      sizeInput.setAttribute("aria-readonly", "true");
      sizeInput.title = "Locked to puzzle instance";
    }
    window.LinearSearchExecutor.setKey(inst.key);
  }

  function applyI18n() {
    const lang = window.I18n.getLang();
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = window.I18n.t(key);
      if (value != null) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      const value = window.I18n.t(key);
      if (value != null) el.setAttribute("title", value);
    });

    document.getElementById("lang-en").classList.toggle("is-active", lang === "en");
    document.getElementById("lang-vi").classList.toggle("is-active", lang === "vi");

    if (window.PseudocodeView) window.PseudocodeView.refresh();
    if (window.ArrayViz && window.ArrayViz.refreshLabels) {
      window.ArrayViz.refreshLabels();
    }
    if (window.LinearSearchExecutor && window.LinearSearchExecutor.refreshTrace) {
      window.LinearSearchExecutor.refreshTrace();
    }
  }

  function bindSplitter() {
    const stage = document.getElementById("stage");
    const splitter = document.getElementById("stage-splitter");
    const left = document.getElementById("panel-viz");
    const right = document.getElementById("panel-algo");
    if (!stage || !splitter || !left || !right) return;

    const saved = Number(localStorage.getItem("ls-split"));
    if (saved && saved > 25 && saved < 75) {
      left.style.flex = `1 1 ${saved}%`;
      right.style.flex = `1 1 ${100 - saved}%`;
    }

    let dragging = false;

    function setSplitFromClientX(clientX) {
      const rect = stage.getBoundingClientRect();
      const x = clientX - rect.left;
      let percent = (x / rect.width) * 100;
      percent = Math.min(75, Math.max(25, percent));
      left.style.flex = `1 1 ${percent}%`;
      right.style.flex = `1 1 ${100 - percent}%`;
      localStorage.setItem("ls-split", String(Math.round(percent)));
      window.ArrayViz.resize();
    }

    splitter.addEventListener("pointerdown", (e) => {
      if (window.matchMedia("(max-width: 980px)").matches) return;
      dragging = true;
      splitter.setPointerCapture(e.pointerId);
      document.body.classList.add("is-resizing-panels");
      e.preventDefault();
    });

    splitter.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      setSplitFromClientX(e.clientX);
    });

    function endDrag(e) {
      if (!dragging) return;
      dragging = false;
      document.body.classList.remove("is-resizing-panels");
      try {
        splitter.releasePointerCapture(e.pointerId);
      } catch (_) {
        /* ignore */
      }
      window.ArrayViz.resize();
    }

    splitter.addEventListener("pointerup", endDrag);
    splitter.addEventListener("pointercancel", endDrag);

    splitter.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      const current = Number(localStorage.getItem("ls-split")) || 50;
      const next = e.key === "ArrowLeft" ? current - 3 : current + 3;
      const percent = Math.min(75, Math.max(25, next));
      left.style.flex = `1 1 ${percent}%`;
      right.style.flex = `1 1 ${100 - percent}%`;
      localStorage.setItem("ls-split", String(percent));
      window.ArrayViz.resize();
    });
  }


  function bindRowSplitter() {
    const splitter = document.getElementById("trace-splitter");
    const trace = document.querySelector(".trace-panel");
    if (!splitter || !trace) return;

    const minH = 120;
    const headerGap = 12;

    function maxH() {
      const header = document.querySelector(".app-header");
      const headerH = header ? header.getBoundingClientRect().height : 0;
      const bodyStyle = getComputedStyle(document.body);
      const padY =
        (parseFloat(bodyStyle.paddingTop) || 0) +
        (parseFloat(bodyStyle.paddingBottom) || 0);
      const gaps = (parseFloat(bodyStyle.gap) || 0) * 2;
      const splitterH = splitter.getBoundingClientRect().height || 10;
      const available =
        window.innerHeight - headerH - padY - gaps - splitterH - headerGap;
      return Math.max(minH + 80, Math.floor(available * 0.72));
    }

    function applyHeight(px) {
      const clamped = Math.min(maxH(), Math.max(minH, Math.round(px)));
      trace.style.setProperty("--trace-h", clamped + "px");
      localStorage.setItem("ls-trace-h", String(clamped));
      if (window.ArrayViz && window.ArrayViz.resize) window.ArrayViz.resize();
    }

    const saved = Number(localStorage.getItem("ls-trace-h"));
    if (saved && saved >= minH) {
      applyHeight(saved);
    } else {
      applyHeight(260);
    }

    let dragging = false;
    let startY = 0;
    let startH = 0;

    splitter.addEventListener("pointerdown", (e) => {
      if (window.matchMedia("(max-width: 980px)").matches) return;
      dragging = true;
      startY = e.clientY;
      startH = trace.getBoundingClientRect().height;
      splitter.setPointerCapture(e.pointerId);
      document.body.classList.add("is-resizing-trace");
      e.preventDefault();
    });

    splitter.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      // Dragging the splitter up grows the trace panel
      const delta = startY - e.clientY;
      applyHeight(startH + delta);
    });

    function endDrag(e) {
      if (!dragging) return;
      dragging = false;
      document.body.classList.remove("is-resizing-trace");
      try {
        splitter.releasePointerCapture(e.pointerId);
      } catch (_) {
        /* ignore */
      }
      if (window.ArrayViz && window.ArrayViz.resize) window.ArrayViz.resize();
    }

    splitter.addEventListener("pointerup", endDrag);
    splitter.addEventListener("pointercancel", endDrag);

    splitter.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
      e.preventDefault();
      const current =
        Number(localStorage.getItem("ls-trace-h")) || 260;
      const next = e.key === "ArrowUp" ? current + 16 : current - 16;
      applyHeight(next);
    });

    window.addEventListener("resize", () => {
      const current =
        Number(localStorage.getItem("ls-trace-h")) ||
        trace.getBoundingClientRect().height ||
        260;
      applyHeight(current);
    });
  }

  function bindControls() {
    const speedInput = document.getElementById("speed");
    const keyInput = document.getElementById("search-key");
    const randomBtn = document.getElementById("btn-random");

    // Puzzle instance is fixed — hide randomize.
    if (randomBtn) {
      randomBtn.disabled = true;
      randomBtn.title = "Locked to puzzle instance";
      randomBtn.style.display = "none";
    }

    document.getElementById("btn-run").addEventListener("click", () => {
      window.LinearSearchExecutor.setSpeed(speedInput.value);
      window.LinearSearchExecutor.setKey(keyInput.value);
      window.LinearSearchExecutor.run();
    });

    document.getElementById("btn-pause").addEventListener("click", () => {
      window.LinearSearchExecutor.pause();
    });

    document.getElementById("btn-step").addEventListener("click", () => {
      window.LinearSearchExecutor.setSpeed(speedInput.value);
      window.LinearSearchExecutor.setKey(keyInput.value);
      window.LinearSearchExecutor.step();
    });

    document.getElementById("btn-rerun").addEventListener("click", () => {
      window.LinearSearchExecutor.setSpeed(speedInput.value);
      window.ArrayViz.setArray(currentValues);
      window.LinearSearchExecutor.setKey(keyInput.value);
      window.LinearSearchExecutor.rerun();
    });

    document.getElementById("btn-reset").addEventListener("click", () => {
      applyPuzzleInstance();
    });

    speedInput.addEventListener("input", () => {
      window.LinearSearchExecutor.setSpeed(speedInput.value);
    });

    document.getElementById("btn-zoom-in").addEventListener("click", () => {
      window.ArrayViz.zoomBy(1.12);
    });
    document.getElementById("btn-zoom-out").addEventListener("click", () => {
      window.ArrayViz.zoomBy(1 / 1.12);
    });

    document.getElementById("lang-en").addEventListener("click", () => {
      window.I18n.setLang("en");
    });
    document.getElementById("lang-vi").addEventListener("click", () => {
      window.I18n.setLang("vi");
    });
  }

  function onResize() {
    window.ArrayViz.resize();
  }

  window.addEventListener("load", () => {
    window.ArrayViz.init(document.getElementById("canvas-host"));
    window.PseudocodeView.init(document.getElementById("pseudocode"));
    window.LinearSearchExecutor.init();
    if (window.TracePuzzle) window.TracePuzzle.init();
    window.I18n.onChange(applyI18n);
    applyI18n();
    bindControls();
    bindSplitter();
    applyPuzzleInstance();
    window.addEventListener("resize", onResize);
  });
})();
