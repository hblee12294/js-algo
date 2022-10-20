export class Solution {
  /**
   * @param a: A string
   * @param b: A string
   * @return: the length of the longest common substring.
   */
  longestCommonSubstring(a: string, b: string): number {
    // write your code here
    const m = a.length;
    const n = b.length;

    const dp: number[][] = Array(m + 1)
      .fill(null)
      .map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; ++i) {
      for (let j = 1; j <= n; ++j) {
        if (a[i - 1] === b[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        }
      }
    }

    let max = 0;
    for (let i = 1; i <= m; ++i) {
      for (let j = 1; j <= n; ++j) {
        max = Math.max(max, dp[i][j]);
      }
    }

    return max;
  }
}
