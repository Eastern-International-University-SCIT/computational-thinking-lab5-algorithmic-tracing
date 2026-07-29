/**
 * App bootstrap: puzzle mode locks the array to the fixed instance.
 */

(function () {
  let currentValues = [];

  function puzzleInstance() {
    return window.TracePuzzle && window.TracePuzzle.getInstance
      ? window.TracePuzzle.getInstance()
      : null;
  }

  function applyPuzzleInstance(preservePuzzleState) {
    const inst = puzzleInstance();
    if (!inst) return;
    currentValues = inst.array.slice();
    if (!preservePuzzleState) window.SelectionSortExecutor.reset();
    window.ArrayViz.setArray(currentValues);
    const sizeInput = document.getElementById("array-size");
    if (sizeInput) {
      sizeInput.value = String(inst.array.length);
      sizeInput.readOnly = true;
      sizeInput.setAttribute("aria-readonly", "true");
      sizeInput.title = "Locked to puzzle instance";
    }
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
    if (window.ArrayViz && window.ArrayViz.refreshLabels) window.ArrayViz.refreshLabels();
    if (window.SelectionSortExecutor && window.SelectionSortExecutor.refreshTrace) window.SelectionSortExecutor.refreshTrace();
  }

  function bindSplitter() {
    const stage = document.getElementById("stage");
    const splitter = document.getElementById("stage-splitter");
    const left = document.getElementById("panel-viz");
    const right = document.getElementById("panel-algo");
    if (!stage || !splitter || !left || !right) return;

    const saved = Number(localStorage.getItem("ss-split"));
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
      localStorage.setItem("ss-split", String(Math.round(percent)));
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
      try { splitter.releasePointerCapture(e.pointerId); } catch (_) {}
      window.ArrayViz.resize();
    }

    splitter.addEventListener("pointerup", endDrag);
    splitter.addEventListener("pointercancel", endDrag);

    splitter.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      const current = Number(localStorage.getItem("ss-split")) || 50;
      const next = e.key === "ArrowLeft" ? current - 3 : current + 3;
      const percent = Math.min(75, Math.max(25, next));
      left.style.flex = `1 1 ${percent}%`;
      right.style.flex = `1 1 ${100 - percent}%`;
      localStorage.setItem("ss-split", String(percent));
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
      const padY = (parseFloat(bodyStyle.paddingTop) || 0) + (parseFloat(bodyStyle.paddingBottom) || 0);
      const gaps = (parseFloat(bodyStyle.gap) || 0) * 2;
      const splitterH = splitter.getBoundingClientRect().height || 10;
      const available = window.innerHeight - headerH - padY - gaps - splitterH - headerGap;
      return Math.max(minH + 80, Math.floor(available * 0.72));
    }

    function applyHeight(px) {
      const clamped = Math.min(maxH(), Math.max(minH, Math.round(px)));
      trace.style.setProperty("--trace-h", clamped + "px");
      localStorage.setItem("ss-trace-h", String(clamped));
      if (window.ArrayViz && window.ArrayViz.resize) window.ArrayViz.resize();
    }

    const saved = Number(localStorage.getItem("ss-trace-h"));
    if (saved && saved >= minH) {
      applyHeight(saved);
    } else {
      applyHeight(220);
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
      const delta = startY - e.clientY;
      applyHeight(startH + delta);
    });

    function endDrag(e) {
      if (!dragging) return;
      dragging = false;
      document.body.classList.remove("is-resizing-trace");
      try { splitter.releasePointerCapture(e.pointerId); } catch (_) {}
      if (window.ArrayViz && window.ArrayViz.resize) window.ArrayViz.resize();
    }

    splitter.addEventListener("pointerup", endDrag);
    splitter.addEventListener("pointercancel", endDrag);

    splitter.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
      e.preventDefault();
      const current = Number(localStorage.getItem("ss-trace-h")) || 220;
      const next = e.key === "ArrowUp" ? current + 16 : current - 16;
      applyHeight(next);
    });

    window.addEventListener("resize", () => {
      const current = Number(localStorage.getItem("ss-trace-h")) || trace.getBoundingClientRect().height || 220;
      applyHeight(current);
    });
  }

  function bindControls() {
    const speedInput = document.getElementById("speed");
    const randomBtn = document.getElementById("btn-random");
    if (randomBtn) {
      randomBtn.disabled = true;
      randomBtn.title = "Locked to puzzle instance";
      randomBtn.style.display = "none";
    }

    document.getElementById("btn-run").addEventListener("click", () => {
      window.SelectionSortExecutor.setSpeed(speedInput.value);
      window.SelectionSortExecutor.run();
    });

    document.getElementById("btn-pause").addEventListener("click", () => {
      window.SelectionSortExecutor.pause();
    });

    document.getElementById("btn-step").addEventListener("click", () => {
      window.SelectionSortExecutor.setSpeed(speedInput.value);
      window.SelectionSortExecutor.step();
    });

    document.getElementById("btn-rerun").addEventListener("click", () => {
      window.SelectionSortExecutor.setSpeed(speedInput.value);
      window.ArrayViz.setArray(currentValues);
      window.SelectionSortExecutor.rerun();
    });

    document.getElementById("btn-reset").addEventListener("click", () => {
      window.SelectionSortExecutor.reset();
      window.ArrayViz.setArray(currentValues);
    });

    speedInput.addEventListener("input", () => {
      window.SelectionSortExecutor.setSpeed(speedInput.value);
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

  window.addEventListener("load", () => {
    window.ArrayViz.init(document.getElementById("canvas-host"));
    window.PseudocodeView.init(document.getElementById("pseudocode"));
    window.SelectionSortExecutor.init();
    if (window.TracePuzzle) window.TracePuzzle.init();
    window.I18n.onChange(applyI18n);
    applyI18n();
    bindControls();
    bindSplitter();
    bindRowSplitter();
    applyPuzzleInstance(true);
    window.addEventListener("resize", () => window.ArrayViz.resize());
  });
})();
