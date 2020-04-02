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

const input = [6, 1, 2, 7, 9, 4, 5, 10, 8]
const result = quickSort(input)

console.log(JSON.stringify(result))

const input2 = [98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121]
const result2 = quickSort(input2)

console.log(JSON.stringify(result2))
