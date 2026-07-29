#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const courseRoots = ["search", "sort", "tree"].map((name) => path.join(root, name));

function walk(directory, filename, found = []) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(target, filename, found);
    else if (entry.name === filename) found.push(target);
  }
  return found;
}

function allFiles(filename) {
  return courseRoots.flatMap((directory) => walk(directory, filename));
}

function lineEnding(source) {
  return source.includes("\r\n") ? "\r\n" : "\n";
}

function updateStartup(source, filename) {
  if (source.includes("function applyPuzzleInstance(preservePuzzleState)")) return source;

  const start = source.indexOf("  function applyPuzzleInstance() {");
  const end = source.indexOf("  function applyI18n", start);
  if (start === -1 || end === -1) {
    throw new Error(`Cannot locate applyPuzzleInstance in ${filename}`);
  }

  const eol = lineEnding(source);
  let body = source.slice(start, end)
    .replace("function applyPuzzleInstance()", "function applyPuzzleInstance(preservePuzzleState)");

  if (body.includes("window.AvlInsertExecutor.isBusy")) {
    const resetStart = body.indexOf("    if (window.AvlInsertExecutor.isBusy");
    const visualStart = body.indexOf("    window.TreeViz.setSequence", resetStart);
    if (resetStart === -1 || visualStart === -1) {
      throw new Error(`Cannot isolate AVL reset block in ${filename}`);
    }
    const resetBlock = body.slice(resetStart, visualStart).trimEnd();
    const indented = resetBlock.split(/\r?\n/).map((line) => `  ${line}`).join(eol);
    body = body.slice(0, resetStart)
      + `    if (!preservePuzzleState) {${eol}${indented}${eol}    }${eol}`
      + body.slice(visualStart);
  } else {
    const resetPattern = /^(    )(window\.[A-Za-z]+Executor\.reset\(\);)$/m;
    if (!resetPattern.test(body)) {
      throw new Error(`Cannot locate executor reset in ${filename}`);
    }
    body = body.replace(resetPattern, "$1if (!preservePuzzleState) $2");
  }

  let updated = source.slice(0, start) + body + source.slice(end);
  const startupCall = "    applyPuzzleInstance();";
  const callIndex = updated.lastIndexOf(startupCall);
  if (callIndex === -1 || callIndex < end) {
    throw new Error(`Cannot locate startup applyPuzzleInstance call in ${filename}`);
  }
  updated = updated.slice(0, callIndex)
    + "    applyPuzzleInstance(true);"
    + updated.slice(callIndex + startupCall.length);
  return updated;
}

function completedStateBlock(eol) {
  return [
    "  function completedPuzzleRequested() {",
    "    try {",
    "      return new URLSearchParams(window.location.search).get(\"completed\") === \"1\";",
    "    } catch (_) {",
    "      return false;",
    "    }",
    "  }",
    "",
    "  function loadCompletedAnswers() {",
    "    filled = {};",
    "    Object.keys(INSTANCE.answers || {}).forEach(function(step) {",
    "      const answer = INSTANCE.answers[step] || {};",
    "      filled[step] = {};",
    "      Object.keys(answer).forEach(function(field) {",
    "        filled[step][field] = String(answer[field]);",
    "      });",
    "    });",
    "    taskComplete = true;",
    "    savePuzzleState();",
    "  }",
    "",
    "  function restorePuzzleState() {",
    "    let restored = false;",
    "    try {",
    "      const key = puzzleStorageKey();",
    "      const raw = key ? localStorage.getItem(key) : null;",
    "      if (raw) {",
    "        const saved = JSON.parse(raw);",
    "        if (saved && saved.filled && typeof saved.filled === \"object\" && !Array.isArray(saved.filled)) {",
    "          filled = saved.filled;",
    "          taskComplete = !!saved.taskComplete;",
    "          restored = true;",
    "        }",
    "      }",
    "    } catch (_) {",
    "      /* A completed puzzle can still be reconstructed from its embedded answers. */",
    "    }",
    "",
    "    if (completedPuzzleRequested() && (!restored || !taskComplete || !isSolved())) {",
    "      loadCompletedAnswers();",
    "      restored = true;",
    "    }",
    "    if (!restored) return false;",
    "",
    "    // Rebuild availablePieces: start from the full set and remove placed pieces.",
    "    resetAvailablePieces();",
    "    Object.keys(filled).forEach(function(step) {",
    "      const rowFill = filled[step];",
    "      if (!rowFill || typeof rowFill !== \"object\") return;",
    "      Object.keys(rowFill).forEach(function(field) {",
    "        const val = rowFill[field];",
    "        if (val != null && val !== \"\") takePiece(field, val);",
    "      });",
    "    });",
    "    return true;",
    "  }",
    "",
    "",
  ].join(eol);
}

function updatePuzzleState(source, filename) {
  if (source.includes("function completedPuzzleRequested()")) {
    if (filename.includes(`${path.sep}avltree${path.sep}`) && !source.includes("const DISPLAY_FIELDS")) {
      const marker = "  function t(key)";
      const markerIndex = source.indexOf(marker);
      if (markerIndex === -1) throw new Error(`Cannot restore DISPLAY_FIELDS in ${filename}`);
      return source.slice(0, markerIndex)
        + `  const DISPLAY_FIELDS = INSTANCE.blankFields || [\"stepId\"];${lineEnding(source)}${lineEnding(source)}`
        + source.slice(markerIndex);
    }
    return source;
  }

  const start = source.indexOf("  function restorePuzzleState() {");
  const catchLine = source.indexOf("    } catch (_) { return false; }", start);
  const lineEnd = catchLine === -1 ? -1 : source.indexOf(lineEnding(source), catchLine);
  const end = lineEnd === -1 ? -1 : lineEnd + lineEnding(source).length;
  if (start === -1 || end === -1) {
    throw new Error(`Cannot locate restorePuzzleState in ${filename}`);
  }
  return source.slice(0, start) + completedStateBlock(lineEnding(source)) + source.slice(end);
}

function synchronize(files, updater) {
  let changed = 0;
  for (const filename of files) {
    const source = fs.readFileSync(filename, "utf8");
    const updated = updater(source, filename);
    if (updated === source) continue;
    fs.writeFileSync(filename, updated, "utf8");
    changed += 1;
  }
  return changed;
}

function verifyCompletedRecovery(filename, source) {
  const applicationDirectory = path.dirname(path.dirname(filename));
  const puzzlePath = path.relative(root, path.join(applicationDirectory, "index.html")).replace(/\\/g, "/");
  const storageKey = `tracelab-puzzle-state:${puzzlePath}`;
  const stored = new Map([[storageKey, JSON.stringify({ filled: {}, taskComplete: false })]]);
  const localStorage = {
    getItem(key) { return stored.has(String(key)) ? stored.get(String(key)) : null; },
    setItem(key, value) { stored.set(String(key), String(value)); },
    removeItem(key) { stored.delete(String(key)); },
  };
  const document = {
    getElementById() { return null; },
    querySelector() { return null; },
    querySelectorAll() { return []; },
  };
  const window = {
    document,
    localStorage,
    location: { pathname: `/${puzzlePath}`, search: "?lang=en&completed=1" },
    opener: null,
    parent: { postMessage() {} },
  };
  window.window = window;

  const context = vm.createContext({
    console,
    document,
    localStorage,
    URLSearchParams,
    window,
  });
  new vm.Script(source, { filename }).runInContext(context);
  const puzzle = window.TracePuzzle;
  if (!puzzle || typeof puzzle.init !== "function") {
    throw new Error(`TracePuzzle did not load in ${filename}`);
  }
  puzzle.init();
  if (!puzzle.isTaskComplete() || !puzzle.isSolved()) {
    throw new Error(`Completed answers were not recovered in ${filename}`);
  }
  puzzle.prepareRun({ force: true });
  const blockedStep = puzzle.INSTANCE.rows.find((row) => row.missing && puzzle.shouldGate(row.step));
  if (blockedStep || !puzzle.isSolved()) {
    throw new Error(`Recovered answers cannot rerun the algorithm in ${filename}`);
  }

  const saved = JSON.parse(stored.get(storageKey) || "null");
  const expectedSteps = Object.keys(puzzle.INSTANCE.answers || {}).length;
  if (!saved || !saved.taskComplete || Object.keys(saved.filled || {}).length !== expectedSteps) {
    throw new Error(`Recovered answers were not persisted in ${filename}`);
  }
}

const appFiles = allFiles("app.js");
const puzzleFiles = allFiles("puzzle.js");
const result = {
  appFiles: appFiles.length,
  puzzleFiles: puzzleFiles.length,
  updatedApps: synchronize(appFiles, updateStartup),
  updatedPuzzles: synchronize(puzzleFiles, updatePuzzleState),
};

if (result.appFiles !== 120 || result.puzzleFiles !== 120) {
  throw new Error(`Expected 120 app and puzzle files, found ${result.appFiles} and ${result.puzzleFiles}`);
}

for (const filename of appFiles) {
  const source = fs.readFileSync(filename, "utf8");
  if (!source.includes("function applyPuzzleInstance(preservePuzzleState)")
      || !source.includes("applyPuzzleInstance(true);")) {
    throw new Error(`Startup state preservation is missing from ${filename}`);
  }
  new vm.Script(source, { filename });
}

for (const filename of puzzleFiles) {
  const source = fs.readFileSync(filename, "utf8");
  if (!source.includes("function completedPuzzleRequested()")
      || !source.includes("loadCompletedAnswers();")) {
    throw new Error(`Completed-answer recovery is missing from ${filename}`);
  }
  if (filename.includes(`${path.sep}avltree${path.sep}`) && !source.includes("const DISPLAY_FIELDS")) {
    throw new Error(`AVL display fields are missing from ${filename}`);
  }
  new vm.Script(source, { filename });
  verifyCompletedRecovery(filename, source);
}

const gameFile = path.join(root, "assets", "game.js");
const gameSource = fs.readFileSync(gameFile, "utf8");
if (!gameSource.includes('solved ? "&completed=1" : ""')) {
  throw new Error("The dashboard does not identify completed puzzles when reopening them");
}
new vm.Script(gameSource, { filename: gameFile });

console.log(JSON.stringify(result, null, 2));
