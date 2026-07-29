# Exponential Search Studio

Interactive Exponential Search demo for INFO201 Lab 5.

## Features

- **Left:** p5.js WEBGL sorted array as square 3D boxes (equal side gaps; drag to peek; scroll or +/- to zoom)
- **Right:** Pseudocode with live line highlighting (Exponential Search)
- **Bottom:** Execution trace table that grows as steps run
- **EN / VI** language toggle (top right)
- **Controls:** array size, search key, randomize, speed, run / pause / step / reset

## Run locally

```bash
npx --yes serve .
```

Then open the printed local URL.

## Algorithm

Exponential Search (requires a **sorted** array):

1. If `A[0] = key`, return `0`
2. Set `bound ← 1`, then double `bound` while `bound < n` and `A[bound] < key`
3. Binary-search in `[⌊bound / 2⌋ .. min(bound, n − 1)]` using `low` / `mid` / `high`
4. If `A[mid] = key`, return `mid`; otherwise return `NOT_FOUND`
