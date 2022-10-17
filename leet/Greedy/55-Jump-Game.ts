export function canJump(nums: number[]): boolean {
  const n = nums.length;
  let farthest = nums[0];

  for (let i = 1; i < n; ++i) {
    if (i <= farthest && i + nums[i] > farthest) {
      farthest = i + nums[i];
    }
  }

  return farthest >= n - 1;
}

export function canJumpDP(nums: number[]): boolean {
  const n = nums.length;
  const f: boolean[] = [];

  f[0] = true;

  for (let i = 1; i < n; ++i) {
    for (let j = 0; j < i; ++j) {
      if (f[j] && j + nums[j] >= i) {
        f[i] = true;
        break;
      }
    }
  }

  return !!f[n - 1];
}
