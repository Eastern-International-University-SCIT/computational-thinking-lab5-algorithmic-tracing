/**
 * English / Vietnamese strings for UI, pseudocode, and 3D labels.
 */

window.I18n = (function () {
  const LOCAL_LANGUAGE_KEY = "es-lang";
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
      title: "Exponential Search Studio",
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
        "Drag to peek at depth · scroll to zoom · sorted array · bound then low / mid / high",
      legendRange: "Search range",
      legendActive: "Comparing",
      legendBound: "bound",
      legendFound: "Found",
      legendMiss: "Not found",
      legendSmaller: "Smaller / equal",
      algoTitle: "Algorithm (Pseudocode)",
      algoHint:
        "Current line is highlighted · Exponential Search grows a bound then binary-searches",
      traceTitle: "Execution Trace",
      traceHint: "Full instance table · fill blanks on rows where values change",
      traceEmpty: "Press Run or Step to start tracing.",
      colStep: "#",
      colLine: "Line",
      colArray: "array",
      colN: "n",
      colKey: "key",
      colBound: "bound",
      colLow: "low",
      colMid: "mid",
      colHigh: "high",
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
      labelBound: "bound",
      labelLow: "low",
      labelMid: "mid",
      labelHigh: "high",
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
        mainCall: "exponential_search(A, n, key)",
        checkFirst: "if A[0] = key",
        returnZero: "return 0",
        setBound: "bound ← 1",
        whileExp: "while bound < n and A[bound] < key",
        doubleBound: "bound ← bound × 2",
        setLow: "low ← ⌊bound / 2⌋",
        setHigh: "high ← min(bound, n − 1)",
        whileLoop: "while low ≤ high",
        setMid: "mid ← ⌊(low + high) / 2⌋",
        checkEqual: "if A[mid] = key",
        returnFound: "return mid",
        checkLess: "if A[mid] < key",
        updateLow: "low ← mid + 1",
        updateHigh: "high ← mid − 1",
        returnMiss: "return NOT_FOUND",
      },
      pseudo: [
        { id: null, indent: 0, text: "procedure exponential_search(A, n, key)" },
        { id: "checkFirst", indent: 1, text: "if A[0] = key then" },
        { id: "returnZero", indent: 2, text: "return 0" },
        { id: null, indent: 1, text: "end_if" },
        { id: "setBound", indent: 1, text: "bound ← 1" },
        {
          id: "whileExp",
          indent: 1,
          text: "while bound < n and A[bound] < key do",
        },
        { id: "doubleBound", indent: 2, text: "bound ← bound × 2" },
        { id: null, indent: 1, text: "end_while" },
        {
          id: "setLow",
          indent: 1,
          text: "low ← floor(bound / 2)  // start of binary range",
        },
        {
          id: "setHigh",
          indent: 1,
          text: "high ← min(bound, n − 1)",
        },
        { id: "whileLoop", indent: 1, text: "while low ≤ high do" },
        {
          id: "setMid",
          indent: 2,
          text: "mid ← floor((low + high) / 2)",
        },
        { id: "checkEqual", indent: 2, text: "if A[mid] = key then" },
        { id: "returnFound", indent: 3, text: "return mid" },
        { id: null, indent: 2, text: "end_if" },
        { id: "checkLess", indent: 2, text: "if A[mid] < key then" },
        { id: "updateLow", indent: 3, text: "low ← mid + 1" },
        { id: null, indent: 2, text: "else" },
        { id: "updateHigh", indent: 3, text: "high ← mid − 1" },
        { id: null, indent: 2, text: "end_if" },
        { id: null, indent: 1, text: "end_while" },
        { id: "returnMiss", indent: 1, text: "return NOT_FOUND" },
        { id: null, indent: 0, text: "end_procedure" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "// entry_point" },
        { id: "mainCall", indent: 0, text: "exponential_search(A, n, key)" },
      ],
    },
    vi: {
      title: "Studio Tìm mũ",
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
        "Kéo để xem chiều sâu · cuộn để phóng to/thu nhỏ · mảng đã sắp · biên rồi thấp / giữa / cao",
      legendRange: "Phạm vi tìm",
      legendActive: "Đang so sánh",
      legendBound: "biên",
      legendFound: "Tìm thấy",
      legendMiss: "Không tìm thấy",
      legendSmaller: "Nhỏ hơn / bằng",
      algoTitle: "Thuật toán (Giả mã)",
      algoHint:
        "Dòng đang chạy được tô sáng · Tìm mũ mở rộng biên rồi tìm nhị phân",
      traceTitle: "Bảng theo dõi",
      traceHint: "Mỗi bước thêm một dòng · các cột là biến của thuật toán",
      traceEmpty: "Nhấn Chạy hoặc Từng bước để bắt đầu.",
      colStep: "#",
      colLine: "Dòng",
      colArray: "mảng",
      colN: "n",
      colKey: "khóa",
      colBound: "biên",
      colLow: "thấp",
      colMid: "giữa",
      colHigh: "cao",
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
      labelBound: "biên",
      labelLow: "thấp",
      labelMid: "giữa",
      labelHigh: "cao",
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
        mainCall: "tìm_mũ(mảng, n, khóa)",
        checkFirst: "nếu mảng[0] = khóa",
        returnZero: "trả_về 0",
        setBound: "biên ← 1",
        whileExp: "trong_khi biên < n và mảng[biên] < khóa",
        doubleBound: "biên ← biên × 2",
        setLow: "thấp ← ⌊biên / 2⌋",
        setHigh: "cao ← cái_nào_nhỏ_hơn(biên, n − 1)",
        whileLoop: "trong_khi thấp ≤ cao",
        setMid: "giữa ← ⌊(thấp + cao) / 2⌋",
        checkEqual: "nếu mảng[giữa] = khóa",
        returnFound: "trả_về giữa",
        checkLess: "nếu mảng[giữa] < khóa",
        updateLow: "thấp ← giữa + 1",
        updateHigh: "cao ← giữa − 1",
        returnMiss: "trả_về KHÔNG_TÌM_THẤY",
      },
      pseudo: [
        {
          id: null,
          indent: 0,
          text: "thủ_tục tìm_mũ(mảng, n, khóa)",
        },
        {
          id: "checkFirst",
          indent: 1,
          text: "nếu mảng[0] = khóa thì",
        },
        { id: "returnZero", indent: 2, text: "trả_về 0" },
        { id: null, indent: 1, text: "kết_thúc_nếu" },
        { id: "setBound", indent: 1, text: "biên ← 1" },
        {
          id: "whileExp",
          indent: 1,
          text: "trong_khi biên < n và mảng[biên] < khóa làm",
        },
        { id: "doubleBound", indent: 2, text: "biên ← biên × 2" },
        { id: null, indent: 1, text: "kết_thúc_trong_khi" },
        {
          id: "setLow",
          indent: 1,
          text: "thấp ← sàn(biên / 2)  // đầu phạm vi nhị phân",
        },
        {
          id: "setHigh",
          indent: 1,
          text: "cao ← cái_nào_nhỏ_hơn(biên, n − 1)",
        },
        {
          id: "whileLoop",
          indent: 1,
          text: "trong_khi thấp ≤ cao làm",
        },
        {
          id: "setMid",
          indent: 2,
          text: "giữa ← sàn((thấp + cao) / 2)",
        },
        {
          id: "checkEqual",
          indent: 2,
          text: "nếu mảng[giữa] = khóa thì",
        },
        { id: "returnFound", indent: 3, text: "trả_về giữa" },
        { id: null, indent: 2, text: "kết_thúc_nếu" },
        {
          id: "checkLess",
          indent: 2,
          text: "nếu mảng[giữa] < khóa thì",
        },
        { id: "updateLow", indent: 3, text: "thấp ← giữa + 1" },
        { id: null, indent: 2, text: "không_thì" },
        { id: "updateHigh", indent: 3, text: "cao ← giữa − 1" },
        { id: null, indent: 2, text: "kết_thúc_nếu" },
        { id: null, indent: 1, text: "kết_thúc_trong_khi" },
        {
          id: "returnMiss",
          indent: 1,
          text: "trả_về KHÔNG_TÌM_THẤY",
        },
        { id: null, indent: 0, text: "kết_thúc_thủ_tục" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "// điểm_bắt_đầu" },
        { id: "mainCall", indent: 0, text: "tìm_mũ(mảng, n, khóa)" },
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
