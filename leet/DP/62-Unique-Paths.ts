export function uniquePaths(m: number, n: number): number {
  const f: number[][] = Array(m)
    .fill(null)
    .map(() => Array(n));

  for (let i = 0; i < m; ++i) {
    f[i][0] = 1;
  }

  for (let j = 0; j < n; ++j) {
    f[0][j] = 1;
  }

  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      f[i][j] = f[i - 1][j] + f[i][j - 1];
    }
  }

  return f[m - 1][n - 1];
}

console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));
