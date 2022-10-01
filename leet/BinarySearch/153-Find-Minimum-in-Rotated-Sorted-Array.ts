export function findMin(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    const mid = start + Math.floor((end - start) / 2);
    const value = nums[mid];

    // Solution1
    // if (nums[start] <= value) {
    //   if (value >= nums[end]) {
    //     start = mid;
    //   } else {
    //     return nums[0];
    //   }
    // } else {
    //   if (value <= nums[end]) {
    //     end = mid;
    //   } else {
    //     return nums[nums.length - 1];
    //   }
    // }

    // Solution2
    if (value <= nums[end]) {
      end = mid;
    } else {
      start = mid;
    }
  }

  return Math.min(nums[start], nums[end]);
}

const t1 = [3, 4, 5, 1, 2];
console.log(findMin(t1));

const t2 = [1, 2, 3, 4, 5];
console.log(findMin(t2));

const t3 = [5, 4, 3, 2, 1];
console.log(findMin(t3));

const t4 = [3, 0, 4, 5];
console.log(findMin(t4));
