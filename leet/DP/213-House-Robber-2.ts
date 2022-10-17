export function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  return Math.max(
    robRange(nums, 0, nums.length - 2),
    robRange(nums, 1, nums.length - 1)
  );
}

function robRange(nums: number[], start: number, end: number) {
  const f: number[] = [];
  const n = end - start + 1;

  if (n === 1) return nums[start];

  f[0] = nums[start];
  f[1] = Math.max(nums[start], nums[start + 1]);

  for (let i = 2; i < n; ++i) {
    f[i] = Math.max(f[i - 2] + nums[start + i], f[i - 1]);
  }

  return f[n - 1];
}
