const arr = [6, 8, 2, 34]

function printNextGreater(nums) {
  let result = []
  nums1 = nums
  nums2 = nums

  for (let v of nums1) {
    const i = nums2.indexOf(v)
    let find = false
    for (let j = i + 1; j < nums2.length; j++) {
      if (nums2[j] > v) {
        result.push(nums2[j])
        find = true
        break
      }
    }
    if (!find) result.push(-1)
  }
  return result
}

console.table(printNextGreater(arr))