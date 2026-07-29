/**
 * p5.js WEBGL visualization for Merge Sort.
 * Main array + Memory row (L / R) during two-way merge.
 */

window.ArrayViz = (function () {
  const COLORS = {
    base: [62, 110, 130],
    run1: [61, 126, 166],
    run2: [176, 122, 58],
    active: [61, 90, 128],
    write: [196, 92, 74],
    sorted: [74, 124, 89],
    edge: [255, 220, 90],
    pointerI: [61, 90, 128],
    pointerJ: [196, 92, 74],
    pointerK: [46, 160, 144],
    memL: [61, 126, 166],
    memR: [176, 122, 58],
    mergedTrue: [234, 179, 8],
    mergedFalse: [148, 163, 173],
    mergedEdge: [217, 119, 6],
  };

  const SIDE_GAP = 16;
  const FIT_MARGIN = 0.68;
  const SPHERE_GAP = 40;
  const SPHERE_DIAM = 46;
  const MEM_GROUP_GAP = 36;
  const MEM_ROW_GAP = 155;
  const MEM_LABEL_PLANE_W = 52;
  const COLORS_TRASH = [148, 163, 173];

  let sketchInstance = null;
  let hostEl = null;
  let hudEl = null;
  const labelCache = new Map();

  const state = {
    values: [],
    displayPositions: [],
    targetPositions: [],
    sizes: [],
    memoryL: null,
    memoryR: null,
    memLPositions: [],
    memRPositions: [],
    memLSizes: [],
    memRSizes: [],
    highlight: -1,
    writeIndex: -1,
    run1: { low: -1, high: -1 },
    run2: { low: -1, high: -1 },
    markers: { left: null, mid: null, right: null },
    sortedSet: new Set(),
    // iRow / jRow: "A" (main) | "L" | "R"
    pointers: { i: null, j: null, k: null, iRow: "A", jRow: "A" },
    compare: null, // { items: [{row,index}], text }
    merged: null,
    mergedHighlight: false,
    writing: null,
    memFly: null,
    writeAnim: null, // trash-then-fly merge write
    memOrigin: null, // { left, mid, right }
    memFixedSizes: { L: null, R: null }, // locked at copy time
    hiddenMain: new Set(),
    rotY: 0.22,
    rotX: -0.32,
    panX: 0,
    panY: 0,
    dragging: false,
    dragMode: "rotate", // "rotate" | "pan"
    lastMouse: { x: 0, y: 0 },
    fitScale: 1,
    userZoom: 1,
    mergedX: 0,
    memLabelX: 0,
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

  function valueRange() {
    const pool = state.values.slice();
    if (state.memoryL) pool.push(...state.memoryL);
    if (state.memoryR) pool.push(...state.memoryR);
    if (!pool.length) return { minV: 0, maxV: 1 };
    return { minV: Math.min(...pool), maxV: Math.max(...pool) };
  }

  function layoutRow(values, minV, maxV, fitScale, startX) {
    const sizes = values.map((v) => softScale(v, minV, maxV) * fitScale);
    const gap = SIDE_GAP * fitScale;
    const positions = [];
    let cursor = startX;
    for (let i = 0; i < values.length; i++) {
      positions.push(cursor + sizes[i] / 2);
      cursor += sizes[i] + gap;
    }
    const end = values.length ? cursor - gap : startX;
    return { sizes, positions, end };
  }

  function computeLayout(canvasWidth) {
    const n = state.values.length;
    if (!n) {
      return {
        sizes: [],
        positions: [],
        fitScale: 1,
        mergedX: 0,
        memL: { sizes: [], positions: [] },
        memR: { sizes: [], positions: [] },
        memLabelX: 0,
      };
    }

    const { minV, maxV } = valueRange();
    const rawMain = state.values.map((v) => softScale(v, minV, maxV));
    const mainWidth =
      rawMain.reduce((sum, s) => sum + s, 0) + (n - 1) * SIDE_GAP;
    const rawWidth = mainWidth + SPHERE_GAP + SPHERE_DIAM;

    const viewWidth = Math.max(220, canvasWidth * FIT_MARGIN * 0.85);
    const fitScale = Math.min(1.35, viewWidth / Math.max(rawWidth, 1));

    const sizes = rawMain.map((s) => s * fitScale);
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
    const mergedX = cursor + sphereGap + sphereDiam / 2;
    cursor = mergedX + sphereDiam / 2;
    const totalWidth = cursor;
    const offset = totalWidth / 2;

    let memL = { sizes: [], positions: [] };
    let memR = { sizes: [], positions: [] };
    let memLabelX = -offset;
    const mainPositions = positions.map((x) => x - offset);

    if (state.memoryL || state.memoryR) {
      const L = state.memoryL || [];
      const R = state.memoryR || [];
      const origin = state.memOrigin;

      if (origin) {
        // Sit each memory box directly under the A[] cell it was copied from.
        // Prefer sizes locked at copy time so later A[] updates don't resize them.
        memL.sizes = [];
        memL.positions = [];
        for (let i = 0; i < L.length; i++) {
          const src = origin.left + i;
          const fixed =
            state.memFixedSizes.L && state.memFixedSizes.L[i] != null
              ? state.memFixedSizes.L[i]
              : sizes[src] || 40;
          memL.sizes.push(fixed);
          memL.positions.push(mainPositions[src] ?? 0);
        }
        memR.sizes = [];
        memR.positions = [];
        for (let i = 0; i < R.length; i++) {
          const src = origin.mid + 1 + i;
          const fixed =
            state.memFixedSizes.R && state.memFixedSizes.R[i] != null
              ? state.memFixedSizes.R[i]
              : sizes[src] || 40;
          memR.sizes.push(fixed);
          memR.positions.push(mainPositions[src] ?? 0);
        }
      } else {
        const groupGap = MEM_GROUP_GAP * fitScale;
        let memCursor = 0;
        if (L.length) {
          memL = layoutRow(L, minV, maxV, fitScale, memCursor);
          memCursor = memL.end + groupGap;
        }
        if (R.length) {
          memR = layoutRow(R, minV, maxV, fitScale, memCursor);
          memCursor = memR.end;
        }
        const memWidth = Math.max(memCursor, 1);
        const memOffset = memWidth / 2;
        memL.positions = memL.positions.map((x) => x - memOffset);
        memR.positions = memR.positions.map((x) => x - memOffset);
      }

      const allPos = memL.positions.concat(memR.positions);
      const allSizes = memL.sizes.concat(memR.sizes);
      if (allPos.length) {
        let leftEdge = Infinity;
        for (let i = 0; i < allPos.length; i++) {
          leftEdge = Math.min(leftEdge, allPos[i] - (allSizes[i] || 36) / 2);
        }
        memLabelX = leftEdge - 28 * fitScale;
      }
    }

    return {
      sizes,
      positions: mainPositions,
      fitScale,
      mergedX: mergedX - offset,
      memL,
      memR,
      memLabelX,
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
    state.mergedX = layout.mergedX;
    state.memLSizes = layout.memL.sizes;
    state.memRSizes = layout.memR.sizes;
    state.memLPositions = layout.memL.positions;
    state.memRPositions = layout.memR.positions;
    state.memLabelX = layout.memLabelX;

    // Lock memory sizes the first time they are laid out for this copy.
    if (
      state.memoryL &&
      (!state.memFixedSizes.L ||
        state.memFixedSizes.L.length !== state.memoryL.length)
    ) {
      state.memFixedSizes.L = state.memLSizes.slice();
    }
    if (
      state.memoryR &&
      (!state.memFixedSizes.R ||
        state.memFixedSizes.R.length !== state.memoryR.length)
    ) {
      state.memFixedSizes.R = state.memRSizes.slice();
    }

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

  function inSpan(i, span) {
    return span && span.low >= 0 && i >= span.low && i <= span.high;
  }

  function colorFor(i) {
    if (state.writing && i === state.writing.index) return COLORS.write;
    if (i === state.writeIndex) return COLORS.write;
    if (i === state.highlight) return COLORS.active;
    if (state.sortedSet.has(i)) return COLORS.sorted;
    if (inSpan(i, state.run2)) return COLORS.run2;
    if (inSpan(i, state.run1)) return COLORS.run1;
    return COLORS.base;
  }

  function isCompared(row, index) {
    return !!(
      state.compare &&
      state.compare.items &&
      state.compare.items.some((it) => it.row === row && it.index === index)
    );
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

  function useSolidFill(p, rgb, alpha) {
    try {
      p.resetShader();
    } catch (_) {
      /* ignore */
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
        size: (opts && opts.fontSize) || 14,
        bg,
        fg,
      })
    );
    p.plane(planeW, planeH);
    p.pop();
  }

  /** Label floating above a box (left / mid / right markers). */
  function drawAboveLabel(p, text, x, boxTopY, size, opts) {
    const s = state.fitScale;
    const bg = (opts && opts.bg) || [26, 43, 54, 230];
    const wide = text.length > 6;
    p.push();
    p.translate(x, boxTopY - 18 * s, size * 0.12);
    p.rotateY(-state.rotY * 0.9);
    p.rotateX(-state.rotX * 0.4);
    p.textureMode(p.NORMAL);
    p.texture(
      makeLabel(p, text, {
        w: wide ? 140 : 88,
        h: 36,
        size: (opts && opts.fontSize) || 13,
        bg,
        fg: [255, 255, 255],
      })
    );
    p.plane(
      wide ? Math.max(48, size * 1.1) : Math.max(28, size * 0.7),
      14
    );
    p.pop();
  }

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

  function rowLength(row) {
    if (row === "L") return state.memoryL ? state.memoryL.length : 0;
    if (row === "R") return state.memoryR ? state.memoryR.length : 0;
    return state.values.length;
  }

  function isValidPointer(index, row) {
    return (
      index != null &&
      Number.isFinite(index) &&
      index >= 0 &&
      index < rowLength(row || "A")
    );
  }

  function slotOf(row, index) {
    if (row === "L") {
      return {
        x: state.memLPositions[index],
        size: state.memLSizes[index] || 36,
      };
    }
    if (row === "R") {
      return {
        x: state.memRPositions[index],
        size: state.memRSizes[index] || 36,
      };
    }
    return {
      x: state.targetPositions[index],
      size: state.sizes[index] || 40,
    };
  }

  function drawMergedOrb(p, baseY) {
    if (state.merged == null) return;

    const s = state.fitScale;
    const diameter = SPHERE_DIAM * s;
    const radius = diameter / 2;
    const x = state.mergedX;
    const cy = baseY - radius;
    const isTrue = state.merged === true;
    const col = isTrue ? COLORS.mergedTrue : COLORS.mergedFalse;
    const valueLabel = isTrue
      ? labelText("labelTrue", "TRUE")
      : labelText("labelFalse", "FALSE");
    const cage = diameter * 1.55;

    p.push();
    p.translate(x, cy, 0);

    if (state.mergedHighlight) {
      p.push();
      useSolidFill(p, [255, 220, 90], 12);
      p.box(cage);
      p.pop();
    }

    useSolidFill(p, col);
    p.sphere(radius, 24, 18);

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

    if (state.mergedHighlight) {
      drawEdgeCube(p, cage, COLORS.mergedEdge);
    }

    p.pop();

    drawUnderLabel(
      p,
      labelText("labelMerged", "merged"),
      x,
      baseY,
      diameter,
      {
        w: 120,
        planeW: Math.max(40, diameter * 1.05),
        fontSize: 14,
        bg: isTrue ? [180, 130, 10, 235] : [90, 100, 110, 235],
      }
    );
  }

  function drawMemoryLabel(p, memBaseY) {
    if (!state.memoryL && !state.memoryR && !state.memFly) return;
    const s = state.fitScale;
    const memTitle = labelText("labelMemory", "Memory");
    const memPlaneW = Math.max(44, MEM_LABEL_PLANE_W * s);
    const memLabelDrawX = state.memLabelX - memPlaneW / 2;
    // Sit with the L/R captions above the memory boxes.
    const labelY = memBaseY - 22 * s;

    p.push();
    p.translate(memLabelDrawX, labelY, 0);
    p.rotateY(-state.rotY * 0.9);
    p.rotateX(-state.rotX * 0.4);
    p.textureMode(p.NORMAL);
    p.texture(
      makeLabel(p, memTitle, {
        w: 130,
        h: 40,
        size: 15,
        bg: [45, 62, 74, 235],
        fg: [255, 255, 255],
      })
    );
    p.plane(memPlaneW, 16);
    p.pop();
  }

  function drawGroupCaptionAbove(p, groupLabel, positions, sizes, color, memBaseY) {
    if (!positions.length) return;
    const s = state.fitScale;
    const leftEdge = positions[0] - (sizes[0] || 36) / 2;
    const last = positions.length - 1;
    const rightEdge = positions[last] + (sizes[last] || 36) / 2;
    const spanW = Math.max(24, rightEdge - leftEdge);
    const centerX = (leftEdge + rightEdge) / 2;
    const maxSize = Math.max(...sizes.map((x) => x || 36));
    const texW = Math.min(420, Math.max(96, Math.round(spanW * 2.4)));
    p.push();
    p.translate(centerX, memBaseY - maxSize - 14 * s, 0.15);
    p.rotateY(-state.rotY * 0.9);
    p.rotateX(-state.rotX * 0.4);
    p.textureMode(p.NORMAL);
    p.texture(
      makeLabel(p, groupLabel, {
        w: texW,
        h: 36,
        size: groupLabel.length > 8 ? 12 : 14,
        bg: [color[0], color[1], color[2], 230],
        fg: [255, 255, 255],
      })
    );
    p.plane(spanW, 14);
    p.pop();
  }

  function drawMemoryRow(p, memBaseY) {
    if (!state.memoryL && !state.memoryR) return;
    if (state.memFly) return;

    drawMemoryLabel(p, memBaseY);

    function drawMemBoxes(values, positions, sizes, color, row, groupLabel) {
      if (!values || !values.length) return;
      for (let i = 0; i < values.length; i++) {
        const size = sizes[i] || 36;
        const x = positions[i];
        const cy = memBaseY - size / 2;
        p.push();
        p.translate(x, cy, 0);
        useSolidFill(p, color);
        p.box(size, size, size);
        drawFaceLabel(p, String(values[i]), size, color);
        useSolidFill(p, color);
        if (isCompared(row, i)) {
          drawEdgeCube(p, size * 1.04);
        }
        p.pop();
      }

      // Caption still spans the full original group footprint.
      drawGroupCaptionAbove(
        p,
        groupLabel,
        positions,
        sizes,
        color,
        memBaseY
      );
    }

    if (state.memoryL) {
      drawMemBoxes(
        state.memoryL,
        state.memLPositions,
        state.memLSizes,
        COLORS.memL,
        "L",
        labelText("labelMemL", "L")
      );
    }
    if (state.memoryR) {
      drawMemBoxes(
        state.memoryR,
        state.memRPositions,
        state.memRSizes,
        COLORS.memR,
        "R",
        labelText("labelMemR", "R")
      );
    }
  }

  function drawMemFly(p) {
    if (!state.memFly) return;
    const ease = state.memFly.t * state.memFly.t * (3 - 2 * state.memFly.t);
    for (const item of state.memFly.items) {
      const x = item.fromX + (item.toX - item.fromX) * ease;
      const yBottom = item.fromY + (item.toY - item.fromY) * ease;
      const size = item.sizeFrom + (item.sizeTo - item.sizeFrom) * ease;
      const arc = -Math.sin(ease * Math.PI) * (26 * state.fitScale);
      const cy = yBottom - size / 2 + arc;
      p.push();
      p.translate(x, cy, 8);
      useSolidFill(p, item.color);
      p.box(size, size, size);
      drawFaceLabel(p, String(item.value), size, item.color);
      useSolidFill(p, item.color);
      p.pop();
    }
  }

  function drawWriteAnim(p, baseY) {
    const anim = state.writeAnim;
    if (!anim) return;
    const s = state.fitScale;

    if (anim.phase === "trash") {
      const t = anim.t;
      const lift = t * 58 * s;
      const scale = 1 - t * 0.55;
      const alpha = Math.max(0, 255 * (1 - t));
      const size = (anim.sizeTo || 40) * scale;
      const x = anim.toX;
      const cy = baseY - size / 2 - lift;

      p.push();
      p.translate(x, cy, 6);
      useSolidFill(p, COLORS_TRASH, alpha);
      p.box(size, size, size);
      if (alpha > 40) {
        drawFaceLabel(p, String(anim.oldValue), size, COLORS_TRASH);
      }
      p.pop();

      // Trash symbol above the rising box
      p.push();
      p.translate(x, cy - size / 2 - 16 * s, 8);
      p.rotateY(-state.rotY * 0.9);
      p.rotateX(-state.rotX * 0.4);
      p.textureMode(p.NORMAL);
      p.texture(
        makeLabel(p, "trash", {
          w: 90,
          h: 40,
          size: 14,
          bg: [60, 70, 80, Math.round(alpha)],
          fg: [255, 255, 255],
        })
      );
      p.plane(Math.max(24, 28 * s), Math.max(12, 14 * s));
      p.pop();
      return;
    }

    if (anim.phase === "fly") {
      const ease = anim.t * anim.t * (3 - 2 * anim.t);
      const x = anim.fromX + (anim.toX - anim.fromX) * ease;
      const yBottom = anim.fromY + (anim.toY - anim.fromY) * ease;
      const size = anim.sizeFrom + (anim.sizeTo - anim.sizeFrom) * ease;
      const arc = -Math.sin(ease * Math.PI) * (22 * s);
      const cy = yBottom - size / 2 + arc;
      p.push();
      p.translate(x, cy, 10);
      useSolidFill(p, anim.color);
      p.box(size, size, size);
      drawFaceLabel(p, String(anim.newValue), size, anim.color);
      useSolidFill(p, anim.color);
      p.pop();
    }
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

      const hasMemory = !!(
        state.memoryL ||
        state.memoryR ||
        state.memFly ||
        state.writeAnim
      );
      const baseY = hasMemory ? 0 : 52;
      const memBaseY = baseY + MEM_ROW_GAP * state.fitScale;

      for (let i = 0; i < n; i++) {
        if (state.hiddenMain.has(i)) {
          // Still show left/mid/right markers above empty slots if needed
          const size = state.sizes[i] || 40;
          const x = state.displayPositions[i];
          const markerParts = [];
          if (state.markers.left === i) {
            markerParts.push(labelText("labelLeft", "left"));
          }
          if (state.markers.mid === i) {
            markerParts.push(labelText("labelMid", "mid"));
          }
          if (state.markers.right === i) {
            markerParts.push(labelText("labelRight", "right"));
          }
          if (markerParts.length) {
            drawAboveLabel(
              p,
              markerParts.join(" / "),
              x,
              baseY - size,
              size
            );
          }
          continue;
        }

        const value = state.values[i];
        const size = state.sizes[i] || 40;
        const x = state.displayPositions[i];
        let yLift = 0;
        if (state.writing && i === state.writing.index) {
          yLift = -Math.sin(state.writing.t * Math.PI) * (18 * state.fitScale);
        }

        const col = colorFor(i);
        const cy = baseY - size / 2 + yLift;

        p.push();
        p.translate(x, cy, 0);
        useSolidFill(p, col);
        p.box(size, size, size);
        drawFaceLabel(p, String(value), size, col);
        useSolidFill(p, col);
        if (isCompared("A", i)) {
          drawEdgeCube(p, size * 1.04);
        }
        p.pop();
        useSolidFill(p, col);

        const markerParts = [];
        if (state.markers.left === i) {
          markerParts.push(labelText("labelLeft", "left"));
        }
        if (state.markers.mid === i) {
          markerParts.push(labelText("labelMid", "mid"));
        }
        if (state.markers.right === i) {
          markerParts.push(labelText("labelRight", "right"));
        }
        if (markerParts.length) {
          drawAboveLabel(
            p,
            markerParts.join(" / "),
            x,
            baseY - size + yLift,
            size
          );
        }
      }

      if (state.memFly) {
        drawMemoryLabel(p, memBaseY);
        drawMemFly(p);
      } else if (state.memoryL || state.memoryR) {
        drawMemoryRow(p, memBaseY);
      }

      drawWriteAnim(p, baseY);

      const iRow = state.pointers.iRow || "A";
      const jRow = state.pointers.jRow || "A";
      const showI = isValidPointer(state.pointers.i, iRow);
      const showJ = isValidPointer(state.pointers.j, jRow);
      const showK = isValidPointer(state.pointers.k, "A");

      function pointersAt(row, idx) {
        const list = [];
        if (showI && iRow === row && state.pointers.i === idx) list.push("i");
        if (showJ && jRow === row && state.pointers.j === idx) list.push("j");
        if (showK && row === "A" && state.pointers.k === idx) list.push("k");
        return list;
      }

      function shiftFor(row, idx, name) {
        const at = pointersAt(row, idx);
        if (at.length <= 1) return 0;
        const s = 11 * state.fitScale;
        const pos = at.indexOf(name);
        if (at.length === 2) return pos === 0 ? -s : s;
        if (pos === 0) return -s;
        if (pos === 1) return 0;
        return s;
      }

      function rowBase(row) {
        return row === "A" ? baseY : memBaseY;
      }

      if (showI) {
        const idx = state.pointers.i;
        const slot = slotOf(iRow, idx);
        drawIndexPointer(
          p,
          labelText("labelI", "i"),
          slot.x,
          rowBase(iRow),
          slot.size,
          COLORS.pointerI,
          shiftFor(iRow, idx, "i")
        );
      }
      if (showJ) {
        const idx = state.pointers.j;
        const slot = slotOf(jRow, idx);
        drawIndexPointer(
          p,
          labelText("labelJ", "j"),
          slot.x,
          rowBase(jRow),
          slot.size,
          COLORS.pointerJ,
          shiftFor(jRow, idx, "j")
        );
      }
      if (showK) {
        const idx = state.pointers.k;
        const slot = slotOf("A", idx);
        drawIndexPointer(
          p,
          labelText("labelK", "k"),
          slot.x,
          baseY,
          slot.size,
          COLORS.pointerK,
          shiftFor("A", idx, "k")
        );
      }

      drawMergedOrb(p, baseY);
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
    state.writeIndex = -1;
    state.pointers = { i: null, j: null, k: null, iRow: "A", jRow: "A" };
    state.run1 = { low: -1, high: -1 };
    state.run2 = { low: -1, high: -1 };
    state.markers = { left: null, mid: null, right: null };
    state.compare = null;
    state.merged = null;
    state.mergedHighlight = false;
    state.writing = null;
    state.memoryL = null;
    state.memoryR = null;
    state.memFly = null;
    state.writeAnim = null;
    state.memOrigin = null;
    state.memFixedSizes = { L: null, R: null };
    state.hiddenMain = new Set();
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

  function setMemory(L, R, origin) {
    state.memoryL = L && L.length ? L.slice() : null;
    state.memoryR = R && R.length ? R.slice() : null;
    state.memOrigin = origin
      ? { left: origin.left, mid: origin.mid, right: origin.right }
      : null;
    state.memFly = null;
    state.writeAnim = null;
    state.hiddenMain = new Set();
    state.memFixedSizes = { L: null, R: null };
    syncLayout();
  }

  /**
   * Assign Memory L / R with a flight animation from A[left..mid] and
   * A[mid+1..right] down into slots directly beneath those cells.
   */
  function setMemoryAnimate(L, R, left, mid, right, durationMs) {
    return new Promise((resolve) => {
      state.memoryL = L && L.length ? L.slice() : null;
      state.memoryR = R && R.length ? R.slice() : null;
      state.memOrigin = { left, mid, right };
      state.memFixedSizes = { L: null, R: null };
      state.hiddenMain = new Set();
      syncLayout();

      const hasMemory = !!(state.memoryL || state.memoryR);
      const baseY = hasMemory ? 0 : 52;
      const memBaseY = baseY + MEM_ROW_GAP * state.fitScale;
      const items = [];

      if (state.memoryL) {
        for (let i = 0; i < state.memoryL.length; i++) {
          const src = left + i;
          const boxSize = state.memLSizes[i] || state.sizes[src] || 40;
          items.push({
            value: state.memoryL[i],
            fromX: state.targetPositions[src] ?? 0,
            fromY: baseY,
            toX: state.memLPositions[i] ?? 0,
            toY: memBaseY,
            sizeFrom: boxSize,
            sizeTo: boxSize,
            color: COLORS.memL,
          });
        }
      }
      if (state.memoryR) {
        for (let i = 0; i < state.memoryR.length; i++) {
          const src = mid + 1 + i;
          const boxSize = state.memRSizes[i] || state.sizes[src] || 40;
          items.push({
            value: state.memoryR[i],
            fromX: state.targetPositions[src] ?? 0,
            fromY: baseY,
            toX: state.memRPositions[i] ?? 0,
            toY: memBaseY,
            sizeFrom: boxSize,
            sizeTo: boxSize,
            color: COLORS.memR,
          });
        }
      }

      if (!items.length) {
        state.memFly = null;
        resolve();
        return;
      }

      const start = performance.now();
      const dur = Math.max(280, durationMs || 700);
      state.memFly = { t: 0, items };

      function frame(now) {
        const t = Math.min(1, (now - start) / dur);
        state.memFly.t = t;
        if (t < 1) {
          requestAnimationFrame(frame);
        } else {
          state.memFly = null;
          resolve();
        }
      }
      requestAnimationFrame(frame);
    });
  }

  function clearMemory() {
    state.memoryL = null;
    state.memoryR = null;
    state.memFly = null;
    state.writeAnim = null;
    state.memOrigin = null;
    state.memFixedSizes = { L: null, R: null };
    state.hiddenMain = new Set();
    if (state.pointers.iRow === "L" || state.pointers.iRow === "R") {
      state.pointers.i = null;
      state.pointers.iRow = "A";
    }
    if (state.pointers.jRow === "L" || state.pointers.jRow === "R") {
      state.pointers.j = null;
      state.pointers.jRow = "A";
    }
    syncLayout();
  }

  function setRuns(leftLow, leftHigh, rightLow, rightHigh) {
    state.run1 = {
      low: leftLow == null ? -1 : leftLow,
      high: leftHigh == null ? -1 : leftHigh,
    };
    state.run2 = {
      low: rightLow == null ? -1 : rightLow,
      high: rightHigh == null ? -1 : rightHigh,
    };
  }

  function clearRuns() {
    state.run1 = { low: -1, high: -1 };
    state.run2 = { low: -1, high: -1 };
  }

  function setMarkers(left, mid, right) {
    state.markers = {
      left: left == null ? null : left,
      mid: mid == null ? null : mid,
      right: right == null ? null : right,
    };
  }

  function clearMarkers() {
    state.markers = { left: null, mid: null, right: null };
  }

  function markRange(low, high) {
    state.run1 = { low, high };
    state.run2 = { low: -1, high: -1 };
  }

  function setHighlight(index) {
    state.highlight = index;
  }

  /**
   * Compare highlight. Optional opts.aRow / opts.bRow: "A" | "L" | "R".
   */
  function setCompare(indexA, indexB, text, opts) {
    const aRow = (opts && opts.aRow) || "A";
    const bRow = (opts && opts.bRow) || "A";
    const items = [];
    if (indexA != null && indexA >= 0) items.push({ row: aRow, index: indexA });
    if (indexB != null && indexB >= 0) {
      if (!(aRow === bRow && indexB === indexA)) {
        items.push({ row: bRow, index: indexB });
      }
    }
    state.compare = { items, text: text || "" };
    state.mergedHighlight = false;
    if (aRow === "A" && indexA != null && indexA >= 0) {
      state.highlight = indexA;
    }
    updateHud();
  }

  function setPointers(i, j, k, opts) {
    state.pointers = {
      i: i == null || !Number.isFinite(i) ? null : i,
      j: j == null || !Number.isFinite(j) ? null : j,
      k: k == null || !Number.isFinite(k) ? null : k,
      iRow: (opts && opts.iRow) || "A",
      jRow: (opts && opts.jRow) || "A",
    };
  }

  function setMerged(value) {
    if (value == null) {
      state.merged = null;
    } else {
      state.merged = !!value;
    }
  }

  function setMergedHighlight(on, text) {
    state.mergedHighlight = !!on;
    if (on) {
      state.compare = { items: [], text: text || "" };
      state.highlight = -1;
    } else if (state.compare && state.compare.items.length === 0) {
      state.compare = null;
    }
    updateHud();
  }

  function clearCompare() {
    state.compare = null;
    state.mergedHighlight = false;
    updateHud();
  }

  function clearHighlights() {
    state.highlight = -1;
    state.writeIndex = -1;
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
    state.writeIndex = -1;
    state.pointers = { i: null, j: null, k: null, iRow: "A", jRow: "A" };
    clearRuns();
    clearMarkers();
    clearMemory();
    state.mergedHighlight = false;
    clearCompare();
  }

  function writeAnimate(index, value, durationMs) {
    return writeFromMemory(index, value, null, null, durationMs);
  }

  /**
   * Merge write: grey A[k] rises into a trash icon and vanishes, then the
   * Memory L/R box flies up into that slot.
   */
  function writeFromMemory(targetIndex, value, row, memIndex, durationMs) {
    return new Promise((resolve) => {
      clearCompare();
      const dur = Math.max(420, durationMs || 700);
      const trashDur = dur * 0.42;
      const flyDur = dur * 0.58;
      const baseY = state.memoryL || state.memoryR ? 0 : 52;
      const memBaseY = baseY + MEM_ROW_GAP * state.fitScale;
      const toX = state.targetPositions[targetIndex] ?? 0;
      const sizeTo = state.sizes[targetIndex] || 40;
      const oldValue = state.values[targetIndex];
      const color =
        row === "R" ? COLORS.memR : row === "L" ? COLORS.memL : COLORS.write;

      let fromX = toX;
      let fromY = memBaseY;
      let sizeFrom = sizeTo;
      if (row === "L" && memIndex != null) {
        fromX = state.memLPositions[memIndex] ?? toX;
        sizeFrom = state.memLSizes[memIndex] || sizeFrom;
      } else if (row === "R" && memIndex != null) {
        fromX = state.memRPositions[memIndex] ?? toX;
        sizeFrom = state.memRSizes[memIndex] || sizeFrom;
      }

      // Flying copy may match the destination slot; Memory boxes stay fixed.
      const flySizeTo = sizeFrom;

      state.hiddenMain.add(targetIndex);
      state.writeIndex = targetIndex;
      state.highlight = -1;
      state.writeAnim = {
        phase: "trash",
        t: 0,
        targetIndex,
        oldValue,
        newValue: value,
        fromRow: row,
        fromMemIndex: memIndex,
        fromX,
        fromY,
        toX,
        toY: baseY,
        sizeFrom,
        sizeTo: flySizeTo,
        color,
      };

      const trashStart = performance.now();

      function trashFrame(now) {
        const t = Math.min(1, (now - trashStart) / trashDur);
        state.writeAnim.t = t;
        if (t < 1) {
          requestAnimationFrame(trashFrame);
          return;
        }

        // Begin fly-in from memory (keep the Memory box in place).
        state.writeAnim.phase = "fly";
        state.writeAnim.t = 0;
        const flyStart = performance.now();

        function flyFrame(now2) {
          const t2 = Math.min(1, (now2 - flyStart) / flyDur);
          state.writeAnim.t = t2;
          if (t2 < 1) {
            requestAnimationFrame(flyFrame);
            return;
          }

          state.values[targetIndex] = value;
          state.hiddenMain.delete(targetIndex);
          state.writeAnim = null;
          state.writeIndex = -1;
          syncLayout();
          state.displayPositions[targetIndex] =
            state.targetPositions[targetIndex];
          resolve();
        }
        requestAnimationFrame(flyFrame);
      }
      requestAnimationFrame(trashFrame);
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
    setMemory,
    setMemoryAnimate,
    clearMemory,
    setRuns,
    clearRuns,
    setMarkers,
    clearMarkers,
    markRange,
    setHighlight,
    setCompare,
    setPointers,
    setMerged,
    setMergedHighlight,
    clearCompare,
    clearHighlights,
    markSorted,
    markAllSorted,
    writeAnimate,
    writeFromMemory,
    resize,
    zoomBy,
    setZoom,
    refreshLabels,
  };
})();
