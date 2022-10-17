export function jump(nums: number[]): number {
  const n = nums.length;

  let start = 0;
  let end = 0;
  let steps = 0;

  while (end < n - 1) {
    let farthest = end;

    for (let i = start; i <= end; ++i) {
      if (i + nums[i] > farthest) {
        farthest = i + nums[i];
      }
    }

    start = end + 1;
    end = farthest;
    steps++;
  }

  return steps;
}

export function jumpDP(nums: number[]): number {
  const n = nums.length;
  const f: number[] = Array(n).fill(Number.POSITIVE_INFINITY);
  f[0] = 0;

  for (let i = 1; i < n; ++i) {
    for (let j = 0; j < i; ++j) {
      if (j + nums[j] >= i) {
        f[i] = Math.min(f[i], f[j] + 1);
      }
    }
  }

  return f[n - 1];
}
