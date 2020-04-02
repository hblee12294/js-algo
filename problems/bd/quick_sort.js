function quickSort(arr) {
  if (arr.length <= 1) return arr

  const pivotIndex = ~~(arr.length / 2)
  const pivot = arr.splice(pivotIndex, 1)[0]

  const left = []
  const right = []

  arr.forEach(item => {
    if (item < pivot) {
      left.push(item)
    } else {
      right.push(item)
    }
  })

  return quickSort(left).concat(pivot, quickSort(right))
}

function quickSort2(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let mid = sortAndFindMid(arr, left, right)

    quickSort2(arr, left, mid - 1)
    quickSort2(arr, mid + 1, right)
  }

  return arr
}

function sortAndFindMid(arr, left, right) {
  const base = arr[left]
  let index = left + 1

  for (let i = index; i <= right; i++) {
    if (base > arr[i]) {
      swap(arr, index, i)
      index++
    }
  }

  swap(arr, index - 1, left)

  return index - 1
}

function swap(arr, left, right) {
  let temp = arr[right]
  arr[right] = arr[left]
  arr[left] = temp
}

const input = [6, 1, 2, 7, 9, 4, 5, 10, 8]
const result = quickSort2(input)

console.log(JSON.stringify(result))

const input2 = [98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121]
const result2 = quickSort2(input2)

console.log(JSON.stringify(result2))
