function bubble(arr) {
  // 需要遍历的轮数
  for (let i = arr.length - 1; i > 1; i--) {
    // 单轮遍历
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1)
      }
    }
  }

  return arr

  function swap(a, b) {
    let temp = arr[b]
    arr[b] = arr[a]
    arr[a] = temp
  }
}

const input = [98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121]

console.log(JSON.stringify(bubble(input)))
