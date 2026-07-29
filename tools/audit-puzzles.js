#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const categories = ["search", "sort", "tree"];
const problems = [];
const warnings = [];
const stats = { puzzles: 0, rows: 0, answers: 0, csvTraces: 0, embeddedInstances: 0, languageModules: 0 };

function walk(directory, filename, found = []) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(target, filename, found);
    else if (entry.name === filename) found.push(target);
  }
  return found;
}

function relative(file) {
  return path.relative(root, file).replace(/\\/g, "/");
}

function addProblem(file, message) {
  problems.push(`${relative(file)}: ${message}`);
}

function addWarning(file, message) {
  warnings.push(`${relative(file)}: ${message}`);
}

function display(value) {
  if (value === null || value === undefined || value === "") return "—";
  if (Array.isArray(value)) return JSON.stringify(value);
  return String(value);
}

function multiset(values) {
  const counts = new Map();
  values.forEach((value) => {
    const key = display(value);
    counts.set(key, (counts.get(key) || 0) + 1);
  });
  return Array.from(counts.entries()).sort((a, b) => a[0].localeCompare(b[0]));
}

function sameJson(left, right) {
  return JSON.stringify(left) === JSON.stringify(right);
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (quoted) {
      if (char === '"' && text[index + 1] === '"') {
        value += '"';
        index += 1;
      } else if (char === '"') quoted = false;
      else value += char;
    } else if (char === '"') quoted = true;
    else if (char === ",") {
      row.push(value);
      value = "";
    } else if (char === "\n") {
      row.push(value.replace(/\r$/, ""));
      if (row.some((cell) => cell !== "") && !String(row[0]).startsWith("#")) rows.push(row);
      row = [];
      value = "";
    } else value += char;
  }
  if (value || row.length) {
    row.push(value.replace(/\r$/, ""));
    if (!String(row[0]).startsWith("#")) rows.push(row);
  }
  const headers = rows.shift() || [];
  return rows.map((cells) => Object.fromEntries(headers.map((header, index) => [header, cells[index] || ""])));
}

function locateAppDirectory(instanceFile) {
  const caseDirectory = path.dirname(instanceFile);
  const appDirectory = fs.readdirSync(caseDirectory, { withFileTypes: true })
    .find((entry) => entry.isDirectory() && fs.existsSync(path.join(caseDirectory, entry.name, "js", "puzzle.js")));
  return appDirectory ? path.join(caseDirectory, appDirectory.name) : null;
}

function compareEmbeddedInstance(instanceFile, instance, appDirectory) {
  if (!appDirectory) {
    addProblem(instanceFile, "puzzle application directory is missing");
    return;
  }
  const puzzleScript = path.join(appDirectory, "js", "puzzle.js");
  try {
    const context = { window: {}, console };
    vm.runInNewContext(fs.readFileSync(puzzleScript, "utf8"), context, { filename: puzzleScript });
    const embedded = context.window.TracePuzzle && context.window.TracePuzzle.INSTANCE;
    if (!embedded) addProblem(puzzleScript, "embedded INSTANCE is not exposed");
    else if (!sameJson(embedded, instance)) addProblem(puzzleScript, "embedded INSTANCE differs from puzzle_instance.json");
    else stats.embeddedInstances += 1;
  } catch (error) {
    addProblem(puzzleScript, `could not evaluate puzzle script (${error.message})`);
  }
}

function checkLanguageModule(instanceFile, appDirectory) {
  if (!appDirectory) return;
  const i18nFile = path.join(appDirectory, "js", "i18n.js");
  const stored = new Map();
  const messages = [];
  const localStorage = {
    getItem(key) { return stored.has(key) ? stored.get(key) : null; },
    setItem(key, value) { stored.set(key, String(value)); }
  };
  const windowObject = {
    location: { search: "?lang=vi" },
    parent: { postMessage(message) { messages.push(message); } },
    opener: null,
    addEventListener() {}
  };
  try {
    vm.runInNewContext(fs.readFileSync(i18nFile, "utf8"), {
      window: windowObject,
      localStorage,
      URLSearchParams,
      console
    }, { filename: i18nFile });
    const i18n = windowObject.I18n;
    if (!i18n || i18n.getLang() !== "vi") addProblem(i18nFile, "does not honor ?lang=vi");
    else {
      i18n.setLang("en");
      if (i18n.getLang() !== "en") addProblem(i18nFile, "cannot switch back to English");
      if (stored.get("tracelab-language") !== "en") addProblem(i18nFile, "does not persist the shared course language");
      if (!messages.some((message) => message.type === "tracelab:language-change" && message.language === "en")) {
        addProblem(i18nFile, "does not notify the course dashboard of a language change");
      }
      stats.languageModules += 1;
    }
  } catch (error) {
    addProblem(i18nFile, `could not evaluate language module (${error.message})`);
  }
}

function checkMissingAnswers(instanceFile, instance) {
  const rowsWithMissing = instance.rows.filter((row) => row.missing && Object.values(row.missing).some(Boolean));
  const picked = Array.isArray(instance.pickedSteps) ? instance.pickedSteps : [];
  const missingSteps = rowsWithMissing.map((row) => row.step);
  if (!sameJson(picked, missingSteps)) addProblem(instanceFile, "pickedSteps does not exactly match rows containing blanks");

  const answers = instance.answers || {};
  for (const row of rowsWithMissing) {
    const rowAnswers = answers[String(row.step)];
    if (!rowAnswers) {
      addProblem(instanceFile, `step ${row.step} has blanks but no answer record`);
      continue;
    }
    for (const [field, isMissing] of Object.entries(row.missing)) {
      if (!isMissing) continue;
      stats.answers += 1;
      if (!(field in row)) addProblem(instanceFile, `step ${row.step} marks absent field ${field} as missing`);
      if (!(field in rowAnswers)) addProblem(instanceFile, `step ${row.step} is missing answer for ${field}`);
      else if (display(rowAnswers[field]) !== display(row[field])) {
        addProblem(instanceFile, `step ${row.step} answer for ${field} is ${display(rowAnswers[field])}, expected ${display(row[field])}`);
      }
    }
  }

  for (const [step, rowAnswers] of Object.entries(answers)) {
    const row = instance.rows.find((candidate) => String(candidate.step) === String(step));
    if (!row) addProblem(instanceFile, `answer record points to absent step ${step}`);
    else {
      for (const field of Object.keys(rowAnswers)) {
        if (!row.missing || !row.missing[field]) addProblem(instanceFile, `answer ${step}.${field} is not marked as a blank`);
      }
    }
  }

  const expectedPieces = {};
  for (const row of rowsWithMissing) {
    for (const [field, isMissing] of Object.entries(row.missing)) {
      if (isMissing) (expectedPieces[field] ||= []).push(display(row[field]));
    }
  }
  const pieces = instance.pieces || {};
  const pieceFields = new Set([...Object.keys(expectedPieces), ...Object.keys(pieces)]);
  for (const field of pieceFields) {
    const expected = multiset(expectedPieces[field] || []);
    const actual = multiset((pieces[field] || []).map((piece) => piece.value));
    if (!sameJson(expected, actual)) addProblem(instanceFile, `piece values for ${field} do not match its blank answers`);
  }
}

function checkCsv(instanceFile, instance) {
  const csvFile = path.join(path.dirname(instanceFile), "execution_trace.csv");
  if (!fs.existsSync(csvFile)) return;
  stats.csvTraces += 1;
  const csvRows = parseCsv(fs.readFileSync(csvFile, "utf8"));
  if (csvRows.length !== instance.rows.length) {
    addProblem(csvFile, `contains ${csvRows.length} rows but puzzle contains ${instance.rows.length}`);
    return;
  }
  const ignored = new Set(["array"]);
  instance.rows.forEach((row, index) => {
    const csv = csvRows[index];
    for (const [field, expected] of Object.entries(row)) {
      if (field === "missing" || ignored.has(field)) continue;
      const header = field === "jump"
        ? Object.keys(csv).find((name) => name === "step")
        : Object.keys(csv).find((name) => name.toLowerCase() === field.toLowerCase());
      if (!header) {
        addProblem(csvFile, `row ${index + 1} has no column for ${field}`);
        continue;
      }
      const actual = csv[header] === "" || csv[header] === "null" || csv[header] === "—" ? null : csv[header];
      if (display(actual) !== display(expected)) {
        addProblem(csvFile, `row ${index + 1} ${field} is ${display(actual)}, expected ${display(expected)}`);
      }
    }
  });
}

function checkAlgorithmOutcome(instanceFile, instance) {
  const rel = relative(instanceFile);
  if (rel.startsWith("search/")) {
    const expected = instance.array.indexOf(instance.key);
    const resultRows = instance.rows.filter((row) => row.result !== null && row.result !== undefined);
    const rawResult = resultRows.length ? resultRows[resultRows.length - 1].result : null;
    const actual = rawResult === "NOT_FOUND" ? -1 : Number(rawResult);
    if (actual !== expected) addProblem(instanceFile, `search returns ${actual}; expected index ${expected}`);
    if (!rel.includes("linearsearch_puzzles")) {
      const sorted = instance.array.slice().sort((a, b) => a - b);
      if (!sameJson(sorted, instance.array)) addProblem(instanceFile, "search algorithm requires a sorted input array");
    }
  }
  if (rel.startsWith("sort/")) {
    const expected = instance.array.slice().sort((a, b) => a - b);
    const last = instance.rows[instance.rows.length - 1];
    if (!last || !Array.isArray(last.array)) addProblem(instanceFile, "final trace row has no array snapshot");
    else if (!sameJson(last.array, expected)) addProblem(instanceFile, `final array is not sorted (actual ${last.array.join(",")})`);
  }
  if (rel.startsWith("tree/")) {
    const values = instance.sequence || [];
    if (new Set(values).size !== values.length) addWarning(instanceFile, "insertion sequence contains duplicate keys");
    const height = (node) => node ? 1 + Math.max(height(node.left), height(node.right)) : -1;
    const isBalanced = (node) => !node || (Math.abs(height(node.left) - height(node.right)) <= 1 && isBalanced(node.left) && isBalanced(node.right));
    const insertBst = (node, key) => {
      if (!node) return { key, left: null, right: null };
      if (key < node.key) node.left = insertBst(node.left, key);
      else if (key > node.key) node.right = insertBst(node.right, key);
      return node;
    };
    const rotateRight = (node) => {
      const next = node.left;
      node.left = next.right;
      next.right = node;
      return next;
    };
    const rotateLeft = (node) => {
      const next = node.right;
      node.right = next.left;
      next.left = node;
      return next;
    };
    const insertAvl = (node, key) => {
      if (!node) return { key, left: null, right: null };
      if (key < node.key) node.left = insertAvl(node.left, key);
      else if (key > node.key) node.right = insertAvl(node.right, key);
      const balance = height(node.left) - height(node.right);
      if (balance > 1 && key < node.left.key) return rotateRight(node);
      if (balance < -1 && key > node.right.key) return rotateLeft(node);
      if (balance > 1 && key > node.left.key) {
        node.left = rotateLeft(node.left);
        return rotateRight(node);
      }
      if (balance < -1 && key < node.right.key) {
        node.right = rotateRight(node.right);
        return rotateLeft(node);
      }
      return node;
    };
    const isAvl = rel.includes("/avltree/");
    const rootNode = values.reduce((node, key) => isAvl ? insertAvl(node, key) : insertBst(node, key), null);
    const finalRoot = instance.rows[instance.rows.length - 1].root;
    if (rootNode && finalRoot !== rootNode.key) addProblem(instanceFile, `final root is ${finalRoot}, expected ${rootNode.key}`);
    if (isAvl && !isBalanced(rootNode)) addProblem(instanceFile, "final AVL tree is not height-balanced");
    if (!isAvl) {
      if (height(rootNode) !== instance.height) addProblem(instanceFile, `BST height is ${height(rootNode)}, expected ${instance.height}`);
      if (typeof instance.balanced === "boolean" && isBalanced(rootNode) !== instance.balanced) {
        addProblem(instanceFile, `BST balanced flag is ${instance.balanced}, expected ${isBalanced(rootNode)}`);
      }
    }
  }
}

function checkStepReferences(instanceFile, instance, appDirectory) {
  if (!appDirectory) return;
  const sourceFiles = ["executor.js", "pseudocode.js", "i18n.js"].map((name) => path.join(appDirectory, "js", name));
  for (const sourceFile of sourceFiles) {
    if (!fs.existsSync(sourceFile)) {
      addProblem(instanceFile, `${path.basename(sourceFile)} is missing`);
      continue;
    }
    const source = fs.readFileSync(sourceFile, "utf8");
    for (const stepId of new Set(instance.rows.map((row) => row.stepId))) {
      if (!source.includes(stepId)) addProblem(sourceFile, `does not reference trace step ${stepId}`);
    }
  }
}

const instanceFiles = categories.flatMap((category) => walk(path.join(root, category), "puzzle_instance.json"));
for (const instanceFile of instanceFiles) {
  stats.puzzles += 1;
  let instance;
  try {
    instance = JSON.parse(fs.readFileSync(instanceFile, "utf8"));
  } catch (error) {
    addProblem(instanceFile, `invalid JSON (${error.message})`);
    continue;
  }
  if (!Array.isArray(instance.rows) || instance.rows.length === 0) {
    addProblem(instanceFile, "trace rows are empty");
    continue;
  }
  stats.rows += instance.rows.length;
  instance.rows.forEach((row, index) => {
    if (row.step !== index + 1) addProblem(instanceFile, `row ${index + 1} has step number ${row.step}`);
    if (!row.stepId || typeof row.stepId !== "string") addProblem(instanceFile, `row ${index + 1} has no valid stepId`);
  });
  const appDirectory = locateAppDirectory(instanceFile);
  checkMissingAnswers(instanceFile, instance);
  checkCsv(instanceFile, instance);
  checkAlgorithmOutcome(instanceFile, instance);
  checkStepReferences(instanceFile, instance, appDirectory);
  compareEmbeddedInstance(instanceFile, instance, appDirectory);
  checkLanguageModule(instanceFile, appDirectory);
}

console.log(JSON.stringify({ stats, problems, warnings }, null, 2));
process.exitCode = problems.length ? 1 : 0;
