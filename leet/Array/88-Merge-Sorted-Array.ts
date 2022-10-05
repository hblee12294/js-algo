/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] {
  let end1 = m - 1;
  let end2 = n - 1;
  let finished = m + n - 1;

  while (end1 >= 0 && end2 >= 0) {
    nums1[finished--] = nums1[end1] >= nums2[end2] ? nums1[end1--] : nums2[end2--];
  }

  while (end2 >= 0) {
    nums1[finished--] = nums2[end2--];
  }

  return nums1;
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
