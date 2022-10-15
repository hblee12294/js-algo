export function minimumTotal(triangle: number[][]): number {
  if (triangle && !triangle.length) {
    return -1;
  }

  if (triangle[0] && !triangle[0].length) {
    return -1;
  }

  const n = triangle.length;
  const f: number[][] = [];

  f[n - 1] = [];
  for (let i = 0; i < n; ++i) {
    f[n - 1][i] = triangle[n - 1][i];
  }

  for (let i = n - 2; i >= 0; --i) {
    f[i] = [];

    for (let j = 0; j <= i; ++j) {
      f[i][j] = Math.min(f[i + 1][j], f[i + 1][j + 1]) + triangle[i][j];
    }
  }

  return f[0][0];
}

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
console.log(minimumTotal([[-10]]));
