export function findPeakElement(nums: number[]): number {
  if (nums.length === 1) return 0;

  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    const mid = start + Math.floor((end - start) / 2);
    const value = nums[mid];

    if (nums[mid - 1] >= value) {
      end = mid - 1;
    } else if (value <= nums[mid + 1]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  if (nums[start] > nums[end]) {
    return start;
  }

  return end;
}

const t1 = [1, 2, 3, 1];
console.log(findPeakElement(t1));

const t2 = [1, 2, 1, 3, 5, 6, 4];
console.log(findPeakElement(t2));

const t3 = [1];
console.log(findPeakElement(t3));

const t4 = [1, 2];
console.log(findPeakElement(t4));

const t5 = [2, 1];
console.log(findPeakElement(t5));

const t6 = [4, 3, 2, 1];
console.log(findPeakElement(t6));
