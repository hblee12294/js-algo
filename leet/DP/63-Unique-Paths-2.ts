export function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const f: number[][] = Array(m)
    .fill(null)
    .map(() => Array(n).fill(0));

  for (let i = 0; i < m; ++i) {
    if (obstacleGrid[i][0] === 1) break;

    f[i][0] = 1;
  }

  for (let j = 0; j < n; ++j) {
    if (obstacleGrid[0][j] === 1) break;

    f[0][j] = 1;
  }

  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      if (obstacleGrid[i][j] !== 1) {
        f[i][j] = f[i - 1][j] + f[i][j - 1];
      }
    }
  }

  return f[m - 1][n - 1];
}
