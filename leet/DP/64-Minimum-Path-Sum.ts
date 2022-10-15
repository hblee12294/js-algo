export function minPathSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  const f: number[][] = Array(m)
    .fill(null)
    .map(() => []);

  f[0][0] = grid[0][0];

  for (let i = 1; i < m; ++i) {
    f[i][0] = f[i - 1][0] + grid[i][0];
  }

  for (let j = 1; j < n; ++j) {
    f[0][j] = f[0][j - 1] + grid[0][j];
  }

  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      f[i][j] = Math.min(f[i - 1][j], f[i][j - 1]) + grid[i][j];
    }
  }

  return f[m - 1][n - 1];
}

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);

console.log(
  minPathSum([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
