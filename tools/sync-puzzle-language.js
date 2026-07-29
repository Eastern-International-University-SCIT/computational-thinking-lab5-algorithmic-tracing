#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const updated = [];

function walk(directory, found = []) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(target, found);
    else if (entry.name === "i18n.js") found.push(target);
  }
  return found;
}

for (const category of ["search", "sort", "tree"]) {
  for (const file of walk(path.join(root, category))) {
    let source = fs.readFileSync(file, "utf8");
    if (source.includes("tracelab:language-change")) continue;
    const initialPattern = /  let lang = localStorage\.getItem\("([^"]+)"\) \|\| "en";/;
    const initialMatch = source.match(initialPattern);
    if (!initialMatch) throw new Error(`Language initializer not found in ${file}`);
    const localKey = initialMatch[1];
    source = source.replace(initialPattern, `  const LOCAL_LANGUAGE_KEY = "${localKey}";
  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  let savedLanguage = null;
  try {
    savedLanguage = localStorage.getItem("tracelab-language") || localStorage.getItem(LOCAL_LANGUAGE_KEY);
  } catch (_) {
    /* The query parameter still works when local storage is unavailable. */
  }
  let lang = queryLanguage === "vi" || queryLanguage === "en"
    ? queryLanguage
    : (savedLanguage === "vi" ? "vi" : "en");`);

    const setterPattern = new RegExp(
      `  function setLang\\(next\\) \\{\\r?\\n` +
      `    lang = next === "vi" \\? "vi" : "en";\\r?\\n` +
      `    localStorage\\.setItem\\("${localKey.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}", lang\\);\\r?\\n` +
      `    listeners\\.forEach\\(\\(fn\\) => fn\\(lang\\)\\);\\r?\\n` +
      `  \\}`
    );
    if (!setterPattern.test(source)) throw new Error(`Language setter not found in ${file}`);
    source = source.replace(setterPattern, `  function setLang(next) {
    const normalized = next === "vi" ? "vi" : "en";
    if (lang === normalized) return;
    lang = normalized;
    try {
      localStorage.setItem(LOCAL_LANGUAGE_KEY, lang);
      localStorage.setItem("tracelab-language", lang);
    } catch (_) {
      /* Continue translating even when local storage is unavailable. */
    }
    listeners.forEach((fn) => fn(lang));
    const message = { type: "tracelab:language-change", language: lang };
    try { window.parent.postMessage(message, "*"); } catch (_) { /* standalone page */ }
    try {
      if (window.opener && !window.opener.closed) window.opener.postMessage(message, "*");
    } catch (_) { /* blocked opener */ }
  }`);

    source += `\n\nwindow.addEventListener("message", (event) => {
  const data = event.data;
  if (data && data.type === "tracelab:language-change" && window.I18n) {
    window.I18n.setLang(data.language);
  }
});\n`;
    fs.writeFileSync(file, source, "utf8");
    updated.push(path.relative(root, file).replace(/\\/g, "/"));
  }
}

console.log(JSON.stringify({ updated: updated.length }, null, 2));
