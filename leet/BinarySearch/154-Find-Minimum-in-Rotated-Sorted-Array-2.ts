export function findMin(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    const mid = start + Math.floor((end - start) / 2);

    if (nums[mid] < nums[end]) {
      end = mid;
    } else if (nums[mid] > nums[end]) {
      start = mid;
    } else {
      end--;
    }
  }

  return Math.min(nums[start], nums[end]);
}

const t1 = [4, 5, 6, 7, 0, 1, 4];
console.log(findMin(t1));

const t2 = [0, 1, 4, 4, 5, 6, 7];
console.log(findMin(t2));

const t3 = [5, 4, 3, 2, 1];
console.log(findMin(t3));

const t4 = [2, 2, 2, 0, 1];
console.log(findMin(t4));

const t5 = [3, 3, 1, 3];
console.log(findMin(t5));

const t6 = [1, 3, 3];
console.log(findMin(t6));
