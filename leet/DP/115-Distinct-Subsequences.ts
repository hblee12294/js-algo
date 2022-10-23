export function numDistinct(s: string, t: string): number {
  const m = s.length;
  const n = t.length;

  const dp = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; ++i) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[m][n];
}
