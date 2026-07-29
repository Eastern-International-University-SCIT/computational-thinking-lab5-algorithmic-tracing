/**
 * English / Vietnamese strings for UI, pseudocode, and 3D labels.
 */

window.I18n = (function () {
  const LOCAL_LANGUAGE_KEY = "nms-lang";
  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  let savedLanguage = null;
  try {
    savedLanguage = localStorage.getItem("tracelab-language") || localStorage.getItem(LOCAL_LANGUAGE_KEY);
  } catch (_) {
    /* The query parameter still works when local storage is unavailable. */
  }
  let lang = queryLanguage === "vi" || queryLanguage === "en"
    ? queryLanguage
    : (savedLanguage === "vi" ? "vi" : "en");
  const listeners = [];

  const STRINGS = {
    en: {
      title: "Natural Merge Sort Studio",
      subtitle: "Pseudocode · 3D array · live execution trace",
      arraySize: "Array size",
      randomize: "Randomize",
      speed: "Speed",
      run: "Run",
      step: "Step",
      pause: "Pause",
      reset: "Reset",
      vizTitle: "Array (3D)",
      vizHint:
        "Drag to peek at depth · scroll to zoom · left/right runs · Memory L / R · i / j / k pointers",
      legendRun1: "Left run",
      legendRun2: "Right run",
      legendActive: "Comparing",
      legendWrite: "Writing",
      legendSorted: "Sorted",
      legendMerged: "merged flag",
      algoTitle: "Algorithm (Pseudocode)",
      algoHint:
        "Current line is highlighted · Natural Merge Sort (detect runs, merge pairs)",
      traceTitle: "Execution Trace",
      traceHint: "Rows appear as each step runs · columns track algorithm variables",
      traceEmpty: "Press Run or Step to start tracing.",
      colStep: "#",
      colLine: "Line",
      colArray: "array",
      colN: "n",
      colLeft: "left",
      colMid: "mid",
      colRight: "right",
      colI: "i",
      colJ: "j",
      colK: "k",
      colMerged: "merged",
      labelI: "i",
      labelJ: "j",
      labelK: "k",
      labelLeft: "left",
      labelMid: "mid",
      labelRight: "right",
      labelMerged: "merged",
      labelMemory: "Memory",
      labelMemL: "L",
      labelMemR: "R",
      labelTrue: "TRUE",
      labelFalse: "FALSE",
      comparePrefix: "Compare",
      trueWord: "true",
      falseWord: "false",
      notWord: "not",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
      splitterLabel: "Drag to resize panels",
      langEn: "EN",
      langVi: "VI",

      puzzleBanner: "Puzzle: fill every blank on highlighted rows, then Run or Step.",
      puzzleOpenPalette: "Fill blanks",
      puzzlePanelTitle: "Trace pieces",
      puzzlePanelHint: "Choose a column, then drag values onto blank cells.",
      puzzleDropHere: "drop here",
      puzzleDragHint: "Drag onto a blank cell",
      puzzleDragBackHint: "Drag back to panel",
      puzzleWrongColumn: "Wrong column — pick the matching tab first",
      puzzleResetPieces: "Reset pieces",
      puzzleComplete: "Complete ✓",
      puzzleSolved: "All blanks filled correctly!",
      puzzlePartial: "Some blanks filled — keep going",
      puzzleBlocked: "Fill this row to continue",
      puzzleSectionStepId: "Line",
      puzzleCorrectRows: "Correct rows",
      notFoundValue: "NOT_FOUND",
      splitterRowLabel: "Drag to resize execution trace height",
      stepLabels: {
        mainCall: "natural_merge_sort(A, n)",
        repeatPass: "repeat",
        initScan: "i ← 0; merged ← false",
        whileScan: "while i < n",
        setLeft: "left ← i",
        extendLeft: "extend left run",
        setMid: "mid ← i",
        advancePastMid: "i ← i + 1",
        checkHasRight: "if i ≥ n",
        breakOddRun: "break",
        extendRight: "extend right run",
        setRight: "right ← i",
        callMerge: "merge(left, mid, right)",
        setMergedTrue: "merged ← true",
        advanceAfterMerge: "i ← right + 1",
        checkUntil: "until not merged",
        copyRuns: "L, R ← copy runs",
        initMergePointers: "i, j ← 0; k ← left",
        whileBoth: "while both runs remain",
        compareMerge: "L[i] ≤ R[j] ?",
        takeLeft: "A[k] ← L[i]",
        takeRight: "A[k] ← R[j]",
        incK: "k ← k + 1",
        drainLeft: "copy rest of L",
        drainRight: "copy rest of R",
      },
      pseudo: [
        { id: null, indent: 0, text: "procedure natural_merge_sort(A, n)" },
        { id: "repeatPass", indent: 1, text: "repeat" },
        { id: "initScan", indent: 2, text: "i ← 0" },
        { id: null, indent: 2, text: "merged ← false" },
        { id: "whileScan", indent: 2, text: "while i < n do" },
        { id: "setLeft", indent: 3, text: "left ← i" },
        {
          id: "extendLeft",
          indent: 3,
          text: "while i < n − 1 and A[i] ≤ A[i + 1] do",
        },
        { id: null, indent: 4, text: "i ← i + 1" },
        { id: null, indent: 3, text: "end_while" },
        { id: "setMid", indent: 3, text: "mid ← i" },
        { id: "advancePastMid", indent: 3, text: "i ← i + 1" },
        { id: "checkHasRight", indent: 3, text: "if i ≥ n then" },
        { id: "breakOddRun", indent: 4, text: "break" },
        { id: null, indent: 3, text: "end_if" },
        {
          id: "extendRight",
          indent: 3,
          text: "while i < n − 1 and A[i] ≤ A[i + 1] do",
        },
        { id: null, indent: 4, text: "i ← i + 1" },
        { id: null, indent: 3, text: "end_while" },
        { id: "setRight", indent: 3, text: "right ← i" },
        {
          id: "callMerge",
          indent: 3,
          text: "merge(A, left, mid, right)",
        },
        { id: "setMergedTrue", indent: 3, text: "merged ← true" },
        { id: "advanceAfterMerge", indent: 3, text: "i ← right + 1" },
        { id: null, indent: 2, text: "end_while" },
        { id: "checkUntil", indent: 1, text: "until not merged" },
        { id: null, indent: 0, text: "end_procedure" },
        { id: null, indent: 0, text: "" },
        {
          id: null,
          indent: 0,
          text: "procedure merge(A, left, mid, right)",
        },
        {
          id: "copyRuns",
          indent: 1,
          text: "L ← A[left .. mid];  R ← A[mid + 1 .. right]",
        },
        { id: "initMergePointers", indent: 1, text: "i ← 0;  j ← 0;  k ← left" },
        {
          id: "whileBoth",
          indent: 1,
          text: "while i < |L| and j < |R| do",
        },
        { id: "compareMerge", indent: 2, text: "if L[i] ≤ R[j] then" },
        { id: "takeLeft", indent: 3, text: "A[k] ← L[i];  i ← i + 1" },
        { id: null, indent: 2, text: "else" },
        { id: "takeRight", indent: 3, text: "A[k] ← R[j];  j ← j + 1" },
        { id: null, indent: 2, text: "end_if" },
        { id: "incK", indent: 2, text: "k ← k + 1" },
        { id: null, indent: 1, text: "end_while" },
        {
          id: "drainLeft",
          indent: 1,
          text: "while i < |L| do  A[k] ← L[i];  i ← i + 1;  k ← k + 1",
        },
        {
          id: "drainRight",
          indent: 1,
          text: "while j < |R| do  A[k] ← R[j];  j ← j + 1;  k ← k + 1",
        },
        { id: null, indent: 0, text: "end_procedure" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "// entry_point" },
        { id: "mainCall", indent: 0, text: "natural_merge_sort(A, n)" },
      ],
    },
    vi: {
      title: "Studio Sắp xếp Trộn Tự nhiên",
      subtitle: "Giả mã · Mảng 3D · theo dõi thực thi",
      arraySize: "Kích thước mảng",
      randomize: "Ngẫu nhiên",
      speed: "Tốc độ",
      run: "Chạy",
      step: "Từng bước",
      pause: "Tạm dừng",
      reset: "Đặt lại",
      vizTitle: "Mảng (3D)",
      vizHint:
        "Kéo để xem chiều sâu · cuộn để phóng to/thu nhỏ · đoạn trái/phải · Bộ nhớ mảng_trái / mảng_phải · i / j / k",
      legendRun1: "Đoạn trái",
      legendRun2: "Đoạn phải",
      legendActive: "Đang so sánh",
      legendWrite: "Đang ghi",
      legendSorted: "Đã sắp xếp",
      legendMerged: "cờ đã_trộn",
      algoTitle: "Thuật toán (Giả mã)",
      algoHint:
        "Dòng đang chạy được tô sáng · Sắp xếp trộn tự nhiên (tìm đoạn, trộn cặp)",
      traceTitle: "Bảng theo dõi",
      traceHint: "Mỗi bước thêm một dòng · các cột là biến của thuật toán",
      traceEmpty: "Nhấn Chạy hoặc Từng bước để bắt đầu.",
      colStep: "#",
      colLine: "Dòng",
      colArray: "mảng",
      colN: "n",
      colLeft: "trái",
      colMid: "giữa",
      colRight: "phải",
      colI: "i",
      colJ: "j",
      colK: "k",
      colMerged: "đã_trộn",
      labelI: "i",
      labelJ: "j",
      labelK: "k",
      labelLeft: "trái",
      labelMid: "giữa",
      labelRight: "phải",
      labelMerged: "đã_trộn",
      labelMemory: "Bộ nhớ",
      labelMemL: "mảng_trái",
      labelMemR: "mảng_phải",
      labelTrue: "ĐÚNG",
      labelFalse: "SAI",
      comparePrefix: "So sánh",
      trueWord: "đúng",
      falseWord: "sai",
      notWord: "không",
      zoomIn: "Phóng to",
      zoomOut: "Thu nhỏ",
      splitterLabel: "Kéo để đổi kích thước",
      langEn: "EN",
      langVi: "VI",

      puzzleBanner: "Bài tập: điền vào ô trống trên các hàng được tô sáng, rồi Chạy hoặc Từng bước.",
      puzzleOpenPalette: "Điền ô trống",
      puzzlePanelTitle: "Mảnh ghép",
      puzzlePanelHint: "Chọn cột, kéo giá trị vào ô trống.",
      puzzleDropHere: "thả vào đây",
      puzzleDragHint: "Kéo vào ô trống",
      puzzleDragBackHint: "Kéo trở lại bảng",
      puzzleWrongColumn: "Sai cột — chọn tab phù hợp trước",
      puzzleResetPieces: "Đặt lại mảnh",
      puzzleComplete: "Hoàn thành ✓",
      puzzleSolved: "Tất cả ô trống đã điền đúng!",
      puzzlePartial: "Đã điền một số ô — tiếp tục nhé",
      puzzleBlocked: "Điền hàng này để tiếp tục",
      puzzleSectionStepId: "Dòng",
      puzzleCorrectRows: "Hàng đúng",
      notFoundValue: "KHÔNG_TÌM_THẤY",
      splitterRowLabel: "Kéo để thay đổi chiều cao bảng theo dõi",
      stepLabels: {
        mainCall: "sắp_xếp_trộn_tự_nhiên(mảng, n)",
        repeatPass: "lặp",
        initScan: "i ← 0; đã_trộn ← sai",
        whileScan: "khi i < n",
        setLeft: "trái ← i",
        extendLeft: "kéo dài đoạn trái",
        setMid: "giữa ← i",
        advancePastMid: "i ← i + 1",
        checkHasRight: "nếu i ≥ n",
        breakOddRun: "thoát",
        extendRight: "kéo dài đoạn phải",
        setRight: "phải ← i",
        callMerge: "trộn(trái, giữa, phải)",
        setMergedTrue: "đã_trộn ← đúng",
        advanceAfterMerge: "i ← phải + 1",
        checkUntil: "cho đến khi chưa trộn",
        copyRuns: "mảng_trái, mảng_phải ← sao chép đoạn",
        initMergePointers: "i, j ← 0; k ← trái",
        whileBoth: "khi còn cả hai đoạn",
        compareMerge: "mảng_trái[i] ≤ mảng_phải[j] ?",
        takeLeft: "mảng[k] ← mảng_trái[i]",
        takeRight: "mảng[k] ← mảng_phải[j]",
        incK: "k ← k + 1",
        drainLeft: "sao chép phần còn lại của mảng_trái",
        drainRight: "sao chép phần còn lại của mảng_phải",
      },
      pseudo: [
        {
          id: null,
          indent: 0,
          text: "thủ_tục sắp_xếp_trộn_tự_nhiên(mảng, n)",
        },
        { id: "repeatPass", indent: 1, text: "lặp" },
        { id: "initScan", indent: 2, text: "i ← 0" },
        { id: null, indent: 2, text: "đã_trộn ← sai" },
        { id: "whileScan", indent: 2, text: "khi i < n làm" },
        { id: "setLeft", indent: 3, text: "trái ← i" },
        {
          id: "extendLeft",
          indent: 3,
          text: "khi i < n − 1 và mảng[i] ≤ mảng[i + 1] làm",
        },
        { id: null, indent: 4, text: "i ← i + 1" },
        { id: null, indent: 3, text: "kết_thúc_khi" },
        { id: "setMid", indent: 3, text: "giữa ← i" },
        { id: "advancePastMid", indent: 3, text: "i ← i + 1" },
        { id: "checkHasRight", indent: 3, text: "nếu i ≥ n thì" },
        { id: "breakOddRun", indent: 4, text: "thoát" },
        { id: null, indent: 3, text: "kết_thúc_nếu" },
        {
          id: "extendRight",
          indent: 3,
          text: "khi i < n − 1 và mảng[i] ≤ mảng[i + 1] làm",
        },
        { id: null, indent: 4, text: "i ← i + 1" },
        { id: null, indent: 3, text: "kết_thúc_khi" },
        { id: "setRight", indent: 3, text: "phải ← i" },
        {
          id: "callMerge",
          indent: 3,
          text: "trộn(mảng, trái, giữa, phải)",
        },
        { id: "setMergedTrue", indent: 3, text: "đã_trộn ← đúng" },
        { id: "advanceAfterMerge", indent: 3, text: "i ← phải + 1" },
        { id: null, indent: 2, text: "kết_thúc_khi" },
        { id: "checkUntil", indent: 1, text: "cho_đến_khi đã_trộn = sai" },
        { id: null, indent: 0, text: "kết_thúc_thủ_tục" },
        { id: null, indent: 0, text: "" },
        {
          id: null,
          indent: 0,
          text: "thủ_tục trộn(mảng, trái, giữa, phải)",
        },
        {
          id: "copyRuns",
          indent: 1,
          text: "mảng_trái ← mảng[trái .. giữa];  mảng_phải ← mảng[giữa + 1 .. phải]",
        },
        {
          id: "initMergePointers",
          indent: 1,
          text: "i ← 0;  j ← 0;  k ← trái",
        },
        {
          id: "whileBoth",
          indent: 1,
          text: "khi i < |mảng_trái| và j < |mảng_phải| làm",
        },
        {
          id: "compareMerge",
          indent: 2,
          text: "nếu mảng_trái[i] ≤ mảng_phải[j] thì",
        },
        {
          id: "takeLeft",
          indent: 3,
          text: "mảng[k] ← mảng_trái[i];  i ← i + 1",
        },
        { id: null, indent: 2, text: "ngược_lại" },
        {
          id: "takeRight",
          indent: 3,
          text: "mảng[k] ← mảng_phải[j];  j ← j + 1",
        },
        { id: null, indent: 2, text: "kết_thúc_nếu" },
        { id: "incK", indent: 2, text: "k ← k + 1" },
        { id: null, indent: 1, text: "kết_thúc_khi" },
        {
          id: "drainLeft",
          indent: 1,
          text: "khi i < |mảng_trái| làm  mảng[k] ← mảng_trái[i];  i ← i + 1;  k ← k + 1",
        },
        {
          id: "drainRight",
          indent: 1,
          text: "khi j < |mảng_phải| làm  mảng[k] ← mảng_phải[j];  j ← j + 1;  k ← k + 1",
        },
        { id: null, indent: 0, text: "kết_thúc_thủ_tục" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "// điểm_bắt_đầu" },
        {
          id: "mainCall",
          indent: 0,
          text: "sắp_xếp_trộn_tự_nhiên(mảng, n)",
        },
      ],
    },
  };

  function t(key) {
    const pack = STRINGS[lang] || STRINGS.en;
    return pack[key] != null ? pack[key] : STRINGS.en[key];
  }

  function getLang() {
    return lang;
  }

  function setLang(next) {
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
  }

  function onChange(fn) {
    listeners.push(fn);
  }

  function stepLabel(stepKey) {
    const pack = STRINGS[lang] || STRINGS.en;
    return (
      (pack.stepLabels && pack.stepLabels[stepKey]) ||
      (STRINGS.en.stepLabels && STRINGS.en.stepLabels[stepKey]) ||
      stepKey
    );
  }

  function pseudoLines() {
    const pack = STRINGS[lang] || STRINGS.en;
    return pack.pseudo;
  }

  function compareText(a, b, op, result) {
    const res = result ? t("trueWord") : t("falseWord");
    return `${t("comparePrefix")}: ${a} ${op} ${b}  →  ${res}`;
  }

  function boolText(value) {
    return value ? t("trueWord") : t("falseWord");
  }

  /** HUD text when evaluating `until not merged`. */
  function mergedCompareText(merged, result) {
    const m = boolText(merged);
    const res = boolText(result);
    return `${t("comparePrefix")}: ${t("notWord")} ${t(
      "labelMerged"
    )} (${m})  →  ${res}`;
  }

  return {
    t,
    getLang,
    setLang,
    onChange,
    stepLabel,
    pseudoLines,
    compareText,
    boolText,
    mergedCompareText,
  };
})();


window.addEventListener("message", (event) => {
  const data = event.data;
  if (data && data.type === "tracelab:language-change" && window.I18n) {
    window.I18n.setLang(data.language);
  }
});
