/**
 * English / Vietnamese strings for UI, pseudocode, and 3D labels.
 */

window.I18n = (function () {
  const LOCAL_LANGUAGE_KEY = "fs-lang";
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
      title: "Fibonacci Search Studio",
      subtitle: "Pseudocode · 3D array · fill-the-blank trace puzzle",
      arraySize: "Array size",
      searchKey: "Key",
      randomize: "Randomize",
      speed: "Speed",
      run: "Run",
      step: "Step",
      pause: "Pause",
      reset: "Reset",
      rerun: "Rerun",
      rerunTitle: "Rerun from the start (keeps filled blanks)",
      splitterRowLabel: "Drag to resize execution trace height",
      vizTitle: "Array (3D)",
      vizHint:
        "Drag to peek at depth · scroll to zoom · sorted array · offset / i pointers",
      legendRange: "Search range",
      legendActive: "Comparing",
      legendFound: "Found",
      legendMiss: "Not found",
      legendSmaller: "Smaller / equal",
      algoTitle: "Algorithm (Pseudocode)",
      algoHint:
        "Current line is highlighted · Fibonacci Search probes with Fibonacci numbers",
      traceTitle: "Execution Trace",
      traceHint: "Full instance table · fill blanks on rows where values change",
      traceEmpty: "Press Run or Step to start tracing.",
      colStep: "#",
      colLine: "Line",
      colArray: "array",
      colN: "n",
      colKey: "key",
      colFibM: "fibM",
      colFibMMm1: "fibMMm1",
      colFibMMm2: "fibMMm2",
      colOffset: "offset",
      colI: "i",
      colResult: "result",
      puzzleOpenPalette: "Fill blanks",
      puzzlePanelTitle: "Trace pieces",
      puzzlePanelHint:
        "Choose a column, then drag values onto blank cells in highlighted rows.",
      puzzleSectionStepId: "Line",
      puzzleDropHere: "drop here",
      puzzleDragHint: "Drag onto the matching blank cell",
      puzzleDragBackHint: "Drag back to the Trace pieces panel to undo",
      puzzleResetPieces: "Reset pieces",
      puzzleBanner:
        "Puzzle: fill every blank on rows where values change, then Run or Step.",
      puzzleBlocked:
        "Fill the highlighted blank row before the algorithm can continue.",
      puzzlePartial: "Keep going — every blank on each changed row must be correct.",
      puzzleSolved: "All changed rows filled correctly — you may continue.",
      puzzleWrongColumn: "That piece belongs in a different column.",
      puzzleCorrectRows: "Correct rows",
      puzzleComplete: "Complete",

      notFoundValue: "NOT_FOUND",
      labelLow: "offset",
      labelMid: "i",
      labelHigh: "last",
      labelFound: "found",
      labelMiss: "miss",
      labelKey: "key",
      comparePrefix: "Compare",
      trueWord: "true",
      falseWord: "false",
      foundMsg: "Key {key} was found at position {position}!",
      missMsg: "Key {key} was not found in the array!",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
      splitterLabel: "Drag to resize panels",
      langEn: "EN",
      langVi: "VI",
      stepLabels: {
        mainCall: "fibonacci_search(A, n, key)",
        setFibMMm2: "fibMMm2 ← 0",
        setFibMMm1: "fibMMm1 ← 1",
        setFibM: "fibM ← fibMMm1 + fibMMm2",
        whileFibGrow: "while fibM < n",
        growFibMMm2: "fibMMm2 ← fibMMm1",
        growFibMMm1: "fibMMm1 ← fibM",
        growFibM: "fibM ← fibMMm1 + fibMMm2",
        setOffset: "offset ← −1",
        whileFibM: "while fibM > 1",
        setI: "i ← min(offset + fibMMm2, n − 1)",
        checkLess: "if A[i] < key",
        shrinkRightFibM: "fibM ← fibMMm1",
        shrinkRightFibMMm1: "fibMMm1 ← fibMMm2",
        shrinkRightFibMMm2: "fibMMm2 ← fibM − fibMMm1",
        updateOffset: "offset ← i",
        checkGreater: "if A[i] > key",
        shrinkLeftFibM: "fibM ← fibMMm2",
        shrinkLeftFibMMm1: "fibMMm1 ← fibMMm1 − fibMMm2",
        shrinkLeftFibMMm2: "fibMMm2 ← fibM − fibMMm1",
        returnFound: "return i",
        checkLast: "if fibMMm1 and A[offset + 1] = key",
        returnLast: "return offset + 1",
        returnMiss: "return NOT_FOUND",
      },
      pseudo: [
        { id: null, indent: 0, text: "procedure fibonacci_search(A, n, key)" },
        { id: "setFibMMm2", indent: 1, text: "fibMMm2 ← 0  // F(m−2)" },
        { id: "setFibMMm1", indent: 1, text: "fibMMm1 ← 1  // F(m−1)" },
        {
          id: "setFibM",
          indent: 1,
          text: "fibM ← fibMMm1 + fibMMm2  // F(m)",
        },
        {
          id: "whileFibGrow",
          indent: 1,
          text: "while fibM < n do  // smallest F(m) ≥ n",
        },
        { id: "growFibMMm2", indent: 2, text: "fibMMm2 ← fibMMm1" },
        { id: "growFibMMm1", indent: 2, text: "fibMMm1 ← fibM" },
        { id: "growFibM", indent: 2, text: "fibM ← fibMMm1 + fibMMm2" },
        { id: null, indent: 1, text: "end_while" },
        { id: "setOffset", indent: 1, text: "offset ← −1" },
        { id: "whileFibM", indent: 1, text: "while fibM > 1 do" },
        {
          id: "setI",
          indent: 2,
          text: "i ← min(offset + fibMMm2, n − 1)",
        },
        { id: "checkLess", indent: 2, text: "if A[i] < key then" },
        { id: "shrinkRightFibM", indent: 3, text: "fibM ← fibMMm1" },
        { id: "shrinkRightFibMMm1", indent: 3, text: "fibMMm1 ← fibMMm2" },
        {
          id: "shrinkRightFibMMm2",
          indent: 3,
          text: "fibMMm2 ← fibM − fibMMm1",
        },
        { id: "updateOffset", indent: 3, text: "offset ← i" },
        { id: null, indent: 2, text: "else" },
        { id: "checkGreater", indent: 3, text: "if A[i] > key then" },
        { id: "shrinkLeftFibM", indent: 4, text: "fibM ← fibMMm2" },
        {
          id: "shrinkLeftFibMMm1",
          indent: 4,
          text: "fibMMm1 ← fibMMm1 − fibMMm2",
        },
        {
          id: "shrinkLeftFibMMm2",
          indent: 4,
          text: "fibMMm2 ← fibM − fibMMm1",
        },
        { id: null, indent: 3, text: "else" },
        { id: "returnFound", indent: 4, text: "return i" },
        { id: null, indent: 3, text: "end_if" },
        { id: null, indent: 2, text: "end_if" },
        { id: null, indent: 1, text: "end_while" },
        {
          id: "checkLast",
          indent: 1,
          text: "if fibMMm1 and A[offset + 1] = key then",
        },
        { id: "returnLast", indent: 2, text: "return offset + 1" },
        { id: null, indent: 1, text: "end_if" },
        { id: "returnMiss", indent: 1, text: "return NOT_FOUND" },
        { id: null, indent: 0, text: "end_procedure" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "// entry_point" },
        { id: "mainCall", indent: 0, text: "fibonacci_search(A, n, key)" },
      ],
    },
    vi: {
      title: "Studio Tìm Fibonacci",
      subtitle: "Giả mã · Mảng 3D · theo dõi thực thi",
      arraySize: "Kích thước mảng",
      searchKey: "Khóa",
      randomize: "Ngẫu nhiên",
      speed: "Tốc độ",
      run: "Chạy",
      step: "Từng bước",
      pause: "Tạm dừng",
      reset: "Đặt lại",
      rerun: "Chạy lại",
      rerunTitle: "Chạy lại từ đầu (giữ các ô đã điền)",
      splitterRowLabel: "Kéo để đổi chiều cao bảng theo dõi",
      vizTitle: "Mảng (3D)",
      vizHint:
        "Kéo để xem chiều sâu · cuộn để phóng to/thu nhỏ · mảng đã sắp · con trỏ offset / i",
      legendRange: "Phạm vi tìm",
      legendActive: "Đang so sánh",
      legendFound: "Tìm thấy",
      legendMiss: "Không tìm thấy",
      legendSmaller: "Nhỏ hơn / bằng",
      algoTitle: "Thuật toán (Giả mã)",
      algoHint:
        "Dòng đang chạy được tô sáng · Tìm Fibonacci dùng dãy Fibonacci để thăm dò",
      traceTitle: "Bảng theo dõi",
      traceHint: "Mỗi bước thêm một dòng · các cột là biến của thuật toán",
      traceEmpty: "Nhấn Chạy hoặc Từng bước để bắt đầu.",
      colStep: "#",
      colLine: "Dòng",
      colArray: "mảng",
      colN: "n",
      colKey: "khóa",
      colFibM: "fibM",
      colFibMMm1: "fibMMm1",
      colFibMMm2: "fibMMm2",
      colOffset: "offset",
      colI: "i",
      colResult: "kết_quả",
      puzzleOpenPalette: "Điền chỗ trống",
      puzzlePanelTitle: "Mảnh bảng theo dõi",
      puzzlePanelHint:
        "Chọn một cột, rồi kéo giá trị vào các ô trống trên các dòng được đánh dấu.",
      puzzleSectionStepId: "Dòng",
      puzzleDropHere: "thả vào đây",
      puzzleDragHint: "Kéo vào ô trống tương ứng",
      puzzleDragBackHint: "Kéo về bảng Mảnh để hoàn tác",
      puzzleResetPieces: "Đặt lại mảnh",
      puzzleBanner:
        "Câu đố: điền mọi ô trống trên các dòng thay đổi, rồi Run hoặc Step.",
      puzzleBlocked:
        "Điền dòng trống được đánh dấu trước khi thuật toán tiếp tục.",
      puzzlePartial: "Tiếp tục — mọi ô trống trên mỗi dòng thay đổi phải đúng.",
      puzzleSolved: "Các dòng thay đổi đã đúng — bạn có thể tiếp tục.",
      puzzleWrongColumn: "Mảnh này thuộc cột khác.",
      puzzleCorrectRows: "Số dòng đúng",
      puzzleComplete: "Hoàn thành",

      notFoundValue: "KHÔNG_TÌM_THẤY",
      labelLow: "offset",
      labelMid: "i",
      labelHigh: "cuối",
      labelFound: "thấy",
      labelMiss: "trượt",
      labelKey: "khóa",
      comparePrefix: "So sánh",
      trueWord: "đúng",
      falseWord: "sai",
      foundMsg: "Khóa {key} được tìm thấy tại vị trí {position}!",
      missMsg: "Khóa {key} không có trong mảng!",
      zoomIn: "Phóng to",
      zoomOut: "Thu nhỏ",
      splitterLabel: "Kéo để đổi kích thước",
      langEn: "EN",
      langVi: "VI",
      stepLabels: {
        mainCall: "tìm_fibonacci(mảng, n, khóa)",
        setFibMMm2: "fibMMm2 ← 0",
        setFibMMm1: "fibMMm1 ← 1",
        setFibM: "fibM ← fibMMm1 + fibMMm2",
        whileFibGrow: "trong_khi fibM < n",
        growFibMMm2: "fibMMm2 ← fibMMm1",
        growFibMMm1: "fibMMm1 ← fibM",
        growFibM: "fibM ← fibMMm1 + fibMMm2",
        setOffset: "offset ← −1",
        whileFibM: "trong_khi fibM > 1",
        setI: "i ← cái_nào_nhỏ_hơn(offset + fibMMm2, n − 1)",
        checkLess: "nếu mảng[i] < khóa",
        shrinkRightFibM: "fibM ← fibMMm1",
        shrinkRightFibMMm1: "fibMMm1 ← fibMMm2",
        shrinkRightFibMMm2: "fibMMm2 ← fibM − fibMMm1",
        updateOffset: "offset ← i",
        checkGreater: "nếu mảng[i] > khóa",
        shrinkLeftFibM: "fibM ← fibMMm2",
        shrinkLeftFibMMm1: "fibMMm1 ← fibMMm1 − fibMMm2",
        shrinkLeftFibMMm2: "fibMMm2 ← fibM − fibMMm1",
        returnFound: "trả_về i",
        checkLast: "nếu fibMMm1 và mảng[offset + 1] = khóa",
        returnLast: "trả_về offset + 1",
        returnMiss: "trả_về KHÔNG_TÌM_THẤY",
      },
      pseudo: [
        {
          id: null,
          indent: 0,
          text: "thủ_tục tìm_fibonacci(mảng, n, khóa)",
        },
        { id: "setFibMMm2", indent: 1, text: "fibMMm2 ← 0  // F(m−2)" },
        { id: "setFibMMm1", indent: 1, text: "fibMMm1 ← 1  // F(m−1)" },
        {
          id: "setFibM",
          indent: 1,
          text: "fibM ← fibMMm1 + fibMMm2  // F(m)",
        },
        {
          id: "whileFibGrow",
          indent: 1,
          text: "trong_khi fibM < n làm  // F(m) nhỏ nhất ≥ n",
        },
        { id: "growFibMMm2", indent: 2, text: "fibMMm2 ← fibMMm1" },
        { id: "growFibMMm1", indent: 2, text: "fibMMm1 ← fibM" },
        { id: "growFibM", indent: 2, text: "fibM ← fibMMm1 + fibMMm2" },
        { id: null, indent: 1, text: "kết_thúc_trong_khi" },
        { id: "setOffset", indent: 1, text: "offset ← −1" },
        { id: "whileFibM", indent: 1, text: "trong_khi fibM > 1 làm" },
        {
          id: "setI",
          indent: 2,
          text: "i ← cái_nào_nhỏ_hơn(offset + fibMMm2, n − 1)",
        },
        { id: "checkLess", indent: 2, text: "nếu mảng[i] < khóa thì" },
        { id: "shrinkRightFibM", indent: 3, text: "fibM ← fibMMm1" },
        { id: "shrinkRightFibMMm1", indent: 3, text: "fibMMm1 ← fibMMm2" },
        {
          id: "shrinkRightFibMMm2",
          indent: 3,
          text: "fibMMm2 ← fibM − fibMMm1",
        },
        { id: "updateOffset", indent: 3, text: "offset ← i" },
        { id: null, indent: 2, text: "không_thì" },
        { id: "checkGreater", indent: 3, text: "nếu mảng[i] > khóa thì" },
        { id: "shrinkLeftFibM", indent: 4, text: "fibM ← fibMMm2" },
        {
          id: "shrinkLeftFibMMm1",
          indent: 4,
          text: "fibMMm1 ← fibMMm1 − fibMMm2",
        },
        {
          id: "shrinkLeftFibMMm2",
          indent: 4,
          text: "fibMMm2 ← fibM − fibMMm1",
        },
        { id: null, indent: 3, text: "không_thì" },
        { id: "returnFound", indent: 4, text: "trả_về i" },
        { id: null, indent: 3, text: "kết_thúc_nếu" },
        { id: null, indent: 2, text: "kết_thúc_nếu" },
        { id: null, indent: 1, text: "kết_thúc_trong_khi" },
        {
          id: "checkLast",
          indent: 1,
          text: "nếu fibMMm1 và mảng[offset + 1] = khóa thì",
        },
        { id: "returnLast", indent: 2, text: "trả_về offset + 1" },
        { id: null, indent: 1, text: "kết_thúc_nếu" },
        {
          id: "returnMiss",
          indent: 1,
          text: "trả_về KHÔNG_TÌM_THẤY",
        },
        { id: null, indent: 0, text: "kết_thúc_thủ_tục" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "// điểm_bắt_đầu" },
        {
          id: "mainCall",
          indent: 0,
          text: "tìm_fibonacci(mảng, n, khóa)",
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
    const word = result ? t("trueWord") : t("falseWord");
    return `${t("comparePrefix")}: ${a} ${op} ${b}  →  ${word}`;
  }

  function boolText(value) {
    return value ? t("trueWord") : t("falseWord");
  }

  function formatMsg(templateKey, vars) {
    let text = t(templateKey) || "";
    Object.keys(vars || {}).forEach((k) => {
      text = text.replace(new RegExp("\\{" + k + "\\}", "g"), String(vars[k]));
    });
    return text;
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
    formatMsg,
  };
})();


window.addEventListener("message", (event) => {
  const data = event.data;
  if (data && data.type === "tracelab:language-change" && window.I18n) {
    window.I18n.setLang(data.language);
  }
});
