# Fibonacci Search Studio

Interactive Fibonacci Search demo for INFO201 Lab 5.

## Features

- **Left:** p5.js WEBGL sorted array as square 3D boxes (equal side gaps; drag to peek; scroll or +/- to zoom)
- **Right:** Pseudocode with live line highlighting (Fibonacci Search)
- **Bottom:** Execution trace table that grows as steps run
- **EN / VI** language toggle (top right)
- **Controls:** array size, search key, randomize, speed, run / pause / step / reset

## Run locally

```bash
npx --yes serve .
```

Then open the printed local URL.

## Algorithm

Fibonacci Search (requires a **sorted** array):

1. Build Fibonacci numbers until `fibM ≥ n` (`fibM`, `fibMMm1`, `fibMMm2`)
2. Set `offset ← −1`
3. While `fibM > 1`:
   - Probe `i ← min(offset + fibMMm2, n − 1)`
   - If `A[i] < key`, shrink Fibonacci right and set `offset ← i`
   - Else if `A[i] > key`, shrink Fibonacci left
   - Else return `i`
4. Check the last candidate `A[offset + 1]` when `fibMMm1` is nonzero
5. Otherwise return `NOT_FOUND`
