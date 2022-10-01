export function search(nums: number[], target: number): number {
  if (nums.length === 0) return -1;

  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    const mid = start + Math.floor((end - start) / 2);
    const value = nums[mid];

    if (value === target) {
      return mid;
    } else if (nums[start] < value) {
      if (nums[start] <= target && target < value) {
        end = mid;
      } else {
        start = mid;
      }
    } else {
      if (value < target && target <= nums[end]) {
        start = mid;
      } else {
        end = mid;
      }
    }
  }

  if (nums[start] === target) {
    return start;
  } else if (nums[end] === target) {
    return end;
  }

  return -1;
}

const t1 = [4, 5, 6, 7, 0, 1, 2];
console.log(search(t1, 0));

const t2 = [4, 5, 6, 7, 0, 1, 2];
console.log(search(t2, 3));

const t3 = [1];
console.log(search(t3, 0));

const t4 = [1, 3, 5];
console.log(search(t4, 1));
