/**
 * Generate Linear Search execution-trace puzzles for size 12 and 16.
 *
 * For each size: one shared array, four cases
 *   1) first element (best)
 *   2) middle element (average)
 *   3) last element
 *   4) absent key
 *
 * Blank rows: randomly pick ~40% of total rows, never the first row.
 * Blank columns (same rules as size_8):
 *   setI / incI          → i + stepId
 *   returnFound / Miss   → result + stepId
 *   whileLoop / checkEqual → stepId only
 *
 * Usage: node generate_puzzles.js
 */

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const TEMPLATE_APP = path.join(ROOT, "size_8", "case_1", "linearsearch");
const PICK_RATIO = 0.4;

/** One array per size (same arrays as sandbox_3 linear-search traces). */
const ARRAYS = {
  12: [30, 100, 20, 110, 80, 50, 40, 10, 60, 70, 120, 90],
  16: [150, 140, 120, 80, 40, 30, 20, 90, 100, 160, 60, 50, 70, 110, 130, 10],
};

/** Deterministic PRNG so regenerating yields the same puzzles. */
function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function linearSearchTrace(arr, key) {
  const n = arr.length;
  const rows = [];
  let i = null;
  let result = null;

  function push(stepId, mutate) {
    if (typeof mutate === "function") mutate();
    rows.push({
      step: rows.length + 1,
      stepId,
      n,
      key,
      i,
      result,
    });
  }

  push("mainCall");
  push("setI", () => {
    i = 0;
  });

  while (true) {
    let loopCond = false;
    push("whileLoop", () => {
      loopCond = i < n;
    });
    if (!loopCond) break;

    let equal = false;
    push("checkEqual", () => {
      equal = arr[i] === key;
    });
    if (equal) {
      push("returnFound", () => {
        result = i;
      });
      return rows;
    }
    push("incI", () => {
      i = i + 1;
    });
  }

  push("returnMiss", () => {
    result = "NOT_FOUND";
  });
  return rows;
}

function missingForStep(stepId) {
  if (stepId === "setI" || stepId === "incI") {
    return { i: true, stepId: true };
  }
  if (stepId === "returnFound" || stepId === "returnMiss") {
    return { result: true, stepId: true };
  }
  // whileLoop, checkEqual, mainCall
  return { stepId: true };
}

function fieldOrder(stepId) {
  if (stepId === "setI" || stepId === "incI") return ["i", "stepId"];
  if (stepId === "returnFound" || stepId === "returnMiss") return ["result", "stepId"];
  return ["stepId"];
}

function pickRandomSteps(totalRows, rng) {
  const candidates = [];
  for (let s = 2; s <= totalRows; s++) candidates.push(s);
  const count = Math.round(totalRows * PICK_RATIO);
  const take = Math.min(count, candidates.length);

  // Fisher–Yates shuffle of candidates, then take first `take` and sort.
  for (let i = candidates.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
  }
  return candidates.slice(0, take).sort((a, b) => a - b);
}

function cellValue(row, field) {
  const v = row[field];
  if (v == null) return null;
  return String(v);
}

function buildPuzzle(arr, key, rng) {
  const rows = linearSearchTrace(arr, key);
  const pickedSteps = pickRandomSteps(rows.length, rng);
  const picked = new Set(pickedSteps);

  const answers = {};
  const pieces = { i: [], stepId: [], result: [] };
  let nextId = 1;

  const outRows = rows.map((row) => {
    const copy = {
      step: row.step,
      stepId: row.stepId,
      n: row.n,
      key: row.key,
      i: row.i,
      result: row.result,
    };
    if (!picked.has(row.step)) return copy;

    const missing = missingForStep(row.stepId);
    copy.missing = missing;

    const ans = {};
    for (const field of fieldOrder(row.stepId)) {
      if (!missing[field]) continue;
      const value = cellValue(row, field);
      ans[field] = value;
      if (!pieces[field]) pieces[field] = [];
      pieces[field].push({ id: nextId++, value });
    }
    answers[String(row.step)] = ans;
    return copy;
  });

  // Drop empty piece buckets to match size_8 shape (always keep the three keys).
  return {
    array: arr.slice(),
    key,
    pickedSteps,
    answers,
    pieces,
    rows: outRows,
  };
}

function toCsv(arr, key, rows) {
  const header = "Step,StepId,Array,Key,n,key,i,result";
  const arrayStr = `[${arr.join(", ")}]`;
  const lines = rows.map((r) => {
    const i = r.i == null ? "" : String(r.i);
    const result = r.result == null ? "" : String(r.result);
    return `${r.step},${r.stepId},"${arrayStr}",${key},${r.n},${r.key},${i},${result}`;
  });
  return [header, ...lines].join("\n") + "\n";
}

function embedInstance(puzzleJsSource, instance) {
  const json = JSON.stringify(instance, null, 2);
  const start = puzzleJsSource.indexOf("  const INSTANCE = {");
  const end = puzzleJsSource.indexOf("\n  let filled = {");
  if (start < 0 || end < 0) {
    throw new Error("Could not locate INSTANCE block in puzzle.js template");
  }
  return (
    puzzleJsSource.slice(0, start) +
    "  const INSTANCE = " +
    json +
    ";\n" +
    puzzleJsSource.slice(end)
  );
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const name of fs.readdirSync(src)) {
    const from = path.join(src, name);
    const to = path.join(dest, name);
    if (fs.statSync(from).isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

function caseSpecs(arr) {
  const n = arr.length;
  const mid = Math.floor(n / 2);
  return [
    { caseNum: 1, label: "first (best)", key: arr[0] },
    { caseNum: 2, label: "middle (average)", key: arr[mid] },
    { caseNum: 3, label: "last", key: arr[n - 1] },
    { caseNum: 4, label: "not found", key: Math.max(...arr) + 1 },
  ];
}

function main() {
  const templatePuzzleJs = fs.readFileSync(
    path.join(TEMPLATE_APP, "js", "puzzle.js"),
    "utf8"
  );

  const summary = [];

  for (const size of [12, 16]) {
    const arr = ARRAYS[size];
    const sizeDir = path.join(ROOT, `size_${size}`);

    for (const spec of caseSpecs(arr)) {
      const seed = size * 1000 + spec.caseNum * 17 + 42;
      const rng = mulberry32(seed);
      const puzzle = buildPuzzle(arr, spec.key, rng);

      const caseDir = path.join(sizeDir, `case_${spec.caseNum}`);
      const appDir = path.join(caseDir, "linearsearch");
      fs.mkdirSync(caseDir, { recursive: true });

      fs.writeFileSync(
        path.join(caseDir, "puzzle_instance.json"),
        JSON.stringify(puzzle, null, 2) + "\n",
        "utf8"
      );
      fs.writeFileSync(
        path.join(caseDir, "execution_trace.csv"),
        toCsv(arr, spec.key, puzzle.rows),
        "utf8"
      );

      copyDir(TEMPLATE_APP, appDir);
      const newPuzzleJs = embedInstance(templatePuzzleJs, puzzle);
      fs.writeFileSync(path.join(appDir, "js", "puzzle.js"), newPuzzleJs, "utf8");

      summary.push({
        size,
        case: spec.caseNum,
        label: spec.label,
        key: spec.key,
        totalRows: puzzle.rows.length,
        picked: puzzle.pickedSteps.length,
        pickedSteps: puzzle.pickedSteps,
      });
    }
  }

  console.log("Generated Linear Search puzzles:\n");
  for (const s of summary) {
    console.log(
      `  size_${s.size}/case_${s.case} (${s.label}): key=${s.key}, ` +
        `rows=${s.totalRows}, picked=${s.picked}/${s.totalRows} (${Math.round(
          (s.picked / s.totalRows) * 100
        )}%) → [${s.pickedSteps.join(", ")}]`
    );
  }
}

main();
