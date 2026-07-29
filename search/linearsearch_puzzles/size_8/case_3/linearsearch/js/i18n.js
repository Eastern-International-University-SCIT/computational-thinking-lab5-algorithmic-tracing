/**
 * English / Vietnamese strings for UI, pseudocode, and 3D labels.
 */

window.I18n = (function () {
  const LOCAL_LANGUAGE_KEY = "ls-lang";
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
      title: "Linear Search Studio",
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
        "Drag to peek at depth · scroll to zoom · unsorted array · index i walks left to right",
      legendRange: "Remaining to scan",
      legendActive: "Comparing",
      legendFound: "Found",
      legendMiss: "Not found",
      legendSmaller: "Smaller / equal",
      algoTitle: "Algorithm (Pseudocode)",
      algoHint:
        "Current line is highlighted · Linear Search checks each element in order",
      traceTitle: "Execution Trace",
      traceHint:
        "Full instance table · fill blanks on rows where values change",
      traceEmpty: "Press Run or Step to start tracing.",
      colStep: "#",
      colLine: "Line",
      colArray: "array",
      colN: "n",
      colKey: "key",
      colI: "i",
      colResult: "result",
      notFoundValue: "NOT_FOUND",
      puzzleOpenPalette: "Fill blanks",
      puzzlePanelTitle: "Trace pieces",
      puzzlePanelHint:
        "Choose a column, then drag values onto blank cells. Drag a placed piece back here to undo, or reset all.",
      puzzleSectionStepId: "Line",
      puzzleSectionI: "i",
      puzzleSectionResult: "result",
      puzzleDropHere: "drop here",
      puzzleDragHint: "Drag onto the matching blank cell",
      puzzleDragBackHint: "Drag back to the Trace pieces panel to undo",
      puzzleResetPieces: "Reset pieces",
      puzzleBanner:
        "Puzzle: fill every blank on rows where values change, then Run or Step.",
      puzzleBlocked:
        "Fill the blank row correctly before the algorithm can continue.",
      puzzlePartial: "Keep going — every blank on each changed row must be correct.",
      puzzleSolved: "All changed rows filled correctly — you may continue.",
      puzzleWrongColumn: "That piece belongs in a different column.",
      puzzleCorrectRows: "Correct rows",
      puzzleComplete: "Complete",
      labelLow: "i",
      labelMid: "i",
      labelHigh: "i",
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
        mainCall: "linear_search(A, n, key)",
        setI: "i ← 0",
        whileLoop: "while i < n",
        checkEqual: "if A[i] = key",
        returnFound: "return i",
        incI: "i ← i + 1",
        returnMiss: "return NOT_FOUND",
      },
      pseudo: [
        { id: null, indent: 0, text: "procedure linear_search(A, n, key)" },
        { id: "setI", indent: 1, text: "i ← 0" },
        { id: "whileLoop", indent: 1, text: "while i < n do" },
        { id: "checkEqual", indent: 2, text: "if A[i] = key then" },
        { id: "returnFound", indent: 3, text: "return i" },
        { id: null, indent: 2, text: "end_if" },
        { id: "incI", indent: 2, text: "i ← i + 1" },
        { id: null, indent: 1, text: "end_while" },
        { id: "returnMiss", indent: 1, text: "return NOT_FOUND" },
        { id: null, indent: 0, text: "end_procedure" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "// entry_point" },
        { id: "mainCall", indent: 0, text: "linear_search(A, n, key)" },
      ],
    },
    vi: {
      title: "Studio Tìm tuần tự",
      subtitle: "Giả mã · Mảng 3D · câu đố điền bảng theo dõi",
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
        "Kéo để xem chiều sâu · cuộn để phóng to/thu nhỏ · mảng chưa sắp · chỉ số i đi từ trái sang phải",
      legendRange: "Phần còn lại",
      legendActive: "Đang so sánh",
      legendFound: "Tìm thấy",
      legendMiss: "Không tìm thấy",
      legendSmaller: "Nhỏ hơn / bằng",
      algoTitle: "Thuật toán (Giả mã)",
      algoHint:
        "Dòng đang chạy được tô sáng · Tìm tuần tự kiểm tra từng phần tử theo thứ tự",
      traceTitle: "Bảng theo dõi",
      traceHint:
        "Bảng đầy đủ của ví dụ · điền chỗ trống ở các dòng có giá trị thay đổi",
      traceEmpty: "Nhấn Chạy hoặc Từng bước để bắt đầu.",
      colStep: "#",
      colLine: "Dòng",
      colArray: "mảng",
      colN: "n",
      colKey: "khóa",
      colI: "i",
      colResult: "kết_quả",
      notFoundValue: "KHÔNG_TÌM_THẤY",
      puzzleOpenPalette: "Điền chỗ trống",
      puzzlePanelTitle: "Mảnh bảng theo dõi",
      puzzlePanelHint:
        "Chọn một cột, rồi kéo giá trị vào ô trống. Kéo mảnh đã đặt về đây để hoàn tác, hoặc đặt lại tất cả.",
      puzzleSectionStepId: "Dòng",
      puzzleSectionI: "i",
      puzzleSectionResult: "kết_quả",
      puzzleDropHere: "thả vào đây",
      puzzleDragHint: "Kéo vào ô trống tương ứng",
      puzzleDragBackHint: "Kéo về bảng Mảnh để hoàn tác",
      puzzleResetPieces: "Đặt lại mảnh",
      puzzleBanner:
        "Câu đố: điền mọi ô trống ở các dòng có giá trị thay đổi, rồi nhấn Chạy hoặc Từng bước.",
      puzzleBlocked:
        "Hãy điền đúng dòng trống trước khi thuật toán tiếp tục.",
      puzzlePartial: "Tiếp tục — mọi ô trống trên mỗi dòng thay đổi phải đúng.",
      puzzleSolved: "Các dòng thay đổi đã đúng — bạn có thể tiếp tục.",
      puzzleWrongColumn: "Mảnh này thuộc cột khác.",
      puzzleCorrectRows: "Số dòng đúng",
      puzzleComplete: "Hoàn thành",
      labelLow: "i",
      labelMid: "i",
      labelHigh: "i",
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
        mainCall: "tìm_tuần_tự(mảng, n, khóa)",
        setI: "i ← 0",
        whileLoop: "trong_khi i < n",
        checkEqual: "nếu mảng[i] = khóa",
        returnFound: "trả_về i",
        incI: "i ← i + 1",
        returnMiss: "trả_về KHÔNG_TÌM_THẤY",
      },
      pseudo: [
        {
          id: null,
          indent: 0,
          text: "thủ_tục tìm_tuần_tự(mảng, n, khóa)",
        },
        { id: "setI", indent: 1, text: "i ← 0" },
        { id: "whileLoop", indent: 1, text: "trong_khi i < n làm" },
        {
          id: "checkEqual",
          indent: 2,
          text: "nếu mảng[i] = khóa thì",
        },
        { id: "returnFound", indent: 3, text: "trả_về i" },
        { id: null, indent: 2, text: "kết_thúc_nếu" },
        { id: "incI", indent: 2, text: "i ← i + 1" },
        { id: null, indent: 1, text: "kết_thúc_trong_khi" },
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
          text: "tìm_tuần_tự(mảng, n, khóa)",
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
