/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  if (!nums) {
    return -1
  }

  let start = 0
  let end = nums.length - 1

  while (start + 1 < end) {
    let mid = ~~((end - start) / 2) + start

    console.log(start, mid, end)

    if (nums[mid] === target) {
      return mid
    }

    /**
     *  Normal Case
     * */
    if (nums[start] < nums[mid]) {
      if (nums[start] <= target && target <= nums[mid]) {
        end = mid
      } else {
        start = mid
      }
      /**
       *  Break Case
       * */
    } else {
      if (nums[mid] <= target && target <= nums[end]) {
        start = mid
      } else {
        end = mid
      }
    }
  }

  if (nums[start] === target) {
    return nums[start]
  }

  if (nums[end] === target) {
    return nums[end]
  }

  return -1
}

const arr = [4, 5, 6, 7, 0, 1, 2]
const target = 0

console.log(search(arr, target))
