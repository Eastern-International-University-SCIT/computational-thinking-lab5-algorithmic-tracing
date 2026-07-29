# BST Insertion Studio

Interactive Binary Search Tree insertion demo for INFO201 Lab 5.

## Features

- **Left:** p5.js WEBGL queue of spheres (top-right) + growing 3D BST with edge links
- **Right:** Pseudocode with live line highlighting (BST insert)
- **Bottom:** Execution trace of `bst_insert` variables (`key`, `current`, `parent`, `side`, `root`)
- **EN / VI** language toggle
- **Controls:** comma-separated sequence, apply / randomize, speed, run / pause / step / reset

## Run locally

```bash
npx --yes serve .
```

Then open the printed local URL.

## Default sequence

`280,134,70,5,238,152,402,358,319,417`

Separators `,`, `:`, `;`, `|`, or whitespace are accepted.

## Algorithm

Iterative BST insert:

1. Create a new node for `key`
2. If `root` is null, return the new node as root
3. Walk from the root with `current` / `parent` until `current` is null
4. Attach the new node as `parent.left` or `parent.right`
