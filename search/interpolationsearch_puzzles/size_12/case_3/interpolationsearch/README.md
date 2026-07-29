# Interpolation Search Studio

Interactive Interpolation Search demo for INFO201 Lab 5.

## Features

- **Left:** p5.js WEBGL sorted array as square 3D boxes (equal side gaps; drag to peek; scroll or +/- to zoom)
- **Right:** Pseudocode with live line highlighting (Interpolation Search)
- **Bottom:** Execution trace table that grows as steps run
- **EN / VI** language toggle (top right)
- **Controls:** array size, search key, randomize, speed, run / pause / step / reset

## Run locally

```bash
npx --yes serve .
```

Then open the printed local URL.

## Algorithm

Interpolation Search (requires a **sorted** array; fastest when values are roughly uniform):

1. Set `low ← 0` and `high ← n − 1`
2. While `low ≤ high` and `key` lies between `A[low]` and `A[high]`:
   - Estimate  
     `pos ← low + ⌊(key − A[low]) × (high − low) / (A[high] − A[low])⌋`
   - If `A[pos] = key`, return `pos`
   - If `A[pos] < key`, set `low ← pos + 1` (search right)
   - Otherwise set `high ← pos − 1` (search left)
3. If the loop ends without a match, return `NOT_FOUND`

Unlike Binary Search (which always probes the middle), Interpolation Search guesses the probe index from the key’s relative position in the current value range.
