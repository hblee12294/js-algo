export function climbStairs(n: number): number {
  const f: number[] = [];

  f[0] = 1;
  f[1] = 2;

  for (let i = 2; i < n; ++i) {
    f[i] = f[i - 1] + f[i - 2];
  }

  return f[n - 1];
}
