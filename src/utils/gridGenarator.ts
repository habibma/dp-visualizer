
function generateRandomGrid(): string[][] {
    const size = Math.floor(Math.random() * 5) + 5; // a random grid size between 5 and 9
    const grid: string[][] = Array.from({ length: size }, () => Array(size).fill('.'))
    grid.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (Math.random() < 0.2) { // 20% chance to place an obstacle
          grid[i][j] = '0' // '0' represents an obstacle
        }
      })
    })
    return grid
  }

  export default generateRandomGrid