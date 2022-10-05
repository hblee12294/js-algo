export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const len = nums1.length + nums2.length;

  if (len % 2 === 0) {
    return (
      (findKth(nums1, 0, nums2, 0, len / 2) +
        findKth(nums1, 0, nums2, 0, len / 2 + 1)) /
      2
    );
  }

  return findKth(nums1, 0, nums2, 0, Math.ceil(len / 2));
}

function findKth(
  nums1: number[],
  start1: number,
  nums2: number[],
  start2: number,
  k: number
): number {
  if (start1 >= nums1.length) {
    return nums2[start2 + k - 1];
  }

  if (start2 >= nums2.length) {
    return nums1[start1 + k - 1];
  }

  if (k === 1) {
    return Math.min(nums1[start1], nums2[start2]);
  }

  const mid1 = start1 + Math.floor(k / 2) - 1;
  const midValue1 =
    mid1 < nums1.length ? nums1[mid1] : Number.POSITIVE_INFINITY;
  const mid2 = start2 + Math.floor(k / 2) - 1;
  const midValue2 =
    mid2 < nums2.length ? nums2[mid2] : Number.POSITIVE_INFINITY;

  if (midValue1 < midValue2) {
    return findKth(nums1, mid1 + 1, nums2, start2, k - Math.floor(k / 2));
  } else {
    return findKth(nums1, start1, nums2, mid2 + 1, k - Math.floor(k / 2));
  }
}

const t1 = [[1, 3], [2]];
console.log(findMedianSortedArrays(t1[0], t1[1]));

const t2 = [
  [1, 2],
  [3, 4],
];
console.log(findMedianSortedArrays(t2[0], t2[1]));
