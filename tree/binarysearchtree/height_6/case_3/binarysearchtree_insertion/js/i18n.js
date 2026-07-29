/**
 * English / Vietnamese strings for UI, pseudocode, and 3D labels.
 */

window.I18n = (function () {
  const LOCAL_LANGUAGE_KEY = "bsti-puzzle-lang";
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
      title: "BST Insertion Studio",
      subtitle: "Pseudocode · 3D tree · fill-the-blank trace puzzle",
      sequence: "Sequence",
      apply: "Apply",
      randomize: "Randomize",
      speed: "Speed",
      run: "Run",
      step: "Step",
      pause: "Pause",
      reset: "Reset",
      rerun: "Rerun",
      rerunTitle: "Rerun from the start (keeps filled blanks)",
      splitterRowLabel: "Drag to resize execution trace height",
      puzzleOpenPalette: "Fill blanks",
      puzzlePanelTitle: "Trace pieces",
      puzzlePanelHint:
        "Choose a column, then drag values onto blank cells. Drag a placed piece back here to undo, or reset all.",
      puzzleSectionStepId: "Line",
      puzzleSectionKey: "key",
      puzzleSectionCurrent: "current",
      puzzleSectionParent: "parent",
      puzzleSectionSide: "side",
      puzzleSectionRoot: "root",
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
      vizTitle: "Binary Search Tree (3D)",
      vizHint:
        "Drag to peek · scroll to zoom · queue top-right · CURRENT walks the tree",
      legendWaiting: "To insert",
      legendDone: "Processed",
      legendActive: "Comparing",
      legendSmaller: "Smaller / equal",
      legendInserted: "In tree",
      algoTitle: "Algorithm (Pseudocode)",
      algoHint:
        "Current line is highlighted · BST insert walks left / right until a null child",
      traceTitle: "Execution Trace",
      traceHint:
        "Full instance table · fill blanks on rows where values change",
      traceEmpty: "Press Run or Step to start tracing.",
      colStep: "#",
      colLine: "Line",
      colKey: "key",
      colCurrent: "current",
      colParent: "parent",
      colSide: "side",
      colRoot: "root",
      labelNext: "TO BE INSERTED NEXT",
      labelCurrent: "CURRENT",
      labelNull: "null",
      labelLeft: "left",
      labelRight: "right",
      comparePrefix: "Compare",
      trueWord: "true",
      falseWord: "false",
      processingKeyTitle: "Processing",
      doneMsg: "All {n} keys inserted into the BST.",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
      splitterLabel: "Drag to resize panels",
      langEn: "EN",
      langVi: "VI",
      stepLabels: {
        mainLoop: "for each key in sequence",
        callInsert: "root ← bst_insert(root, key)",
        createNode: "new ← create_node(key)",
        checkEmpty: "if root = null",
        returnNew: "return new",
        setCurrent: "current ← root",
        setParent: "parent ← null",
        whileLoop: "while current ≠ null",
        parentAssign: "parent ← current",
        checkLess: "if key < current.key",
        goLeft: "current ← current.left",
        goRight: "current ← current.right",
        attachCheck: "if key < parent.key",
        attachLeft: "parent.left ← new",
        attachRight: "parent.right ← new",
        returnRoot: "return root",
      },
      pseudo: [
        { id: null, indent: 0, text: "procedure bst_insert(root, key)" },
        { id: "createNode", indent: 1, text: "new ← create_node(key)" },
        { id: "checkEmpty", indent: 1, text: "if root = null then" },
        { id: "returnNew", indent: 2, text: "return new" },
        { id: null, indent: 1, text: "end_if" },
        { id: "setCurrent", indent: 1, text: "current ← root" },
        { id: "setParent", indent: 1, text: "parent ← null" },
        { id: "whileLoop", indent: 1, text: "while current ≠ null do" },
        { id: "parentAssign", indent: 2, text: "parent ← current" },
        { id: "checkLess", indent: 2, text: "if key < current.key then" },
        { id: "goLeft", indent: 3, text: "current ← current.left" },
        { id: null, indent: 2, text: "else" },
        { id: "goRight", indent: 3, text: "current ← current.right" },
        { id: null, indent: 2, text: "end_if" },
        { id: null, indent: 1, text: "end_while" },
        { id: "attachCheck", indent: 1, text: "if key < parent.key then" },
        { id: "attachLeft", indent: 2, text: "parent.left ← new" },
        { id: null, indent: 1, text: "else" },
        { id: "attachRight", indent: 2, text: "parent.right ← new" },
        { id: null, indent: 1, text: "end_if" },
        { id: "returnRoot", indent: 1, text: "return root" },
        { id: null, indent: 0, text: "end_procedure" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "// entry_point" },
        { id: null, indent: 0, text: "root ← null" },
        {
          id: "mainLoop",
          indent: 0,
          text: "for each key in sequence do",
        },
        {
          id: "callInsert",
          indent: 1,
          text: "root ← bst_insert(root, key)",
        },
        { id: null, indent: 0, text: "end_for" },
      ],
    },
    vi: {
      title: "Studio Chèn cây nhị phân tìm kiếm",
      subtitle: "Giả mã · Cây 3D · câu đố điền bảng theo dõi",
      sequence: "Dãy khóa",
      apply: "Áp dụng",
      randomize: "Ngẫu nhiên",
      speed: "Tốc độ",
      run: "Chạy",
      step: "Từng bước",
      pause: "Tạm dừng",
      reset: "Đặt lại",
      rerun: "Chạy lại",
      rerunTitle: "Chạy lại từ đầu (giữ các ô đã điền)",
      splitterRowLabel: "Kéo để đổi chiều cao bảng theo dõi",
      puzzleOpenPalette: "Điền chỗ trống",
      puzzlePanelTitle: "Mảnh bảng theo dõi",
      puzzlePanelHint:
        "Chọn một cột, rồi kéo giá trị vào ô trống. Kéo mảnh đã đặt về đây để hoàn tác, hoặc đặt lại tất cả.",
      puzzleSectionStepId: "Dòng",
      puzzleSectionKey: "khóa",
      puzzleSectionCurrent: "hiện_tại",
      puzzleSectionParent: "cha",
      puzzleSectionSide: "phía",
      puzzleSectionRoot: "gốc",
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
      vizTitle: "Cây nhị phân tìm kiếm (3D)",
      vizHint:
        "Kéo để xem chiều sâu · cuộn để phóng to/thu nhỏ · hàng chờ góc phải · CURRENT đi trên cây",
      legendWaiting: "Chờ chèn",
      legendDone: "Đã xử lý",
      legendActive: "Đang so sánh",
      legendSmaller: "Nhỏ hơn / bằng",
      legendInserted: "Trong cây",
      algoTitle: "Thuật toán (Giả mã)",
      algoHint:
        "Dòng đang chạy được tô sáng · Chèn BST đi trái / phải tới khi gặp null",
      traceTitle: "Bảng theo dõi",
      traceHint:
        "Bảng đầy đủ của ví dụ · điền chỗ trống ở các dòng có giá trị thay đổi",
      traceEmpty: "Nhấn Chạy hoặc Từng bước để bắt đầu.",
      colStep: "#",
      colLine: "Dòng",
      colKey: "khóa",
      colCurrent: "hiện_tại",
      colParent: "cha",
      colSide: "phía",
      colRoot: "gốc",
      labelNext: "SẼ CHÈN TIẾP",
      labelCurrent: "HIỆN TẠI",
      labelNull: "null",
      labelLeft: "trái",
      labelRight: "phải",
      comparePrefix: "So sánh",
      trueWord: "đúng",
      falseWord: "sai",
      processingKeyTitle: "Đang xử lý",
      doneMsg: "Đã chèn đủ {n} khóa vào BST.",
      zoomIn: "Phóng to",
      zoomOut: "Thu nhỏ",
      splitterLabel: "Kéo để đổi kích thước",
      langEn: "EN",
      langVi: "VI",
      stepLabels: {
        mainLoop: "với mỗi khóa trong dãy",
        callInsert: "gốc ← chèn_bst(gốc, khóa)",
        createNode: "mới ← tạo_nút(khóa)",
        checkEmpty: "nếu gốc = null",
        returnNew: "trả_về mới",
        setCurrent: "hiện_tại ← gốc",
        setParent: "cha ← null",
        whileLoop: "trong_khi hiện_tại ≠ null",
        parentAssign: "cha ← hiện_tại",
        checkLess: "nếu khóa < hiện_tại.khóa",
        goLeft: "hiện_tại ← hiện_tại.trái",
        goRight: "hiện_tại ← hiện_tại.phải",
        attachCheck: "nếu khóa < cha.khóa",
        attachLeft: "cha.trái ← mới",
        attachRight: "cha.phải ← mới",
        returnRoot: "trả_về gốc",
      },
      pseudo: [
        {
          id: null,
          indent: 0,
          text: "thủ_tục chèn_bst(gốc, khóa)",
        },
        { id: "createNode", indent: 1, text: "mới ← tạo_nút(khóa)" },
        { id: "checkEmpty", indent: 1, text: "nếu gốc = null thì" },
        { id: "returnNew", indent: 2, text: "trả_về mới" },
        { id: null, indent: 1, text: "kết_thúc_nếu" },
        { id: "setCurrent", indent: 1, text: "hiện_tại ← gốc" },
        { id: "setParent", indent: 1, text: "cha ← null" },
        {
          id: "whileLoop",
          indent: 1,
          text: "trong_khi hiện_tại ≠ null làm",
        },
        { id: "parentAssign", indent: 2, text: "cha ← hiện_tại" },
        {
          id: "checkLess",
          indent: 2,
          text: "nếu khóa < hiện_tại.khóa thì",
        },
        {
          id: "goLeft",
          indent: 3,
          text: "hiện_tại ← hiện_tại.trái",
        },
        { id: null, indent: 2, text: "không_thì" },
        {
          id: "goRight",
          indent: 3,
          text: "hiện_tại ← hiện_tại.phải",
        },
        { id: null, indent: 2, text: "kết_thúc_nếu" },
        { id: null, indent: 1, text: "kết_thúc_trong_khi" },
        {
          id: "attachCheck",
          indent: 1,
          text: "nếu khóa < cha.khóa thì",
        },
        { id: "attachLeft", indent: 2, text: "cha.trái ← mới" },
        { id: null, indent: 1, text: "không_thì" },
        { id: "attachRight", indent: 2, text: "cha.phải ← mới" },
        { id: null, indent: 1, text: "kết_thúc_nếu" },
        { id: "returnRoot", indent: 1, text: "trả_về gốc" },
        { id: null, indent: 0, text: "kết_thúc_thủ_tục" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "// điểm_bắt_đầu" },
        { id: null, indent: 0, text: "gốc ← null" },
        {
          id: "mainLoop",
          indent: 0,
          text: "với mỗi khóa trong dãy làm",
        },
        {
          id: "callInsert",
          indent: 1,
          text: "gốc ← chèn_bst(gốc, khóa)",
        },
        { id: null, indent: 0, text: "kết_thúc_với" },
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
