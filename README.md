# TraceLab Algorithm Puzzle Course

Open `index.html` directly in a modern browser. No web server, installation, or command-line step is required.

The course contains 135 execution-trace puzzles in this required order:

1. Search: Linear, Binary, Interpolation, Jump, Exponential, Fibonacci
2. Sort: Selection, Bubble, Quick, Merge, Natural Merge
3. Tree: Binary Search Tree, AVL Tree

Progress is saved automatically in the browser. Every algorithm set after Linear Search remains locked until all puzzles in the preceding set are solved. Use **Save** and **Load** on the dashboard to move progress between browsers or computers.

Use the **EN / VI** control on the dashboard to switch the entire course between English and Vietnamese. The selected language also opens inside every puzzle, and a language change made within a puzzle is synchronized back to the dashboard.

The first puzzle opens a three-step quick-start guide covering simulation controls, navigation of the 3D view, and filling gaps in the execution trace. Students can reopen it at any time with the **Guide / Hướng dẫn** button in the puzzle toolbar.

After a puzzle is completed, **Rerun / Chạy lại** and the speed control remain available. Replaying preserves the solved trace and course progress.

Course and algorithm-set progress are shown as percentages. Completing Search reveals a short explanation of why sorting enables faster repeated searches; completing Sort reveals how balanced search trees support fast search, insertion, and deletion without re-sorting the full collection.

The reusable integrity checker is `tools/audit-puzzles.js`. It validates the 135 puzzle instances, 18,390 trace rows, answer pieces, available CSV traces, embedded game data, step references, and final algorithm outcomes.
