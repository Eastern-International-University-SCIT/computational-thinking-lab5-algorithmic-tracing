/**
 * English / Vietnamese strings for UI, pseudocode, and 3D labels.
 */

window.I18n = (function () {
  const LOCAL_LANGUAGE_KEY = "js-lang";
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
      title: "Jump Search Studio",
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
        "Drag to peek at depth · scroll to zoom · sorted array · prev / step pointers",
      legendBlock: "Jump block",
      legendActive: "Comparing",
      legendStepLen: "step_length span",
      legendFound: "Found",
      legendMiss: "Not found",
      legendSmaller: "Smaller / equal",
      algoTitle: "Algorithm (Pseudocode)",
      algoHint:
        "Current line is highlighted · Jump Search skips by √n then scans linearly",
      traceTitle: "Execution Trace",
      traceHint: "Full instance table · fill blanks on rows where values change",
      traceEmpty: "Press Run or Step to start tracing.",
      colStep: "#",
      colLine: "Line",
      colArray: "array",
      colN: "n",
      colKey: "key",
      colStepLength: "step_length",
      colStepVar: "step",
      colStepOrN: "step_or_n",
      colPrev: "prev",
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
      labelPrev: "prev",
      labelStep: "step",
      labelStepOrN: "step_or_n",
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
        mainCall: "jump_search(A, n, key)",
        setStepLength: "step_length ← ⌊√n⌋",
        setStep: "step ← step_length",
        setPrev: "prev ← 0",
        setStepOrN: "step_or_n ← min(step, n)",
        whileJump: "while A[step_or_n−1] < key",
        updatePrev: "prev ← step",
        updateStep: "step ← step + step_length",
        checkPrevGeN: "if prev ≥ n",
        returnMissJump: "return NOT_FOUND",
        updateStepOrN: "step_or_n ← min(step, n)",
        whileLinear: "while A[prev] < key",
        incPrev: "prev ← prev + 1",
        checkBound: "if prev = step_or_n",
        returnMissLinear: "return NOT_FOUND",
        checkEqual: "if A[prev] = key",
        returnFound: "return prev",
        returnMiss: "return NOT_FOUND",
      },
      pseudo: [
        { id: null, indent: 0, text: "procedure jump_search(A, n, key)" },
        {
          id: "setStepLength",
          indent: 1,
          text: "step_length ← floor(sqrt(n))  // e.g. n=9 → 3; n=16 → 4",
        },
        { id: "setStep", indent: 1, text: "step ← step_length" },
        { id: "setPrev", indent: 1, text: "prev ← 0" },
        { id: "setStepOrN", indent: 1, text: "step_or_n ← min(step, n)" },
        {
          id: "whileJump",
          indent: 1,
          text: "while A[step_or_n − 1] < key do",
        },
        { id: "updatePrev", indent: 2, text: "prev ← step" },
        {
          id: "updateStep",
          indent: 2,
          text: "step ← step + step_length",
        },
        { id: "checkPrevGeN", indent: 2, text: "if prev ≥ n then" },
        { id: "returnMissJump", indent: 3, text: "return NOT_FOUND" },
        { id: null, indent: 2, text: "end_if" },
        {
          id: "updateStepOrN",
          indent: 2,
          text: "step_or_n ← min(step, n)",
        },
        { id: null, indent: 1, text: "end_while" },
        { id: "whileLinear", indent: 1, text: "while A[prev] < key do" },
        { id: "incPrev", indent: 2, text: "prev ← prev + 1" },
        {
          id: "checkBound",
          indent: 2,
          text: "if prev = step_or_n then",
        },
        { id: "returnMissLinear", indent: 3, text: "return NOT_FOUND" },
        { id: null, indent: 2, text: "end_if" },
        { id: null, indent: 1, text: "end_while" },
        { id: "checkEqual", indent: 1, text: "if A[prev] = key then" },
        { id: "returnFound", indent: 2, text: "return prev" },
        { id: null, indent: 1, text: "end_if" },
        { id: "returnMiss", indent: 1, text: "return NOT_FOUND" },
        { id: null, indent: 0, text: "end_procedure" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "// entry_point" },
        { id: "mainCall", indent: 0, text: "jump_search(A, n, key)" },
      ],
    },
    vi: {
      title: "Studio Tìm nhảy",
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
        "Kéo để xem chiều sâu · cuộn để phóng to/thu nhỏ · mảng đã sắp · con trỏ trước / bước",
      legendBlock: "Khối nhảy",
      legendActive: "Đang so sánh",
      legendStepLen: "đoạn khoảng_cách_bước",
      legendFound: "Tìm thấy",
      legendMiss: "Không tìm thấy",
      legendSmaller: "Nhỏ hơn / bằng",
      algoTitle: "Thuật toán (Giả mã)",
      algoHint:
        "Dòng đang chạy được tô sáng · Tìm nhảy bỏ qua theo √n rồi quét tuyến tính",
      traceTitle: "Bảng theo dõi",
      traceHint: "Mỗi bước thêm một dòng · các cột là biến của thuật toán",
      traceEmpty: "Nhấn Chạy hoặc Từng bước để bắt đầu.",
      colStep: "#",
      colLine: "Dòng",
      colArray: "mảng",
      colN: "n",
      colKey: "khóa",
      colStepLength: "khoảng_cách_bước",
      colStepVar: "bước",
      colStepOrN: "bước_hay_n",
      colPrev: "trước",
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
      labelPrev: "trước",
      labelStep: "bước",
      labelStepOrN: "bước_hay_n",
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
        mainCall: "tìm_nhảy(mảng, n, khóa)",
        setStepLength: "khoảng_cách_bước ← ⌊√n⌋",
        setStep: "bước ← khoảng_cách_bước",
        setPrev: "trước ← 0",
        setStepOrN: "bước_hay_n ← cái_nào_nhỏ_hơn(bước, n)",
        whileJump: "trong_khi mảng[bước_hay_n−1] < khóa",
        updatePrev: "trước ← bước",
        updateStep: "bước ← bước + khoảng_cách_bước",
        checkPrevGeN: "nếu trước ≥ n",
        returnMissJump: "trả_về KHÔNG_TÌM_THẤY",
        updateStepOrN: "bước_hay_n ← cái_nào_nhỏ_hơn(bước, n)",
        whileLinear: "trong_khi mảng[trước] < khóa",
        incPrev: "trước ← trước + 1",
        checkBound: "nếu trước = bước_hay_n",
        returnMissLinear: "trả_về KHÔNG_TÌM_THẤY",
        checkEqual: "nếu mảng[trước] = khóa",
        returnFound: "trả_về trước",
        returnMiss: "trả_về KHÔNG_TÌM_THẤY",
      },
      pseudo: [
        {
          id: null,
          indent: 0,
          text: "thủ_tục tìm_nhảy(mảng, n, khóa)",
        },
        {
          id: "setStepLength",
          indent: 1,
          text: "khoảng_cách_bước ← sàn(căn(n))  // vd: n=9 → 3; n=16 → 4",
        },
        {
          id: "setStep",
          indent: 1,
          text: "bước ← khoảng_cách_bước",
        },
        { id: "setPrev", indent: 1, text: "trước ← 0" },
        {
          id: "setStepOrN",
          indent: 1,
          text: "bước_hay_n ← cái_nào_nhỏ_hơn(bước, n)",
        },
        {
          id: "whileJump",
          indent: 1,
          text: "trong_khi mảng[bước_hay_n − 1] < khóa làm",
        },
        { id: "updatePrev", indent: 2, text: "trước ← bước" },
        {
          id: "updateStep",
          indent: 2,
          text: "bước ← bước + khoảng_cách_bước",
        },
        { id: "checkPrevGeN", indent: 2, text: "nếu trước ≥ n thì" },
        {
          id: "returnMissJump",
          indent: 3,
          text: "trả_về KHÔNG_TÌM_THẤY",
        },
        { id: null, indent: 2, text: "kết_thúc_nếu" },
        {
          id: "updateStepOrN",
          indent: 2,
          text: "bước_hay_n ← cái_nào_nhỏ_hơn(bước, n)",
        },
        { id: null, indent: 1, text: "kết_thúc_trong_khi" },
        {
          id: "whileLinear",
          indent: 1,
          text: "trong_khi mảng[trước] < khóa làm",
        },
        { id: "incPrev", indent: 2, text: "trước ← trước + 1" },
        {
          id: "checkBound",
          indent: 2,
          text: "nếu trước = bước_hay_n thì",
        },
        {
          id: "returnMissLinear",
          indent: 3,
          text: "trả_về KHÔNG_TÌM_THẤY",
        },
        { id: null, indent: 2, text: "kết_thúc_nếu" },
        { id: null, indent: 1, text: "kết_thúc_trong_khi" },
        {
          id: "checkEqual",
          indent: 1,
          text: "nếu mảng[trước] = khóa thì",
        },
        { id: "returnFound", indent: 2, text: "trả_về trước" },
        { id: null, indent: 1, text: "kết_thúc_nếu" },
        {
          id: "returnMiss",
          indent: 1,
          text: "trả_về KHÔNG_TÌM_THẤY",
        },
        { id: null, indent: 0, text: "kết_thúc_thủ_tục" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "// điểm_bắt_đầu" },
        { id: "mainCall", indent: 0, text: "tìm_nhảy(mảng, n, khóa)" },
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
