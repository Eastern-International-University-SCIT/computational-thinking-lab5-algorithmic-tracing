/**
 * English / Vietnamese strings for UI, pseudocode, and 3D labels.
 */

window.I18n = (function () {
  const LOCAL_LANGUAGE_KEY = "avli-lang";
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
      title: "AVL Insertion Studio",
      subtitle: "Pseudocode · 3D tree · fill-the-blank trace puzzle",
      sequence: "Sequence",
      apply: "Apply",
      randomize: "Randomize",
      speed: "Speed",
      run: "Run",
      step: "Step",
      pause: "Pause",
      reset: "Reset",
      vizTitle: "AVL Tree (3D)",
      vizHint:
        "Drag to peek · scroll to zoom · height & balance factor labels · CURRENT walks the tree",
      legendWaiting: "To insert",
      legendDone: "Processed",
      legendActive: "Comparing",
      legendSmaller: "Smaller / equal",
      legendInserted: "In tree",
      legendBf0: "Balance Factor 0",
      legendBfPos1: "Balance Factor +1",
      legendBfNeg1: "Balance Factor −1",
      legendBfHigh: "Balance Factor > +1",
      legendBfLow: "Balance Factor < −1",
      algoTitle: "Algorithm (Pseudocode)",
      algoHint:
        "Current line is highlighted · recursion stack floats over the code · helpers expand height / rotate",
      recursionTitle: "Call stack",
      processingKeyTitle: "Processing",
      traceTitle: "Execution Trace",
      traceHint:
        "Full instance table · fill blanks on rows where values change",
      traceEmpty: "Press Run or Step to start tracing.",
      colStep: "#",
      colLine: "Line",
      colKey: "key",
      colNode: "node",
      colBf: "balance_factor",
      colCase: "case",
      colNewRoot: "new_root",
      colTemp: "temp",
      colHeightLeft: "height_left",
      colHeightRight: "height_right",
      colRoot: "root",
      labelNext: "TO BE INSERTED NEXT",
      labelCurrent: "CURRENT",
      labelNodeCreated: "NODE_CREATED",
      labelNull: "null",
      labelLeft: "left",
      labelRight: "right",
      labelHeight: "height",
      labelBalanceFactor: "balance factor",
      labelNewRoot: "new_root",
      labelTemp: "temp",
      comparePrefix: "Compare",
      trueWord: "true",
      falseWord: "false",
      doneMsg: "All {n} keys inserted into the AVL tree.",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
      splitterLabel: "Drag to resize panels",
      langEn: "EN",
      langVi: "VI",

      rerun: "Rerun",
      rerunTitle: "Rerun algorithm from the start (keeps filled blanks)",
      splitterRowLabel: "Drag to resize execution trace height",
      puzzleOpenPalette: "Fill blanks",
      puzzlePanelTitle: "Trace pieces",
      puzzlePanelHint: "Choose a column, then drag values onto blank cells in highlighted rows.",
      puzzleSectionStepId: "Line",
      puzzleSection_key: "key",
      puzzleSection_node: "node",
      puzzleSection_bf: "balance_factor",
      puzzleSection_case: "case",
      puzzleSectionNewRoot: "new_root",
      puzzleSection_temp: "temp",
      puzzleSectionHeightLeft: "height_left",
      puzzleSectionHeightRight: "height_right",
      puzzleSection_root: "root",
      puzzleDropHere: "drop here",
      puzzleDragHint: "Drag onto the matching blank cell",
      puzzleDragBackHint: "Drag back to the Trace pieces panel to undo",
      puzzleResetPieces: "Reset pieces",
      puzzleBanner: "Puzzle: fill every blank on rows where values change, then Run or Step. The first part of the trace is already filled in.",
      puzzleBlocked: "Fill this highlighted row correctly to continue the algorithm.",
      puzzlePartial: "Keep going — every blank on each changed row must be correct.",
      puzzleSolved: "All changed rows filled correctly — you may continue.",
      puzzleWrongColumn: "That piece belongs in a different column.",
      puzzleCorrectRows: "Correct rows",
      puzzleComplete: "Complete",
      stepLabels: {
        mainLoop: "for each key in sequence",
        callInsert: "root ← avl_insert(root, key)",
        checkNull: "if node = null",
        returnNew: "return create_node(key)",
        checkLess: "if key < node.key",
        goLeft: "node.left ← avl_insert(node.left, key)",
        checkGreater: "else if key > node.key",
        goRight: "node.right ← avl_insert(node.right, key)",
        returnDup: "return node",
        updateHeight: "update_height(node)",
        calcBf: "bf ← balance_factor(node)",
        caseLL: "if bf > 1 and key < node.left.key",
        rotateRightLL: "return rotate_right(node)",
        caseRR: "if bf < −1 and key > node.right.key",
        rotateLeftRR: "return rotate_left(node)",
        caseLR: "if bf > 1 and key > node.left.key",
        rotateLeftLR: "node.left ← rotate_left(node.left)",
        rotateRightLR: "return rotate_right(node)",
        caseRL: "if bf < −1 and key < node.right.key",
        rotateRightRL: "node.right ← rotate_right(node.right)",
        rotateLeftRL: "return rotate_left(node)",
        returnNode: "return node",
        uhHl: "height_left ← height(node.left)",
        uhHr: "height_right ← height(node.right)",
        uhSet: "node.height ← 1 + max(height_left, height_right)",
        bfReturn: "return height(node.left) − height(node.right)",
        rotL_y: "new_root ← node.right",
        rotL_T2: "temp ← new_root.left",
        rotL_yLeft: "new_root.left ← node",
        rotL_zRight: "node.right ← temp",
        rotL_updZ: "update_height(node)",
        rotL_updY: "update_height(new_root)",
        rotL_return: "return new_root",
        rotR_y: "new_root ← node.left",
        rotR_T2: "temp ← new_root.right",
        rotR_yRight: "new_root.right ← node",
        rotR_zLeft: "node.left ← temp",
        rotR_updZ: "update_height(node)",
        rotR_updY: "update_height(new_root)",
        rotR_return: "return new_root",
      },
      pseudo: [
        { id: null, indent: 0, text: "procedure update_height(node)" },
        {
          id: "uhHl",
          indent: 1,
          text: "height_left ← height(node.left)      // height(null) = −1",
        },
        { id: "uhHr", indent: 1, text: "height_right ← height(node.right)" },
        {
          id: "uhSet",
          indent: 1,
          text: "node.height ← 1 + max(height_left, height_right)",
        },
        { id: null, indent: 0, text: "end_procedure" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "procedure balance_factor(node)" },
        {
          id: "bfReturn",
          indent: 1,
          text: "return height(node.left) − height(node.right)",
        },
        { id: null, indent: 0, text: "end_procedure" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "procedure rotate_left(node)" },
        { id: "rotL_y", indent: 1, text: "new_root ← node.right" },
        { id: "rotL_T2", indent: 1, text: "temp ← new_root.left" },
        { id: "rotL_yLeft", indent: 1, text: "new_root.left ← node" },
        { id: "rotL_zRight", indent: 1, text: "node.right ← temp" },
        { id: "rotL_updZ", indent: 1, text: "update_height(node)" },
        { id: "rotL_updY", indent: 1, text: "update_height(new_root)" },
        { id: "rotL_return", indent: 1, text: "return new_root" },
        { id: null, indent: 0, text: "end_procedure" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "procedure rotate_right(node)" },
        { id: "rotR_y", indent: 1, text: "new_root ← node.left" },
        { id: "rotR_T2", indent: 1, text: "temp ← new_root.right" },
        { id: "rotR_yRight", indent: 1, text: "new_root.right ← node" },
        { id: "rotR_zLeft", indent: 1, text: "node.left ← temp" },
        { id: "rotR_updZ", indent: 1, text: "update_height(node)" },
        { id: "rotR_updY", indent: 1, text: "update_height(new_root)" },
        { id: "rotR_return", indent: 1, text: "return new_root" },
        { id: null, indent: 0, text: "end_procedure" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "procedure avl_insert(node, key)" },
        { id: "checkNull", indent: 1, text: "if node = null then" },
        { id: "returnNew", indent: 2, text: "return create_node(key)" },
        { id: null, indent: 1, text: "end_if" },
        { id: "checkLess", indent: 1, text: "if key < node.key then" },
        {
          id: "goLeft",
          indent: 2,
          text: "node.left ← avl_insert(node.left, key)",
        },
        { id: "checkGreater", indent: 1, text: "else if key > node.key then" },
        {
          id: "goRight",
          indent: 2,
          text: "node.right ← avl_insert(node.right, key)",
        },
        { id: null, indent: 1, text: "else" },
        { id: "returnDup", indent: 2, text: "return node" },
        { id: null, indent: 1, text: "end_if" },
        { id: null, indent: 0, text: "" },
        { id: "updateHeight", indent: 1, text: "update_height(node)" },
        { id: "calcBf", indent: 1, text: "bf ← balance_factor(node)" },
        { id: null, indent: 0, text: "" },
        {
          id: "caseLL",
          indent: 1,
          text: "if bf > 1 and key < node.left.key then  // LL",
        },
        { id: "rotateRightLL", indent: 2, text: "return rotate_right(node)" },
        { id: null, indent: 1, text: "end_if" },
        {
          id: "caseRR",
          indent: 1,
          text: "if bf < −1 and key > node.right.key then  // RR",
        },
        { id: "rotateLeftRR", indent: 2, text: "return rotate_left(node)" },
        { id: null, indent: 1, text: "end_if" },
        {
          id: "caseLR",
          indent: 1,
          text: "if bf > 1 and key > node.left.key then  // LR",
        },
        {
          id: "rotateLeftLR",
          indent: 2,
          text: "node.left ← rotate_left(node.left)",
        },
        { id: "rotateRightLR", indent: 2, text: "return rotate_right(node)" },
        { id: null, indent: 1, text: "end_if" },
        {
          id: "caseRL",
          indent: 1,
          text: "if bf < −1 and key < node.right.key then  // RL",
        },
        {
          id: "rotateRightRL",
          indent: 2,
          text: "node.right ← rotate_right(node.right)",
        },
        { id: "rotateLeftRL", indent: 2, text: "return rotate_left(node)" },
        { id: null, indent: 1, text: "end_if" },
        { id: "returnNode", indent: 1, text: "return node" },
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
          text: "root ← avl_insert(root, key)",
        },
        { id: null, indent: 0, text: "end_for" },
      ],
    },
    vi: {
      title: "Studio Chèn cây tự cân bằng",
      subtitle: "Giả mã · Cây 3D · theo dõi thực thi",
      sequence: "Dãy khóa",
      apply: "Áp dụng",
      randomize: "Ngẫu nhiên",
      speed: "Tốc độ",
      run: "Chạy",
      step: "Từng bước",
      pause: "Tạm dừng",
      reset: "Đặt lại",
      vizTitle: "Cây tự cân bằng (3D)",
      vizHint:
        "Kéo để xem chiều sâu · cuộn để phóng to/thu nhỏ · nhãn chiều cao & hệ số cân bằng · CURRENT đi trên cây",
      legendWaiting: "Chờ chèn",
      legendDone: "Đã xử lý",
      legendActive: "Đang so sánh",
      legendSmaller: "Nhỏ hơn / bằng",
      legendInserted: "Trong cây",
      legendBf0: "Hệ số cân bằng 0",
      legendBfPos1: "Hệ số cân bằng +1",
      legendBfNeg1: "Hệ số cân bằng −1",
      legendBfHigh: "Hệ số cân bằng > +1",
      legendBfLow: "Hệ số cân bằng < −1",
      algoTitle: "Thuật toán (Giả mã)",
      algoHint:
        "Dòng đang chạy được tô sáng · ngăn xếp đệ quy nổi trên mã · mở rộng chiều cao / xoay",
      recursionTitle: "Ngăn xếp gọi",
      processingKeyTitle: "Đang xử lý",
      traceTitle: "Bảng theo dõi",
      traceHint:
        "Mỗi bước thêm một dòng · các cột là biến của thuật toán",
      traceEmpty: "Nhấn Chạy hoặc Từng bước để bắt đầu.",
      colStep: "#",
      colLine: "Dòng",
      colKey: "khóa",
      colNode: "nút",
      colBf: "hệ_số_cân_bằng",
      colCase: "trường_hợp",
      colNewRoot: "gốc_mới",
      colTemp: "tạm",
      colHeightLeft: "chiều_cao_trái",
      colHeightRight: "chiều_cao_phải",
      colRoot: "gốc",
      labelNext: "SẼ CHÈN TIẾP",
      labelCurrent: "HIỆN TẠI",
      labelNodeCreated: "NODE_CREATED",
      labelNull: "null",
      labelLeft: "trái",
      labelRight: "phải",
      labelHeight: "chiều cao",
      labelBalanceFactor: "hệ số cân bằng",
      labelNewRoot: "gốc_mới",
      labelTemp: "tạm",
      comparePrefix: "So sánh",
      trueWord: "đúng",
      falseWord: "sai",
      doneMsg: "Đã chèn đủ {n} khóa vào cây tự cân bằng.",
      zoomIn: "Phóng to",
      zoomOut: "Thu nhỏ",
      splitterLabel: "Kéo để đổi kích thước",
      langEn: "EN",
      langVi: "VI",

      rerun: "Chạy lại",
      rerunTitle: "Chạy lại thuật toán từ đầu (giữ các ô đã điền)",
      splitterRowLabel: "Kéo để thay đổi chiều cao bảng theo dõi",
      puzzleOpenPalette: "Điền chỗ trống",
      puzzlePanelTitle: "Mảnh bảng theo dõi",
      puzzlePanelHint: "Chọn cột, rồi kéo giá trị vào các ô trống trên dòng được tô sáng.",
      puzzleSectionStepId: "Dòng",
      puzzleSection_key: "khóa",
      puzzleSection_node: "nút",
      puzzleSection_bf: "hệ_số_cân_bằng",
      puzzleSection_case: "trường_hợp",
      puzzleSectionNewRoot: "gốc_mới",
      puzzleSection_temp: "tạm",
      puzzleSectionHeightLeft: "chiều_cao_trái",
      puzzleSectionHeightRight: "chiều_cao_phải",
      puzzleSection_root: "gốc",
      puzzleDropHere: "thả vào đây",
      puzzleDragHint: "Kéo vào ô trống tương ứng",
      puzzleDragBackHint: "Kéo về bảng Mảnh để hoàn tác",
      puzzleResetPieces: "Đặt lại mảnh",
      puzzleBanner: "Bài tập: điền mọi ô trống trên các dòng thay đổi, rồi Chạy hoặc Từng bước. Phần đầu bảng đã được điền sẵn.",
      puzzleBlocked: "Điền đúng dòng đang tô sáng để thuật toán tiếp tục.",
      puzzlePartial: "Tiếp tục — mọi ô trống trên mỗi dòng thay đổi phải đúng.",
      puzzleSolved: "Các dòng thay đổi đã đúng — bạn có thể tiếp tục.",
      puzzleWrongColumn: "Mảnh này thuộc cột khác.",
      puzzleCorrectRows: "Số dòng đúng",
      puzzleComplete: "Hoàn thành",
      stepLabels: {
        mainLoop: "với mỗi khóa trong dãy",
        callInsert: "gốc ← chèn_avl(gốc, khóa)",
        checkNull: "nếu nút = null",
        returnNew: "trả_về tạo_nút(khóa)",
        checkLess: "nếu khóa < nút.khóa",
        goLeft: "nút.trái ← chèn_avl(nút.trái, khóa)",
        checkGreater: "không_thì nếu khóa > nút.khóa",
        goRight: "nút.phải ← chèn_avl(nút.phải, khóa)",
        returnDup: "trả_về nút",
        updateHeight: "cập_nhật_cao(nút)",
        calcBf: "bf ← hệ_số_cân_bằng(nút)",
        caseLL: "nếu bf > 1 và khóa < nút.trái.khóa",
        rotateRightLL: "trả_về xoay_phải(nút)",
        caseRR: "nếu bf < −1 và khóa > nút.phải.khóa",
        rotateLeftRR: "trả_về xoay_trái(nút)",
        caseLR: "nếu bf > 1 và khóa > nút.trái.khóa",
        rotateLeftLR: "nút.trái ← xoay_trái(nút.trái)",
        rotateRightLR: "trả_về xoay_phải(nút)",
        caseRL: "nếu bf < −1 và khóa < nút.phải.khóa",
        rotateRightRL: "nút.phải ← xoay_phải(nút.phải)",
        rotateLeftRL: "trả_về xoay_trái(nút)",
        returnNode: "trả_về nút",
        uhHl: "chiều_cao_trái ← chiều_cao(nút.trái)",
        uhHr: "chiều_cao_phải ← chiều_cao(nút.phải)",
        uhSet: "nút.cao ← 1 + max(chiều_cao_trái, chiều_cao_phải)",
        bfReturn: "trả_về chiều_cao(nút.trái) − chiều_cao(nút.phải)",
        rotL_y: "gốc_mới ← nút.phải",
        rotL_T2: "tạm ← gốc_mới.trái",
        rotL_yLeft: "gốc_mới.trái ← nút",
        rotL_zRight: "nút.phải ← tạm",
        rotL_updZ: "cập_nhật_cao(nút)",
        rotL_updY: "cập_nhật_cao(gốc_mới)",
        rotL_return: "trả_về gốc_mới",
        rotR_y: "gốc_mới ← nút.trái",
        rotR_T2: "tạm ← gốc_mới.phải",
        rotR_yRight: "gốc_mới.phải ← nút",
        rotR_zLeft: "nút.trái ← tạm",
        rotR_updZ: "cập_nhật_cao(nút)",
        rotR_updY: "cập_nhật_cao(gốc_mới)",
        rotR_return: "trả_về gốc_mới",
      },
      pseudo: [
        { id: null, indent: 0, text: "thủ_tục cập_nhật_cao(nút)" },
        {
          id: "uhHl",
          indent: 1,
          text: "chiều_cao_trái ← chiều_cao(nút.trái)      // chiều_cao(null) = −1",
        },
        { id: "uhHr", indent: 1, text: "chiều_cao_phải ← chiều_cao(nút.phải)" },
        {
          id: "uhSet",
          indent: 1,
          text: "nút.cao ← 1 + max(chiều_cao_trái, chiều_cao_phải)",
        },
        { id: null, indent: 0, text: "kết_thúc_thủ_tục" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "thủ_tục hệ_số_cân_bằng(nút)" },
        {
          id: "bfReturn",
          indent: 1,
          text: "trả_về chiều_cao(nút.trái) − chiều_cao(nút.phải)",
        },
        { id: null, indent: 0, text: "kết_thúc_thủ_tục" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "thủ_tục xoay_trái(nút)" },
        { id: "rotL_y", indent: 1, text: "gốc_mới ← nút.phải" },
        { id: "rotL_T2", indent: 1, text: "tạm ← gốc_mới.trái" },
        { id: "rotL_yLeft", indent: 1, text: "gốc_mới.trái ← nút" },
        { id: "rotL_zRight", indent: 1, text: "nút.phải ← tạm" },
        { id: "rotL_updZ", indent: 1, text: "cập_nhật_cao(nút)" },
        { id: "rotL_updY", indent: 1, text: "cập_nhật_cao(gốc_mới)" },
        { id: "rotL_return", indent: 1, text: "trả_về gốc_mới" },
        { id: null, indent: 0, text: "kết_thúc_thủ_tục" },
        { id: null, indent: 0, text: "" },
        { id: null, indent: 0, text: "thủ_tục xoay_phải(nút)" },
        { id: "rotR_y", indent: 1, text: "gốc_mới ← nút.trái" },
        { id: "rotR_T2", indent: 1, text: "tạm ← gốc_mới.phải" },
        { id: "rotR_yRight", indent: 1, text: "gốc_mới.phải ← nút" },
        { id: "rotR_zLeft", indent: 1, text: "nút.trái ← tạm" },
        { id: "rotR_updZ", indent: 1, text: "cập_nhật_cao(nút)" },
        { id: "rotR_updY", indent: 1, text: "cập_nhật_cao(gốc_mới)" },
        { id: "rotR_return", indent: 1, text: "trả_về gốc_mới" },
        { id: null, indent: 0, text: "kết_thúc_thủ_tục" },
        { id: null, indent: 0, text: "" },
        {
          id: null,
          indent: 0,
          text: "thủ_tục chèn_avl(nút, khóa)",
        },
        { id: "checkNull", indent: 1, text: "nếu nút = null thì" },
        { id: "returnNew", indent: 2, text: "trả_về tạo_nút(khóa)" },
        { id: null, indent: 1, text: "kết_thúc_nếu" },
        { id: "checkLess", indent: 1, text: "nếu khóa < nút.khóa thì" },
        {
          id: "goLeft",
          indent: 2,
          text: "nút.trái ← chèn_avl(nút.trái, khóa)",
        },
        {
          id: "checkGreater",
          indent: 1,
          text: "không_thì nếu khóa > nút.khóa thì",
        },
        {
          id: "goRight",
          indent: 2,
          text: "nút.phải ← chèn_avl(nút.phải, khóa)",
        },
        { id: null, indent: 1, text: "không_thì" },
        { id: "returnDup", indent: 2, text: "trả_về nút" },
        { id: null, indent: 1, text: "kết_thúc_nếu" },
        { id: null, indent: 0, text: "" },
        { id: "updateHeight", indent: 1, text: "cập_nhật_cao(nút)" },
        { id: "calcBf", indent: 1, text: "bf ← hệ_số_cân_bằng(nút)" },
        { id: null, indent: 0, text: "" },
        {
          id: "caseLL",
          indent: 1,
          text: "nếu bf > 1 và khóa < nút.trái.khóa thì  // LL",
        },
        { id: "rotateRightLL", indent: 2, text: "trả_về xoay_phải(nút)" },
        { id: null, indent: 1, text: "kết_thúc_nếu" },
        {
          id: "caseRR",
          indent: 1,
          text: "nếu bf < −1 và khóa > nút.phải.khóa thì  // RR",
        },
        { id: "rotateLeftRR", indent: 2, text: "trả_về xoay_trái(nút)" },
        { id: null, indent: 1, text: "kết_thúc_nếu" },
        {
          id: "caseLR",
          indent: 1,
          text: "nếu bf > 1 và khóa > nút.trái.khóa thì  // LR",
        },
        {
          id: "rotateLeftLR",
          indent: 2,
          text: "nút.trái ← xoay_trái(nút.trái)",
        },
        { id: "rotateRightLR", indent: 2, text: "trả_về xoay_phải(nút)" },
        { id: null, indent: 1, text: "kết_thúc_nếu" },
        {
          id: "caseRL",
          indent: 1,
          text: "nếu bf < −1 và khóa < nút.phải.khóa thì  // RL",
        },
        {
          id: "rotateRightRL",
          indent: 2,
          text: "nút.phải ← xoay_phải(nút.phải)",
        },
        { id: "rotateLeftRL", indent: 2, text: "trả_về xoay_trái(nút)" },
        { id: null, indent: 1, text: "kết_thúc_nếu" },
        { id: "returnNode", indent: 1, text: "trả_về nút" },
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
          text: "gốc ← chèn_avl(gốc, khóa)",
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

  /** Localized label for a height value shown in the 3D view. */
  function heightLabel(value) {
    return `${t("labelHeight")}: ${value}`;
  }

  /** Localized label for a balance factor shown in the 3D view. */
  function balanceFactorLabel(bf) {
    const num = bf > 0 ? "+" + bf : String(bf);
    return `${t("labelBalanceFactor")}: ${num}`;
  }

  /** Localized procedure call text for the recursion stack. */
  function callFrame(nodeArg, keyArg) {
    const isVi = lang === "vi";
    const fn = isVi ? "chèn_avl" : "avl_insert";
    const nodeText = nodeArg == null ? t("labelNull") : String(nodeArg);
    return `${fn}(${nodeText}, ${keyArg})`;
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
    heightLabel,
    balanceFactorLabel,
    callFrame,
  };
})();


window.addEventListener("message", (event) => {
  const data = event.data;
  if (data && data.type === "tracelab:language-change" && window.I18n) {
    window.I18n.setLang(data.language);
  }
});
