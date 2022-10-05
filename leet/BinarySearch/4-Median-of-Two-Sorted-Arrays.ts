export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const len1 = nums1.length;
  const len2 = nums2.length;

  let start = 0;
  let end = len1 + len2 - 1;

  while (start + 1 < end) {
    const mid = start + Math.floor((end - start) / 2);
  }

  return (start + end) / 2;
}

const t1 = [[1, 3], [2]];
console.log(findMedianSortedArrays(t1[0], t1[1]));

const t2 = [
  [1, 2],
  [3, 4],
];
console.log(findMedianSortedArrays(t2[0], t2[1]));
