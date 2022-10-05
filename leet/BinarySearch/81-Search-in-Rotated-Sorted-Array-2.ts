export function search(nums: number[], target: number): boolean {
  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    const mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === target) {
      return true;
    } else if (nums[start] < nums[mid]) {
      if (nums[start] < target && target < nums[mid]) {
        end = mid;
      } else if (nums[start] === target) {
        return true;
      } else {
        start = mid;
      }
    } else if (nums[start] > nums[mid]) {
      if (nums[mid] < target && target < nums[end]) {
        start = mid;
      } else if (nums[end] === target) {
        return true;
      } else {
        end = mid;
      }
    } else {
      start++;
    }
  }

  if (nums[start] === target) return true;

  if (nums[end] === target) return true;

  return false;
}

const t1 = [2, 5, 6, 0, 0, 1, 2];
console.log(search(t1, 0));

const t2 = [2, 5, 6, 0, 0, 1, 2];
console.log(search(t2, 3));

const t3 = [2];
console.log(search(t3, 2));
