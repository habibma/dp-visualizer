
function generateRandomGrid(): string[][] {
    const size = Math.floor(Math.random() * 5) + 5; // a random grid size between 5 and 9
    const grid: string[][] = Array.from({ length: size }, () => Array(size).fill('.'))
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (Math.random() < 0.3) { // 30% chance to place an obstacle
                grid[i][j] = '0'
            }
        }
    }
    return grid
  }

  export default generateRandomGrid