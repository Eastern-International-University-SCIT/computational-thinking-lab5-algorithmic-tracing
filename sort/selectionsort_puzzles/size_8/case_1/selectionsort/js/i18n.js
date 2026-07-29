/**
 * English / Vietnamese strings for UI, pseudocode, and 3D labels.
 */

window.I18n = (function () {
  const LOCAL_LANGUAGE_KEY = "ss-lang";
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
      title: "Selection Sort Studio",
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
        "Drag to peek at depth · scroll to zoom · i / j pointers · amber = current min",
      legendMin: "Current min",
      legendActive: "Comparing",
      legendSwap: "Swapping",
      legendSorted: "Sorted",
      legendRange: "Unsorted range",
      algoTitle: "Algorithm (Pseudocode)",
      algoHint:
        "Current line is highlighted · Selection Sort finds the minimum each pass",
      traceTitle: "Execution Trace",
      traceHint: "Rows appear as each step runs · columns track algorithm variables",
      traceEmpty: "Press Run or Step to start tracing.",
      colStep: "#",
      colLine: "Line",
      colArray: "array",
      colN: "n",
      colI: "i",
      colJ: "j",
      colMin: "minIndex",
      labelI: "i",
      labelJ: "j",
      labelMin: "min",
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
        mainCall: "selection_sort(A, n)",
        forI: "for i ← 0 to n−2",
        setMin: "minIndex ← i",
        markRange: "mark_range",
        forJ: "for j ← i+1 to n−1",
        compare: "A[j] < A[minIndex] ?",
        updateMin: "minIndex ← j",
        checkSwap: "if minIndex ≠ i",
        swapMin: "swap(i, minIndex)",
        markSortedI: "mark_sorted i",
      },
      pseudo: [
        { id: null, indent: 0, text: "procedure selection_sort(A, n)" },
        { id: "forI", indent: 1, text: "for i ← 0 to n − 2 do" },
        { id: "setMin", indent: 2, text: "minIndex ← i" },
        { id: "markRange", indent: 2, text: "mark_range [i .. n − 1]" },
        { id: "forJ", indent: 2, text: "for j ← i + 1 to n − 1 do" },
        { id: "compare", indent: 3, text: "if A[j] < A[minIndex] then" },
        { id: "updateMin", indent: 4, text: "minIndex ← j" },
        { id: null, indent: 3, text: "end_if" },
        { id: null, indent: 2, text: "end_for" },
        { id: "checkSwap", indent: 2, text: "if minIndex ≠ i then" },
        { id: "swapMin", indent: 3, text: "swap(A[i], A[minIndex])" },
        { id: null, indent: 2, text: "end_if" },
        { id: "markSortedI", indent: 2, text: "mark_sorted (i)" },
        { id: null, indent: 1, text: "end_for" },
        { id: null, indent: 0, text: "end_procedure" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "// entry_point" },
        { id: "mainCall", indent: 0, text: "selection_sort(A, n)" },
      ],
    },
    vi: {
      title: "Studio Sắp xếp Chọn",
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
        "Kéo để xem chiều sâu · cuộn để phóng to/thu nhỏ · con trỏ i / j · vàng = nhỏ_nhất hiện tại",
      legendMin: "Nhỏ nhất hiện tại",
      legendActive: "Đang so sánh",
      legendSwap: "Đang đổi chỗ",
      legendSorted: "Đã sắp xếp",
      legendRange: "Phạm vi chưa sắp",
      algoTitle: "Thuật toán (Giả mã)",
      algoHint:
        "Dòng đang chạy được tô sáng · Sắp xếp chọn tìm phần tử nhỏ nhất mỗi vòng",
      traceTitle: "Bảng theo dõi",
      traceHint: "Mỗi bước thêm một dòng · các cột là biến của thuật toán",
      traceEmpty: "Nhấn Chạy hoặc Từng bước để bắt đầu.",
      colStep: "#",
      colLine: "Dòng",
      colArray: "mảng",
      colN: "n",
      colI: "i",
      colJ: "j",
      colMin: "chỉ_số_nhỏ_nhất",
      labelI: "i",
      labelJ: "j",
      labelMin: "nhỏ_nhất",
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
        mainCall: "sắp_xếp_chọn(mảng, n)",
        forI: "với i ← 0 đến n−2",
        setMin: "chỉ_số_nhỏ_nhất ← i",
        markRange: "đánh_dấu_phạm_vi",
        forJ: "với j ← i+1 đến n−1",
        compare: "mảng[j] < mảng[chỉ_số_nhỏ_nhất] ?",
        updateMin: "chỉ_số_nhỏ_nhất ← j",
        checkSwap: "nếu chỉ_số_nhỏ_nhất ≠ i",
        swapMin: "đổi_chỗ(i, chỉ_số_nhỏ_nhất)",
        markSortedI: "đánh_dấu_đã_sắp i",
      },
      pseudo: [
        {
          id: null,
          indent: 0,
          text: "thủ_tục sắp_xếp_chọn(mảng, n)",
        },
        { id: "forI", indent: 1, text: "với i ← 0 đến n − 2 làm" },
        { id: "setMin", indent: 2, text: "chỉ_số_nhỏ_nhất ← i" },
        {
          id: "markRange",
          indent: 2,
          text: "đánh_dấu_phạm_vi [i .. n − 1]",
        },
        {
          id: "forJ",
          indent: 2,
          text: "với j ← i + 1 đến n − 1 làm",
        },
        {
          id: "compare",
          indent: 3,
          text: "nếu mảng[j] < mảng[chỉ_số_nhỏ_nhất] thì",
        },
        { id: "updateMin", indent: 4, text: "chỉ_số_nhỏ_nhất ← j" },
        { id: null, indent: 3, text: "kết_thúc_nếu" },
        { id: null, indent: 2, text: "kết_thúc_với" },
        {
          id: "checkSwap",
          indent: 2,
          text: "nếu chỉ_số_nhỏ_nhất ≠ i thì",
        },
        {
          id: "swapMin",
          indent: 3,
          text: "đổi_chỗ(mảng[i], mảng[chỉ_số_nhỏ_nhất])",
        },
        { id: null, indent: 2, text: "kết_thúc_nếu" },
        {
          id: "markSortedI",
          indent: 2,
          text: "đánh_dấu_đã_sắp (i)",
        },
        { id: null, indent: 1, text: "kết_thúc_với" },
        { id: null, indent: 0, text: "kết_thúc_thủ_tục" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "// điểm_bắt_đầu" },
        { id: "mainCall", indent: 0, text: "sắp_xếp_chọn(mảng, n)" },
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

  function neqCompareText(minIndex, i, shouldSwap) {
    const result = shouldSwap ? t("trueWord") : t("falseWord");
    return `${t("comparePrefix")}: minIndex ≠ i (${minIndex} ≠ ${i})  →  ${result}`;
  }

  function boolText(value) {
    return value ? t("trueWord") : t("falseWord");
  }

  return {
    t,
    getLang,
    setLang,
    onChange,
    stepLabel,
    pseudoLines,
    compareText,
    neqCompareText,
    boolText,
  };
})();


window.addEventListener("message", (event) => {
  const data = event.data;
  if (data && data.type === "tracelab:language-change" && window.I18n) {
    window.I18n.setLang(data.language);
  }
});
