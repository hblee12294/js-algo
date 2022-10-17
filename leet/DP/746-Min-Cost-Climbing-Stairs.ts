function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;
  const f: number[] = []; // f[x] means the cost of starting climbing from x to x+1 / x+2 (* not cost of reaching)

  f[0] = cost[0];
  f[1] = cost[1];

  for (let i = 2; i < n; ++i) {
    f[i] = Math.min(f[i - 1], f[i - 2]) + cost[i];
  }

  return Math.min(f[n - 1], f[n - 2]);
}
