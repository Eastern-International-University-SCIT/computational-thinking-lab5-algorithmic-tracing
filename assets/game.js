(function () {
  "use strict";

  const STORAGE_KEY = "tracelab-course-progress-v1";
  const STANDALONE_KEY = "tracelab-standalone-completions-v1";
  const LANGUAGE_KEY = "tracelab-language";
  const STUDENT_KEY = "tracelab-student";
  const GUIDE_SEEN_KEY = "tracelab-first-puzzle-guide-v1";
  const PUZZLE_LANGUAGE_KEYS = ["ls-lang", "bs-lang", "is-lang", "js-lang", "es-lang", "fs-lang", "ss-lang", "qs-lang", "ms-lang", "nms-lang", "bsti-puzzle-lang", "avli-lang"];

  const COPY = {
    en: {
      pageTitle: "TraceLab — Algorithm Puzzle Course",
      courseProgress: "Course progress", save: "Save", load: "Load", language: "Language",
      saveTitle: "Save student progress", loadTitle: "Load a progress file", resetAll: "Reset all progress", resetTitle: "Reset progress",
      saveDialogTitle: "Save student progress", saveDialogHelp: "Enter the student information that should be included in the JSON progress file.",
      studentId: "Student ID", fullName: "Student full name", cancel: "Cancel", downloadJson: "Download JSON",
      studentRequired: "Both student ID and full name are required.",
      heroEyebrow: "Computational Thinking Lab", heroTitle: "Think it through.<br><em>Trace it out.</em>",
      heroLede: "Complete the missing steps in real algorithm execution traces. Each solved set unlocks the next challenge on your path.",
      continueCourse: "Continue the course", algorithms: "Algorithms", puzzles: "Puzzles", modules: "Modules",
      dragHint: "DRAG VALUES INTO THE GAPS", traceVerified: "Trace verified", howKicker: "How it works",
      howTitle: "One path. Three ways of thinking.", observe: "Observe", observeText: "Run or step through the simulation.",
      reason: "Reason", reasonText: "Fill each gap in the execution trace.", unlock: "Unlock", unlockText: "Finish the set to reach the next algorithm.",
      roadmapKicker: "Your learning path", roadmapTitle: "Algorithm roadmap",
      roadmapText: "Progress is saved automatically on this browser. Complete every puzzle in a set to unlock the next algorithm.",
      footerText: "Built for learning, one trace at a time.", offline: "Works fully offline", close: "Close",
      resetHeading: "Reset course progress?", resetText: "This will mark all 135 puzzles as incomplete and lock the course after Linear Search again.",
      keepProgress: "Keep progress", resetEverything: "Reset everything", roadmapShort: "Roadmap", solved: "Solved",
      openNewTab: "Open in new tab", nextPuzzle: "Next puzzle →", backRoadmap: "Back to roadmap →",
      searchModule: "Search", sortModule: "Sort", treeModule: "Tree", moduleLabel: "MODULE {number}", moduleNote: "{algorithms} algorithms · {puzzles} puzzles",
      set: "SET", setComplete: "Set complete", puzzleProgress: "Puzzle progress", locked: "Locked", reviewSet: "Review set",
      continue: "Continue", startSet: "Start set", finish: "Finish", puzzlesComplete: "{done} of {total} puzzles complete",
      setProgress: "Set progress", puzzleCount: "{done} / {total} puzzles", targetHeight: "Target height", arraySize: "Array size",
      case: "Case {number}", height: "Height {number}", values: "{number} values", readySolve: "Ready to solve",
      sizeLevel: "Size {group} · Case {case}", heightLevel: "Height {group} · Case {case}",
      sessionOnly: "Progress is kept for this session, but this browser blocked local saving.", puzzleSaved: "Puzzle solved — progress saved.",
      setUnlocked: "{current} complete — {next} unlocked!", courseComplete: "Course complete — every algorithm mastered!",
      fileSaved: "Progress saved for {name}.", loaded: "Progress loaded — {count} puzzles complete.",
      loadedNamed: "Progress loaded for {name} — {count} puzzles complete.",
      invalidFile: "That is not a valid TraceLab progress file.",
      readError: "The progress file could not be read.", resetDone: "Course progress reset.",
      guide: "Guide", closeGuide: "Close guide", guideSteps: "Guide steps", guideKicker: "QUICK START · {current} OF {total}",
      guideControlsTitle: "Control the simulation", guideControlsText: "Use Run to play continuously, Pause to stop, or Step to advance one operation at a time. The highlighted pseudocode and trace row show exactly what the algorithm is doing.",
      guideViewTitle: "Explore the 3D view", guideViewText: "Drag inside the visualization to inspect its depth or angle. Use the mouse wheel, trackpad, pinch gesture, or the +/− controls to zoom. These controls only change your view; they do not change the algorithm.",
      guidePuzzleTitle: "Complete the execution trace", guidePuzzleText: "The simulation pauses when it reaches a row with missing values. Choose or drag the matching chips into the gaps. Correct cells turn green; revise any red cell, then continue the run.",
      guideBack: "Back", guideNext: "Next", guideStart: "Start solving", guideRun: "▶ Run", guidePause: "Ⅱ Pause", guideStep: "→| Step",
      guideDrag: "↔ Drag to inspect", guideZoom: "Scroll / pinch to zoom", guideTrace: "EXECUTION TRACE", guideViewLabel: "3D VIEW", guideChips: "ANSWER CHIPS",
      searchSortKicker: "SEARCH COMPLETE · SORT UNLOCKED", searchSortTitle: "Why sorting comes next",
      searchSortText: "Several fast search methods—binary, interpolation, jump, exponential, and Fibonacci search—depend on ordered data. Sorting has an upfront cost, but once data is organized, repeated searches and comparisons can become dramatically faster. The next module explores different ways to create that useful order.",
      sortTreeKicker: "SORT COMPLETE · TREE UNLOCKED", sortTreeTitle: "From ordered arrays to trees",
      sortTreeText: "A sorted array supports fast searching, but inserting or deleting a value may require shifting many elements to preserve order. Search trees store that order in their branching structure. When a tree stays balanced, searching, inserting, and deleting can all remain fast without sorting the entire collection again."
    },
    vi: {
      pageTitle: "TraceLab — Khóa học câu đố thuật toán",
      courseProgress: "Tiến độ khóa học", save: "Lưu", load: "Mở", language: "Ngôn ngữ",
      saveTitle: "Lưu tiến độ học sinh", loadTitle: "Mở tệp tiến độ", resetAll: "Đặt lại toàn bộ tiến độ", resetTitle: "Đặt lại tiến độ",
      saveDialogTitle: "Lưu tiến độ học sinh", saveDialogHelp: "Nhập thông tin học sinh sẽ được ghi trong tệp tiến độ JSON.",
      studentId: "Mã số sinh viên", fullName: "Họ và tên sinh viên", cancel: "Hủy", downloadJson: "Tải tệp JSON",
      studentRequired: "Cần nhập cả mã số và họ tên sinh viên.",
      heroEyebrow: "Phòng thí nghiệm Tư duy tính toán", heroTitle: "Suy luận từng bước.<br><em>Hoàn thiện dấu vết.</em>",
      heroLede: "Hoàn thành các bước còn thiếu trong dấu vết thực thi thuật toán. Mỗi bộ câu đố hoàn tất sẽ mở khóa thử thách tiếp theo.",
      continueCourse: "Tiếp tục khóa học", algorithms: "Thuật toán", puzzles: "Câu đố", modules: "Chủ đề",
      dragHint: "KÉO GIÁ TRỊ VÀO Ô TRỐNG", traceVerified: "Dấu vết chính xác", howKicker: "Cách thực hiện",
      howTitle: "Một lộ trình. Ba cách tư duy.", observe: "Quan sát", observeText: "Chạy hoặc thực hiện mô phỏng từng bước.",
      reason: "Suy luận", reasonText: "Điền vào từng chỗ trống trong dấu vết thực thi.", unlock: "Mở khóa", unlockText: "Hoàn thành bộ câu đố để đến thuật toán tiếp theo.",
      roadmapKicker: "Lộ trình học tập", roadmapTitle: "Lộ trình thuật toán",
      roadmapText: "Tiến độ được tự động lưu trên trình duyệt này. Hoàn thành mọi câu đố trong một bộ để mở khóa thuật toán tiếp theo.",
      footerText: "Học tập qua từng dấu vết thực thi.", offline: "Hoạt động hoàn toàn ngoại tuyến", close: "Đóng",
      resetHeading: "Đặt lại tiến độ khóa học?", resetText: "Thao tác này sẽ đánh dấu 135 câu đố là chưa hoàn thành và khóa lại khóa học sau Tìm kiếm tuyến tính.",
      keepProgress: "Giữ tiến độ", resetEverything: "Đặt lại tất cả", roadmapShort: "Lộ trình", solved: "Đã giải",
      openNewTab: "Mở trong thẻ mới", nextPuzzle: "Câu đố tiếp theo →", backRoadmap: "Về lộ trình →",
      searchModule: "Tìm kiếm", sortModule: "Sắp xếp", treeModule: "Cây", moduleLabel: "CHỦ ĐỀ {number}", moduleNote: "{algorithms} thuật toán · {puzzles} câu đố",
      set: "BỘ", setComplete: "Đã hoàn thành bộ", puzzleProgress: "Tiến độ câu đố", locked: "Đã khóa", reviewSet: "Xem lại bộ",
      continue: "Tiếp tục", startSet: "Bắt đầu", finish: "Hoàn thành", puzzlesComplete: "Đã hoàn thành {done} / {total} câu đố",
      setProgress: "Tiến độ bộ", puzzleCount: "{done} / {total} câu đố", targetHeight: "Chiều cao mục tiêu", arraySize: "Kích thước mảng",
      case: "Trường hợp {number}", height: "Chiều cao {number}", values: "{number} giá trị", readySolve: "Sẵn sàng giải",
      sizeLevel: "Kích thước {group} · Trường hợp {case}", heightLevel: "Chiều cao {group} · Trường hợp {case}",
      sessionOnly: "Tiến độ được giữ trong phiên này, nhưng trình duyệt đã chặn lưu trữ cục bộ.", puzzleSaved: "Đã giải câu đố — tiến độ đã được lưu.",
      setUnlocked: "Đã hoàn thành {current} — đã mở khóa {next}!", courseComplete: "Đã hoàn thành khóa học — bạn đã chinh phục mọi thuật toán!",
      fileSaved: "Đã lưu tiến độ của {name}.", loaded: "Đã mở tiến độ — hoàn thành {count} câu đố.",
      loadedNamed: "Đã tải tiến độ của {name} — hoàn thành {count} câu đố.",
      invalidFile: "Đây không phải tệp tiến độ TraceLab hợp lệ.",
      readError: "Không thể đọc tệp tiến độ.", resetDone: "Đã đặt lại tiến độ khóa học.",
      guide: "Hướng dẫn", closeGuide: "Đóng hướng dẫn", guideSteps: "Các bước hướng dẫn", guideKicker: "BẮT ĐẦU NHANH · {current} / {total}",
      guideControlsTitle: "Điều khiển mô phỏng", guideControlsText: "Dùng Chạy để mô phỏng liên tục, Tạm dừng để dừng lại, hoặc Từng bước để thực hiện từng thao tác. Mã giả và hàng dấu vết được tô sáng cho biết chính xác thuật toán đang làm gì.",
      guideViewTitle: "Khám phá khung nhìn 3D", guideViewText: "Kéo bên trong vùng trực quan để xem chiều sâu hoặc góc nhìn. Dùng con lăn chuột, bàn di chuột, thao tác chụm hoặc nút +/− để thu phóng. Các thao tác này chỉ thay đổi góc nhìn, không làm thay đổi thuật toán.",
      guidePuzzleTitle: "Hoàn thành dấu vết thực thi", guidePuzzleText: "Mô phỏng sẽ tạm dừng khi gặp một hàng có giá trị còn thiếu. Chọn hoặc kéo các thẻ đáp án phù hợp vào ô trống. Ô đúng chuyển sang màu xanh; hãy sửa ô màu đỏ rồi tiếp tục chạy.",
      guideBack: "Quay lại", guideNext: "Tiếp theo", guideStart: "Bắt đầu giải", guideRun: "▶ Chạy", guidePause: "Ⅱ Tạm dừng", guideStep: "→| Từng bước",
      guideDrag: "↔ Kéo để quan sát", guideZoom: "Cuộn / chụm để thu phóng", guideTrace: "DẤU VẾT THỰC THI", guideViewLabel: "KHUNG NHÌN 3D", guideChips: "THẺ ĐÁP ÁN",
      searchSortKicker: "HOÀN THÀNH TÌM KIẾM · ĐÃ MỞ KHÓA SẮP XẾP", searchSortTitle: "Vì sao tiếp theo là sắp xếp?",
      searchSortText: "Nhiều phương pháp tìm kiếm nhanh—nhị phân, nội suy, bước nhảy, lũy thừa và Fibonacci—phụ thuộc vào dữ liệu đã có thứ tự. Sắp xếp cần một chi phí ban đầu, nhưng khi dữ liệu đã được tổ chức, các lần tìm kiếm và so sánh lặp lại có thể nhanh hơn đáng kể. Chủ đề tiếp theo khám phá nhiều cách tạo ra thứ tự hữu ích đó.",
      sortTreeKicker: "HOÀN THÀNH SẮP XẾP · ĐÃ MỞ KHÓA CÂY", sortTreeTitle: "Từ mảng có thứ tự đến cấu trúc cây",
      sortTreeText: "Mảng đã sắp xếp hỗ trợ tìm kiếm nhanh, nhưng khi chèn hoặc xóa một giá trị, ta có thể phải dịch chuyển nhiều phần tử để giữ đúng thứ tự. Cây tìm kiếm lưu trữ thứ tự trong cấu trúc phân nhánh. Khi cây được cân bằng, việc tìm kiếm, chèn và xóa đều có thể nhanh mà không cần sắp xếp lại toàn bộ dữ liệu."
    }
  };

  const modules = {
    search: { number: "01", titleKey: "searchModule", algorithms: 6, puzzles: 72 },
    sort: { number: "02", titleKey: "sortModule", algorithms: 5, puzzles: 45 },
    tree: { number: "03", titleKey: "treeModule", algorithms: 2, puzzles: 18 }
  };

  const ALGORITHM_VI = {
    "linear-search": ["Tìm kiếm tuyến tính", "So sánh lần lượt từ trái sang phải cho đến khi tìm thấy khóa hoặc đi hết mảng."],
    "binary-search": ["Tìm kiếm nhị phân", "Chia đôi khoảng tìm kiếm đã sắp xếp và suy luận giá trị low, mid, high ở mỗi bước."],
    "interpolation-search": ["Tìm kiếm nội suy", "Ước lượng vị trí của khóa từ giá trị của nó rồi thu hẹp khoảng tìm kiếm."],
    "jump-search": ["Tìm kiếm bước nhảy", "Nhảy qua các khối đã sắp xếp, sau đó duyệt tuần tự trong khối phù hợp."],
    "exponential-search": ["Tìm kiếm lũy thừa", "Mở rộng biên tìm kiếm theo cấp số nhân rồi dùng tìm kiếm nhị phân để thu hẹp."],
    "fibonacci-search": ["Tìm kiếm Fibonacci", "Dùng các độ lệch Fibonacci để chia mảng đã sắp xếp mà không cần chia đôi khoảng."],
    "selection-sort": ["Sắp xếp chọn", "Theo dõi giá trị nhỏ nhất còn lại và đưa nó về đúng vị trí sau mỗi lượt."],
    "bubble-sort": ["Sắp xếp nổi bọt", "So sánh các phần tử kề nhau, đổi chỗ cặp nghịch thế và đẩy giá trị lớn dần về cuối."],
    "quick-sort": ["Sắp xếp nhanh", "Phân hoạch các giá trị quanh phần tử chốt và theo dõi đệ quy ở hai phía."],
    "merge-sort": ["Sắp xếp trộn", "Chia mảng bằng đệ quy rồi xây dựng lại mảng bằng các phép trộn có thứ tự."],
    "natural-merge-sort": ["Sắp xếp trộn tự nhiên", "Phát hiện các đoạn đã có thứ tự và trộn chúng cho đến khi toàn bộ mảng được sắp xếp."],
    "binary-search-tree": ["Cây tìm kiếm nhị phân", "Theo dõi các phép chèn dựa trên so sánh khi cây tìm kiếm nhị phân phát triển."],
    "avl-tree": ["Cây tự cân bằng", "Theo dõi phép chèn, hệ số cân bằng và phép xoay để duy trì chiều cao cân bằng."]
  };

  const algorithms = [
    {
      id: "linear-search", category: "search", name: "Linear Search", short: "LINEAR",
      description: "Follow each comparison from left to right until the target is found—or the array ends.",
      folder: "linearsearch_puzzles", app: "linearsearch", groups: [8, 12, 16], cases: 4, groupKind: "size"
    },
    {
      id: "binary-search", category: "search", name: "Binary Search", short: "BINARY",
      description: "Halve a sorted search interval and reason about low, mid, and high at every step.",
      folder: "binarysearch_puzzles", app: "binarysearch", groups: [8, 12, 16], cases: 4, groupKind: "size"
    },
    {
      id: "interpolation-search", category: "search", name: "Interpolation Search", short: "INTERPOLATION",
      description: "Estimate the target position from its value and refine the remaining interval.",
      folder: "interpolationsearch_puzzles", app: "interpolationsearch", groups: [8, 12, 16], cases: 4, groupKind: "size"
    },
    {
      id: "jump-search", category: "search", name: "Jump Search", short: "JUMP",
      description: "Leap across ordered blocks, then scan the promising block one element at a time.",
      folder: "jumpsearch_puzzles", app: "jumpsearch", groups: [8, 12, 16], cases: 4, groupKind: "size"
    },
    {
      id: "exponential-search", category: "search", name: "Exponential Search", short: "EXPONENTIAL",
      description: "Expand the search boundary exponentially before closing in with binary search.",
      folder: "exponentialsearch_puzzles", app: "exponentialsearch", groups: [8, 12, 16], cases: 4, groupKind: "size"
    },
    {
      id: "fibonacci-search", category: "search", name: "Fibonacci Search", short: "FIBONACCI",
      description: "Use Fibonacci offsets to partition a sorted array without dividing the interval in half.",
      folder: "fibonaccisearch_puzzles", app: "fibonaccisearch", groups: [8, 12, 16], cases: 4, groupKind: "size"
    },
    {
      id: "selection-sort", category: "sort", name: "Selection Sort", short: "SELECTION",
      description: "Track the smallest remaining value and place it into its final position each pass.",
      folder: "selectionsort_puzzles", app: "selectionsort", groups: [8, 14, 20], cases: 3, groupKind: "size"
    },
    {
      id: "bubble-sort", category: "sort", name: "Bubble Sort", short: "BUBBLE",
      description: "Compare neighbors, swap inverted pairs, and watch larger values rise to the end.",
      folder: "bubblesort_puzzles", app: "bubblesort", groups: [8, 14, 20], cases: 3, groupKind: "size"
    },
    {
      id: "quick-sort", category: "sort", name: "Quick Sort", short: "QUICK",
      description: "Partition values around a pivot and trace the recursive work on both sides.",
      folder: "quicksort_puzzles", app: "quicksort", groups: [8, 14, 20], cases: 3, groupKind: "size"
    },
    {
      id: "merge-sort", category: "sort", name: "Merge Sort", short: "MERGE",
      description: "Split the array recursively, then reconstruct it through ordered merges.",
      folder: "mergesort_puzzles", app: "mergesort", groups: [8, 14, 20], cases: 3, groupKind: "size"
    },
    {
      id: "natural-merge-sort", category: "sort", name: "Natural Merge Sort", short: "NATURAL MERGE",
      description: "Discover existing ordered runs and merge them until the whole array is sorted.",
      folder: "naturalmergesort_puzzles", app: "naturalmergesort", groups: [8, 14, 20], cases: 3, groupKind: "size"
    },
    {
      id: "binary-search-tree", category: "tree", name: "Binary Search Tree", short: "BINARY TREE",
      description: "Trace comparison-driven insertions as the binary search tree grows node by node.",
      folder: "binarysearchtree", app: "binarysearchtree_insertion", groups: [2, 4, 6], cases: 3, groupKind: "height"
    },
    {
      id: "avl-tree", category: "tree", name: "AVL Tree", short: "AVL TREE",
      description: "Track insertions, balance factors, and rotations that keep the tree height-balanced.",
      folder: "avltree", app: "avltree_insertion", groups: [2, 4, 6], cases: 3, groupKind: "height"
    }
  ];

  algorithms.forEach((algorithm) => {
    algorithm.levels = [];
    algorithm.groups.forEach((group) => {
      for (let caseNumber = 1; caseNumber <= algorithm.cases; caseNumber += 1) {
        const prefix = algorithm.groupKind === "height" ? "height" : "size";
        algorithm.levels.push({
          group,
          caseNumber,
          label: `Case ${caseNumber}`,
          path: `${algorithm.category}/${algorithm.folder}/${prefix}_${group}/case_${caseNumber}/${algorithm.app}/index.html`
        });
      }
    });
  });

  const allPaths = new Set(algorithms.flatMap((algorithm) => algorithm.levels.map((level) => level.path)));
  let language = readLanguage();
  let completed = readProgress();
  let activeAlgorithmIndex = 0;
  let currentLevelPath = null;
  let guideStepIndex = 0;
  let toastTimer = null;

  const courseModules = document.getElementById("courseModules");
  const algorithmDialog = document.getElementById("algorithmDialog");
  const resetDialog = document.getElementById("resetDialog");
  const saveDialog = document.getElementById("saveDialog");
  const guideDialog = document.getElementById("guideDialog");
  const puzzlePlayer = document.getElementById("puzzlePlayer");
  const puzzleFrame = document.getElementById("puzzleFrame");

  function readLanguage() {
    try { return localStorage.getItem(LANGUAGE_KEY) === "vi" ? "vi" : "en"; }
    catch (_) { return "en"; }
  }

  function t(key, variables) {
    let value = (COPY[language] && COPY[language][key]) || COPY.en[key] || key;
    Object.entries(variables || {}).forEach(([name, replacement]) => {
      value = value.replace(new RegExp(`\\{${name}\\}`, "g"), String(replacement));
    });
    return value;
  }

  function algorithmName(algorithm) {
    return language === "vi" && ALGORITHM_VI[algorithm.id] ? ALGORITHM_VI[algorithm.id][0] : algorithm.name;
  }

  function algorithmDescription(algorithm) {
    return language === "vi" && ALGORITHM_VI[algorithm.id] ? ALGORITHM_VI[algorithm.id][1] : algorithm.description;
  }

  function applyTranslations() {
    document.documentElement.lang = language;
    document.title = t("pageTitle");
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      element.innerHTML = t(element.dataset.i18nHtml);
    });
    document.querySelectorAll("[data-i18n-title]").forEach((element) => {
      element.title = t(element.dataset.i18nTitle);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
    });
    document.querySelector(".trace-preview").dataset.hint = t("dragHint");
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
  }

  function setLanguage(nextLanguage, notifyPuzzle = true) {
    const next = nextLanguage === "vi" ? "vi" : "en";
    const changed = next !== language;
    language = next;
    try {
      localStorage.setItem(LANGUAGE_KEY, language);
      PUZZLE_LANGUAGE_KEYS.forEach((key) => localStorage.setItem(key, language));
    } catch (_) { /* Query parameters and messages still synchronize the language. */ }
    applyTranslations();
    render();
    refreshPlayerLanguage();
    if (guideDialog.open) renderGuide();
    if (changed && notifyPuzzle && puzzleFrame.contentWindow && !puzzlePlayer.hidden) {
      puzzleFrame.contentWindow.postMessage({ type: "tracelab:language-change", language }, "*");
    }
  }

  function withLanguage(path) {
    return `${path}${path.includes("?") ? "&" : "?"}lang=${language}`;
  }

  function refreshPlayerLanguage() {
    if (!currentLevelPath) return;
    const match = findLevel(currentLevelPath);
    if (!match) return;
    const algorithm = algorithms[match.algorithmIndex];
    document.getElementById("playerAlgorithm").textContent = algorithmName(algorithm);
    document.getElementById("playerLevel").textContent = t(algorithm.groupKind === "height" ? "heightLevel" : "sizeLevel", { group: match.level.group, case: match.level.caseNumber });
    document.getElementById("openPuzzleNewTab").href = withLanguage(currentLevelPath);
    const nextButton = document.getElementById("nextPuzzleButton");
    if (!nextButton.hidden) nextButton.textContent = nextButton.dataset.nextPath ? t("nextPuzzle") : t("backRoadmap");
  }

  function hasSeenGuide() {
    try { return localStorage.getItem(GUIDE_SEEN_KEY) === "1"; }
    catch (_) { return false; }
  }

  function rememberGuide() {
    try { localStorage.setItem(GUIDE_SEEN_KEY, "1"); }
    catch (_) { /* The guide may repeat when storage is unavailable. */ }
  }

  function guideSteps() {
    return [
      { title: t("guideControlsTitle"), text: t("guideControlsText") },
      { title: t("guideViewTitle"), text: t("guideViewText") },
      { title: t("guidePuzzleTitle"), text: t("guidePuzzleText") }
    ];
  }

  function guideVisualMarkup(index) {
    if (index === 0) {
      return `<div class="guide-demo demo-window">
        <div class="demo-titlebar"><span>${t("guideTrace")}</span><i></i></div>
        <div class="guide-control-row"><span>${t("guideRun")}</span><span>${t("guidePause")}</span><span>${t("guideStep")}</span></div>
        <div class="demo-trace-lines"><i></i><i></i><i></i></div>
      </div>`;
    }
    if (index === 1) {
      return `<div class="guide-demo demo-window">
        <div class="demo-titlebar"><span>${t("guideViewLabel")}</span><i></i></div>
        <div class="orbit-stage"><div class="orbit-plane"></div><i class="orbit-line"></i><i class="orbit-line right"></i><span class="orbit-node n1">30</span><span class="orbit-node n2">12</span><span class="orbit-node n3">48</span><div class="orbit-hints"><span>${t("guideDrag")}</span><span>${t("guideZoom")}</span></div></div>
      </div>`;
    }
    return `<div class="guide-demo demo-window">
      <div class="demo-titlebar"><span>${t("guideTrace")}</span><i></i></div>
      <div class="trace-demo">
        <div class="trace-demo-row"><span>01</span><span>0</span><span>3</span><span>7</span></div>
        <div class="trace-demo-row"><span>02</span><span>0</span><span class="demo-blank">?</span><span>7</span></div>
        <div class="trace-demo-row"><span>03</span><span class="demo-blank">?</span><span>5</span><span>7</span></div>
        <div class="demo-chips" aria-label="${t("guideChips")}"><b>mid: 3</b><b>low: 4</b><b>✓ result: 5</b></div>
      </div>
    </div>`;
  }

  function renderGuide() {
    const steps = guideSteps();
    const step = steps[guideStepIndex];
    document.getElementById("guideKicker").textContent = t("guideKicker", { current: guideStepIndex + 1, total: steps.length });
    document.getElementById("guideTitle").textContent = step.title;
    document.getElementById("guideText").textContent = step.text;
    document.getElementById("guideVisual").innerHTML = guideVisualMarkup(guideStepIndex);
    document.getElementById("closeGuideButton").setAttribute("aria-label", t("closeGuide"));
    const dots = document.getElementById("guideDots");
    dots.setAttribute("aria-label", t("guideSteps"));
    dots.innerHTML = steps.map((_, index) => `<button type="button" data-guide-step="${index}" aria-label="${index + 1}" ${index === guideStepIndex ? 'aria-current="step"' : ""}></button>`).join("");
    dots.querySelectorAll("[data-guide-step]").forEach((button) => {
      button.addEventListener("click", () => {
        guideStepIndex = Number(button.dataset.guideStep);
        renderGuide();
      });
    });
    const previous = document.getElementById("guidePreviousButton");
    previous.textContent = t("guideBack");
    previous.hidden = guideStepIndex === 0;
    document.getElementById("guideNextButton").textContent = guideStepIndex === steps.length - 1 ? t("guideStart") : t("guideNext");
  }

  function showGuide() {
    guideStepIndex = 0;
    rememberGuide();
    renderGuide();
    if (!guideDialog.open) guideDialog.showModal();
  }

  function readProgress() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      const standalone = JSON.parse(localStorage.getItem(STANDALONE_KEY) || "[]");
      const savedPaths = parsed && Array.isArray(parsed.completed) ? parsed.completed : [];
      const carriedPaths = Array.isArray(standalone) ? standalone : [];
      return new Set(savedPaths.concat(carriedPaths).map(normalizePath).filter((path) => allPaths.has(path)));
    } catch (_) {
      return new Set();
    }
  }

  function persistProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        version: 1,
        savedAt: new Date().toISOString(),
        completed: Array.from(completed).sort()
      }));
      localStorage.setItem(STANDALONE_KEY, JSON.stringify(Array.from(completed).sort()));
    } catch (_) {
      showToast(t("sessionOnly"));
    }
  }

  function normalizePath(rawPath) {
    let path = String(rawPath || "").replace(/\\/g, "/").split("?")[0].split("#")[0];
    try { path = decodeURIComponent(path); } catch (_) { /* keep original */ }
    const match = path.match(/(?:^|\/)(search|sort|tree)\/(.+)$/i);
    return match ? `${match[1].toLowerCase()}/${match[2]}` : path.replace(/^\.\//, "");
  }

  function algorithmCompletedCount(algorithm) {
    return algorithm.levels.reduce((count, level) => count + (completed.has(level.path) ? 1 : 0), 0);
  }

  function algorithmIsComplete(index) {
    const algorithm = algorithms[index];
    return algorithmCompletedCount(algorithm) === algorithm.levels.length;
  }

  function algorithmIsUnlocked(index) {
    return index === 0 || algorithmIsComplete(index - 1);
  }

  function firstActiveIndex() {
    for (let index = 0; index < algorithms.length; index += 1) {
      if (algorithmIsUnlocked(index) && !algorithmIsComplete(index)) return index;
    }
    return algorithms.length - 1;
  }

  function render() {
    applyTranslations();
    const total = allPaths.size;
    const done = completed.size;
    const percent = total ? Math.round(done / total * 100) : 0;
    document.getElementById("headerProgressText").textContent = `${percent}%`;
    document.getElementById("headerProgressBar").style.width = `${percent}%`;
    const progressTrack = document.getElementById("headerProgressTrack");
    progressTrack.setAttribute("aria-valuenow", String(percent));

    const currentIndex = firstActiveIndex();
    courseModules.innerHTML = ["search", "sort", "tree"].map((category) => {
      const module = modules[category];
      const categoryAlgorithms = algorithms.map((algorithm, index) => ({ algorithm, index })).filter((entry) => entry.algorithm.category === category);
      const moduleHtml = `
        <section class="course-module" aria-labelledby="module-${category}">
          <div class="module-heading">
            <span class="module-number">${t("moduleLabel", { number: module.number })}</span>
            <h3 class="module-title" id="module-${category}">${t(module.titleKey)}</h3>
            <span class="module-meta">${t("moduleNote", { algorithms: module.algorithms, puzzles: module.puzzles })}</span>
          </div>
          <div class="algorithm-list">
            ${categoryAlgorithms.map(({ algorithm, index }) => renderAlgorithmCard(algorithm, index, currentIndex)).join("")}
          </div>
        </section>`;
      const bridge = category === "search" && algorithmIsUnlocked(6)
        ? renderLearningBridge("search-sort")
        : (category === "sort" && algorithmIsUnlocked(11) ? renderLearningBridge("sort-tree") : "");
      return moduleHtml + bridge;
    }).join("");

    courseModules.querySelectorAll("[data-algorithm-index]").forEach((button) => {
      button.addEventListener("click", () => openAlgorithm(Number(button.dataset.algorithmIndex)));
    });

    if (algorithmDialog.open) renderAlgorithmDialog(activeAlgorithmIndex);
  }

  function renderLearningBridge(kind) {
    const searchToSort = kind === "search-sort";
    return `<aside class="learning-bridge" aria-label="${t(searchToSort ? "searchSortTitle" : "sortTreeTitle")}">
      <div class="bridge-icon" aria-hidden="true">${searchToSort ? "⇅" : "⑂"}</div>
      <div><p class="eyebrow">${t(searchToSort ? "searchSortKicker" : "sortTreeKicker")}</p><h3>${t(searchToSort ? "searchSortTitle" : "sortTreeTitle")}</h3></div>
      <p>${t(searchToSort ? "searchSortText" : "sortTreeText")}</p>
    </aside>`;
  }

  function renderAlgorithmCard(algorithm, index, currentIndex) {
    const unlocked = algorithmIsUnlocked(index);
    const done = algorithmCompletedCount(algorithm);
    const total = algorithm.levels.length;
    const percent = Math.round(done / total * 100);
    const complete = done === total;
    const statusClass = complete ? "is-complete" : (!unlocked ? "is-locked" : (index === currentIndex ? "is-current" : ""));
    const indexLabel = String(index + 1).padStart(2, "0");
    let action;

    if (!unlocked) {
      action = `<div class="lock-copy"><span>${t("finish")}<br>${algorithmName(algorithms[index - 1])}</span><span class="lock-icon" aria-hidden="true">🔒</span></div>`;
    } else {
      const actionLabel = complete ? t("reviewSet") : (done ? t("continue") : t("startSet"));
      action = `<button class="course-button" type="button" data-algorithm-index="${index}">${actionLabel} →</button>`;
    }

    return `
      <article class="algorithm-card ${statusClass}" aria-label="${algorithmName(algorithm)}${unlocked ? "" : `, ${t("locked")}`}">
        <div class="card-index">${complete ? "✓" : indexLabel}</div>
        <div class="algorithm-copy">
          <span class="card-label">${algorithm.short} · ${t("set")} ${indexLabel}</span>
          <h3>${algorithmName(algorithm)}</h3>
          <p>${algorithmDescription(algorithm)}</p>
        </div>
        <div class="card-progress" aria-label="${t("puzzlesComplete", { done, total })}">
          <div><span>${complete ? t("setComplete") : (unlocked ? t("puzzleProgress") : t("locked"))}</span><strong>${percent}%</strong></div>
          <div class="progress-track"><span style="width:${percent}%"></span></div>
        </div>
        <div class="card-action">${action}</div>
      </article>`;
  }

  function openAlgorithm(index) {
    if (!algorithmIsUnlocked(index)) return;
    activeAlgorithmIndex = index;
    renderAlgorithmDialog(index);
    if (!algorithmDialog.open) algorithmDialog.showModal();
  }

  function renderAlgorithmDialog(index) {
    const algorithm = algorithms[index];
    const done = algorithmCompletedCount(algorithm);
    const total = algorithm.levels.length;
    document.getElementById("dialogModuleLabel").textContent = `${t("moduleLabel", { number: modules[algorithm.category].number })} · ${t("set")} ${String(index + 1).padStart(2, "0")}`;
    document.getElementById("dialogTitle").textContent = algorithmName(algorithm);
    document.getElementById("dialogDescription").textContent = algorithmDescription(algorithm);
    document.getElementById("dialogProgressLabel").textContent = done === total ? t("setComplete") : t("setProgress");
    const percent = Math.round(done / total * 100);
    document.getElementById("dialogProgressText").textContent = `${percent}%`;
    document.getElementById("dialogProgressBar").style.width = `${percent}%`;
    document.getElementById("levelGroups").innerHTML = algorithm.groups.map((group) => {
      const levels = algorithm.levels.filter((level) => level.group === group);
      const noun = algorithm.groupKind === "height" ? t("targetHeight") : t("arraySize");
      return `
        <section class="level-group">
          <h3>${noun}: ${group}</h3>
          <div class="level-grid">
            ${levels.map((level) => {
              const isComplete = completed.has(level.path);
              return `<button class="level-button ${isComplete ? "is-complete" : ""}" type="button" data-level-path="${level.path}">
                <span>${algorithm.groupKind === "height" ? t("height", { number: group }) : t("values", { number: group })}</span>
                <strong>${t("case", { number: level.caseNumber })}</strong>
                <small>${isComplete ? `✓ ${t("solved")}` : t("readySolve")}</small>
              </button>`;
            }).join("")}
          </div>
        </section>`;
    }).join("");

    document.querySelectorAll("[data-level-path]").forEach((button) => {
      button.addEventListener("click", () => openPuzzle(button.dataset.levelPath));
    });
  }

  function findLevel(path) {
    for (let algorithmIndex = 0; algorithmIndex < algorithms.length; algorithmIndex += 1) {
      const levelIndex = algorithms[algorithmIndex].levels.findIndex((level) => level.path === path);
      if (levelIndex !== -1) return { algorithmIndex, levelIndex, level: algorithms[algorithmIndex].levels[levelIndex] };
    }
    return null;
  }

  function openPuzzle(path) {
    const normalized = normalizePath(path);
    const match = findLevel(normalized);
    if (!match || !algorithmIsUnlocked(match.algorithmIndex)) return;
    if (algorithmDialog.open) algorithmDialog.close();
    currentLevelPath = normalized;
    const algorithm = algorithms[match.algorithmIndex];
    document.getElementById("playerAlgorithm").textContent = algorithmName(algorithm);
    document.getElementById("playerLevel").textContent = t(algorithm.groupKind === "height" ? "heightLevel" : "sizeLevel", { group: match.level.group, case: match.level.caseNumber });
    document.getElementById("playerSolved").hidden = !completed.has(normalized);
    document.getElementById("nextPuzzleButton").hidden = true;
    document.getElementById("openPuzzleNewTab").href = withLanguage(normalized);
    puzzleFrame.src = withLanguage(normalized);
    puzzlePlayer.hidden = false;
    document.body.classList.add("player-open");
    if (!hasSeenGuide()) window.setTimeout(() => {
      if (!puzzlePlayer.hidden) showGuide();
    }, 320);
  }

  function closePuzzle() {
    if (guideDialog.open) guideDialog.close();
    puzzlePlayer.hidden = true;
    puzzleFrame.src = "about:blank";
    document.body.classList.remove("player-open");
    currentLevelPath = null;
    render();
  }

  function nextUnsolvedInAlgorithm(algorithmIndex, afterPath) {
    const levels = algorithms[algorithmIndex].levels;
    const start = Math.max(0, levels.findIndex((level) => level.path === afterPath));
    for (let offset = 1; offset <= levels.length; offset += 1) {
      const level = levels[(start + offset) % levels.length];
      if (!completed.has(level.path)) return level;
    }
    return null;
  }

  function recordCompletion(path) {
    const normalized = normalizePath(path);
    const match = findLevel(normalized);
    if (!match || completed.has(normalized)) return;
    const wasAlgorithmComplete = algorithmIsComplete(match.algorithmIndex);
    completed.add(normalized);
    persistProgress();
    render();

    document.getElementById("playerSolved").hidden = false;
    const nextButton = document.getElementById("nextPuzzleButton");
    const nextLevel = nextUnsolvedInAlgorithm(match.algorithmIndex, normalized);
    nextButton.hidden = false;
    if (nextLevel) {
      nextButton.textContent = t("nextPuzzle");
      nextButton.dataset.nextPath = nextLevel.path;
    } else {
      nextButton.textContent = t("backRoadmap");
      nextButton.dataset.nextPath = "";
    }

    if (!wasAlgorithmComplete && algorithmIsComplete(match.algorithmIndex)) {
      const nextAlgorithm = algorithms[match.algorithmIndex + 1];
      showToast(nextAlgorithm
        ? t("setUnlocked", { current: algorithmName(algorithms[match.algorithmIndex]), next: algorithmName(nextAlgorithm) })
        : t("courseComplete"));
    } else {
      showToast(t("puzzleSaved"));
    }
  }

  function showToast(message) {
    const toast = document.getElementById("toast");
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("is-visible");
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3600);
  }

  function getStudent() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STUDENT_KEY) || "null");
      if (parsed && typeof parsed.id === "string" && typeof parsed.fullName === "string") {
        return { id: parsed.id, fullName: parsed.fullName };
      }
    } catch (_) { /* fall through */ }
    return { id: "", fullName: "" };
  }

  function setStudent(student) {
    try {
      localStorage.setItem(STUDENT_KEY, JSON.stringify({
        id: student.id,
        fullName: student.fullName
      }));
    } catch (_) { /* Export still works without remembering the student locally. */ }
  }

  function normalizeStudent(raw) {
    if (!raw || typeof raw !== "object") return null;
    const id = typeof raw.id === "string" ? raw.id.trim() : "";
    const fullName = typeof raw.fullName === "string" ? raw.fullName.trim() : "";
    if (!id && !fullName) return null;
    return { id, fullName };
  }

  function safeFilenamePart(value) {
    const normalized = String(value).trim().replace(/[^a-zA-Z0-9_-]+/g, "-").replace(/^-+|-+$/g, "");
    return normalized.slice(0, 48) || "student";
  }

  function openSaveDialog() {
    const student = getStudent();
    const idInput = document.getElementById("saveStudentId");
    const nameInput = document.getElementById("saveStudentName");
    document.getElementById("saveDialogError").textContent = "";
    idInput.value = student.id;
    nameInput.value = student.fullName;
    if (!saveDialog.open) saveDialog.showModal();
    (student.id ? nameInput : idInput).focus();
  }

  function saveProgressFile(student) {
    setStudent(student);
    const payload = JSON.stringify({
      type: "TraceLabProgress",
      version: 1,
      savedAt: new Date().toISOString(),
      language,
      student: { id: student.id, fullName: student.fullName },
      completed: Array.from(completed).sort()
    }, null, 2);
    const url = URL.createObjectURL(new Blob([payload], { type: "application/json" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `tracelab-progress_${safeFilenamePart(student.id)}_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast(t("fileSaved", { name: student.fullName }));
  }

  function loadProgressFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        if (!parsed || parsed.type !== "TraceLabProgress" || !Array.isArray(parsed.completed)) throw new Error("invalid");
        completed = new Set(parsed.completed.map(normalizePath).filter((path) => allPaths.has(path)));
        const student = normalizeStudent(parsed.student);
        if (student && student.id && student.fullName) setStudent(student);
        if (parsed.language === "en" || parsed.language === "vi") setLanguage(parsed.language, false);
        persistProgress();
        render();
        showToast(student && student.fullName
          ? t("loadedNamed", { name: student.fullName, count: completed.size })
          : t("loaded", { count: completed.size }));
      } catch (_) {
        showToast(t("invalidFile"));
      }
    };
    reader.onerror = () => showToast(t("readError"));
    reader.readAsText(file);
  }

  window.addEventListener("message", (event) => {
    const data = event.data;
    if (!data) return;
    if (data.type === "tracelab:puzzle-complete") recordCompletion(data.path);
    if (data.type === "tracelab:language-change") setLanguage(data.language);
  });
  window.addEventListener("storage", (event) => {
    if (event.key === LANGUAGE_KEY) setLanguage(event.newValue, false);
    if (event.key === STORAGE_KEY || event.key === STANDALONE_KEY) {
      completed = readProgress();
      render();
    }
  });

  document.getElementById("closeAlgorithmDialog").addEventListener("click", () => algorithmDialog.close());
  algorithmDialog.addEventListener("click", (event) => {
    if (event.target === algorithmDialog) algorithmDialog.close();
  });
  document.getElementById("closePuzzleButton").addEventListener("click", closePuzzle);
  document.getElementById("openGuideButton").addEventListener("click", showGuide);
  document.getElementById("closeGuideButton").addEventListener("click", () => guideDialog.close());
  document.getElementById("guidePreviousButton").addEventListener("click", () => {
    guideStepIndex = Math.max(0, guideStepIndex - 1);
    renderGuide();
  });
  document.getElementById("guideNextButton").addEventListener("click", () => {
    const lastIndex = guideSteps().length - 1;
    if (guideStepIndex >= lastIndex) guideDialog.close();
    else {
      guideStepIndex += 1;
      renderGuide();
    }
  });
  guideDialog.addEventListener("click", (event) => {
    if (event.target === guideDialog) guideDialog.close();
  });
  document.getElementById("nextPuzzleButton").addEventListener("click", (event) => {
    const nextPath = event.currentTarget.dataset.nextPath;
    if (nextPath) openPuzzle(nextPath);
    else closePuzzle();
  });
  document.getElementById("saveProgressButton").addEventListener("click", openSaveDialog);
  document.getElementById("cancelSaveButton").addEventListener("click", () => saveDialog.close());
  document.getElementById("saveProgressForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const student = {
      id: document.getElementById("saveStudentId").value.trim(),
      fullName: document.getElementById("saveStudentName").value.trim()
    };
    if (!student.id || !student.fullName) {
      document.getElementById("saveDialogError").textContent = t("studentRequired");
      (!student.id ? document.getElementById("saveStudentId") : document.getElementById("saveStudentName")).focus();
      return;
    }
    document.getElementById("saveDialogError").textContent = "";
    saveDialog.close();
    saveProgressFile(student);
  });
  saveDialog.addEventListener("click", (event) => {
    if (event.target === saveDialog) saveDialog.close();
  });
  document.getElementById("loadProgressButton").addEventListener("click", () => document.getElementById("progressFileInput").click());
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });
  document.getElementById("progressFileInput").addEventListener("change", (event) => {
    loadProgressFile(event.target.files[0]);
    event.target.value = "";
  });
  document.getElementById("resetProgressButton").addEventListener("click", () => resetDialog.showModal());
  resetDialog.addEventListener("close", () => {
    if (resetDialog.returnValue !== "reset") return;
    completed.clear();
    try { localStorage.removeItem(GUIDE_SEEN_KEY); } catch (_) { /* no stored guide state */ }
    persistProgress();
    render();
    showToast(t("resetDone"));
  });
  window.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || puzzlePlayer.hidden || guideDialog.open || saveDialog.open) return;
    closePuzzle();
  });

  setLanguage(language, false);
})();
