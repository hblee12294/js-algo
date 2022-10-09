export function partitionArray(nums: number[], k: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    while (left <= right && nums[left] < k) {
      left++;
    }

    while (left <= right && nums[right] >= k) {
      right--;
    }

    if (left <= right) {
      swap(nums, left, right);
      left++;
      right--;
    }
  }

  return left;
}

function swap(nums: number[], left: number, right: number): void {
  let tmp = nums[left];
  nums[left] = nums[right];
  nums[right] = tmp;
}

console.log(partitionArray([], 9));

console.log(partitionArray([3, 2, 2, 1], 2));
