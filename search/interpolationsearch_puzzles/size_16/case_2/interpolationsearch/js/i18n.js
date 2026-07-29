/**
 * English / Vietnamese strings for UI, pseudocode, and 3D labels.
 */

window.I18n = (function () {
  const LOCAL_LANGUAGE_KEY = "is-lang";
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
      title: "Interpolation Search Studio",
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
        "Drag to peek at depth · scroll to zoom · sorted array · low / pos / high pointers",
      legendRange: "Search range",
      legendActive: "Comparing",
      legendFound: "Found",
      legendMiss: "Not found",
      legendSmaller: "Smaller / equal",
      algoTitle: "Algorithm (Pseudocode)",
      algoHint:
        "Current line is highlighted · Interpolation estimates pos from key position",
      traceTitle: "Execution Trace",
      traceHint: "Full instance table · fill blanks on rows where values change",
      traceEmpty: "Press Run or Step to start tracing.",
      colStep: "#",
      colLine: "Line",
      colArray: "array",
      colN: "n",
      colKey: "key",
      colLow: "low",
      colPos: "pos",
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
      labelLow: "low",
      labelPos: "pos",
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
        mainCall: "interpolation_search(A, n, key)",
        setLow: "low ← 0",
        setHigh: "high ← n − 1",
        whileLoop: "while low ≤ high and key ≥ A[low] and key ≤ A[high]",
        setPos: "pos ← low + ⌊(key − A[low]) × (high − low) / (A[high] − A[low])⌋",
        checkEqual: "if A[pos] = key",
        returnFound: "return pos",
        checkLess: "if A[pos] < key",
        updateLow: "low ← pos + 1",
        updateHigh: "high ← pos − 1",
        returnMiss: "return NOT_FOUND",
      },
      pseudo: [
        { id: null, indent: 0, text: "procedure interpolation_search(A, n, key)" },
        { id: "setLow", indent: 1, text: "low ← 0" },
        { id: "setHigh", indent: 1, text: "high ← n − 1" },
        {
          id: "whileLoop",
          indent: 1,
          text: "while low ≤ high and key ≥ A[low] and key ≤ A[high] do",
        },
        {
          id: "setPos",
          indent: 2,
          text: "pos ← low + floor((key − A[low]) × (high − low) / (A[high] − A[low]))",
        },
        { id: "checkEqual", indent: 2, text: "if A[pos] = key then" },
        { id: "returnFound", indent: 3, text: "return pos" },
        { id: null, indent: 2, text: "end_if" },
        { id: "checkLess", indent: 2, text: "if A[pos] < key then" },
        { id: "updateLow", indent: 3, text: "low ← pos + 1" },
        { id: null, indent: 2, text: "else" },
        { id: "updateHigh", indent: 3, text: "high ← pos − 1" },
        { id: null, indent: 2, text: "end_if" },
        { id: null, indent: 1, text: "end_while" },
        { id: "returnMiss", indent: 1, text: "return NOT_FOUND" },
        { id: null, indent: 0, text: "end_procedure" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "// entry_point" },
        { id: "mainCall", indent: 0, text: "interpolation_search(A, n, key)" },
      ],
    },
    vi: {
      title: "Studio Tìm nội suy",
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
        "Kéo để xem chiều sâu · cuộn để phóng to/thu nhỏ · mảng đã sắp · con trỏ thấp / vị_trí / cao",
      legendRange: "Phạm vi tìm",
      legendActive: "Đang so sánh",
      legendFound: "Tìm thấy",
      legendMiss: "Không tìm thấy",
      legendSmaller: "Nhỏ hơn / bằng",
      algoTitle: "Thuật toán (Giả mã)",
      algoHint:
        "Dòng đang chạy được tô sáng · Nội suy ước lượng vị_trí từ giá trị khóa",
      traceTitle: "Bảng theo dõi",
      traceHint: "Mỗi bước thêm một dòng · các cột là biến của thuật toán",
      traceEmpty: "Nhấn Chạy hoặc Từng bước để bắt đầu.",
      colStep: "#",
      colLine: "Dòng",
      colArray: "mảng",
      colN: "n",
      colKey: "khóa",
      colLow: "thấp",
      colPos: "vị_trí",
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
      labelLow: "thấp",
      labelPos: "vị_trí",
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
        mainCall: "tìm_nội_suy(mảng, n, khóa)",
        setLow: "thấp ← 0",
        setHigh: "cao ← n − 1",
        whileLoop: "trong_khi thấp ≤ cao và khóa ≥ mảng[thấp] và khóa ≤ mảng[cao]",
        setPos:
          "vị_trí ← thấp + ⌊(khóa − mảng[thấp]) × (cao − thấp) / (mảng[cao] − mảng[thấp])⌋",
        checkEqual: "nếu mảng[vị_trí] = khóa",
        returnFound: "trả_về vị_trí",
        checkLess: "nếu mảng[vị_trí] < khóa",
        updateLow: "thấp ← vị_trí + 1",
        updateHigh: "cao ← vị_trí − 1",
        returnMiss: "trả_về KHÔNG_TÌM_THẤY",
      },
      pseudo: [
        {
          id: null,
          indent: 0,
          text: "thủ_tục tìm_nội_suy(mảng, n, khóa)",
        },
        { id: "setLow", indent: 1, text: "thấp ← 0" },
        { id: "setHigh", indent: 1, text: "cao ← n − 1" },
        {
          id: "whileLoop",
          indent: 1,
          text: "trong_khi thấp ≤ cao và khóa ≥ mảng[thấp] và khóa ≤ mảng[cao] làm",
        },
        {
          id: "setPos",
          indent: 2,
          text: "vị_trí ← thấp + sàn((khóa − mảng[thấp]) × (cao − thấp) / (mảng[cao] − mảng[thấp]))",
        },
        {
          id: "checkEqual",
          indent: 2,
          text: "nếu mảng[vị_trí] = khóa thì",
        },
        { id: "returnFound", indent: 3, text: "trả_về vị_trí" },
        { id: null, indent: 2, text: "kết_thúc_nếu" },
        {
          id: "checkLess",
          indent: 2,
          text: "nếu mảng[vị_trí] < khóa thì",
        },
        { id: "updateLow", indent: 3, text: "thấp ← vị_trí + 1" },
        { id: null, indent: 2, text: "không_thì" },
        { id: "updateHigh", indent: 3, text: "cao ← vị_trí − 1" },
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
        {
          id: "mainCall",
          indent: 0,
          text: "tìm_nội_suy(mảng, n, khóa)",
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
