/**
 * p5.js WEBGL visualization for AVL insertion.
 * Queue spheres + 3D tree with BF labels, CURRENT pointer, and rotate anims.
 */

window.TreeViz = (function () {
  const COLORS = {
    waiting: [62, 110, 130],
    inserted: [74, 124, 89],
    active: [61, 90, 128],
    purple: [128, 90, 213],
    processed: [72, 78, 84],
    edge: [255, 220, 90],
    link: [120, 140, 155],
    current: [217, 119, 6],
    next: [46, 160, 144],
    break: [220, 50, 50],
    reconnect: [34, 160, 90],
    nullNode: [220, 55, 55],
    nodeCreated: [46, 160, 144],
    bfZero: [34, 160, 107],
    bfNeg1: [214, 158, 46],
    bfLow: [229, 62, 62],
    bfPos1: [43, 108, 176],
    bfHigh: [128, 90, 213],
    roleNewRoot: [46, 160, 144],
    roleTemp: [128, 90, 213],
  };

  const QUEUE_GAP = 14;
  const LEVEL_GAP = 88;
  const FIT_MARGIN = 0.78;

  let sketchInstance = null;
  let hostEl = null;
  let hudEl = null;
  let resultEl = null;
  let processingKeyEl = null;
  let processingKeyValueEl = null;
  const labelCache = new Map();
  let nextNodeId = 1;
  let nextEdgeAnimId = 1;

  const state = {
    sequenceValues: [],
    queue: [],
    nodes: [],
    rootId: null,
    currentId: null,
    currentNull: null, // { parentId, side: 'left'|'right' }
    flying: null,
    compare: null,
    compareAnim: null,
    edgeAnims: [], // break / reconnect line animations
    rotateAnim: null, // { pivots, angle, t, ... }
    createAnim: null, // { nodeId, t, labelAlpha }
    heightAnim: null, // floating height labels during update_height
    bfAnim: null, // floating height labels during balance_factor
    roleArrows: [], // [{ role, nodeId, nullRef }] for new_root / temp
    occupiedNull: null, // { parentId, side } — hide that null while new node sits there
    resultMessage: null,
    processingKey: null, // key currently being inserted (HUD)
    allValues: [],
    rotY: 0.18,
    rotX: -0.38,
    panX: 0,
    panY: 20,
    dragging: false,
    dragMode: "rotate",
    lastMouse: { x: 0, y: 0 },
    fitScale: 1,
    userZoom: 1,
    treeOffsetY: 40,
    hiddenEdges: new Set(), // "parentId:childId" during break/rotate
  };

  const ROT_X_LIMIT = 0.55;

  function labelText(key, fallback) {
    if (window.I18n) return window.I18n.t(key);
    return fallback;
  }

  function softScale(value, minV, maxV) {
    if (maxV === minV) return 28;
    const t = (value - minV) / (maxV - minV);
    const eased = Math.pow(Math.max(0, Math.min(1, t)), 0.55);
    return 18 + eased * 22;
  }

  function valueSize(value) {
    const vals = state.allValues.length ? state.allValues : [value];
    const minV = Math.min(...vals, value);
    const maxV = Math.max(...vals, value);
    return softScale(value, minV, maxV) * state.fitScale;
  }

  function easeInOut(t) {
    return t * t * (3 - 2 * t);
  }

  function nodeById(id) {
    if (id == null) return null;
    return state.nodes.find((n) => n.id === id) || null;
  }

  function edgeKey(parentId, childId) {
    return parentId + ":" + childId;
  }

  function bfColor(bf) {
    if (bf === 0) return COLORS.bfZero;
    if (bf === -1) return COLORS.bfNeg1;
    if (bf < -1) return COLORS.bfLow;
    if (bf === 1) return COLORS.bfPos1;
    return COLORS.bfHigh;
  }

  function formatBf(bf) {
    if (bf > 0) return "+" + bf;
    return String(bf);
  }

  function makeLabel(p, text, opts) {
    const w = (opts && opts.w) || 96;
    const h = (opts && opts.h) || 40;
    const bg = (opts && opts.bg) || [255, 255, 255, 230];
    const fg = (opts && opts.fg) || [26, 43, 54];
    const size = (opts && opts.size) || 18;
    const inset = opts && opts.inset != null ? opts.inset : 2;
    const radius = opts && opts.radius != null ? opts.radius : 6;
    const key =
      text +
      "|" +
      bg.join(",") +
      "|" +
      fg.join(",") +
      "|" +
      w +
      "|" +
      h +
      "|" +
      size +
      "|" +
      inset +
      "|" +
      radius;
    if (labelCache.has(key)) return labelCache.get(key);

    const g = p.createGraphics(w, h);
    g.pixelDensity(1);
    g.clear();
    g.noStroke();
    g.fill(bg[0], bg[1], bg[2], bg[3] == null ? 255 : bg[3]);
    g.rect(inset, inset, w - inset * 2, h - inset * 2, radius);
    g.fill(fg[0], fg[1], fg[2]);
    g.textAlign(p.CENTER, p.CENTER);
    g.textSize(size);
    g.textStyle(p.BOLD);
    // Slight optical nudge so digits sit centered in the plate.
    g.text(text, w / 2, h / 2 + size * 0.04);
    labelCache.set(key, g);
    return g;
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

  function drawEdgeSphere(p, radius, color) {
    const c = color || COLORS.edge;
    p.push();
    p.noFill();
    p.stroke(c[0], c[1], c[2], 220);
    p.strokeWeight(2);
    p.sphere(radius * 1.06, 10, 8);
    p.pop();
    p.noStroke();
  }

  function drawFaceLabel(p, text, diameter, ballColor) {
    const str = String(text);
    // Base glyph size for the sphere, then 1.5× as requested.
    const baseFont = str.length >= 3 ? 17 : str.length === 2 ? 20 : 24;
    const fontSize = Math.round(baseFont * 1.5);

    if (!state._measureG) {
      state._measureG = p.createGraphics(8, 8);
      state._measureG.pixelDensity(1);
    }
    const probe = state._measureG;
    probe.textSize(fontSize);
    probe.textStyle(p.BOLD);
    const tw = probe.textWidth(str);

    // Tight plate around the digits (minimal padding).
    const padX = Math.max(3, Math.ceil(fontSize * 0.18));
    const padY = Math.max(2, Math.ceil(fontSize * 0.1));
    const texW = Math.max(Math.ceil(tw + padX * 2), Math.ceil(fontSize * 0.85));
    const texH = Math.ceil(fontSize + padY * 2);

    const bg = ballColor
      ? [
          Math.max(0, ballColor[0] - 28),
          Math.max(0, ballColor[1] - 28),
          Math.max(0, ballColor[2] - 28),
          255,
        ]
      : [40, 55, 65, 230];

    // World plane height from sphere diameter (base × 1.5); width follows text aspect.
    const planeH = Math.max(11, diameter * 0.34) * 1.5;
    const planeW = (texW / texH) * planeH;

    p.push();
    p.translate(0, 0, diameter * 0.52);
    p.textureMode(p.NORMAL);
    p.texture(
      makeLabel(p, str, {
        w: texW,
        h: texH,
        size: fontSize,
        inset: 0,
        radius: Math.max(3, Math.round(fontSize * 0.18)),
        bg,
        fg: [255, 255, 255],
      })
    );
    p.plane(planeW, planeH);
    p.pop();
  }

  function labelPlaneOpts(text, opts) {
    const len = String(text).length;
    const wide = len > 12;
    const veryWide = len > 20;
    return {
      w: (opts && opts.w) || (veryWide ? 300 : wide ? 220 : 130),
      h: (opts && opts.h) || 36,
      size: (opts && opts.size) || (veryWide ? 11 : wide ? 12 : 14),
      planeW:
        (opts && opts.planeW) ||
        (veryWide ? Math.min(120, 28 + len * 3.4) : wide ? 78 : 48),
      planeH: (opts && opts.planeH) || (veryWide ? 14 : 15),
    };
  }

  function drawBillboardLabel(p, text, x, y, z, color, opts) {
    const dims = labelPlaneOpts(text, opts);
    const alpha = opts && opts.alpha != null ? opts.alpha : 1;
    if (alpha <= 0.01) return;
    p.push();
    p.translate(x, y, z);
    p.rotateY(-state.rotY);
    p.rotateX(-state.rotX);
    p.textureMode(p.NORMAL);
    p.tint(255, Math.round(Math.max(0, Math.min(1, alpha)) * 255));
    p.texture(
      makeLabel(p, text, {
        w: dims.w,
        h: dims.h,
        size: dims.size,
        bg: [color[0], color[1], color[2], 235],
        fg: [255, 255, 255],
      })
    );
    p.plane(dims.planeW, dims.planeH);
    p.noTint();
    p.pop();
  }

  function heightLabelText(value) {
    return window.I18n
      ? window.I18n.heightLabel(value)
      : `height: ${value}`;
  }

  function balanceFactorLabelText(bf) {
    return window.I18n
      ? window.I18n.balanceFactorLabel(bf)
      : `balance factor: ${bf > 0 ? "+" + bf : bf}`;
  }

  /** Tight billboard dims for height / balance-factor labels. */
  function metaLabelDrawOpts(p, text, s) {
    const fontSize = 12;
    const str = String(text);
    if (!state._measureG) {
      state._measureG = p.createGraphics(8, 8);
      state._measureG.pixelDensity(1);
    }
    const probe = state._measureG;
    probe.textSize(fontSize);
    probe.textStyle(p.BOLD);
    const tw = probe.textWidth(str);
    const padX = Math.ceil(fontSize * 0.5);
    const padY = Math.ceil(fontSize * 0.3);
    const w = Math.max(fontSize * 2, Math.ceil(tw + padX * 2));
    const h = fontSize + padY * 2;
    const planeH = 13 * s;
    const planeW = (w / h) * planeH;
    return { w, h, size: fontSize, planeW, planeH };
  }

  /** Vertical offsets for stacked node metadata labels (above sphere). */
  function nodeLabelOffsets(node) {
    const s = state.fitScale;
    const size = node.size || 24;
    const base = size * 0.55;
    // Meta planeH is 13*s. Keep 70% of the old edge gaps.
    const metaHalfH = 6.5 * s;
    const gapNodeHeightEdge = 3.5 * s * 0.7;
    const gapHeightBfEdge = 5 * s * 0.7;
    const heightY = -(base + gapNodeHeightEdge + metaHalfH);
    const bfY = heightY - (metaHalfH * 2 + gapHeightBfEdge);
    // Old arrow gap from BF label top; CURRENT/new_root use half of that.
    const gapBfArrowEdge = size * 0.2 + 13.5 * s;
    const bfTop = bfY - metaHalfH;
    return {
      heightY,
      bfY,
      currentY: bfTop - gapBfArrowEdge * 0.5,
      tempY: bfTop - gapBfArrowEdge - 6 * s,
    };
  }

  function nullChildPos(parent, side) {
    const s = state.fitScale;
    const size = parent.size || 24;
    const dx = (side === "left" ? -1 : 1) * (size * 0.55 + 18 * s);
    const dy = size * 0.55 + 22 * s;
    return {
      displayX: parent.displayX + dx,
      displayY: parent.displayY + dy,
      displayZ: parent.displayZ,
      size: 9 * s,
    };
  }

  function drawNullChild(p, parent, side, withCurrent) {
    if (!parent) return;
    const pos = nullChildPos(parent, side);
    // Link from parent to null sphere
    p.push();
    p.stroke(COLORS.nullNode[0], COLORS.nullNode[1], COLORS.nullNode[2], 210);
    p.strokeWeight(2.2 * state.fitScale);
    p.line(
      parent.displayX,
      parent.displayY,
      parent.displayZ,
      pos.displayX,
      pos.displayY,
      pos.displayZ
    );
    p.pop();
    p.noStroke();

    drawSphereAt(
      p,
      pos.displayX,
      pos.displayY,
      pos.displayZ,
      pos.size,
      COLORS.nullNode,
      null
    );
    // Tiny "null" tag
    drawBillboardLabel(
      p,
      labelText("labelNull", "null"),
      pos.displayX,
      pos.displayY + pos.size * 0.85,
      pos.displayZ + 2,
      COLORS.nullNode,
      { w: 56, h: 28, size: 11, planeW: 20 * state.fitScale, planeH: 10 }
    );

    if (withCurrent) {
      drawTopArrow(
        p,
        pos.displayX,
        pos.displayY - pos.size * 0.9 - 4,
        pos.displayZ,
        COLORS.current,
        labelText("labelCurrent", "CURRENT")
      );
    }
  }

  function isCurrentNull(parentId, side) {
    return (
      state.currentNull &&
      state.currentNull.parentId === parentId &&
      state.currentNull.side === side
    );
  }

  function drawAllNullChildren(p) {
    state.nodes.forEach((n) => {
      if (n.displayX == null) return;
      const occ = state.occupiedNull;
      if (n.leftId == null) {
        const hidden =
          occ && occ.parentId === n.id && occ.side === "left";
        if (!hidden) {
          drawNullChild(p, n, "left", isCurrentNull(n.id, "left"));
        }
      }
      if (n.rightId == null) {
        const hidden =
          occ && occ.parentId === n.id && occ.side === "right";
        if (!hidden) {
          drawNullChild(p, n, "right", isCurrentNull(n.id, "right"));
        }
      }
    });
  }

  function drawCreateAnim(p) {
    const anim = state.createAnim;
    if (!anim) return;
    const node = nodeById(anim.nodeId);
    if (!node) return;

    // NODE_CREATED label to the right — fades in over ~0.5s
    const s = state.fitScale;
    const size = node.size || 24;
    const label = labelText("labelNodeCreated", "NODE_CREATED");
    drawBillboardLabel(
      p,
      label,
      node.displayX + size * 0.55 + 36 * s,
      node.displayY,
      node.displayZ + 6,
      COLORS.nodeCreated,
      {
        w: Math.min(320, 24 + label.length * 14),
        h: 40,
        size: 14,
        planeW: Math.min(120, 34 + label.length * 5),
        planeH: 16,
        alpha: anim.labelAlpha,
      }
    );
  }

  function drawNodeMetaLabels(p, node) {
    const s = state.fitScale;
    const offs = nodeLabelOffsets(node);
    const hideHeight =
      state.heightAnim &&
      state.heightAnim.nodeId === node.id &&
      state.heightAnim.hideNodeHeight;
    const hideBf =
      state.bfAnim &&
      state.bfAnim.nodeId === node.id &&
      state.bfAnim.hideNodeBf;

    if (node.height != null && !hideHeight) {
      const hText = heightLabelText(node.height);
      drawBillboardLabel(
        p,
        hText,
        node.displayX,
        node.displayY + offs.heightY,
        node.displayZ + 4,
        [55, 90, 120],
        metaLabelDrawOpts(p, hText, s)
      );
    }

    if (node.bf != null && !hideBf) {
      const bfText = balanceFactorLabelText(node.bf);
      const col = bfColor(node.bf);
      drawBillboardLabel(
        p,
        bfText,
        node.displayX,
        node.displayY + offs.bfY,
        node.displayZ + 5,
        col,
        metaLabelDrawOpts(p, bfText, s)
      );
    }
  }

  function drawFloatMetaLabel(p, label, x, y, z, color, alpha) {
    if (!label || alpha <= 0.01) return;
    const s = state.fitScale;
    drawBillboardLabel(p, label, x, y, z, color, {
      ...metaLabelDrawOpts(p, label, s),
      alpha,
    });
  }

  function drawHeightAnim(p) {
    const anim = state.heightAnim;
    if (!anim) return;
    const colorLeft = [43, 108, 176];
    const colorRight = [214, 158, 46];
    const colorMerge = [34, 160, 107];

    if (anim.left) {
      drawFloatMetaLabel(
        p,
        anim.left.text,
        anim.left.x,
        anim.left.y,
        anim.left.z,
        colorLeft,
        anim.left.alpha
      );
    }
    if (anim.right) {
      drawFloatMetaLabel(
        p,
        anim.right.text,
        anim.right.x,
        anim.right.y,
        anim.right.z,
        colorRight,
        anim.right.alpha
      );
    }
    if (anim.merge) {
      drawFloatMetaLabel(
        p,
        anim.merge.text,
        anim.merge.x,
        anim.merge.y,
        anim.merge.z,
        colorMerge,
        anim.merge.alpha
      );
    }
  }

  function drawBfAnim(p) {
    const anim = state.bfAnim;
    if (!anim) return;
    const colorLeft = [43, 108, 176];
    const colorRight = [214, 158, 46];

    if (anim.left) {
      drawFloatMetaLabel(
        p,
        anim.left.text,
        anim.left.x,
        anim.left.y,
        anim.left.z,
        colorLeft,
        anim.left.alpha
      );
    }
    if (anim.right) {
      drawFloatMetaLabel(
        p,
        anim.right.text,
        anim.right.x,
        anim.right.y,
        anim.right.z,
        colorRight,
        anim.right.alpha
      );
    }
    if (anim.merge) {
      const col = bfColor(anim.resultBf);
      drawFloatMetaLabel(
        p,
        anim.merge.text,
        anim.merge.x,
        anim.merge.y,
        anim.merge.z,
        col,
        anim.merge.alpha
      );
    }
  }

  function roleArrowLabel(role) {
    if (role === "new_root") {
      return labelText("labelNewRoot", "new_root");
    }
    if (role === "temp") {
      return labelText("labelTemp", "temp");
    }
    return role;
  }

  function roleArrowColor(role) {
    if (role === "new_root") return COLORS.roleNewRoot;
    if (role === "temp") return COLORS.roleTemp;
    return COLORS.current;
  }

  function drawRoleArrows(p) {
    if (!state.roleArrows || !state.roleArrows.length) return;
    state.roleArrows.forEach((arrow) => {
      const label = roleArrowLabel(arrow.role);
      const color = roleArrowColor(arrow.role);
      if (arrow.nodeId != null) {
        const n = nodeById(arrow.nodeId);
        if (!n || n.displayX == null) return;
        const offs = nodeLabelOffsets(n);
        // temp keeps the fuller gap above labels; others sit 50% closer.
        const arrowY = arrow.role === "temp" ? offs.tempY : offs.currentY;
        drawTopArrow(
          p,
          n.displayX,
          n.displayY + arrowY,
          n.displayZ,
          color,
          label
        );
        return;
      }
      if (arrow.nullRef && arrow.nullRef.parentId != null) {
        const parent = nodeById(arrow.nullRef.parentId);
        if (!parent) return;
        const pos = nullChildPos(parent, arrow.nullRef.side);
        drawTopArrow(
          p,
          pos.displayX,
          pos.displayY - pos.size * 0.9 - 4,
          pos.displayZ,
          color,
          label
        );
      }
    });
  }

  function drawTopArrow(p, x, y, z, color, label) {
    const s = state.fitScale;
    p.push();
    useSolidFill(p, color);
    p.translate(x, y, z);
    p.cone(7 * s, 14 * s, 8);
    p.pop();
    drawBillboardLabel(p, label, x, y - 20 * s, z + 2, color, {
      w: Math.min(280, 18 + label.length * 11),
      planeW: Math.min(110, 28 + label.length * 4.2),
      size: label.length > 16 ? 11 : 13,
    });
  }

  function heightOf(nodeId) {
    if (nodeId == null) return -1;
    const n = nodeById(nodeId);
    return n ? n.height : -1;
  }

  function recomputeHeightBf(nodeId) {
    const n = nodeById(nodeId);
    if (!n) return;
    const lh = heightOf(n.leftId);
    const rh = heightOf(n.rightId);
    n.height = Math.max(lh, rh) + 1;
    n.bf = lh - rh;
  }

  /** Update only height — leave balance factor for balance_factor animation. */
  function commitNodeHeight(nodeId, height) {
    const n = nodeById(nodeId);
    if (!n) return;
    n.height = height;
  }

  /** Sync stored balance factor from current child heights (no animation). */
  function recomputeNodeBf(nodeId) {
    const n = nodeById(nodeId);
    if (!n) return 0;
    n.bf = heightOf(n.leftId) - heightOf(n.rightId);
    return n.bf;
  }

  function recomputeAllHeights() {
    function dfs(id) {
      if (id == null) return -1;
      const n = nodeById(id);
      if (!n) return -1;
      const lh = dfs(n.leftId);
      const rh = dfs(n.rightId);
      n.height = Math.max(lh, rh) + 1;
      n.bf = lh - rh;
      return n.height;
    }
    dfs(state.rootId);
  }

  function computeTreeLayout() {
    const root = nodeById(state.rootId);
    if (!root) {
      state.fitScale = 1;
      return;
    }

    function leafSpan(node) {
      if (!node) return 0;
      if (!node.leftId && !node.rightId) return 1;
      return Math.max(1, leafSpan(nodeById(node.leftId)) + leafSpan(nodeById(node.rightId)));
    }

    const totalSpan = Math.max(1, leafSpan(root));
    const rawWidth = totalSpan * 70;
    const viewWidth = Math.max(260, (sketchInstance ? sketchInstance.width : 480) * FIT_MARGIN);
    state.fitScale = Math.min(1.25, viewWidth / Math.max(rawWidth, 1));

    function place(node, depth, xMin, xMax) {
      if (!node) return;
      node.targetX = (xMin + xMax) / 2;
      node.targetY = state.treeOffsetY + depth * LEVEL_GAP * state.fitScale;
      node.targetZ = 0;
      node.size = valueSize(node.value);
      const mid = (xMin + xMax) / 2;
      place(nodeById(node.leftId), depth + 1, xMin, mid);
      place(nodeById(node.rightId), depth + 1, mid, xMax);
    }

    const half = (rawWidth * state.fitScale) / 2;
    place(root, 0, -half, half);

    state.nodes.forEach((n) => {
      if (n.displayX == null) {
        n.displayX = n.targetX;
        n.displayY = n.targetY;
        n.displayZ = n.targetZ;
      }
    });
  }

  function layoutQueue(canvasWidth) {
    const done = state.queue.filter((q) => q.status === "done");
    const waiting = state.queue.filter((q) => q.status === "waiting");
    const y = -125; // was -145; moved down 20 units
    const z = 0;
    const right = (canvasWidth || 480) * 0.42;
    const doneSize = 10;
    const gap = 12;

    const sizes = [
      ...done.map(() => doneSize),
      ...waiting.map((q) => valueSize(q.value)),
    ];
    const items = [...done, ...waiting];
    if (!items.length) return;

    const total =
      sizes.reduce((a, b) => a + b, 0) + Math.max(0, items.length - 1) * gap;
    let cursor = right - total;

    items.forEach((q, i) => {
      const size = sizes[i];
      const x = cursor + size / 2;
      q.size = size;
      q.targetX = x;
      q.targetY = y;
      q.targetZ = z;
      if (q.displayX == null || q.displayY == null) {
        q.displayX = x;
        q.displayY = y;
        q.displayZ = z;
      } else {
        q.displayY += (y - q.displayY) * 0.35;
      }
      cursor += size + gap;
    });
  }

  function syncLayout(canvasWidth) {
    const width =
      canvasWidth ||
      (sketchInstance && sketchInstance.width) ||
      (hostEl && hostEl.getBoundingClientRect().width) ||
      480;
    computeTreeLayout();
    layoutQueue(width);
    clampPan();
  }

  function getPanLimits() {
    let maxX = 180;
    let maxY = 160;
    state.nodes.forEach((n) => {
      maxX = Math.max(maxX, Math.abs(n.targetX || 0) + 80);
      maxY = Math.max(maxY, Math.abs(n.targetY || 0) + 80);
    });
    return { maxX, maxY };
  }

  function clampPan() {
    const { maxX, maxY } = getPanLimits();
    state.panX = Math.max(-maxX, Math.min(maxX, state.panX));
    state.panY = Math.max(-maxY, Math.min(maxY, state.panY));
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
    const text = window.I18n
      ? window.I18n.formatMsg("doneMsg", { n: msg.n })
      : `All ${msg.n} keys inserted into the AVL tree.`;
    resultEl.hidden = false;
    resultEl.textContent = text;
    resultEl.classList.add("is-found");
    resultEl.classList.remove("is-miss");
  }

  function drawSphereAt(p, x, y, z, diameter, color, label, opts) {
    p.push();
    p.translate(x, y, z);
    useSolidFill(p, color);
    p.sphere(diameter / 2, 18, 14);
    if (label != null) drawFaceLabel(p, String(label), diameter, color);
    if (opts && opts.edge) {
      drawEdgeSphere(p, diameter / 2, opts.edgeColor || COLORS.edge);
    }
    p.pop();
  }

  function drawLink(p, a, b, style) {
    if (!a || !b) return;
    const col = (style && style.color) || COLORS.link;
    const weight = (style && style.weight) != null ? style.weight : 2.4 * state.fitScale;
    const alpha = (style && style.alpha) != null ? style.alpha : 200;
    p.push();
    p.stroke(col[0], col[1], col[2], alpha);
    p.strokeWeight(weight);
    p.line(a.displayX, a.displayY, a.displayZ, b.displayX, b.displayY, b.displayZ);
    p.pop();
    p.noStroke();
  }

  /**
   * Broken edge: red bold; top half twists down, bottom half twists up.
   * t in [0,1].
   */
  function drawBrokenLink(p, a, b, t) {
    if (!a || !b) return;
    const ax = a.displayX;
    const ay = a.displayY;
    const az = a.displayZ;
    const bx = b.displayX;
    const by = b.displayY;
    const bz = b.displayZ;
    const mx = (ax + bx) / 2;
    const my = (ay + by) / 2;
    const mz = (az + bz) / 2;

    const dx = bx - ax;
    const dy = by - ay;
    const dz = bz - az;
    const len = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
    // Perpendicular in the plane (prefer Z bias for a visible twist).
    let px = -dy;
    let py = dx;
    let pz = len * 0.15;
    const plen = Math.sqrt(px * px + py * py + pz * pz) || 1;
    px /= plen;
    py /= plen;
    pz /= plen;

    const twist = easeInOut(Math.min(1, t)) * 0.55;
    const gap = 6 * state.fitScale * easeInOut(Math.min(1, t));
    const midTopX = mx - (dx / len) * gap + px * twist * 18;
    const midTopY = my - (dy / len) * gap + py * twist * 18 + twist * 22;
    const midTopZ = mz - (dz / len) * gap + pz * twist * 18;
    const midBotX = mx + (dx / len) * gap - px * twist * 18;
    const midBotY = my + (dy / len) * gap - py * twist * 18 - twist * 22;
    const midBotZ = mz + (dz / len) * gap - pz * twist * 18;

    p.push();
    p.stroke(COLORS.break[0], COLORS.break[1], COLORS.break[2], 240);
    p.strokeWeight(4.8 * state.fitScale);
    p.line(ax, ay, az, midTopX, midTopY, midTopZ);
    p.line(midBotX, midBotY, midBotZ, bx, by, bz);
    p.pop();
    p.noStroke();
  }

  function drawReconnectLink(p, a, b, t) {
    if (!a || !b) return;
    const u = easeInOut(Math.min(1, Math.max(0, t)));
    // Appear along the segment; stay bold green until done.
    const ax = a.displayX;
    const ay = a.displayY;
    const az = a.displayZ;
    const bx = ax + (b.displayX - ax) * u;
    const by = ay + (b.displayY - ay) * u;
    const bz = az + (b.displayZ - az) * u;
    p.push();
    p.stroke(COLORS.reconnect[0], COLORS.reconnect[1], COLORS.reconnect[2], 245);
    p.strokeWeight(4.6 * state.fitScale);
    p.line(ax, ay, az, bx, by, bz);
    p.pop();
    p.noStroke();
  }

  function resolveCompareDraw(anim) {
    if (!anim) return null;
    const node = nodeById(anim.nodeId);
    if (!node) return null;

    const nodeX = node.displayX;
    const nodeY = node.displayY;
    const nodeZ = node.displayZ;
    const nodeSize = node.size || valueSize(node.value);
    const keySize = anim.keySize;
    const sideGap = (nodeSize + keySize) * 0.55 + 18 * state.fitScale;
    const keyRestX = nodeX - sideGap;
    const keyRestY = nodeY;
    const keyRestZ = nodeZ + 8;

    let keyX = keyRestX;
    let keyY = keyRestY;
    let keyZ = keyRestZ;
    let nodeLift = 0;
    let purple = false;
    let showQuestion = false;
    let shake = 0;

    if (anim.phase === "move") {
      const t = easeInOut(anim.t);
      keyX = anim.fromX + (keyRestX - anim.fromX) * t;
      keyY = anim.fromY + (keyRestY - anim.fromY) * t;
      keyZ = anim.fromZ + (keyRestZ - anim.fromZ) * t;
    } else if (anim.phase === "wonder") {
      showQuestion = true;
      shake = Math.sin(anim.t * Math.PI * 10) * (1 - anim.t * 0.35);
      keyX = keyRestX + shake * 2.2;
      keyY = keyRestY + Math.sin(anim.t * Math.PI * 14) * 1.6;
    } else if (anim.phase === "hold") {
      purple = true;
      showQuestion = anim.t < 0.25;
      nodeLift = 1;
    } else if (anim.phase === "settle") {
      purple = anim.t < 0.35;
      nodeLift = 1 - easeInOut(anim.t);
    }

    return {
      keyX,
      keyY,
      keyZ,
      nodeX,
      nodeY: nodeY - nodeLift * 10 * state.fitScale,
      nodeZ,
      purple,
      showQuestion,
      shake,
      purpleKey: purple && anim.keyValue <= anim.nodeValue,
      purpleNode: purple && anim.nodeValue <= anim.keyValue,
    };
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
      c.elt.addEventListener("contextmenu", (e) => e.preventDefault());
      syncLayout(p.width);
    };

    p.windowResized = function () {
      const rect = hostEl.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));
      if (w !== p.width || h !== p.height) {
        p.resizeCanvas(w, h);
      }
      syncLayout(p.width);
    };

    p.mousePressed = function () {
      if (!overCanvas(p)) return;
      state.dragging = true;
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
        state.rotY = p.constrain(state.rotY + dx * 0.005, -0.55, 0.55);
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
      state.userZoom = p.constrain(state.userZoom * factor, 0.4, 2.8);
      return false;
    };

    p.draw = function () {
      p.clear();
      p.background(243, 247, 250);

      layoutQueue(p.width);

      p.ambientLight(168);
      p.directionalLight(255, 245, 230, -0.35, 0.6, -0.5);
      p.directionalLight(180, 210, 230, 0.4, 0.2, 0.3);
      p.pointLight(255, 255, 255, 0, -180, 120);

      p.translate(state.panX, state.panY, 0);
      p.scale(state.userZoom);
      p.rotateX(state.rotX);
      p.rotateY(state.rotY);

      state.queue.forEach((q) => {
        if (q.displayX == null) return;
        if (q.targetX == null) return;
        q.displayX += (q.targetX - q.displayX) * 0.18;
        q.displayY += (q.targetY - q.displayY) * 0.18;
        q.displayZ += (q.targetZ - q.displayZ) * 0.18;
      });

      const rot = state.rotateAnim;
      state.nodes.forEach((n) => {
        if (n.targetX == null) return;
        if (rot && rot.nodeIds && rot.nodeIds.has(n.id)) {
          // Driven by rotate animation frame updater.
          return;
        }
        n.displayX += (n.targetX - n.displayX) * 0.16;
        n.displayY += (n.targetY - n.displayY) * 0.16;
        n.displayZ += (n.targetZ - n.displayZ) * 0.16;
      });

      const animDraw = resolveCompareDraw(state.compareAnim);
      const hideFlyingDuringCompare = !!(state.compareAnim && state.flying);

      const nextWaiting = state.queue.find((q) => q.status === "waiting");
      state.queue.forEach((q) => {
        if (q.status === "flying") return;
        if (q.displayX == null) return;
        if (q.status === "done") {
          drawSphereAt(
            p,
            q.displayX,
            q.displayY,
            q.displayZ,
            q.size || 10 * state.fitScale,
            COLORS.processed,
            null
          );
          return;
        }
        drawSphereAt(
          p,
          q.displayX,
          q.displayY,
          q.displayZ,
          q.size || valueSize(q.value),
          COLORS.waiting,
          q.value
        );
        if (nextWaiting && q.id === nextWaiting.id && !state.flying) {
          drawTopArrow(
            p,
            q.displayX,
            q.displayY - (q.size || 20) * 0.75 - 8,
            q.displayZ,
            COLORS.next,
            labelText("labelNext", "TO BE INSERTED NEXT")
          );
        }
      });

      // Tree edges (skip ones being animated or temporarily hidden)
      state.nodes.forEach((n) => {
        [["leftId", n.leftId], ["rightId", n.rightId]].forEach(([, childId]) => {
          if (childId == null) return;
          const key = edgeKey(n.id, childId);
          if (state.hiddenEdges.has(key)) return;
          const anim = state.edgeAnims.find(
            (e) => e.parentId === n.id && e.childId === childId
          );
          if (anim) return;
          drawLink(p, n, nodeById(childId));
        });
      });

      // Edge animations (break / reconnect)
      state.edgeAnims.forEach((anim) => {
        const a = nodeById(anim.parentId);
        const b = nodeById(anim.childId);
        if (!a || !b) return;
        if (anim.kind === "break") {
          drawBrokenLink(p, a, b, anim.t);
        } else if (anim.kind === "reconnect") {
          drawReconnectLink(p, a, b, anim.t);
        }
      });

      // Tree nodes
      state.nodes.forEach((n) => {
        let col = COLORS.inserted;
        let x = n.displayX;
        let y = n.displayY;
        let z = n.displayZ;
        let edge = false;
        let edgeColor = COLORS.edge;

        if (animDraw && state.compareAnim && state.compareAnim.nodeId === n.id) {
          x = animDraw.nodeX;
          y = animDraw.nodeY;
          z = animDraw.nodeZ;
          if (animDraw.purpleNode) {
            col = COLORS.purple;
            edge = true;
            edgeColor = COLORS.purple;
          } else {
            col = COLORS.active;
            edge = true;
          }
        } else if (state.currentId === n.id) {
          col = COLORS.active;
        } else if (
          state.roleArrows &&
          state.roleArrows.some((a) => a.nodeId === n.id && a.role === "new_root")
        ) {
          col = COLORS.roleNewRoot;
          edge = true;
          edgeColor = COLORS.roleNewRoot;
        } else if (
          state.roleArrows &&
          state.roleArrows.some((a) => a.nodeId === n.id && a.role === "temp")
        ) {
          col = COLORS.roleTemp;
          edge = true;
          edgeColor = COLORS.roleTemp;
        }

        drawSphereAt(p, x, y, z, n.size || valueSize(n.value), col, n.value, {
          edge,
          edgeColor,
        });

        drawNodeMetaLabels(p, { ...n, displayX: x, displayY: y, displayZ: z });

        if (state.currentId === n.id && !(state.compareAnim && state.compareAnim.nodeId === n.id)) {
          const offs = nodeLabelOffsets(n);
          drawTopArrow(
            p,
            x,
            y + offs.currentY,
            z,
            COLORS.current,
            labelText("labelCurrent", "CURRENT")
          );
        }
      });

      // Persistent null children (missing left/right), with CURRENT when focused
      drawAllNullChildren(p);

      // Role arrows (new_root / temp) during rotations
      drawRoleArrows(p);

      // create_node animation: NODE_CREATED label
      drawCreateAnim(p);

      // update_height floating labels
      drawHeightAnim(p);

      // balance_factor floating labels
      drawBfAnim(p);

      if (animDraw && state.compareAnim) {
        const keyCol = animDraw.purpleKey ? COLORS.purple : COLORS.waiting;
        drawSphereAt(
          p,
          animDraw.keyX,
          animDraw.keyY,
          animDraw.keyZ,
          state.compareAnim.keySize,
          keyCol,
          state.compareAnim.keyValue,
          {
            edge: animDraw.purpleKey,
            edgeColor: COLORS.purple,
          }
        );
        if (animDraw.showQuestion) {
          const s = state.fitScale;
          const wobble = animDraw.shake || 0;
          p.push();
          p.translate(
            animDraw.keyX + wobble * 1.5,
            animDraw.keyY - state.compareAnim.keySize * 0.95 - 16 * s,
            animDraw.keyZ + 12
          );
          p.rotateY(-state.rotY);
          p.rotateX(-state.rotX);
          p.rotateZ(wobble * 0.18);
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
          p.plane(22 * s * (1 + Math.abs(wobble) * 0.04), 22 * s);
          p.pop();
        }
      } else if (state.flying && !hideFlyingDuringCompare) {
        const f = state.flying;
        f.displayX += (f.targetX - f.displayX) * 0.2;
        f.displayY += (f.targetY - f.displayY) * 0.2;
        f.displayZ += (f.targetZ - f.displayZ) * 0.2;
        drawSphereAt(
          p,
          f.displayX,
          f.displayY,
          f.displayZ,
          f.size,
          COLORS.waiting,
          f.value
        );
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
    processingKeyEl = hostEl.querySelector("#processing-key-panel");
    if (!processingKeyEl) {
      processingKeyEl = document.createElement("div");
      processingKeyEl.id = "processing-key-panel";
      processingKeyEl.className = "processing-key-panel";
      processingKeyEl.setAttribute("aria-live", "polite");
      processingKeyEl.innerHTML =
        '<div class="processing-key-title" data-i18n="processingKeyTitle"></div>' +
        '<div id="processing-key-value" class="processing-key-value"></div>';
      hostEl.appendChild(processingKeyEl);
      const titleEl = processingKeyEl.querySelector(".processing-key-title");
      if (titleEl) {
        titleEl.textContent = labelText("processingKeyTitle", "Processing");
      }
    }
    processingKeyValueEl = hostEl.querySelector("#processing-key-value");
    updateProcessingKeyHud();
  }

  function updateProcessingKeyHud() {
    if (!processingKeyValueEl) return;
    if (processingKeyEl) {
      const titleEl = processingKeyEl.querySelector(".processing-key-title");
      if (titleEl) {
        titleEl.textContent = labelText("processingKeyTitle", "Processing");
      }
    }
    if (state.processingKey == null) {
      processingKeyValueEl.textContent = "—";
      processingKeyValueEl.classList.add("is-empty");
    } else {
      processingKeyValueEl.textContent = String(state.processingKey);
      processingKeyValueEl.classList.remove("is-empty");
    }
  }

  function setProcessingKey(key) {
    state.processingKey = key == null ? null : key;
    updateProcessingKeyHud();
  }

  function clearProcessingKey() {
    state.processingKey = null;
    updateProcessingKeyHud();
  }

  function init(host) {
    hostEl = host;
    labelCache.clear();
    ensureHud();
    if (sketchInstance) sketchInstance.remove();
    sketchInstance = new p5(sketch);
  }

  function setSequence(values) {
    state.sequenceValues = values.slice();
    state.allValues = values.slice();
    state.queue = values.map((value, index) => ({
      id: "q" + index,
      value,
      status: "waiting",
      displayX: null,
      displayY: null,
      displayZ: null,
      targetX: null,
      targetY: null,
      targetZ: null,
      size: null,
    }));
    state.nodes = [];
    state.rootId = null;
    state.currentId = null;
    state.currentNull = null;
    state.flying = null;
    state.compare = null;
    state.compareAnim = null;
    state.edgeAnims = [];
    state.rotateAnim = null;
    state.createAnim = null;
    state.heightAnim = null;
    state.bfAnim = null;
    state.roleArrows = [];
    state.occupiedNull = null;
    state.hiddenEdges = new Set();
    state.resultMessage = null;
    state.processingKey = null;
    nextNodeId = 1;
    state.userZoom = 1;
    state.panX = 0;
    state.panY = 20;
    labelCache.clear();
    syncLayout();
    updateHud();
    updateResultHud();
    updateProcessingKeyHud();
  }

  function getSequence() {
    return state.sequenceValues.slice();
  }

  function getRootValue() {
    const root = nodeById(state.rootId);
    return root ? root.value : null;
  }

  function peekNextWaiting() {
    return state.queue.find((q) => q.status === "waiting") || null;
  }

  function beginInsert(value) {
    const q = state.queue.find((item) => item.status === "waiting");
    if (!q) return null;

    const fromX = q.displayX != null ? q.displayX : 0;
    const fromY = q.displayY != null ? q.displayY : -125;
    const fromZ = q.displayZ != null ? q.displayZ : 0;
    const size = valueSize(value);

    state.queue.push({
      id: q.id + "_done",
      value,
      status: "done",
      displayX: fromX,
      displayY: -125,
      displayZ: fromZ,
      targetX: fromX,
      targetY: -125,
      targetZ: fromZ,
      size: 10,
    });

    q.status = "flying";
    state.flying = {
      value,
      size,
      queueId: q.id,
      displayX: fromX,
      displayY: fromY,
      displayZ: fromZ,
      targetX: fromX,
      targetY: fromY,
      targetZ: fromZ,
    };
    state.queue = state.queue.filter((x) => x.id !== q.id);
    layoutQueue(sketchInstance ? sketchInstance.width : 480);
    setProcessingKey(value);
    return state.flying;
  }

  function setFlyingTarget(x, y, z) {
    if (!state.flying) return;
    state.flying.targetX = x;
    state.flying.targetY = y;
    state.flying.targetZ = z == null ? 0 : z;
  }

  function waitUntilFlyingNear(threshold) {
    const thr = threshold == null ? 4 : threshold;
    return new Promise((resolve) => {
      function tick() {
        if (!state.flying) {
          resolve();
          return;
        }
        const f = state.flying;
        const dx = f.targetX - f.displayX;
        const dy = f.targetY - f.displayY;
        const dz = f.targetZ - f.displayZ;
        if (dx * dx + dy * dy + dz * dz < thr * thr) {
          f.displayX = f.targetX;
          f.displayY = f.targetY;
          f.displayZ = f.targetZ;
          resolve();
          return;
        }
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  function setCurrent(nodeId) {
    state.currentId = nodeId;
    state.currentNull = null;
  }

  function clearCurrent() {
    state.currentId = null;
    state.currentNull = null;
  }

  function setCurrentNull(parentId, side) {
    state.currentId = null;
    state.currentNull =
      parentId == null ? null : { parentId, side: side === "right" ? "right" : "left" };
  }

  function clearCurrentNull() {
    state.currentNull = null;
  }

  function getNullChildWorldPos(parentId, side) {
    const parent = nodeById(parentId);
    if (!parent) return null;
    return nullChildPos(parent, side === "right" ? "right" : "left");
  }

  function createNode(value, atNull) {
    const id = nextNodeId++;
    const size = valueSize(value);

    // Prefer the insertion null-slot (CURRENT), then flying key, else origin.
    let x = 0;
    let y = state.treeOffsetY;
    let z = 0;
    if (atNull && atNull.parentId != null) {
      const pos = getNullChildWorldPos(atNull.parentId, atNull.side);
      if (pos) {
        x = pos.displayX;
        y = pos.displayY;
        z = pos.displayZ;
      }
    } else if (state.flying) {
      x = state.flying.displayX;
      y = state.flying.displayY;
      z = state.flying.displayZ;
    }

    const fromX = state.flying ? state.flying.displayX : x;
    const fromY = state.flying ? state.flying.displayY : y;
    const fromZ = state.flying ? state.flying.displayZ : z;

    const node = {
      id,
      value,
      leftId: null,
      rightId: null,
      height: 0,
      bf: 0,
      size,
      targetX: x,
      targetY: y,
      targetZ: z,
      displayX: fromX,
      displayY: fromY,
      displayZ: fromZ,
    };
    state.nodes.push(node);
    state.flying = null;

    if (atNull && atNull.parentId != null) {
      state.occupiedNull = {
        parentId: atNull.parentId,
        side: atNull.side === "right" ? "right" : "left",
      };
    }
    return id;
  }

  function createRoot(value) {
    const id = createNode(value);
    state.rootId = id;
    state.occupiedNull = null;
    computeTreeLayout();
    const root = nodeById(id);
    if (root) {
      root.displayX = root.targetX;
      root.displayY = root.targetY;
      root.displayZ = root.targetZ;
    }
    return id;
  }

  /**
   * Create a node at a parent's null child slot (visual CURRENT position).
   * Does not attach yet — caller should setChild afterward.
   */
  function createNodeAtNull(value, parentId, side) {
    return createNode(value, { parentId, side });
  }

  function setChild(parentId, side, childId) {
    const parent = nodeById(parentId);
    if (!parent) return;
    if (side === "left") parent.leftId = childId;
    else parent.rightId = childId;
    if (
      state.occupiedNull &&
      state.occupiedNull.parentId === parentId &&
      state.occupiedNull.side === (side === "right" ? "right" : "left")
    ) {
      state.occupiedNull = null;
    }
    computeTreeLayout();
  }

  /**
   * Assign parent.left/right ← child. If that edge was left hidden by a rotate
   * (parent link deferred until return), play the reconnect animation now.
   */
  async function assignChildAnimated(parentId, side, childId, durationMs) {
    setChild(parentId, side, childId);
    if (childId != null && state.hiddenEdges.has(edgeKey(parentId, childId))) {
      await animateReconnectEdges(
        [[parentId, childId]],
        Math.max(500, durationMs || 500)
      );
    }
  }

  function findParentId(childId) {
    for (const n of state.nodes) {
      if (n.leftId === childId || n.rightId === childId) return n.id;
    }
    return null;
  }

  function getBalanceFactor(nodeId) {
    const n = nodeById(nodeId);
    return n ? n.bf : 0;
  }

  function getNodeHeight(nodeId) {
    return heightOf(nodeId);
  }

  function updateNodeHeight(nodeId) {
    recomputeHeightBf(nodeId);
    return getBalanceFactor(nodeId);
  }

  function childHeightSourcePos(parentNode, side, childId) {
    if (childId != null) {
      const child = nodeById(childId);
      if (child) {
        return {
          x: child.displayX,
          y: child.displayY - (child.size || 24) * 0.55 - 10 * state.fitScale,
          z: child.displayZ + 6,
        };
      }
    }
    const nullPos = nullChildPos(parentNode, side);
    return {
      x: nullPos.displayX,
      y: nullPos.displayY - 12 * state.fitScale,
      z: nullPos.displayZ + 4,
    };
  }

  function heightSlotPos(parentNode, side) {
    const s = state.fitScale;
    const offs = nodeLabelOffsets(parentNode);
    const sideGap = 42 * s;
    return {
      x: parentNode.displayX + (side === "left" ? -sideGap : sideGap),
      y: parentNode.displayY + offs.heightY,
      z: parentNode.displayZ + 8,
    };
  }

  function bfSlotPos(parentNode, side) {
    const s = state.fitScale;
    const offs = nodeLabelOffsets(parentNode);
    const sideGap = 48 * s;
    return {
      x: parentNode.displayX + (side === "left" ? -sideGap : sideGap),
      y: parentNode.displayY + offs.bfY,
      z: parentNode.displayZ + 8,
    };
  }

  function flyLabelSlot(slot, from, to, total, stillActive) {
    return new Promise((resolve) => {
      const start = performance.now();
      function frame(now) {
        if (!stillActive()) {
          resolve();
          return;
        }
        const u = Math.min(1, (now - start) / total);
        const e = easeInOut(u);
        slot.x = from.x + (to.x - from.x) * e;
        slot.y = from.y + (to.y - from.y) * e;
        slot.z = from.z + (to.z - from.z) * e;
        slot.alpha = Math.min(1, u * 1.4);
        if (u < 1) {
          requestAnimationFrame(frame);
        } else {
          slot.x = to.x;
          slot.y = to.y;
          slot.z = to.z;
          slot.alpha = 1;
          resolve();
        }
      }
      requestAnimationFrame(frame);
    });
  }

  /**
   * Animate a child's height value flying beside the parent's height label.
   * side: 'left' | 'right'
   */
  function animateHeightRead(nodeId, side, heightValue, durationMs) {
    return new Promise((resolve) => {
      const node = nodeById(nodeId);
      if (!node) {
        resolve();
        return;
      }
      const childId = side === "left" ? node.leftId : node.rightId;
      const from = childHeightSourcePos(node, side, childId);
      const to = heightSlotPos(node, side);
      const text = heightLabelText(heightValue);
      const total = Math.max(450, durationMs || 700);

      if (!state.heightAnim || state.heightAnim.nodeId !== nodeId) {
        state.heightAnim = {
          nodeId,
          hideNodeHeight: false,
          left: null,
          right: null,
          merge: null,
        };
      }

      const slot = {
        text,
        x: from.x,
        y: from.y,
        z: from.z,
        alpha: 0,
      };
      if (side === "left") state.heightAnim.left = slot;
      else state.heightAnim.right = slot;

      flyLabelSlot(
        slot,
        from,
        to,
        total,
        () => state.heightAnim && state.heightAnim.nodeId === nodeId
      ).then(resolve);
    });
  }

  /**
   * Animate left/right height labels combining into the node's new height.
   */
  function animateHeightCombine(nodeId, resultHeight, durationMs) {
    return new Promise((resolve) => {
      const node = nodeById(nodeId);
      if (!node) {
        resolve();
        return;
      }
      const offs = nodeLabelOffsets(node);
      const target = {
        x: node.displayX,
        y: node.displayY + offs.heightY,
        z: node.displayZ + 6,
      };
      const total = Math.max(550, durationMs || 900);
      const mergeText = heightLabelText(resultHeight);

      if (!state.heightAnim || state.heightAnim.nodeId !== nodeId) {
        state.heightAnim = {
          nodeId,
          hideNodeHeight: true,
          left: null,
          right: null,
          merge: null,
        };
      } else {
        state.heightAnim.hideNodeHeight = true;
      }

      const left = state.heightAnim.left;
      const right = state.heightAnim.right;
      const leftFrom = left
        ? { x: left.x, y: left.y, z: left.z }
        : heightSlotPos(node, "left");
      const rightFrom = right
        ? { x: right.x, y: right.y, z: right.z }
        : heightSlotPos(node, "right");

      state.heightAnim.merge = {
        text: mergeText,
        x: target.x,
        y: target.y,
        z: target.z,
        alpha: 0,
      };

      const start = performance.now();
      function frame(now) {
        if (!state.heightAnim || state.heightAnim.nodeId !== nodeId) {
          resolve();
          return;
        }
        const u = Math.min(1, (now - start) / total);
        const e = easeInOut(u);

        if (left) {
          left.x = leftFrom.x + (target.x - leftFrom.x) * e;
          left.y = leftFrom.y + (target.y - leftFrom.y) * e;
          left.z = leftFrom.z + (target.z - leftFrom.z) * e;
          left.alpha = 1 - e * 0.85;
        }
        if (right) {
          right.x = rightFrom.x + (target.x - rightFrom.x) * e;
          right.y = rightFrom.y + (target.y - rightFrom.y) * e;
          right.z = rightFrom.z + (target.z - rightFrom.z) * e;
          right.alpha = 1 - e * 0.85;
        }
        state.heightAnim.merge.alpha = Math.min(1, Math.max(0, (u - 0.35) / 0.45));

        if (u < 1) {
          requestAnimationFrame(frame);
        } else {
          // Commit height only — balance factor updates after its own animation.
          commitNodeHeight(nodeId, resultHeight);
          state.heightAnim = null;
          resolve();
        }
      }
      requestAnimationFrame(frame);
    });
  }

  function clearHeightAnim() {
    state.heightAnim = null;
  }

  /**
   * Full balance_factor animation:
   * left height flies in, right height flies in, then both combine into BF.
   */
  async function animateBalanceFactor(nodeId, heightLeft, heightRight, resultBf, durationMs) {
    const node = nodeById(nodeId);
    if (!node) return;

    const phaseMs = Math.max(400, (durationMs || 700) * 0.85);
    const combineMs = Math.max(500, (durationMs || 700) + 80);

    state.bfAnim = {
      nodeId,
      hideNodeBf: false,
      resultBf,
      left: null,
      right: null,
      merge: null,
    };

    const leftFrom = childHeightSourcePos(node, "left", node.leftId);
    const leftTo = bfSlotPos(node, "left");
    const leftSlot = {
      text: heightLabelText(heightLeft),
      x: leftFrom.x,
      y: leftFrom.y,
      z: leftFrom.z,
      alpha: 0,
    };
    state.bfAnim.left = leftSlot;
    await flyLabelSlot(
      leftSlot,
      leftFrom,
      leftTo,
      phaseMs,
      () => state.bfAnim && state.bfAnim.nodeId === nodeId
    );

    const rightFrom = childHeightSourcePos(node, "right", node.rightId);
    const rightTo = bfSlotPos(node, "right");
    const rightSlot = {
      text: heightLabelText(heightRight),
      x: rightFrom.x,
      y: rightFrom.y,
      z: rightFrom.z,
      alpha: 0,
    };
    state.bfAnim.right = rightSlot;
    await flyLabelSlot(
      rightSlot,
      rightFrom,
      rightTo,
      phaseMs,
      () => state.bfAnim && state.bfAnim.nodeId === nodeId
    );

    if (!state.bfAnim || state.bfAnim.nodeId !== nodeId) return;

    state.bfAnim.hideNodeBf = true;
    const offs = nodeLabelOffsets(node);
    const target = {
      x: node.displayX,
      y: node.displayY + offs.bfY,
      z: node.displayZ + 6,
    };
    const left = state.bfAnim.left;
    const right = state.bfAnim.right;
    const leftStart = left
      ? { x: left.x, y: left.y, z: left.z }
      : leftTo;
    const rightStart = right
      ? { x: right.x, y: right.y, z: right.z }
      : rightTo;

    state.bfAnim.merge = {
      text: balanceFactorLabelText(resultBf),
      x: target.x,
      y: target.y,
      z: target.z,
      alpha: 0,
    };

    await new Promise((resolve) => {
      const start = performance.now();
      function frame(now) {
        if (!state.bfAnim || state.bfAnim.nodeId !== nodeId) {
          resolve();
          return;
        }
        const u = Math.min(1, (now - start) / combineMs);
        const e = easeInOut(u);
        if (left) {
          left.x = leftStart.x + (target.x - leftStart.x) * e;
          left.y = leftStart.y + (target.y - leftStart.y) * e;
          left.z = leftStart.z + (target.z - leftStart.z) * e;
          left.alpha = 1 - e * 0.85;
        }
        if (right) {
          right.x = rightStart.x + (target.x - rightStart.x) * e;
          right.y = rightStart.y + (target.y - rightStart.y) * e;
          right.z = rightStart.z + (target.z - rightStart.z) * e;
          right.alpha = 1 - e * 0.85;
        }
        state.bfAnim.merge.alpha = Math.min(1, Math.max(0, (u - 0.35) / 0.45));
        if (u < 1) {
          requestAnimationFrame(frame);
        } else {
          // Ensure stored bf matches the computed result.
          const n = nodeById(nodeId);
          if (n) n.bf = resultBf;
          state.bfAnim = null;
          resolve();
        }
      }
      requestAnimationFrame(frame);
    });
  }

  function clearBfAnim() {
    state.bfAnim = null;
  }

  /**
   * Extra pointer arrows during rotate_left / rotate_right.
   * role: 'new_root' | 'temp'
   * Pass nodeId, or nullRef { parentId, side } when pointing at a null child.
   */
  function setRoleArrow(role, nodeId, nullRef) {
    if (!state.roleArrows) state.roleArrows = [];
    state.roleArrows = state.roleArrows.filter((a) => a.role !== role);
    if (nodeId == null && !(nullRef && nullRef.parentId != null)) return;
    state.roleArrows.push({
      role,
      nodeId: nodeId == null ? null : nodeId,
      nullRef:
        nodeId == null && nullRef && nullRef.parentId != null
          ? {
              parentId: nullRef.parentId,
              side: nullRef.side === "right" ? "right" : "left",
            }
          : null,
    });
  }

  function clearRoleArrows() {
    state.roleArrows = [];
  }

  function collectSubtreeIds(rootId) {
    const ids = new Set();
    function walk(id) {
      if (id == null || ids.has(id)) return;
      ids.add(id);
      const n = nodeById(id);
      if (!n) return;
      walk(n.leftId);
      walk(n.rightId);
    }
    walk(rootId);
    return ids;
  }

  /**
   * Animate breaking one or more edges (red bold, twist apart).
   */
  function animateBreakEdges(pairs, durationMs) {
    return new Promise((resolve) => {
      const total = Math.max(500, durationMs || 700);
      const start = performance.now();
      const anims = pairs.map(([parentId, childId]) => {
        const id = nextEdgeAnimId++;
        const anim = {
          id,
          kind: "break",
          parentId,
          childId,
          t: 0,
        };
        state.edgeAnims.push(anim);
        state.hiddenEdges.add(edgeKey(parentId, childId));
        return anim;
      });

      function frame(now) {
        const u = Math.min(1, (now - start) / total);
        anims.forEach((a) => {
          a.t = u;
        });
        if (u < 1) {
          requestAnimationFrame(frame);
        } else {
          // Keep edges hidden (broken); remove break anims.
          state.edgeAnims = state.edgeAnims.filter(
            (e) => !anims.some((a) => a.id === e.id)
          );
          resolve();
        }
      }
      requestAnimationFrame(frame);
    });
  }

  /**
   * Animate reconnecting edges: bold green grow-in over ~0.5s, then normal.
   */
  function animateReconnectEdges(pairs, durationMs) {
    return new Promise((resolve) => {
      const total = Math.max(500, durationMs || 500);
      const start = performance.now();
      const anims = pairs.map(([parentId, childId]) => {
        const id = nextEdgeAnimId++;
        const anim = {
          id,
          kind: "reconnect",
          parentId,
          childId,
          t: 0,
        };
        state.edgeAnims.push(anim);
        state.hiddenEdges.delete(edgeKey(parentId, childId));
        return anim;
      });

      function frame(now) {
        const u = Math.min(1, (now - start) / total);
        anims.forEach((a) => {
          a.t = u;
        });
        if (u < 1) {
          requestAnimationFrame(frame);
        } else {
          state.edgeAnims = state.edgeAnims.filter(
            (e) => !anims.some((a) => a.id === e.id)
          );
          resolve();
        }
      }
      requestAnimationFrame(frame);
    });
  }

  /**
   * Rotate branch animation: swing subtree nodes from old to new layout.
   */
  function animateRotateBranch(nodeIds, durationMs) {
    return new Promise((resolve) => {
      const total = Math.max(600, durationMs || 900);
      const ids = nodeIds instanceof Set ? nodeIds : new Set(nodeIds);
      const starts = new Map();
      ids.forEach((id) => {
        const n = nodeById(id);
        if (!n) return;
        starts.set(id, {
          x: n.displayX,
          y: n.displayY,
          z: n.displayZ,
        });
      });

      // Snapshot targets after structure change + layout.
      computeTreeLayout();
      const ends = new Map();
      ids.forEach((id) => {
        const n = nodeById(id);
        if (!n) return;
        ends.set(id, {
          x: n.targetX,
          y: n.targetY,
          z: n.targetZ,
        });
      });

      // Find a pivot (average of start positions) for arc motion.
      let cx = 0;
      let cy = 0;
      let count = 0;
      starts.forEach((s) => {
        cx += s.x;
        cy += s.y;
        count += 1;
      });
      if (count) {
        cx /= count;
        cy /= count;
      }

      state.rotateAnim = { nodeIds: ids, t: 0 };
      const start = performance.now();

      function frame(now) {
        const u = Math.min(1, (now - start) / total);
        const t = easeInOut(u);
        const lift = Math.sin(t * Math.PI) * 28 * state.fitScale;
        ids.forEach((id) => {
          const n = nodeById(id);
          const s = starts.get(id);
          const e = ends.get(id);
          if (!n || !s || !e) return;
          // Arc: linear blend + perpendicular lift for a rotating feel.
          const mx = s.x + (e.x - s.x) * t;
          const my = s.y + (e.y - s.y) * t;
          const mz = s.z + (e.z - s.z) * t;
          const vx = e.x - s.x;
          const vy = e.y - s.y;
          // Perp in XY: (-vy, vx)
          const plen = Math.sqrt(vx * vx + vy * vy) || 1;
          n.displayX = mx + (-vy / plen) * lift * 0.35;
          n.displayY = my + (vx / plen) * lift * 0.15 - lift * 0.25;
          n.displayZ = mz + lift * 0.4;
        });
        state.rotateAnim.t = u;
        if (u < 1) {
          requestAnimationFrame(frame);
        } else {
          ids.forEach((id) => {
            const n = nodeById(id);
            const e = ends.get(id);
            if (!n || !e) return;
            n.displayX = e.x;
            n.displayY = e.y;
            n.displayZ = e.z;
            n.targetX = e.x;
            n.targetY = e.y;
            n.targetZ = e.z;
          });
          state.rotateAnim = null;
          resolve();
        }
      }
      requestAnimationFrame(frame);
    });
  }

  /**
   * Perform rotate_left(z) with break → rotate → reconnect for new_root.left ← node.
   * The node.right ← temp edge stays hidden until animateReconnectEdges is called later.
   * Returns the new subtree root id (y).
   */
  async function rotateLeftAnimated(zId, durationScale) {
    const z = nodeById(zId);
    if (!z || z.rightId == null) return zId;
    const yId = z.rightId;
    const y = nodeById(yId);
    if (!y) return zId;
    const t2Id = y.leftId;
    const gpId = findParentId(zId);
    const scale = durationScale == null ? 1 : durationScale;

    const breakPairs = [[zId, yId]];
    if (t2Id != null) breakPairs.push([yId, t2Id]);
    // Parent↔subtree link is deferred until caller assigns the returned root.

    await animateBreakEdges(breakPairs, 700 * scale);

    // Rewire structure (layout needs the final tree; parent reconnect is deferred).
    y.leftId = zId;
    z.rightId = t2Id;
    if (gpId == null) {
      state.rootId = yId;
    } else {
      const gp = nodeById(gpId);
      if (gp.leftId === zId) gp.leftId = yId;
      else if (gp.rightId === zId) gp.rightId = yId;
    }

    // Old edges no longer exist; keep new edges hidden until their reconnect step.
    breakPairs.forEach(([a, b]) => state.hiddenEdges.delete(edgeKey(a, b)));
    // Phase 1: new_root.left ← node only. Parent→new_root waits until caller assigns.
    const phase1 = [[yId, zId]];
    phase1.forEach(([a, b]) => state.hiddenEdges.add(edgeKey(a, b)));
    // Phase 2 (deferred to node.right ← temp step).
    if (t2Id != null) state.hiddenEdges.add(edgeKey(zId, t2Id));
    // Parent link stays hidden until setChild / assignChildAnimated after return.
    if (gpId != null) state.hiddenEdges.add(edgeKey(gpId, yId));

    const moving = collectSubtreeIds(yId);
    await animateRotateBranch(moving, 900 * scale);

    await animateReconnectEdges(phase1, 500 * scale);

    return yId;
  }

  /**
   * Perform rotate_right(z) with break → rotate → reconnect for new_root.right ← node.
   * The node.left ← temp edge stays hidden until animateReconnectEdges is called later.
   * Returns the new subtree root id (y).
   */
  async function rotateRightAnimated(zId, durationScale) {
    const z = nodeById(zId);
    if (!z || z.leftId == null) return zId;
    const yId = z.leftId;
    const y = nodeById(yId);
    if (!y) return zId;
    const t2Id = y.rightId;
    const gpId = findParentId(zId);
    const scale = durationScale == null ? 1 : durationScale;

    const breakPairs = [[zId, yId]];
    if (t2Id != null) breakPairs.push([yId, t2Id]);
    // Parent↔subtree link is deferred until caller assigns the returned root.

    await animateBreakEdges(breakPairs, 700 * scale);

    y.rightId = zId;
    z.leftId = t2Id;
    if (gpId == null) {
      state.rootId = yId;
    } else {
      const gp = nodeById(gpId);
      if (gp.leftId === zId) gp.leftId = yId;
      else if (gp.rightId === zId) gp.rightId = yId;
    }

    breakPairs.forEach(([a, b]) => state.hiddenEdges.delete(edgeKey(a, b)));
    // Phase 1: new_root.right ← node only. Parent→new_root waits until caller assigns.
    const phase1 = [[yId, zId]];
    phase1.forEach(([a, b]) => state.hiddenEdges.add(edgeKey(a, b)));
    if (t2Id != null) state.hiddenEdges.add(edgeKey(zId, t2Id));
    if (gpId != null) state.hiddenEdges.add(edgeKey(gpId, yId));

    const moving = collectSubtreeIds(yId);
    await animateRotateBranch(moving, 900 * scale);

    await animateReconnectEdges(phase1, 500 * scale);

    return yId;
  }

  /**
   * create_node animation:
   * - CURRENT on the new node only
   * - NODE_CREATED label on the right fades in over 0.5s
   */
  function animateCreateNode(nodeId, durationMs) {
    return new Promise((resolve) => {
      const node = nodeById(nodeId);
      if (!node) {
        resolve();
        return;
      }
      const fadeMs = 500;
      const total = Math.max(fadeMs + 200, durationMs || 900);
      state.currentId = nodeId;
      state.currentNull = null;
      state.createAnim = {
        nodeId,
        t: 0,
        labelAlpha: 0,
      };
      const start = performance.now();

      function frame(now) {
        if (!state.createAnim || state.createAnim.nodeId !== nodeId) {
          resolve();
          return;
        }
        const elapsed = now - start;
        const u = Math.min(1, elapsed / total);
        state.createAnim.t = u;
        state.createAnim.labelAlpha = easeInOut(Math.min(1, elapsed / fadeMs));
        if (u < 1) {
          requestAnimationFrame(frame);
        } else {
          state.createAnim.labelAlpha = 1;
          setTimeout(() => {
            if (state.createAnim && state.createAnim.nodeId === nodeId) {
              state.createAnim = null;
            }
            resolve();
          }, 180);
        }
      }
      requestAnimationFrame(frame);
    });
  }

  function setCompare(text) {
    state.compare = text ? { text } : null;
    updateHud();
  }

  function clearCompare() {
    state.compare = null;
    updateHud();
  }

  function animateCompare(nodeId, keyValue, durationMs) {
    return new Promise((resolve) => {
      const node = nodeById(nodeId);
      if (!node) {
        resolve();
        return;
      }
      const total = Math.max(1100, durationMs || 1800);
      const wonderMs = 500;
      const wonderFrac = Math.min(0.4, wonderMs / total);
      const from = state.flying
        ? {
            x: state.flying.displayX,
            y: state.flying.displayY,
            z: state.flying.displayZ,
          }
        : {
            x: node.displayX - 60,
            y: node.displayY - 80,
            z: 40,
          };

      state.compareAnim = {
        nodeId,
        keyValue,
        nodeValue: node.value,
        keySize: valueSize(keyValue),
        fromX: from.x,
        fromY: from.y,
        fromZ: from.z,
        phase: "move",
        t: 0,
      };
      state.currentId = nodeId;
      const start = performance.now();

      const moveEnd = 0.28;
      const wonderEnd = moveEnd + wonderFrac;
      const holdEnd = Math.min(0.88, wonderEnd + 0.28);

      function frame(now) {
        if (!state.compareAnim) {
          resolve();
          return;
        }
        const u = Math.min(1, (now - start) / total);
        if (u <= moveEnd) {
          state.compareAnim.phase = "move";
          state.compareAnim.t = moveEnd === 0 ? 1 : u / moveEnd;
        } else if (u <= wonderEnd) {
          state.compareAnim.phase = "wonder";
          state.compareAnim.t = (u - moveEnd) / (wonderEnd - moveEnd);
        } else if (u <= holdEnd) {
          state.compareAnim.phase = "hold";
          state.compareAnim.t = (u - wonderEnd) / (holdEnd - wonderEnd);
        } else {
          state.compareAnim.phase = "settle";
          state.compareAnim.t = (u - holdEnd) / (1 - holdEnd);
        }

        if (u < 1) {
          requestAnimationFrame(frame);
        } else {
          if (state.flying) {
            const sideGap =
              ((node.size || 24) + state.compareAnim.keySize) * 0.55 +
              18 * state.fitScale;
            state.flying.displayX = node.displayX - sideGap;
            state.flying.displayY = node.displayY;
            state.flying.displayZ = node.displayZ + 8;
            state.flying.targetX = state.flying.displayX;
            state.flying.targetY = state.flying.displayY;
            state.flying.targetZ = state.flying.displayZ;
          }
          state.compareAnim = null;
          resolve();
        }
      }
      requestAnimationFrame(frame);
    });
  }

  function setResultDone(n) {
    state.resultMessage = { n };
    clearProcessingKey();
    updateResultHud();
  }

  function clearFlying() {
    state.flying = null;
  }

  function clearOutcome() {
    state.currentId = null;
    state.currentNull = null;
    state.flying = null;
    state.compareAnim = null;
    state.edgeAnims = [];
    state.rotateAnim = null;
    state.createAnim = null;
    state.heightAnim = null;
    state.bfAnim = null;
    state.roleArrows = [];
    state.occupiedNull = null;
    state.hiddenEdges = new Set();
    state.resultMessage = null;
    clearProcessingKey();
    clearCompare();
    updateResultHud();
  }

  function resetVisualFromSequence() {
    setSequence(state.sequenceValues.slice());
  }

  function resize() {
    if (sketchInstance && sketchInstance.windowResized) {
      sketchInstance.windowResized();
    }
  }

  function zoomBy(factor) {
    state.userZoom = Math.min(2.8, Math.max(0.4, state.userZoom * factor));
  }

  function refreshLabels() {
    labelCache.clear();
    updateResultHud();
    updateProcessingKeyHud();
  }

  function getNodeValue(nodeId) {
    const n = nodeById(nodeId);
    return n ? n.value : null;
  }

  function getChildId(nodeId, side) {
    const n = nodeById(nodeId);
    if (!n) return null;
    return side === "left" ? n.leftId : n.rightId;
  }

  function getRootId() {
    return state.rootId;
  }

  function setRootId(id) {
    state.rootId = id;
  }

  function waitLayoutSettle(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms || 280));
  }

  return {
    init,
    setSequence,
    getSequence,
    getRootValue,
    getRootId,
    setRootId,
    getNodeValue,
    getChildId,
    setChild,
    assignChildAnimated,
    peekNextWaiting,
    beginInsert,
    setFlyingTarget,
    waitUntilFlyingNear,
    setCurrent,
    clearCurrent,
    setCurrentNull,
    clearCurrentNull,
    getNullChildWorldPos,
    createNode,
    createNodeAtNull,
    createRoot,
    animateCreateNode,
    findParentId,
    getBalanceFactor,
    getNodeHeight,
    updateNodeHeight,
    recomputeNodeBf,
    animateHeightRead,
    animateHeightCombine,
    clearHeightAnim,
    animateBalanceFactor,
    clearBfAnim,
    setRoleArrow,
    clearRoleArrows,
    recomputeAllHeights,
    rotateLeftAnimated,
    rotateRightAnimated,
    animateReconnectEdges,
    setCompare,
    clearCompare,
    animateCompare,
    setResultDone,
    clearOutcome,
    clearFlying,
    resetVisualFromSequence,
    resize,
    zoomBy,
    refreshLabels,
    waitLayoutSettle,
    computeTreeLayout,
    nodeById,
  };
})();
