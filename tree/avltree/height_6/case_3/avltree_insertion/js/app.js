/**
 * App bootstrap (puzzle mode): sequence locked to the TracePuzzle instance.
 */

(function () {
  function puzzleInstance() {
    return window.TracePuzzle && window.TracePuzzle.getInstance
      ? window.TracePuzzle.getInstance()
      : null;
  }

  function applyPuzzleInstance() {
    const inst = puzzleInstance();
    if (!inst) return;
    const seq = (inst.sequence || []).slice();
    const input = document.getElementById("insert-sequence");
    if (input) {
      input.value = seq.join(", ");
      input.readOnly = true;
      input.setAttribute("aria-readonly", "true");
      input.title = "Locked to puzzle instance";
    }
    if (window.AvlInsertExecutor.isBusy && window.AvlInsertExecutor.isBusy()) {
      window.AvlInsertExecutor.reset();
    } else {
      window.AvlInsertExecutor.clearTrace();
      if (window.PseudocodeView) {
        window.PseudocodeView.clearHighlight();
        if (window.PseudocodeView.clearCallStack) {
          window.PseudocodeView.clearCallStack();
        }
      }
    }
    window.TreeViz.setSequence(seq);
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
    if (window.TreeViz && window.TreeViz.refreshLabels) {
      window.TreeViz.refreshLabels();
    }
    if (window.AvlInsertExecutor && window.AvlInsertExecutor.refreshTrace) {
      window.AvlInsertExecutor.refreshTrace();
    }
  }

  function bindSplitter() {
    const stage = document.getElementById("stage");
    const splitter = document.getElementById("stage-splitter");
    const left = document.getElementById("panel-viz");
    const right = document.getElementById("panel-algo");
    if (!stage || !splitter || !left || !right) return;

    const saved = Number(localStorage.getItem("avli-split"));
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
      localStorage.setItem("avli-split", String(Math.round(percent)));
      window.TreeViz.resize();
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
      window.TreeViz.resize();
    }

    splitter.addEventListener("pointerup", endDrag);
    splitter.addEventListener("pointercancel", endDrag);

    splitter.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      const current = Number(localStorage.getItem("avli-split")) || 50;
      const next = e.key === "ArrowLeft" ? current - 3 : current + 3;
      const percent = Math.min(75, Math.max(25, next));
      left.style.flex = `1 1 ${percent}%`;
      right.style.flex = `1 1 ${100 - percent}%`;
      localStorage.setItem("avli-split", String(percent));
      window.TreeViz.resize();
    });
  }

  function bindTraceSplitter() {
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
      localStorage.setItem("avli-trace-h", String(clamped));
      if (window.TreeViz && window.TreeViz.resize) window.TreeViz.resize();
    }

    const saved = Number(localStorage.getItem("avli-trace-h"));
    if (saved && saved >= minH) applyHeight(saved);
    else applyHeight(260);

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
      applyHeight(startH + (startY - e.clientY));
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
      if (window.TreeViz && window.TreeViz.resize) window.TreeViz.resize();
    }

    splitter.addEventListener("pointerup", endDrag);
    splitter.addEventListener("pointercancel", endDrag);

    splitter.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
      e.preventDefault();
      const current = Number(localStorage.getItem("avli-trace-h")) || 260;
      applyHeight(e.key === "ArrowUp" ? current + 16 : current - 16);
    });

    window.addEventListener("resize", () => {
      const current =
        Number(localStorage.getItem("avli-trace-h")) ||
        trace.getBoundingClientRect().height ||
        260;
      applyHeight(current);
    });
  }

  function bindControls() {
    const speedInput = document.getElementById("speed");
    const randomBtn = document.getElementById("btn-random");
    const applyBtn = document.getElementById("btn-apply");

    if (randomBtn) {
      randomBtn.disabled = true;
      randomBtn.style.display = "none";
    }
    if (applyBtn) {
      applyBtn.disabled = true;
      applyBtn.style.display = "none";
    }

    document.getElementById("btn-run").addEventListener("click", () => {
      window.AvlInsertExecutor.setSpeed(speedInput.value);
      window.AvlInsertExecutor.run();
    });

    document.getElementById("btn-pause").addEventListener("click", () => {
      window.AvlInsertExecutor.pause();
    });

    document.getElementById("btn-step").addEventListener("click", () => {
      window.AvlInsertExecutor.setSpeed(speedInput.value);
      window.AvlInsertExecutor.step();
    });

    const rerunBtn = document.getElementById("btn-rerun");
    if (rerunBtn) {
      rerunBtn.addEventListener("click", () => {
        window.AvlInsertExecutor.setSpeed(speedInput.value);
        applyPuzzleInstance();
        if (window.AvlInsertExecutor.rerun) {
          window.AvlInsertExecutor.rerun();
        } else {
          window.AvlInsertExecutor.run();
        }
      });
    }

    document.getElementById("btn-reset").addEventListener("click", () => {
      applyPuzzleInstance();
    });

    speedInput.addEventListener("input", () => {
      window.AvlInsertExecutor.setSpeed(speedInput.value);
    });

    document.getElementById("btn-zoom-in").addEventListener("click", () => {
      window.TreeViz.zoomBy(1.12);
    });
    document.getElementById("btn-zoom-out").addEventListener("click", () => {
      window.TreeViz.zoomBy(1 / 1.12);
    });

    document.getElementById("lang-en").addEventListener("click", () => {
      window.I18n.setLang("en");
    });
    document.getElementById("lang-vi").addEventListener("click", () => {
      window.I18n.setLang("vi");
    });
  }

  function onResize() {
    window.TreeViz.resize();
  }

  window.addEventListener("load", () => {
    window.TreeViz.init(document.getElementById("canvas-host"));
    window.PseudocodeView.init(document.getElementById("pseudocode"));
    window.AvlInsertExecutor.init();
    if (window.TracePuzzle) window.TracePuzzle.init();
    window.I18n.onChange(applyI18n);
    applyI18n();
    bindControls();
    bindSplitter();
    bindTraceSplitter();
    applyPuzzleInstance();
    window.addEventListener("resize", onResize);
  });
})();
