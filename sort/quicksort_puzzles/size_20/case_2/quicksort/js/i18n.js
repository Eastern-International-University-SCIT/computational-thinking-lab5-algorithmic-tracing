/**
 * English / Vietnamese strings for UI, pseudocode, and 3D labels.
 */

window.I18n = (function () {
  const LOCAL_LANGUAGE_KEY = "qs-lang";
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
      title: "Quick Sort Studio",
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
        "Drag to peek at depth · scroll to zoom · square boxes with equal side gaps",
      legendPivot: "Pivot",
      legendActive: "Comparing",
      legendSwap: "Swapping",
      legendSorted: "Partitioned",
      legendRange: "Active range",
      algoTitle: "Algorithm (Pseudocode)",
      algoHint: "Current line is highlighted · Lomuto partition Quick Sort",
      traceTitle: "Execution Trace",
      traceHint: "Rows appear as each step runs · columns track algorithm variables",
      traceEmpty: "Press Run or Step to start tracing.",
      colStep: "#",
      colLine: "Line",
      colArray: "array",
      colLow: "low",
      colHigh: "high",
      colI: "i",
      colJ: "j",
      colPivot: "pivot",
      colPi: "pivot_index",
      labelLow: "Low",
      labelHigh: "High",
      labelLowHigh: "Low / High",
      labelPivot: "Pivot",
      labelI: "i",
      labelJ: "j",
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
        mainCall: "quick_sort(0, n−1)",
        markRange: "mark_range",
        checkLowHigh: "if low < high",
        callPartition: "pivot_index ← partition",
        sortLeft: "quick_sort left",
        sortRight: "quick_sort right",
        setPivot: "set pivot",
        initI: "i ← low − 1",
        forJ: "for j in range",
        compare: "A[j] < pivot ?",
        incI: "i ← i + 1",
        swapIJ: "swap(i, j)",
        swapPivot: "swap(i+1, high)",
        returnPi: "return i + 1",
      },
      pseudo: [
        { id: null, indent: 0, text: "procedure quick_sort(A, low, high)" },
        { id: "markRange", indent: 1, text: "mark_range [low .. high]" },
        { id: "checkLowHigh", indent: 1, text: "if low < high then" },
        {
          id: "callPartition",
          indent: 2,
          text: "pivot_index ← partition(A, low, high)",
        },
        {
          id: "sortLeft",
          indent: 2,
          text: "quick_sort(A, low, pivot_index − 1)",
        },
        {
          id: "sortRight",
          indent: 2,
          text: "quick_sort(A, pivot_index + 1, high)",
        },
        { id: null, indent: 1, text: "end_if" },
        { id: null, indent: 0, text: "end_procedure" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "procedure partition(A, low, high)" },
        { id: "setPivot", indent: 1, text: "pivot ← A[high]" },
        { id: "initI", indent: 1, text: "i ← low − 1" },
        { id: "forJ", indent: 1, text: "for j ← low to high − 1 do" },
        { id: "compare", indent: 2, text: "if A[j] < pivot then" },
        { id: "incI", indent: 3, text: "i ← i + 1" },
        { id: "swapIJ", indent: 3, text: "swap(A[i], A[j])" },
        { id: null, indent: 2, text: "end_if" },
        { id: null, indent: 1, text: "end_for" },
        { id: "swapPivot", indent: 1, text: "swap(A[i + 1], A[high])" },
        { id: "returnPi", indent: 1, text: "return i + 1" },
        { id: null, indent: 0, text: "end_procedure" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "// entry_point" },
        { id: "mainCall", indent: 0, text: "quick_sort(A, 0, n − 1)" },
      ],
    },
    vi: {
      title: "Studio Sắp xếp Nhanh",
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
        "Kéo để xem chiều sâu · cuộn để phóng to/thu nhỏ · hộp vuông, khoảng cách đều",
      legendPivot: "Chốt",
      legendActive: "Đang so sánh",
      legendSwap: "Đang đổi chỗ",
      legendSorted: "Đã phân hoạch",
      legendRange: "Phạm vi đang xét",
      algoTitle: "Thuật toán (Giả mã)",
      algoHint: "Dòng đang chạy được tô sáng · Sắp xếp nhanh phân hoạch Lomuto",
      traceTitle: "Bảng theo dõi",
      traceHint: "Mỗi bước thêm một dòng · các cột là biến của thuật toán",
      traceEmpty: "Nhấn Chạy hoặc Từng bước để bắt đầu.",
      colStep: "#",
      colLine: "Dòng",
      colArray: "mảng",
      colLow: "thấp",
      colHigh: "cao",
      colI: "i",
      colJ: "j",
      colPivot: "chốt",
      colPi: "chỉ_số_chốt",
      labelLow: "Thấp",
      labelHigh: "Cao",
      labelLowHigh: "Thấp / Cao",
      labelPivot: "Chốt",
      labelI: "i",
      labelJ: "j",
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
        mainCall: "sắp_xếp_nhanh(0, n−1)",
        markRange: "đánh_dấu_phạm_vi",
        checkLowHigh: "nếu thấp < cao",
        callPartition: "chỉ_số_chốt ← phân_hoạch",
        sortLeft: "sắp_xếp_nhanh trái",
        sortRight: "sắp_xếp_nhanh phải",
        setPivot: "gán chốt",
        initI: "i ← thấp − 1",
        forJ: "với j trong phạm_vi",
        compare: "mảng[j] < chốt ?",
        incI: "i ← i + 1",
        swapIJ: "đổi_chỗ(i, j)",
        swapPivot: "đổi_chỗ(i+1, cao)",
        returnPi: "trả_về i + 1",
      },
      pseudo: [
        {
          id: null,
          indent: 0,
          text: "thủ_tục sắp_xếp_nhanh(mảng, thấp, cao)",
        },
        {
          id: "markRange",
          indent: 1,
          text: "đánh_dấu_phạm_vi [thấp .. cao]",
        },
        { id: "checkLowHigh", indent: 1, text: "nếu thấp < cao thì" },
        {
          id: "callPartition",
          indent: 2,
          text: "chỉ_số_chốt ← phân_hoạch(mảng, thấp, cao)",
        },
        {
          id: "sortLeft",
          indent: 2,
          text: "sắp_xếp_nhanh(mảng, thấp, chỉ_số_chốt − 1)",
        },
        {
          id: "sortRight",
          indent: 2,
          text: "sắp_xếp_nhanh(mảng, chỉ_số_chốt + 1, cao)",
        },
        { id: null, indent: 1, text: "kết_thúc_nếu" },
        { id: null, indent: 0, text: "kết_thúc_thủ_tục" },
        { id: null, indent: 0, text: "" },
        {
          id: null,
          indent: 0,
          text: "thủ_tục phân_hoạch(mảng, thấp, cao)",
        },
        { id: "setPivot", indent: 1, text: "chốt ← mảng[cao]" },
        { id: "initI", indent: 1, text: "i ← thấp − 1" },
        {
          id: "forJ",
          indent: 1,
          text: "với j ← thấp đến cao − 1 làm",
        },
        { id: "compare", indent: 2, text: "nếu mảng[j] < chốt thì" },
        { id: "incI", indent: 3, text: "i ← i + 1" },
        { id: "swapIJ", indent: 3, text: "đổi_chỗ(mảng[i], mảng[j])" },
        { id: null, indent: 2, text: "kết_thúc_nếu" },
        { id: null, indent: 1, text: "kết_thúc_với" },
        { id: "swapPivot", indent: 1, text: "đổi_chỗ(mảng[i + 1], mảng[cao])" },
        { id: "returnPi", indent: 1, text: "trả_về i + 1" },
        { id: null, indent: 0, text: "kết_thúc_thủ_tục" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "// điểm_bắt_đầu" },
        { id: "mainCall", indent: 0, text: "sắp_xếp_nhanh(mảng, 0, n − 1)" },
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

  function compareText(a, b, less) {
    const result = less ? t("trueWord") : t("falseWord");
    return `${t("comparePrefix")}: ${a} < ${b}  →  ${result}`;
  }

  function rangeCompareText(low, high, less) {
    const result = less ? t("trueWord") : t("falseWord");
    return `${t("comparePrefix")}: ${t("labelLow")}(${low}) < ${t(
      "labelHigh"
    )}(${high})  →  ${result}`;
  }

  return {
    t,
    getLang,
    setLang,
    onChange,
    stepLabel,
    pseudoLines,
    compareText,
    rangeCompareText,
  };
})();


window.addEventListener("message", (event) => {
  const data = event.data;
  if (data && data.type === "tracelab:language-change" && window.I18n) {
    window.I18n.setLang(data.language);
  }
});
