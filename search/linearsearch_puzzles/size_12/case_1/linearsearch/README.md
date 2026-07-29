# Linear Search Studio

Interactive Linear Search demo for INFO201 Lab 5.

## Features

- **Left:** p5.js WEBGL unsorted array as square 3D boxes (equal side gaps; drag to peek; scroll or +/- to zoom)
- **Right:** Pseudocode with live line highlighting (Linear Search)
- **Bottom:** Execution trace table that grows as steps run
- **EN / VI** language toggle (top right)
- **Controls:** array size, search key, randomize, speed, run / pause / step / reset

## Run locally

```bash
npx --yes serve .
```

Then open the printed local URL.

## Algorithm

Linear Search (works on **unsorted** arrays):

1. Set `i ← 0`
2. While `i < n`:
   - If `A[i] = key`, return `i`
   - Otherwise set `i ← i + 1`
3. If the loop ends without a match, return `NOT_FOUND`
