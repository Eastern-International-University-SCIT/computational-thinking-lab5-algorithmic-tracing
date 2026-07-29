# Binary Search Studio

Interactive Binary Search demo for INFO201 Lab 5.

## Features

- **Left:** p5.js WEBGL sorted array as square 3D boxes (equal side gaps; drag to peek; scroll or +/- to zoom)
- **Right:** Pseudocode with live line highlighting (Binary Search)
- **Bottom:** Execution trace table that grows as steps run
- **EN / VI** language toggle (top right)
- **Controls:** array size, search key, randomize, speed, run / pause / step / reset

## Run locally

```bash
npx --yes serve .
```

Then open the printed local URL.

## Algorithm

Binary Search (requires a **sorted** array):

1. Set `low ← 0` and `high ← n − 1`
2. While `low ≤ high`:
   - Set `mid ← ⌊(low + high) / 2⌋`
   - If `A[mid] = key`, return `mid`
   - If `A[mid] < key`, set `low ← mid + 1` (search right half)
   - Otherwise set `high ← mid − 1` (search left half)
3. If the loop ends without a match, return `NOT_FOUND`
