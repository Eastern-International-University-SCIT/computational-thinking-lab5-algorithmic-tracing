/**
 * p5.js WEBGL visualization for BST insertion.
 * Queue spheres (top-right) + 3D tree with CURRENT pointer and compare anim.
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

  const state = {
    sequenceValues: [],
    queue: [], // { id, value, status: waiting|flying|done, x,y,z, size }
    nodes: [], // flat list of tree nodes
    rootId: null,
    currentId: null,
    flying: null, // { value, size, x,y,z, displayX,... }
    compare: null,
    compareAnim: null,
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
  };

  const ROT_X_LIMIT = 0.55;

  function labelText(key, fallback) {
    if (window.I18n) return window.I18n.t(key);
    return fallback;
  }

  function softScale(value, minV, maxV) {
    if (maxV === minV) return 28;
    const t = (value - minV) / (maxV - minV);
    // Compress dynamic range so large numbers aren't gigantic spheres.
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
    // Base glyph size for the sphere, then 1.5× as in the AVL sim.
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

  function drawBillboardLabel(p, text, x, y, z, color, opts) {
    const wide = text.length > 12;
    const w = (opts && opts.w) || (wide ? 220 : 130);
    const h = (opts && opts.h) || 36;
    const size = (opts && opts.size) || (wide ? 12 : 14);
    const planeW = (opts && opts.planeW) || (wide ? 78 : 48);
    p.push();
    p.translate(x, y, z);
    p.rotateY(-state.rotY);
    p.rotateX(-state.rotX);
    p.textureMode(p.NORMAL);
    p.texture(
      makeLabel(p, text, {
        w,
        h,
        size,
        bg: [color[0], color[1], color[2], 235],
        fg: [255, 255, 255],
      })
    );
    p.plane(planeW, 15);
    p.pop();
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

  function computeTreeLayout() {
    const root = nodeById(state.rootId);
    if (!root) {
      state.fitScale = 1;
      return;
    }

    // Measure subtree leaf spans for nicer horizontal spacing.
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
    // Keep the queue on a fixed world-Y lane so fitScale / tree layout
    // never splits processed markers onto a second line.
    // y=-125 / z=0 matches AVL: closer to the tree and easier to see.
    const y = -125;
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
      // Snap onto the lane immediately if this is a new/misaligned marker.
      if (q.displayX == null || q.displayY == null) {
        q.displayX = x;
        q.displayY = y;
        q.displayZ = z;
      } else {
        // Pull any vertically drifted markers back onto the single lane.
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
      : `All ${msg.n} keys inserted into the BST.`;
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

  function drawLink(p, a, b) {
    if (!a || !b) return;
    p.push();
    p.stroke(COLORS.link[0], COLORS.link[1], COLORS.link[2], 200);
    p.strokeWeight(2.4 * state.fitScale);
    p.line(a.displayX, a.displayY, a.displayZ, b.displayX, b.displayY, b.displayZ);
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
      // Wrinkled / shaky question mark period (~0.5s of total timeline).
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

      // Keep queue markers on one horizontal lane every frame
      // (tree fitScale changes must not split processed dots vertically).
      layoutQueue(p.width);

      p.ambientLight(168);
      p.directionalLight(255, 245, 230, -0.35, 0.6, -0.5);
      p.directionalLight(180, 210, 230, 0.4, 0.2, 0.3);
      p.pointLight(255, 255, 255, 0, -180, 120);

      p.translate(state.panX, state.panY, 0);
      p.scale(state.userZoom);
      p.rotateX(state.rotX);
      p.rotateY(state.rotY);

      // Smooth queue + tree positions
      state.queue.forEach((q) => {
        if (q.displayX == null) return;
        if (q.targetX == null) return;
        q.displayX += (q.targetX - q.displayX) * 0.18;
        q.displayY += (q.targetY - q.displayY) * 0.18;
        q.displayZ += (q.targetZ - q.displayZ) * 0.18;
      });
      state.nodes.forEach((n) => {
        if (n.targetX == null) return;
        n.displayX += (n.targetX - n.displayX) * 0.16;
        n.displayY += (n.targetY - n.displayY) * 0.16;
        n.displayZ += (n.targetZ - n.displayZ) * 0.16;
      });

      const animDraw = resolveCompareDraw(state.compareAnim);
      const hideFlyingDuringCompare = !!(state.compareAnim && state.flying);

      // Queue (top-right): waiting + processed markers
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

      // Tree edges
      state.nodes.forEach((n) => {
        if (n.leftId != null) drawLink(p, n, nodeById(n.leftId));
        if (n.rightId != null) drawLink(p, n, nodeById(n.rightId));
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
        }

        drawSphereAt(p, x, y, z, n.size || valueSize(n.value), col, n.value, {
          edge,
          edgeColor,
        });

        if (state.currentId === n.id && !(state.compareAnim && state.compareAnim.nodeId === n.id)) {
          drawTopArrow(
            p,
            x,
            y - (n.size || 24) * 0.75 - 6,
            z,
            COLORS.current,
            labelText("labelCurrent", "CURRENT")
          );
        }
      });

      // Flying insert key / compare partner
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
    state.flying = null;
    state.compare = null;
    state.compareAnim = null;
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

    // Leave a processed marker; layoutQueue will place it on the shared lane.
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
  }

  function clearCurrent() {
    state.currentId = null;
  }

  function createRoot(value) {
    const id = nextNodeId++;
    const size = valueSize(value);
    const node = {
      id,
      value,
      leftId: null,
      rightId: null,
      size,
      targetX: 0,
      targetY: state.treeOffsetY,
      targetZ: 0,
      displayX: state.flying ? state.flying.displayX : 0,
      displayY: state.flying ? state.flying.displayY : state.treeOffsetY,
      displayZ: state.flying ? state.flying.displayZ : 0,
    };
    state.nodes.push(node);
    state.rootId = id;
    state.flying = null;
    computeTreeLayout();
    return id;
  }

  function attachChild(parentId, side, value) {
    const parent = nodeById(parentId);
    if (!parent) return null;
    const id = nextNodeId++;
    const size = valueSize(value);
    const node = {
      id,
      value,
      leftId: null,
      rightId: null,
      size,
      targetX: parent.displayX,
      targetY: parent.displayY + LEVEL_GAP * state.fitScale,
      targetZ: 0,
      displayX: state.flying ? state.flying.displayX : parent.displayX,
      displayY: state.flying ? state.flying.displayY : parent.displayY,
      displayZ: state.flying ? state.flying.displayZ : 0,
    };
    state.nodes.push(node);
    if (side === "left") parent.leftId = id;
    else parent.rightId = id;
    state.flying = null;
    computeTreeLayout();
    return id;
  }

  function setCompare(text) {
    state.compare = text ? { text } : null;
    updateHud();
  }

  function clearCompare() {
    state.compare = null;
    updateHud();
  }

  /**
   * Compare flying key with tree node:
   * move beside node (left) → wonder/shake "?" ~0.5s → purple hold → settle.
   */
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
          // Park flying sphere near the node for the next hop.
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

  function clearOutcome() {
    state.currentId = null;
    state.flying = null;
    state.compareAnim = null;
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

  return {
    init,
    setSequence,
    getSequence,
    getRootValue,
    getRootId,
    getNodeValue,
    getChildId,
    peekNextWaiting,
    beginInsert,
    setFlyingTarget,
    waitUntilFlyingNear,
    setCurrent,
    clearCurrent,
    createRoot,
    attachChild,
    setCompare,
    clearCompare,
    animateCompare,
    setResultDone,
    clearOutcome,
    resetVisualFromSequence,
    resize,
    zoomBy,
    refreshLabels,
    nodeById,
  };
})();
