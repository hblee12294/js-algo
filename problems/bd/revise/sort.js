function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const mid = sortAndFindMid(arr, start, end)

    quickSort(arr, start, mid - 1)
    quickSort(arr, mid + 1, end)
  }

  return arr
}

function sortAndFindMid(arr, start, end) {
  const baseIndex = start
  const base = arr[baseIndex]

  while (start < end) {
    while (arr[end] >= base && start < end) {
      end--
    }

    while (arr[start] <= base && start < end) {
      start++
    }

    if (start < end) {
      swap(arr, start, end)
    }
  }

  swap(arr, baseIndex, start)

  return start
}

function swap(arr, left, right) {
  let temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp
}

const input = [98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121]

console.log(JSON.stringify(quickSort(input)))
