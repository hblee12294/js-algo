export function binarySearch(nums: number[], target: number): number {
  if (nums.length === 0) return -1;

  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    const mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === target) {
      end = mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  if (nums[start] === target) {
    return start;
  } else if (nums[end] === target) {
    return end;
  }

  return -1;
}

const t1 = [1, 4, 4, 5, 7, 7, 8, 9, 9, 10];
console.log(binarySearch(t1, 1));
