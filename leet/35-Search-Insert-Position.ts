export function searchInsert(nums: number[], target: number): number {
  if (nums.length === 0) return 0;

  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    const mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if (target <= nums[start]) {
    return start;
  } else if (target <= nums[end]) {
    return end;
  } else {
    return end + 1;
  }
}

const t1 = [1, 3, 5, 6];
console.log(searchInsert(t1, 5));

const t2 = [1, 3, 5, 6];
console.log(searchInsert(t2, 2));

const t3 = [1, 3, 5, 6];
console.log(searchInsert(t3, 7));

const t4 = [1];
console.log(searchInsert(t4, 1));
