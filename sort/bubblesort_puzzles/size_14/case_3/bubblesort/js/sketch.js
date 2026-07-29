/**
 * p5.js WEBGL visualization for Bubble Sort.
 * Array as square 3D boxes + swapped boolean orb on the right.
 */

window.ArrayViz = (function () {
  const COLORS = {
    base: [62, 110, 130],
    range: [120, 168, 186],
    active: [61, 90, 128],
    swap: [196, 92, 74],
    sorted: [74, 124, 89],
    edge: [255, 220, 90],
    pointerI: [61, 90, 128],
    pointerJ: [196, 92, 74],
    swappedTrue: [234, 179, 8],
    swappedFalse: [148, 163, 173],
    swappedEdge: [217, 119, 6],
  };

  const SIDE_GAP = 16; // world units between facing sides (before fit-scale)
  const FIT_MARGIN = 0.68; // fraction of canvas width used for the row + orb
  const SPHERE_GAP = 40; // gap between last box side and sphere (before fit-scale)
  const SPHERE_DIAM = 46; // sphere diameter before fit-scale

  let sketchInstance = null;
  let hostEl = null;
  let hudEl = null;
  const labelCache = new Map();

  const state = {
    values: [],
    displayPositions: [],
    targetPositions: [],
    sizes: [],
    highlight: -1,
    range: { low: -1, high: -1 },
    sortedSet: new Set(),
    pointers: { i: null, j: null }, // i → n−i−1; j → scan index
    compare: null, // { indices: number[], text: string }
    swapped: null, // null | true | false
    swappedHighlight: false,
    swapping: null,
    rotY: 0.22,
    rotX: -0.32,
    panX: 0,
    panY: 0,
    dragging: false,
    dragMode: "rotate", // "rotate" | "pan"
    lastMouse: { x: 0, y: 0 },
    fitScale: 1,
    userZoom: 1,
    swappedX: 0,
  };

  const ROT_X_LIMIT = 0.45; // vertical tilt clamp (radians, hard limits)

  function labelText(key, fallback) {
    if (window.I18n) return window.I18n.t(key);
    return fallback;
  }

  function softScale(value, minV, maxV) {
    if (maxV === minV) return 48;
    const t = (value - minV) / (maxV - minV);
    return 36 + t * 28;
  }

  /**
   * Place cubes with equal side gaps, reserve room for the swapped orb on the
   * right, then center the whole composition.
   */
  function computeLayout(canvasWidth) {
    const n = state.values.length;
    if (!n) {
      return { sizes: [], positions: [], fitScale: 1, swappedX: 0 };
    }

    const minV = Math.min(...state.values);
    const maxV = Math.max(...state.values);
    const rawSizes = state.values.map((v) => softScale(v, minV, maxV));
    const boxesWidth =
      rawSizes.reduce((sum, s) => sum + s, 0) + (n - 1) * SIDE_GAP;
    const rawWidth = boxesWidth + SPHERE_GAP + SPHERE_DIAM;

    const viewWidth = Math.max(220, canvasWidth * FIT_MARGIN * 0.85);
    const fitScale = Math.min(1.35, viewWidth / Math.max(rawWidth, 1));

    const sizes = rawSizes.map((s) => s * fitScale);
    const gap = SIDE_GAP * fitScale;
    const sphereGap = SPHERE_GAP * fitScale;
    const sphereDiam = SPHERE_DIAM * fitScale;

    const positions = [];
    let cursor = 0;
    for (let i = 0; i < n; i++) {
      positions.push(cursor + sizes[i] / 2);
      cursor += sizes[i] + gap;
    }
    cursor -= gap;
    const swappedX = cursor + sphereGap + sphereDiam / 2;
    cursor = swappedX + sphereDiam / 2;

    const totalWidth = cursor;
    const offset = totalWidth / 2;
    return {
      sizes,
      positions: positions.map((x) => x - offset),
      fitScale,
      swappedX: swappedX - offset,
    };
  }

  function syncLayout(canvasWidth) {
    const width =
      canvasWidth ||
      (sketchInstance && sketchInstance.width) ||
      (hostEl && hostEl.getBoundingClientRect().width) ||
      480;
    const layout = computeLayout(width);
    state.sizes = layout.sizes;
    state.targetPositions = layout.positions;
    state.fitScale = layout.fitScale;
    state.swappedX = layout.swappedX;

    const n = state.values.length;
    if (state.displayPositions.length !== n) {
      state.displayPositions = layout.positions.slice();
    } else {
      for (let i = 0; i < n; i++) {
        if (state.displayPositions[i] === undefined) {
          state.displayPositions[i] = layout.positions[i];
        }
      }
    }
    clampPan();
  }

  /**
   * Pan limits from current layout:
   * - horizontal: full span between first and last box centers
   * - vertical: 4 × max box size (square width)
   */
  function getPanLimits() {
    const n = state.targetPositions.length;
    if (!n) return { maxX: 0, maxY: 0 };
    const first = state.targetPositions[0] ?? 0;
    const last = state.targetPositions[n - 1] ?? 0;
    const maxX = Math.abs(last - first);
    const maxBox = state.sizes.length ? Math.max(...state.sizes) : 0;
    return { maxX, maxY: 4 * maxBox };
  }

  function clampPan() {
    const { maxX, maxY } = getPanLimits();
    state.panX = Math.max(-maxX, Math.min(maxX, state.panX));
    state.panY = Math.max(-maxY, Math.min(maxY, state.panY));
  }

  function colorFor(i) {
    if (state.swapping && (i === state.swapping.a || i === state.swapping.b)) {
      return COLORS.swap;
    }
    if (i === state.highlight) return COLORS.active;
    if (state.sortedSet.has(i)) return COLORS.sorted;
    if (
      state.range.low >= 0 &&
      i >= state.range.low &&
      i <= state.range.high
    ) {
      return COLORS.range;
    }
    return COLORS.base;
  }

  function isCompared(i) {
    return !!(state.compare && state.compare.indices.includes(i));
  }

  function makeLabel(p, text, opts) {
    const key =
      text +
      "|" +
      (opts && opts.bg ? opts.bg.join(",") : "") +
      "|" +
      (opts && opts.fg ? opts.fg.join(",") : "") +
      "|" +
      (opts && opts.w ? opts.w : 96);
    if (labelCache.has(key)) return labelCache.get(key);

    const w = (opts && opts.w) || 96;
    const h = (opts && opts.h) || 40;
    const bg = (opts && opts.bg) || [255, 255, 255, 230];
    const fg = (opts && opts.fg) || [26, 43, 54];
    const size = (opts && opts.size) || 18;

    const g = p.createGraphics(w, h);
    g.pixelDensity(1);
    g.clear();
    g.noStroke();
    g.fill(bg[0], bg[1], bg[2], bg[3] == null ? 255 : bg[3]);
    g.rect(2, 2, w - 4, h - 4, 6);
    g.fill(fg[0], fg[1], fg[2]);
    g.textAlign(p.CENTER, p.CENTER);
    g.textSize(size);
    g.textStyle(p.BOLD);
    g.text(text, w / 2, h / 2 + 1);
    labelCache.set(key, g);
    return g;
  }

  function drawEdgeCube(p, size, edgeColor) {
    const h = size / 2;
    const e = [
      [-h, -h, -h],
      [h, -h, -h],
      [h, h, -h],
      [-h, h, -h],
      [-h, -h, h],
      [h, -h, h],
      [h, h, h],
      [-h, h, h],
    ];
    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4],
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],
    ];
    const c = edgeColor || COLORS.edge;
    p.stroke(c[0], c[1], c[2]);
    p.strokeWeight(2.5);
    for (const [a, b] of edges) {
      p.line(e[a][0], e[a][1], e[a][2], e[b][0], e[b][1], e[b][2]);
    }
    p.noStroke();
  }

  function drawFaceLabel(p, text, size, boxColor) {
    const face = Math.max(18, size * 0.7);
    const bg = boxColor
      ? [
          Math.max(0, boxColor[0] - 28),
          Math.max(0, boxColor[1] - 28),
          Math.max(0, boxColor[2] - 28),
          255,
        ]
      : [40, 55, 65, 230];
    p.push();
    p.translate(0, 0, size / 2 + 0.55);
    p.textureMode(p.NORMAL);
    p.texture(
      makeLabel(p, text, {
        w: 96,
        h: 48,
        size: 22,
        bg,
        fg: [255, 255, 255],
      })
    );
    p.plane(face, face * 0.42);
    p.pop();
  }

  /** Clear WEBGL texture so later solid fills are not washed white. */
  function useSolidFill(p, rgb, alpha) {
    try {
      p.resetShader();
    } catch (_) {
      /* older p5 builds may not expose resetShader the same way */
    }
    p.fill(rgb[0], rgb[1], rgb[2], alpha == null ? 255 : alpha);
    p.noStroke();
  }

  function drawUnderLabel(p, text, x, boxBottomY, size, opts) {
    const yOff = (opts && opts.yOffset) != null ? opts.yOffset : 18;
    const bg = (opts && opts.bg) || [26, 43, 54, 230];
    const fg = (opts && opts.fg) || [255, 255, 255];
    const planeW = (opts && opts.planeW) || Math.max(28, size * 0.7);
    const planeH = (opts && opts.planeH) || 16;
    p.push();
    p.translate(x, boxBottomY + yOff + size * 0.02, size * 0.15);
    p.rotateY(-state.rotY * 0.9);
    p.rotateX(-state.rotX * 0.4);
    p.textureMode(p.NORMAL);
    p.texture(
      makeLabel(p, text, {
        w: (opts && opts.w) || 88,
        h: (opts && opts.h) || 36,
        size: (opts && opts.fontSize) || 15,
        bg,
        fg,
      })
    );
    p.plane(planeW, planeH);
    p.pop();
  }

  /**
   * Upward arrow + label under a box. Optional valueText draws a second chip
   * just below the expression with a different background color.
   */
  function drawIndexPointer(
    p,
    text,
    x,
    boxBottomY,
    size,
    color,
    xShift,
    valueText,
    valueBg
  ) {
    const s = state.fitScale;
    const shift = xShift || 0;
    const labelY = boxBottomY + 20 + size * 0.01 + 16 * s;
    const arrowY = boxBottomY + 10 + size * 0.005 + 2.5 * s;
    const hasValue = valueText != null && valueText !== "";
    const exprWide = text.length > 2;
    const exprPlaneW = exprWide
      ? Math.max(52, size * 1.15)
      : Math.max(18, size * 0.42);
    const exprLabelW = exprWide ? 140 : 56;
    const exprFont = exprWide ? 13 : 16;
    const labelPlaneH = 14;

    p.push();
    useSolidFill(p, color);
    p.translate(x + shift, arrowY, size * 0.05);
    p.rotateX(Math.PI);
    p.cone(6.5 * s, 14 * s, 8);
    p.pop();

    p.push();
    p.translate(x + shift, labelY, size * 0.12);
    p.rotateY(-state.rotY * 0.9);
    p.rotateX(-state.rotX * 0.4);
    p.textureMode(p.NORMAL);
    p.texture(
      makeLabel(p, text, {
        w: exprLabelW,
        h: 34,
        size: exprFont,
        bg: [color[0], color[1], color[2], 235],
        fg: [255, 255, 255],
      })
    );
    p.plane(exprPlaneW, labelPlaneH);
    p.pop();

    if (hasValue) {
      // One full text-chip height farther down than the expression label
      const valueY = labelY + 18 * s + labelPlaneH;
      const vBg = valueBg || [46, 160, 144, 235];
      p.push();
      p.translate(x + shift, valueY, size * 0.12);
      p.rotateY(-state.rotY * 0.9);
      p.rotateX(-state.rotX * 0.4);
      p.textureMode(p.NORMAL);
      p.texture(
        makeLabel(p, String(valueText), {
          w: 64,
          h: 34,
          size: 16,
          bg: vBg,
          fg: [255, 255, 255],
        })
      );
      p.plane(Math.max(20, size * 0.48), 14);
      p.pop();
    }
  }

  function isValidPointer(index) {
    return (
      index != null &&
      Number.isFinite(index) &&
      index >= 0 &&
      index < state.values.length
    );
  }

  function drawSwappedOrb(p, baseY) {
    if (state.swapped == null) return;

    const s = state.fitScale;
    const diameter = SPHERE_DIAM * s;
    const radius = diameter / 2;
    const x = state.swappedX;
    const cy = baseY - radius;
    const isTrue = state.swapped === true;
    const col = isTrue ? COLORS.swappedTrue : COLORS.swappedFalse;
    const valueLabel = isTrue
      ? labelText("labelTrue", "TRUE")
      : labelText("labelFalse", "FALSE");
    const cage = diameter * 1.55;

    p.push();
    p.translate(x, cy, 0);

    // Faint glass cage first (very transparent so the sphere reads clearly)
    if (state.swappedHighlight) {
      p.push();
      useSolidFill(p, [255, 220, 90], 12);
      p.box(cage);
      p.pop();
    }

    useSolidFill(p, col);
    p.sphere(radius, 24, 18);

    // TRUE / FALSE on the front of the sphere
    p.push();
    p.translate(0, 0, radius + 0.6);
    p.textureMode(p.NORMAL);
    p.texture(
      makeLabel(p, valueLabel, {
        w: 110,
        h: 44,
        size: 18,
        bg: [
          Math.max(0, col[0] - 40),
          Math.max(0, col[1] - 40),
          Math.max(0, col[2] - 40),
          240,
        ],
        fg: [255, 255, 255],
      })
    );
    p.plane(Math.max(28, diameter * 0.78), Math.max(14, diameter * 0.34));
    p.pop();

    // Bold edges drawn after the sphere so the condition cage frames it
    if (state.swappedHighlight) {
      drawEdgeCube(p, cage, COLORS.swappedEdge);
    }

    p.pop();

    drawUnderLabel(
      p,
      labelText("labelSwapped", "swapped"),
      x,
      baseY,
      diameter,
      {
        w: 120,
        planeW: Math.max(40, diameter * 1.05),
        fontSize: 14,
        bg: isTrue
          ? [180, 130, 10, 235]
          : [90, 100, 110, 235],
      }
    );
  }

  function updateHud() {
    if (!hudEl) return;
    if (state.compare && state.compare.text) {
      hudEl.hidden = false;
      hudEl.textContent = state.compare.text;
    } else {
      hudEl.hidden = true;
      hudEl.textContent = "";
    }
  }

  const sketch = function (p) {
    p.setup = function () {
      const rect = hostEl.getBoundingClientRect();
      const c = p.createCanvas(
        Math.max(1, Math.floor(rect.width)),
        Math.max(1, Math.floor(rect.height)),
        p.WEBGL
      );
      c.parent(hostEl);
      p.pixelDensity(Math.min(window.devicePixelRatio || 1, 2));
      p.noStroke();
      // Allow right-drag to pan without opening the browser context menu.
      c.elt.addEventListener("contextmenu", (e) => e.preventDefault());
      syncLayout(p.width);
    };

    p.windowResized = function () {
      const rect = hostEl.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));
      if (w === p.width && h === p.height) {
        syncLayout(p.width);
        return;
      }
      p.resizeCanvas(w, h);
      syncLayout(p.width);
      state.displayPositions = state.targetPositions.slice();
    };

    p.mousePressed = function () {
      if (!overCanvas(p)) return;
      state.dragging = true;
      // Left-drag rotates; right-drag or Shift+drag pans.
      state.dragMode =
        p.mouseButton === p.RIGHT || p.keyIsDown(p.SHIFT) ? "pan" : "rotate";
      state.lastMouse = { x: p.mouseX, y: p.mouseY };
    };

    p.mouseReleased = function () {
      state.dragging = false;
      state.dragMode = "rotate";
    };

    p.mouseDragged = function () {
      if (!state.dragging) return;
      const dx = p.mouseX - state.lastMouse.x;
      const dy = p.mouseY - state.lastMouse.y;
      if (state.dragMode === "pan") {
        const { maxX, maxY } = getPanLimits();
        const sens = 0.7 / Math.max(state.userZoom, 0.01);
        state.panX = p.constrain(state.panX + dx * sens, -maxX, maxX);
        state.panY = p.constrain(state.panY + dy * sens, -maxY, maxY);
      } else {
        state.rotY = p.constrain(state.rotY + dx * 0.005, -0.38, 0.45);
        state.rotX = p.constrain(
          state.rotX + dy * 0.004,
          -ROT_X_LIMIT,
          ROT_X_LIMIT
        );
      }
      state.lastMouse = { x: p.mouseX, y: p.mouseY };
    };

    p.mouseWheel = function (event) {
      if (!overCanvas(p)) return true;
      const factor = event.deltaY > 0 ? 0.92 : 1.08;
      state.userZoom = p.constrain(state.userZoom * factor, 0.45, 2.6);
      return false;
    };

    p.draw = function () {
      p.clear();
      p.background(243, 247, 250);

      const n = state.values.length;
      if (n && state.sizes.length !== n) {
        syncLayout(p.width);
      }

      p.ambientLight(168);
      p.directionalLight(255, 245, 230, -0.35, 0.6, -0.5);
      p.directionalLight(180, 210, 230, 0.4, 0.2, 0.3);
      p.pointLight(255, 255, 255, 0, -180, 120);

      p.translate(state.panX, state.panY, 0);
      p.scale(state.userZoom);
      p.rotateX(state.rotX);
      p.rotateY(state.rotY);

      if (!n) return;

      for (let i = 0; i < n; i++) {
        const target = state.targetPositions[i] ?? 0;
        state.displayPositions[i] +=
          (target - state.displayPositions[i]) * 0.18;
      }

      if (state.swapping) {
        const { a, b, t } = state.swapping;
        const xa = state.targetPositions[a];
        const xb = state.targetPositions[b];
        const ease = t * t * (3 - 2 * t);
        state.displayPositions[a] = p.lerp(xa, xb, ease);
        state.displayPositions[b] = p.lerp(xb, xa, ease);
      }

      const baseY = 52;

      for (let i = 0; i < n; i++) {
        const value = state.values[i];
        const size = state.sizes[i] || 40;
        const x = state.displayPositions[i];
        let yLift = 0;
        if (
          state.swapping &&
          (i === state.swapping.a || i === state.swapping.b)
        ) {
          yLift = -Math.sin(state.swapping.t * Math.PI) * (22 * state.fitScale);
        }

        const col = colorFor(i);
        const cy = baseY - size / 2 + yLift;

        p.push();
        p.translate(x, cy, 0);
        useSolidFill(p, col);
        p.box(size, size, size);
        drawFaceLabel(p, String(value), size, col);
        useSolidFill(p, col);
        if (isCompared(i)) {
          drawEdgeCube(p, size * 1.04);
        }
        p.pop();
        useSolidFill(p, col);
      }

      // i / j pointers use layout slots (targetPositions) so they stay put while boxes swap
      const showI = isValidPointer(state.pointers.i);
      const showJ = isValidPointer(state.pointers.j);
      if (showI || showJ) {
        const sameSlot =
          showI && showJ && state.pointers.i === state.pointers.j;
        if (showI) {
          const idx = state.pointers.i;
          const size = state.sizes[idx] || 40;
          const x = state.targetPositions[idx];
          drawIndexPointer(
            p,
            labelText("labelI", "n − i − 1"),
            x,
            baseY,
            size,
            COLORS.pointerI,
            sameSlot ? -12 * state.fitScale : 0,
            String(idx),
            [46, 160, 144, 235]
          );
        }
        if (showJ) {
          const idx = state.pointers.j;
          const size = state.sizes[idx] || 40;
          const x = state.targetPositions[idx];
          drawIndexPointer(
            p,
            labelText("labelJ", "j"),
            x,
            baseY,
            size,
            COLORS.pointerJ,
            sameSlot ? 12 * state.fitScale : 0
          );
        }
      }

      drawSwappedOrb(p, baseY);
    };

    function overCanvas(p) {
      return (
        p.mouseX >= 0 &&
        p.mouseX <= p.width &&
        p.mouseY >= 0 &&
        p.mouseY <= p.height
      );
    }
  };

  function ensureHud() {
    if (!hostEl) return;
    hudEl = hostEl.querySelector("#compare-hud");
    if (!hudEl) {
      hudEl = document.createElement("div");
      hudEl.id = "compare-hud";
      hudEl.className = "compare-hud";
      hudEl.hidden = true;
      hostEl.appendChild(hudEl);
    }
  }

  function init(host) {
    hostEl = host;
    labelCache.clear();
    ensureHud();
    if (sketchInstance) {
      sketchInstance.remove();
    }
    sketchInstance = new p5(sketch);
  }

  function setArray(values) {
    state.values = values.slice();
    state.displayPositions = [];
    state.sizes = [];
    state.sortedSet = new Set();
    state.highlight = -1;
    state.pointers = { i: null, j: null };
    state.range = { low: -1, high: -1 };
    state.compare = null;
    state.swapped = null;
    state.swappedHighlight = false;
    state.swapping = null;
    state.userZoom = 1;
    state.panX = 0;
    state.panY = 0;
    labelCache.clear();
    syncLayout();
    state.displayPositions = state.targetPositions.slice();
    updateHud();
  }

  function getArray() {
    return state.values.slice();
  }

  function markRange(low, high) {
    state.range = { low, high };
  }

  function setHighlight(index) {
    state.highlight = index;
  }

  function setCompare(indexA, indexB, text) {
    const indices = [];
    if (indexA != null && indexA >= 0) indices.push(indexA);
    if (indexB != null && indexB >= 0 && indexB !== indexA) {
      indices.push(indexB);
    }
    state.compare = { indices, text: text || "" };
    state.swappedHighlight = false;
    if (indexA != null && indexA >= 0) {
      state.highlight = indexA;
    }
    updateHud();
  }

  function setPointers(i, j) {
    state.pointers = {
      i: i == null || !Number.isFinite(i) ? null : i,
      j: j == null || !Number.isFinite(j) ? null : j,
    };
  }

  function setSwapped(value) {
    if (value == null) {
      state.swapped = null;
    } else {
      state.swapped = !!value;
    }
  }

  /**
   * Highlight the swapped orb during a condition check (transparent cage + HUD).
   */
  function setSwappedHighlight(on, text) {
    state.swappedHighlight = !!on;
    if (on) {
      state.compare = { indices: [], text: text || "" };
      state.highlight = -1;
    } else if (state.compare && state.compare.indices.length === 0) {
      state.compare = null;
    }
    updateHud();
  }

  function clearCompare() {
    state.compare = null;
    state.swappedHighlight = false;
    updateHud();
  }

  function clearHighlights() {
    state.highlight = -1;
    clearCompare();
  }

  function markSorted(index) {
    state.sortedSet.add(index);
  }

  function markAllSorted() {
    for (let i = 0; i < state.values.length; i++) {
      state.sortedSet.add(i);
    }
    state.highlight = -1;
    state.pointers = { i: null, j: null };
    state.range = { low: -1, high: -1 };
    state.swappedHighlight = false;
    clearCompare();
  }

  function swapAnimate(a, b, durationMs) {
    return new Promise((resolve) => {
      if (a === b) {
        resolve();
        return;
      }
      clearCompare();
      const start = performance.now();
      state.swapping = { a, b, t: 0 };

      function frame(now) {
        const t = Math.min(1, (now - start) / durationMs);
        state.swapping.t = t;
        if (t < 1) {
          requestAnimationFrame(frame);
        } else {
          const tmp = state.values[a];
          state.values[a] = state.values[b];
          state.values[b] = tmp;
          state.swapping = null;
          syncLayout();
          state.displayPositions[a] = state.targetPositions[a];
          state.displayPositions[b] = state.targetPositions[b];
          resolve();
        }
      }
      requestAnimationFrame(frame);
    });
  }

  function resize() {
    if (sketchInstance && sketchInstance.windowResized) {
      sketchInstance.windowResized();
    }
  }

  function zoomBy(factor) {
    state.userZoom = Math.min(2.6, Math.max(0.45, state.userZoom * factor));
  }

  function setZoom(value) {
    state.userZoom = Math.min(2.6, Math.max(0.45, Number(value) || 1));
  }

  function refreshLabels() {
    labelCache.clear();
  }

  return {
    init,
    setArray,
    getArray,
    markRange,
    setHighlight,
    setCompare,
    setPointers,
    setSwapped,
    setSwappedHighlight,
    clearCompare,
    clearHighlights,
    markSorted,
    markAllSorted,
    swapAnimate,
    resize,
    zoomBy,
    setZoom,
    refreshLabels,
  };
})();
