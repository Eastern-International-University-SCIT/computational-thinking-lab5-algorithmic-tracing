/**
 * p5.js WEBGL visualization for Jump Search.
 * Sorted array as square 3D boxes; prev / step pointers; step_length span line.
 */

window.ArrayViz = (function () {
  const COLORS = {
    base: [62, 110, 130],
    range: [120, 168, 186],
    active: [61, 90, 128],
    miss: [196, 92, 74],
    found: [74, 124, 89],
    edge: [255, 220, 90],
    purple: [128, 90, 213],
    keyBox: [46, 160, 144],
    pointerPrev: [61, 90, 128],
    pointerStep: [196, 92, 74],
    pointerStepGrey: [148, 156, 164],
    pointerStepOrN: [91, 106, 191],
    stepLine: [217, 119, 6],
  };

  const SIDE_GAP = 16;
  const FIT_MARGIN = 0.72;

  let sketchInstance = null;
  let hostEl = null;
  let hudEl = null;
  let resultEl = null;
  const labelCache = new Map();

  const state = {
    values: [],
    displayPositions: [],
    targetPositions: [],
    sizes: [],
    highlight: -1,
    foundIndex: -1,
    missIndex: -1,
    range: { low: -1, high: -1 },
    pointers: { prev: null, step: null, stepOrN: null },
    stepSpan: { start: null, length: null },
    compare: null,
    compareAnim: null,
    keyValue: null,
    keyDisplayX: 0,
    resultMessage: null,
    rotY: 0.22,
    rotX: -0.32,
    panX: 0,
    panY: 0,
    dragging: false,
    dragMode: "rotate", // "rotate" | "pan"
    lastMouse: { x: 0, y: 0 },
    fitScale: 1,
    userZoom: 1,
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

  function valueSize(value) {
    const vals = state.values.length ? state.values : [value];
    const minV = Math.min(...vals, value);
    const maxV = Math.max(...vals, value);
    return softScale(value, minV, maxV) * state.fitScale;
  }

  function computeLayout(canvasWidth) {
    const n = state.values.length;
    if (!n) {
      return { sizes: [], positions: [], fitScale: 1 };
    }

    const minV = Math.min(...state.values);
    const maxV = Math.max(...state.values);
    const rawSizes = state.values.map((v) => softScale(v, minV, maxV));
    const rawWidth =
      rawSizes.reduce((sum, s) => sum + s, 0) + (n - 1) * SIDE_GAP;

    const viewWidth = Math.max(220, canvasWidth * FIT_MARGIN * 0.85);
    const fitScale = Math.min(1.35, viewWidth / Math.max(rawWidth, 1));

    const sizes = rawSizes.map((s) => s * fitScale);
    const gap = SIDE_GAP * fitScale;

    const positions = [];
    let cursor = 0;
    for (let i = 0; i < n; i++) {
      positions.push(cursor + sizes[i] / 2);
      cursor += sizes[i] + gap;
    }
    const totalWidth = cursor - gap;
    const offset = totalWidth / 2;
    return {
      sizes,
      positions: positions.map((x) => x - offset),
      fitScale,
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

  /** World X for any integer index, including past the ends of the array. */
  function xAtIndex(index) {
    const n = state.values.length;
    if (!n) return 0;
    if (index >= 0 && index < n && state.targetPositions[index] != null) {
      return state.targetPositions[index];
    }
    const avg =
      n > 1
        ? (state.targetPositions[n - 1] - state.targetPositions[0]) / (n - 1)
        : (state.sizes[0] || 40) + SIDE_GAP * state.fitScale;
    if (index < 0) {
      return state.targetPositions[0] + index * avg;
    }
    return state.targetPositions[n - 1] + (index - (n - 1)) * avg;
  }

  function colorFor(i) {
    if (i === state.foundIndex) return COLORS.found;
    if (i === state.missIndex) return COLORS.miss;
    if (i === state.highlight) return COLORS.active;
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

  function drawEdgeCube(p, size, color) {
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
    const c = color || COLORS.edge;
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

  function useSolidFill(p, rgb) {
    try {
      p.resetShader();
    } catch (_) {
      /* ignore */
    }
    p.fill(rgb[0], rgb[1], rgb[2], 255);
    p.noStroke();
  }

  function drawTopMarker(p, x, topY, size, color, labelKey, fallback) {
    const s = state.fitScale;
    const text = labelText(labelKey, fallback);
    const wide = text.length > 6;
    p.push();
    useSolidFill(p, color);
    p.translate(x, topY - 22 * s, 0);
    p.cone(7 * s, 14 * s, 8);
    p.pop();

    p.push();
    p.translate(x, topY - 42 * s, 0);
    p.rotateY(-state.rotY);
    p.rotateX(-state.rotX);
    p.textureMode(p.NORMAL);
    p.texture(
      makeLabel(p, text, {
        w: wide ? 150 : 110,
        h: 36,
        size: wide ? 13 : 15,
        bg: [color[0], color[1], color[2], 235],
        fg: [255, 255, 255],
      })
    );
    p.plane(Math.max(wide ? 52 : 38, size * (wide ? 1.05 : 0.8)), 15);
    p.pop();
  }

  /**
   * Upward arrow + label under a box. Optional extraY pushes the stack lower
   * (used so the step_length line can sit under the "step" label).
   */
  function drawIndexPointer(p, text, x, boxBottomY, size, color, xShift, extraY) {
    const s = state.fitScale;
    const shift = xShift || 0;
    const dy = extraY || 0;
    const labelY = boxBottomY + 20 + size * 0.01 + 16 * s + dy;
    const arrowY = boxBottomY + 10 + size * 0.005 + 2.5 * s + dy;

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
        w: 72,
        h: 34,
        size: 14,
        bg: [color[0], color[1], color[2], 235],
        fg: [255, 255, 255],
      })
    );
    p.plane(Math.max(22, size * 0.5), 14);
    p.pop();

    return labelY;
  }

  function drawStepLengthSpan(p, startIndex, length, belowY) {
    if (startIndex == null || length == null || length <= 0) return;
    const s = state.fitScale;
    const x0 = xAtIndex(startIndex);
    const x1 = xAtIndex(startIndex + length);
    const y = belowY + 18 * s;
    const z = 2;
    const r = 5.5 * s;

    p.push();
    p.stroke(COLORS.stepLine[0], COLORS.stepLine[1], COLORS.stepLine[2]);
    p.strokeWeight(2.4 * s);
    p.line(x0, y, z, x1, y, z);
    p.noStroke();
    useSolidFill(p, COLORS.stepLine);
    p.translate(x0, y, z);
    p.sphere(r, 12, 10);
    p.pop();

    p.push();
    useSolidFill(p, COLORS.stepLine);
    p.translate(x1, y, z);
    p.sphere(r, 12, 10);
    p.pop();
  }

  function easeInOut(t) {
    return t * t * (3 - 2 * t);
  }

  /** Elevated Y for the always-visible key box (above the tallest array box). */
  function keyLaneY(baseY) {
    const n = state.values.length;
    let maxSize = 40 * state.fitScale;
    for (let i = 0; i < n; i++) {
      maxSize = Math.max(maxSize, state.sizes[i] || 0);
    }
    const keySize =
      state.keyValue != null ? valueSize(state.keyValue) : maxSize * 0.85;
    return baseY - maxSize - keySize * 0.55 - 36 * state.fitScale;
  }

  function drawKeyBox(p, x, y, keyValue, keySize, purple, showQuestion) {
    const keyCol =
      purple &&
      state.compareAnim &&
      (keyValue < state.compareAnim.arrayValue ||
        keyValue === state.compareAnim.arrayValue)
        ? COLORS.purple
        : COLORS.keyBox;

    p.push();
    p.translate(x, y, 6);
    useSolidFill(p, keyCol);
    p.box(keySize, keySize, keySize);
    drawFaceLabel(p, String(keyValue), keySize, keyCol);
    if (
      purple &&
      state.compareAnim &&
      (keyValue < state.compareAnim.arrayValue ||
        keyValue === state.compareAnim.arrayValue)
    ) {
      drawEdgeCube(p, keySize * 1.06, COLORS.purple);
    }
    p.pop();

    p.push();
    p.translate(x, y - keySize * 0.65, 8);
    p.rotateY(-state.rotY);
    p.rotateX(-state.rotX);
    p.textureMode(p.NORMAL);
    p.texture(
      makeLabel(p, labelText("labelKey", "key"), {
        w: 64,
        h: 30,
        size: 13,
        bg: [46, 160, 144, 235],
        fg: [255, 255, 255],
      })
    );
    p.plane(Math.max(20, keySize * 0.45), 12);
    p.pop();

    if (showQuestion) {
      p.push();
      p.translate(x, y - keySize * 0.95 - 18 * state.fitScale, 10);
      p.rotateY(-state.rotY);
      p.rotateX(-state.rotX);
      p.textureMode(p.NORMAL);
      p.texture(
        makeLabel(p, "?", {
          w: 56,
          h: 48,
          size: 28,
          bg: [255, 255, 255, 230],
          fg: [128, 90, 213],
        })
      );
      p.plane(22 * state.fitScale, 22 * state.fitScale);
      p.pop();
    }
  }

  /**
   * Comparison layout: key stays in the elevated lane and slides to the column;
   * the array box rises straight up under the key, holds (purple), then drops back.
   */
  function drawCompareAnim(p, baseY) {
    const anim = state.compareAnim;
    if (!anim) return null;

    const idx = anim.index;
    const originX = state.targetPositions[idx] ?? 0;
    const arrSize = state.sizes[idx] || 40;
    const keySize = anim.keySize;
    const keyY = keyLaneY(baseY);
    const restY = baseY - arrSize / 2;
    // Rise toward the key: meet just under the key's bottom face (Y grows downward).
    const liftY = keyY + keySize * 0.5 + arrSize * 0.5 + 8 * state.fitScale;

    let lift = 0;
    let purple = false;
    let showQuestion = false;
    let keyTargetX = 0;

    if (anim.phase === "move") {
      // Key travels to the column; box stays down
      lift = 0;
      keyTargetX = originX;
      showQuestion = anim.t > 0.6;
    } else if (anim.phase === "lift") {
      lift = easeInOut(anim.t);
      keyTargetX = originX;
      showQuestion = true;
    } else if (anim.phase === "hold") {
      lift = 1;
      keyTargetX = originX;
      purple = true;
      showQuestion = anim.t < 0.3;
    } else if (anim.phase === "return") {
      // Box drops; key heads back to center
      lift = 1 - easeInOut(anim.t);
      keyTargetX = 0;
      purple = anim.t < 0.2;
    }

    const comparedX = originX;
    const comparedY = restY + (liftY - restY) * lift;

    return {
      comparedX,
      comparedY,
      keyTargetX,
      purple,
      showQuestion,
      purpleCompared:
        purple &&
        (anim.arrayValue < anim.keyValue || anim.arrayValue === anim.keyValue),
      purpleKey:
        purple &&
        (anim.keyValue < anim.arrayValue || anim.keyValue === anim.arrayValue),
    };
  }

  function isValidPointer(index) {
    return index != null && Number.isFinite(index);
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

  function updateResultHud() {
    if (!resultEl) return;
    const msg = state.resultMessage;
    if (!msg) {
      resultEl.hidden = true;
      resultEl.textContent = "";
      resultEl.classList.remove("is-found", "is-miss");
      return;
    }
    const text =
      msg.type === "found"
        ? window.I18n
          ? window.I18n.formatMsg("foundMsg", {
              key: msg.key,
              position: msg.position,
            })
          : `Key ${msg.key} was found at position ${msg.position}!`
        : window.I18n
          ? window.I18n.formatMsg("missMsg", { key: msg.key })
          : `Key ${msg.key} was not found in the array!`;
    resultEl.hidden = false;
    resultEl.textContent = text;
    resultEl.classList.toggle("is-found", msg.type === "found");
    resultEl.classList.toggle("is-miss", msg.type === "miss");
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

      const baseY = 52;
      const animDraw = drawCompareAnim(p, baseY);

      // Persistent key box: always above the array; slides to the compare column
      if (state.keyValue != null && Number.isFinite(state.keyValue)) {
        const keySize = valueSize(state.keyValue);
        const keyY = keyLaneY(baseY);
        const keyTargetX =
          animDraw && animDraw.keyTargetX != null ? animDraw.keyTargetX : 0;
        state.keyDisplayX += (keyTargetX - state.keyDisplayX) * 0.2;
        drawKeyBox(
          p,
          state.keyDisplayX,
          keyY,
          state.keyValue,
          keySize,
          !!(animDraw && animDraw.purpleKey),
          !!(animDraw && animDraw.showQuestion)
        );
      }

      for (let i = 0; i < n; i++) {
        const value = state.values[i];
        const size = state.sizes[i] || 40;
        let x = state.displayPositions[i];
        let cy = baseY - size / 2;
        let col = colorFor(i);

        if (animDraw && state.compareAnim && state.compareAnim.index === i) {
          x = animDraw.comparedX;
          cy = animDraw.comparedY;
          if (animDraw.purpleCompared) col = COLORS.purple;
        }

        p.push();
        p.translate(x, cy, 0);
        useSolidFill(p, col);
        p.box(size, size, size);
        drawFaceLabel(p, String(value), size, col);
        useSolidFill(p, col);
        if (
          isCompared(i) ||
          (animDraw &&
            animDraw.purpleCompared &&
            state.compareAnim.index === i)
        ) {
          drawEdgeCube(
            p,
            size * 1.04,
            animDraw &&
              animDraw.purpleCompared &&
              state.compareAnim.index === i
              ? COLORS.purple
              : COLORS.edge
          );
        }
        p.pop();
        useSolidFill(p, col);

        if (i === state.foundIndex) {
          drawTopMarker(
            p,
            state.targetPositions[i],
            baseY - size,
            size,
            COLORS.found,
            "labelFound",
            "found"
          );
        } else if (i === state.missIndex) {
          drawTopMarker(
            p,
            state.targetPositions[i],
            baseY - size,
            size,
            COLORS.miss,
            "labelMiss",
            "miss"
          );
        } else if (
          state.pointers.stepOrN != null &&
          state.pointers.stepOrN === i
        ) {
          // Arrow above the box that A[step_or_n − 1] refers to
          drawTopMarker(
            p,
            state.targetPositions[i],
            baseY - size,
            size,
            COLORS.pointerStepOrN,
            "labelStepOrN",
            "step_or_n"
          );
        }
      }

      const showPrev = isValidPointer(state.pointers.prev);
      const showStep = isValidPointer(state.pointers.step);

      if (showPrev || showStep) {
        const sameSlot =
          showPrev &&
          showStep &&
          state.pointers.prev === state.pointers.step;
        if (showPrev) {
          const idx = state.pointers.prev;
          const size =
            idx >= 0 && idx < n ? state.sizes[idx] || 40 : 40 * state.fitScale;
          const x = xAtIndex(idx);
          drawIndexPointer(
            p,
            labelText("labelPrev", "prev"),
            x,
            baseY,
            size,
            COLORS.pointerPrev,
            sameSlot ? -14 * state.fitScale : 0
          );
        }
        if (showStep) {
          const idx = state.pointers.step;
          const outOfRange = idx < 0 || idx >= n;
          const size =
            !outOfRange ? state.sizes[idx] || 40 : 40 * state.fitScale;
          const x = xAtIndex(idx);
          const stepColor = outOfRange
            ? COLORS.pointerStepGrey
            : COLORS.pointerStep;
          const stepLabelY = drawIndexPointer(
            p,
            labelText("labelStep", "step"),
            x,
            baseY,
            size,
            stepColor,
            sameSlot ? 14 * state.fitScale : 0
          );
          // Hide step_length span once step leaves the array
          if (
            !outOfRange &&
            state.stepSpan.start != null &&
            state.stepSpan.length != null &&
            stepLabelY != null
          ) {
            drawStepLengthSpan(
              p,
              state.stepSpan.start,
              state.stepSpan.length,
              stepLabelY
            );
          }
        }
      }
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
    resultEl = hostEl.querySelector("#result-hud");
    if (!resultEl) {
      resultEl = document.createElement("div");
      resultEl.id = "result-hud";
      resultEl.className = "result-hud";
      resultEl.hidden = true;
      hostEl.appendChild(resultEl);
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
    state.foundIndex = -1;
    state.missIndex = -1;
    state.highlight = -1;
    state.pointers = { prev: null, step: null, stepOrN: null };
    state.stepSpan = { start: null, length: null };
    state.range = { low: -1, high: -1 };
    state.compare = null;
    state.compareAnim = null;
    state.resultMessage = null;
    state.keyDisplayX = 0;
    state.userZoom = 1;
    state.panX = 0;
    state.panY = 0;
    labelCache.clear();
    syncLayout();
    state.displayPositions = state.targetPositions.slice();
    updateHud();
    updateResultHud();
  }

  function setKeyValue(value) {
    if (value == null || !Number.isFinite(Number(value))) {
      state.keyValue = null;
      return;
    }
    state.keyValue = Number(value);
  }

  function getArray() {
    return state.values.slice();
  }

  function markRange(low, high) {
    state.range = { low, high };
  }

  function setFoundIndex(index) {
    state.foundIndex =
      index == null || !Number.isFinite(index) ? -1 : index;
    if (state.foundIndex >= 0) {
      state.missIndex = -1;
    }
  }

  function setMissIndex(index) {
    state.missIndex =
      index == null || !Number.isFinite(index) ? -1 : index;
    if (state.missIndex >= 0) {
      state.foundIndex = -1;
    }
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
    if (indexA != null && indexA >= 0) {
      state.highlight = indexA;
    }
    updateHud();
  }

  function setPointers(prev, step, stepOrN) {
    state.pointers = {
      prev: prev == null || !Number.isFinite(prev) ? null : prev,
      step: step == null || !Number.isFinite(step) ? null : step,
      stepOrN:
        stepOrN == null || !Number.isFinite(stepOrN) ? null : stepOrN,
    };
  }

  function setStepSpan(start, length) {
    state.stepSpan = {
      start: start == null || !Number.isFinite(start) ? null : start,
      length: length == null || !Number.isFinite(length) ? null : length,
    };
  }

  function clearCompare() {
    state.compare = null;
    updateHud();
  }

  function clearHighlights() {
    state.highlight = -1;
    clearCompare();
  }

  function setResultMessage(type, key, position) {
    state.resultMessage = type
      ? { type, key, position }
      : null;
    updateResultHud();
  }

  function clearOutcome() {
    state.foundIndex = -1;
    state.missIndex = -1;
    state.highlight = -1;
    state.pointers = { prev: null, step: null, stepOrN: null };
    state.stepSpan = { start: null, length: null };
    state.range = { low: -1, high: -1 };
    state.compareAnim = null;
    state.resultMessage = null;
    state.keyDisplayX = 0;
    clearCompare();
    updateResultHud();
  }

  /**
   * Animate comparing A[index] with keyValue.
   * Phases: key moves to column → box lifts up → purple hold → box returns, key to center.
   */
  function animateCompare(index, keyValue, durationMs) {
    return new Promise((resolve) => {
      if (index < 0 || index >= state.values.length) {
        resolve();
        return;
      }
      const total = Math.max(700, durationMs || 1400);
      const arrayValue = state.values[index];
      const keySize = valueSize(keyValue);
      const start = performance.now();

      state.keyValue = keyValue;
      state.compareAnim = {
        index,
        keyValue,
        arrayValue,
        keySize,
        phase: "move",
        t: 0,
      };
      state.highlight = index;

      // Phase fractions of total time
      const moveEnd = 0.22;
      const liftEnd = 0.48;
      const holdEnd = 0.72;

      function frame(now) {
        if (!state.compareAnim) {
          resolve();
          return;
        }
        const u = Math.min(1, (now - start) / total);
        if (u <= moveEnd) {
          state.compareAnim.phase = "move";
          state.compareAnim.t = moveEnd === 0 ? 1 : u / moveEnd;
        } else if (u <= liftEnd) {
          state.compareAnim.phase = "lift";
          state.compareAnim.t = (u - moveEnd) / (liftEnd - moveEnd);
        } else if (u <= holdEnd) {
          state.compareAnim.phase = "hold";
          state.compareAnim.t = (u - liftEnd) / (holdEnd - liftEnd);
        } else {
          state.compareAnim.phase = "return";
          state.compareAnim.t = (u - holdEnd) / (1 - holdEnd);
        }

        if (u < 1) {
          requestAnimationFrame(frame);
        } else {
          state.compareAnim = null;
          if (state.displayPositions[index] != null) {
            state.displayPositions[index] = state.targetPositions[index];
          }
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
    updateResultHud();
  }

  return {
    init,
    setArray,
    getArray,
    setKeyValue,
    markRange,
    setFoundIndex,
    setMissIndex,
    setHighlight,
    setCompare,
    setPointers,
    setStepSpan,
    setResultMessage,
    clearCompare,
    clearHighlights,
    clearOutcome,
    animateCompare,
    resize,
    zoomBy,
    setZoom,
    refreshLabels,
  };
})();
