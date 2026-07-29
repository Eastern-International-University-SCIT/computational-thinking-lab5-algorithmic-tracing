#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const report = { jumpSearch: [], mergeSort: [] };

function walk(directory, filename, found = []) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(target, filename, found);
    else if (entry.name === filename) found.push(target);
  }
  return found;
}

function appDirectory(caseDirectory) {
  const entry = fs.readdirSync(caseDirectory, { withFileTypes: true })
    .find((item) => item.isDirectory() && fs.existsSync(path.join(caseDirectory, item.name, "js", "puzzle.js")));
  if (!entry) throw new Error(`No puzzle application in ${caseDirectory}`);
  return path.join(caseDirectory, entry.name);
}

function replaceEmbeddedInstance(source, next, puzzleFile) {
  const marker = "  const INSTANCE = ";
  const start = source.indexOf(marker);
  if (start === -1) throw new Error(`Embedded instance marker not found in ${puzzleFile}`);
  const jsonStart = start + marker.length;
  let depth = 0;
  let quoted = false;
  let escaped = false;
  let jsonEnd = -1;
  for (let index = jsonStart; index < source.length; index += 1) {
    const char = source[index];
    if (quoted) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === '"') quoted = false;
      continue;
    }
    if (char === '"') quoted = true;
    else if (char === "{") depth += 1;
    else if (char === "}") {
      depth -= 1;
      if (depth === 0) {
        jsonEnd = index + 1;
        break;
      }
    }
  }
  if (jsonEnd === -1) throw new Error(`Embedded instance end not found in ${puzzleFile}`);
  return source.slice(0, jsonStart) + JSON.stringify(next, null, 2) + source.slice(jsonEnd);
}

function writeInstanceAndEmbedded(instanceFile, previous, next) {
  const app = appDirectory(path.dirname(instanceFile));
  const puzzleFile = path.join(app, "js", "puzzle.js");
  const source = fs.readFileSync(puzzleFile, "utf8");
  fs.writeFileSync(instanceFile, `${JSON.stringify(next, null, 2)}\n`, "utf8");
  fs.writeFileSync(puzzleFile, replaceEmbeddedInstance(source, next, puzzleFile), "utf8");
}

function display(value) {
  return value === null || value === undefined ? "—" : String(value);
}

function seededShuffle(values, seedText) {
  let seed = Array.from(seedText).reduce((value, char) => (value * 31 + char.charCodeAt(0)) >>> 0, 2166136261);
  const result = values.slice();
  for (let index = result.length - 1; index > 0; index -= 1) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const swapIndex = seed % (index + 1);
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function repairJumpSearch() {
  const base = path.join(root, "search", "jumpsearch_puzzles");
  for (const instanceFile of walk(base, "puzzle_instance.json")) {
    const previous = JSON.parse(fs.readFileSync(instanceFile, "utf8"));
    if (previous.varFields.includes("jump")) {
      report.jumpSearch.push(path.relative(root, instanceFile).replace(/\\/g, "/"));
      continue;
    }
    const next = JSON.parse(JSON.stringify(previous));
    next.varFields = next.varFields.map((field) => field === "step" ? "jump" : field);
    next.blankFields = next.blankFields.map((field) => field === "step" ? "jump" : field);
    next.rows.forEach((row, index) => {
      row.jump = row.step === null || row.step === undefined ? null : row.step;
      row.step = index + 1;
      delete row.missing;
    });

    next.answers = {};
    next.pieces = Object.fromEntries(next.blankFields.map((field) => [field, []]));
    let pieceId = 1;
    for (const stepNumber of next.pickedSteps) {
      const row = next.rows[stepNumber - 1];
      if (!row) throw new Error(`Picked step ${stepNumber} is outside ${instanceFile}`);
      row.missing = Object.fromEntries(next.blankFields.map((field) => [field, true]));
      next.answers[String(stepNumber)] = {};
      for (const field of next.blankFields) {
        const value = display(row[field]);
        next.answers[String(stepNumber)][field] = value;
        next.pieces[field].push({ id: pieceId, value });
        pieceId += 1;
      }
    }
    for (const field of next.blankFields) {
      next.pieces[field] = seededShuffle(next.pieces[field], `${instanceFile}:${field}`);
    }

    writeInstanceAndEmbedded(instanceFile, previous, next);

    const caseDirectory = path.dirname(instanceFile);
    const csvFile = path.join(caseDirectory, "execution_trace.csv");
    const csvLines = fs.readFileSync(csvFile, "utf8").split(/\r?\n/);
    let ordinal = 0;
    const fixedCsv = csvLines.map((line, index) => {
      if (index === 0 || !line) return line;
      ordinal += 1;
      return line.replace(/^[^,]*/, String(ordinal));
    });
    fs.writeFileSync(csvFile, fixedCsv.join("\n"), "utf8");

    const app = appDirectory(caseDirectory);
    const indexFile = path.join(app, "index.html");
    const indexSource = fs.readFileSync(indexFile, "utf8");
    if (!indexSource.includes('data-section="step"')) throw new Error(`Step section not found in ${indexFile}`);
    fs.writeFileSync(indexFile, indexSource.replace('data-section="step"', 'data-section="jump"'), "utf8");

    const puzzleFile = path.join(app, "js", "puzzle.js");
    const puzzleSource = fs.readFileSync(puzzleFile, "utf8");
    const labelMarker = '    if (field === "stepId") return t("puzzleSectionStepId");';
    const labelAddition = `${labelMarker}\n    if (field === "jump") return t("labelStep");`;
    if (!puzzleSource.includes(labelMarker)) throw new Error(`Section label marker not found in ${puzzleFile}`);
    fs.writeFileSync(puzzleFile, puzzleSource.replace(labelMarker, labelAddition), "utf8");
    report.jumpSearch.push(path.relative(root, instanceFile).replace(/\\/g, "/"));
  }
}

function repairMergeSort() {
  const base = path.join(root, "sort", "mergesort_puzzles");
  for (const instanceFile of walk(base, "puzzle_instance.json")) {
    const previous = JSON.parse(fs.readFileSync(instanceFile, "utf8"));
    const next = JSON.parse(JSON.stringify(previous));
    const working = next.array.slice();
    let leftRun = [];
    let rightRun = [];

    for (const row of next.rows) {
      if (row.stepId === "copyRuns") {
        leftRun = working.slice(row.left, row.mid + 1);
        rightRun = working.slice(row.mid + 1, row.right + 1);
      } else if (row.stepId === "takeLeft") {
        working[row.k] = leftRun[row.i];
      } else if (row.stepId === "takeRight") {
        working[row.k] = rightRun[row.j];
      } else if (row.stepId === "drainLeft") {
        let source = row.i;
        let target = row.k;
        while (source < leftRun.length) {
          working[target] = leftRun[source];
          source += 1;
          target += 1;
        }
      } else if (row.stepId === "drainRight") {
        let source = row.j;
        let target = row.k;
        while (source < rightRun.length) {
          working[target] = rightRun[source];
          source += 1;
          target += 1;
        }
      }
      row.array = working.slice();
    }

    const expected = next.array.slice().sort((a, b) => a - b);
    if (JSON.stringify(working) !== JSON.stringify(expected)) {
      throw new Error(`Reconstructed Merge Sort trace is still incorrect: ${instanceFile}`);
    }
    writeInstanceAndEmbedded(instanceFile, previous, next);
    report.mergeSort.push(path.relative(root, instanceFile).replace(/\\/g, "/"));
  }
}

repairJumpSearch();
repairMergeSort();
console.log(JSON.stringify(report, null, 2));
