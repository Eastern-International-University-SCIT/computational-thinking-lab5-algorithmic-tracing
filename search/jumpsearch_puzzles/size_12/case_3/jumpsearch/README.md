# Jump Search Studio

Interactive Jump Search demo for INFO201 Lab 5.

## Features

- **Left:** p5.js WEBGL sorted array as square 3D boxes (equal side gaps; drag to peek; scroll or +/- to zoom)
- **Right:** Pseudocode with live line highlighting (Jump Search)
- **Bottom:** Execution trace table that grows as steps run
- **EN / VI** language toggle (top right)
- **Controls:** array size, search key, randomize, speed, run / pause / step / reset

## Run locally

```bash
npx --yes serve .
```

Then open the printed local URL.

## Algorithm

Jump Search (requires a **sorted** array):

1. Set `step_length ← ⌊√n⌋` (e.g. n=9 → 3; n=16 → 4), then `step ← step_length` and `prev ← 0`
2. Set `step_or_n ← min(step, n)` and jump forward while `A[step_or_n − 1] < key`
3. After each jump, advance `prev` / `step` by `step_length` and refresh `step_or_n`
4. If `prev ≥ n`, return `NOT_FOUND`
5. Linear-scan from `prev` while `A[prev] < key`
6. If `A[prev] = key`, return `prev`; otherwise return `NOT_FOUND`
