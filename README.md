# DP Visualizer

An interactive, step-by-step visualization of the **Largest Square (Maximal Square) Dynamic Programming algorithm**. Watch how the algorithm computes the size of the largest square of available (non-obstacle) cells for each position in the grid.

Live demo: https://dp-visualizer.netlify.app/

## Features

- **Step-by-step execution**: Navigate forward and backward through the algorithm computation
- **Active cell highlighting**: Orange glow shows which cell was filled at the current step
- **Hover-to-reveal squares**: Hover over any cell to see the square it represents (outlined in green)
- **Deterministic state**: Use Back, Forward, Reset, and New Grid buttons with reliable grid restoration
- **Responsive design**: Grid scales adaptively; mobile layout reorders to prioritize the visualization
- **Educational content**: Inline code sample and explanation matching the actual algorithm
- **Obstacle support**: Cells marked '0' are obstacles and are skipped in the computation

## How It Works

1. **Click "Start Visualizing"** to begin
2. **Use the control buttons** to navigate:
   - **New Grid**: Generate a fresh random grid
   - **Forward**: Step to the next cell computation
   - **Back**: Rewind to a previous cell
   - **Reset**: Go back to step 0
3. **Hover over any cell** to see the full square it represents (shown by the green border)
4. **Watch the grid fill**: Each step computes the largest square ending at that cell based on the minimum of three neighbors (top, left, top-left) plus 1

## Algorithm Summary

- For each cell (top-to-left, bottom-to-right):
  - If it's an **obstacle (0)**, skip it
  - If it's in the **first row or column**, the largest square is 1
  - Otherwise, the largest square is 1 + the minimum of the three neighboring cells

## Technologies

- React 19 + TypeScript
- Vite (build tool)
- CSS with responsive media queries
- oxlint for code quality

## Setup & Development

```bash
npm install
npm run dev      # Start dev server
npm run build    # Build for production
npm run lint     # Run linter
```

## Future Plans

- Interactive grid editing
- Animation speed control
- Visualization of other DP algorithms (Knapsack, Coin Change, etc.)
- Dark mode toggle
- Export visualization as image/video