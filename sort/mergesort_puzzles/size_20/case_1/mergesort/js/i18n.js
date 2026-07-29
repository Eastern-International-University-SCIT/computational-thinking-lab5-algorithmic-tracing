/**
 * English / Vietnamese strings for UI, pseudocode, and 3D labels.
 */

window.I18n = (function () {
  const LOCAL_LANGUAGE_KEY = "ms-lang";
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
      title: "Merge Sort Studio",
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
        "Drag to peek at depth · scroll to zoom · left/right halves · Memory L / R · i / j / k pointers",
      legendRun1: "Left half",
      legendRun2: "Right half",
      legendActive: "Comparing",
      legendWrite: "Writing",
      legendSorted: "Sorted",
      algoTitle: "Algorithm (Pseudocode)",
      algoHint:
        "Current line is highlighted · recursion stack floats over the code · divide, conquer, merge",
      recursionTitle: "Call stack",
      traceTitle: "Execution Trace",
      traceHint: "Rows appear as each step runs · columns track algorithm variables",
      traceEmpty: "Press Run or Step to start tracing.",
      colStep: "#",
      colLine: "Line",
      colArray: "array",
      colLeft: "left",
      colMid: "mid",
      colRight: "right",
      colI: "i",
      colJ: "j",
      colK: "k",
      labelI: "i",
      labelJ: "j",
      labelK: "k",
      labelLeft: "left",
      labelMid: "mid",
      labelRight: "right",
      labelMemory: "Memory",
      labelMemL: "L",
      labelMemR: "R",
      comparePrefix: "Compare",
      trueWord: "true",
      falseWord: "false",
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
        mainCall: "merge_sort(A, 0, n−1)",
        markRange: "mark_range [left .. right]",
        checkLeftRight: "if left < right",
        setMid: "mid ← ⌊(left + right) / 2⌋",
        sortLeft: "merge_sort left",
        sortRight: "merge_sort right",
        callMerge: "merge(left, mid, right)",
        copyRuns: "L, R ← copy halves",
        initMergePointers: "i, j ← 0; k ← left",
        whileBoth: "while both halves remain",
        compareMerge: "L[i] ≤ R[j] ?",
        takeLeft: "A[k] ← L[i]",
        takeRight: "A[k] ← R[j]",
        incK: "k ← k + 1",
        drainLeft: "copy rest of L",
        drainRight: "copy rest of R",
      },
      pseudo: [
        { id: null, indent: 0, text: "procedure merge_sort(A, left, right)" },
        { id: "markRange", indent: 1, text: "mark_range [left .. right]" },
        { id: "checkLeftRight", indent: 1, text: "if left < right then" },
        {
          id: "setMid",
          indent: 2,
          text: "mid ← ⌊(left + right) / 2⌋",
        },
        {
          id: "sortLeft",
          indent: 2,
          text: "merge_sort(A, left, mid)",
        },
        {
          id: "sortRight",
          indent: 2,
          text: "merge_sort(A, mid + 1, right)",
        },
        {
          id: "callMerge",
          indent: 2,
          text: "merge(A, left, mid, right)",
        },
        { id: null, indent: 1, text: "end_if" },
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
        { id: "mainCall", indent: 0, text: "merge_sort(A, 0, n − 1)" },
      ],
    },
    vi: {
      title: "Studio Sắp xếp Trộn",
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
        "Kéo để xem chiều sâu · cuộn để phóng to/thu nhỏ · nửa trái/phải · Bộ nhớ mảng_trái / mảng_phải · i / j / k",
      legendRun1: "Nửa trái",
      legendRun2: "Nửa phải",
      legendActive: "Đang so sánh",
      legendWrite: "Đang ghi",
      legendSorted: "Đã sắp xếp",
      algoTitle: "Thuật toán (Giả mã)",
      algoHint:
        "Dòng đang chạy được tô sáng · ngăn xếp đệ quy nổi trên mã · chia, trị, trộn",
      recursionTitle: "Ngăn xếp gọi",
      traceTitle: "Bảng theo dõi",
      traceHint: "Mỗi bước thêm một dòng · các cột là biến của thuật toán",
      traceEmpty: "Nhấn Chạy hoặc Từng bước để bắt đầu.",
      colStep: "#",
      colLine: "Dòng",
      colArray: "mảng",
      colLeft: "trái",
      colMid: "giữa",
      colRight: "phải",
      colI: "i",
      colJ: "j",
      colK: "k",
      labelI: "i",
      labelJ: "j",
      labelK: "k",
      labelLeft: "trái",
      labelMid: "giữa",
      labelRight: "phải",
      labelMemory: "Bộ nhớ",
      labelMemL: "mảng_trái",
      labelMemR: "mảng_phải",
      comparePrefix: "So sánh",
      trueWord: "đúng",
      falseWord: "sai",
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
        mainCall: "sắp_xếp_trộn(mảng, 0, n−1)",
        markRange: "đánh_dấu_phạm_vi [trái .. phải]",
        checkLeftRight: "nếu trái < phải",
        setMid: "giữa ← ⌊(trái + phải) / 2⌋",
        sortLeft: "sắp_xếp_trộn nửa trái",
        sortRight: "sắp_xếp_trộn nửa phải",
        callMerge: "trộn(trái, giữa, phải)",
        copyRuns: "mảng_trái, mảng_phải ← sao chép nửa",
        initMergePointers: "i, j ← 0; k ← trái",
        whileBoth: "khi còn cả hai nửa",
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
          text: "thủ_tục sắp_xếp_trộn(mảng, trái, phải)",
        },
        {
          id: "markRange",
          indent: 1,
          text: "đánh_dấu_phạm_vi [trái .. phải]",
        },
        { id: "checkLeftRight", indent: 1, text: "nếu trái < phải thì" },
        {
          id: "setMid",
          indent: 2,
          text: "giữa ← ⌊(trái + phải) / 2⌋",
        },
        {
          id: "sortLeft",
          indent: 2,
          text: "sắp_xếp_trộn(mảng, trái, giữa)",
        },
        {
          id: "sortRight",
          indent: 2,
          text: "sắp_xếp_trộn(mảng, giữa + 1, phải)",
        },
        {
          id: "callMerge",
          indent: 2,
          text: "trộn(mảng, trái, giữa, phải)",
        },
        { id: null, indent: 1, text: "kết_thúc_nếu" },
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
          text: "sắp_xếp_trộn(mảng, 0, n − 1)",
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

  /** Localized procedure call text for the recursion stack. */
  function callFrame(leftArg, rightArg) {
    const isVi = lang === "vi";
    const fn = isVi ? "sắp_xếp_trộn" : "merge_sort";
    const arr = isVi ? "mảng" : "A";
    return `${fn}(${arr}, ${leftArg}, ${rightArg})`;
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
    callFrame,
  };
})();


window.addEventListener("message", (event) => {
  const data = event.data;
  if (data && data.type === "tracelab:language-change" && window.I18n) {
    window.I18n.setLang(data.language);
  }
});
