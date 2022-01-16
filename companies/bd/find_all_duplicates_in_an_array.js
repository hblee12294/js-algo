// 给定一个整数数组 a，其中 1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次
function findTwice(arr) {
  const result = []

  for (let i in arr) {
    const position = Math.abs(arr[i]) - 1
    if (arr[position] < 0) {
      result.push(-arr[position])
    } else {
      arr[position] *= -1
    }
  }

  return result
}

const input = [4, 3, 2, 7, 8, 2, 3, 1]
const result = findTwice(input)

console.log(result)
