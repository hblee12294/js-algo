const str1 = '123'
const str2 = '22'

function addition(str1, str2) {
  let addon = 0
  let result = []
  let nums1 = str1.split('').map(item => +item)
  let nums2 = str2.split('').map(item => +item)
  let length = str1.length > str2.length ? str1.length : str2.length
  console.log(nums1)
  console.log(nums2)
  
  while(length) {
    let num1 = nums1.length ? nums1.pop() : 0
    let num2 = nums2.length ? nums2.pop() : 0
    result.push((num1 + num2 + addon) % 10)
    addon = (num1 + num2 + addon) / 10
    length--
  }

  result.reverse()
  return result.join('')
}

console.log(addition(str1, str2))