// Find Floor of value X in a sorted array
function findFloor(arr, x) {
  if (x < arr[0]) return -1
  if (x > arr[arr.length - 1]) return arr[arr.length - 1]

  function find(low, high) {
    if (low === high) return low - 1
    
    let mid = Math.round((low + high) / 2)
    if (arr[mid] < x) return find(mid + 1, high)
    if (arr[mid] > x) return find(low, high - 1)
    if (arr[mid] === x) return mid
  }

  let index = find(0, arr.length)

  return arr[index]
}

// Find First Value larger than K in a sorted array in recursive manner
function findCeil(arr, k) {
  if (k < arr[0]) return arr[0]
  if (k > arr[arr.length - 1]) return -1

  function find(low, high) {
    if (low === high) return low 
    
    let mid = Math.round((low + high) / 2)
    if (arr[mid] < k) return find(mid + 1, high)
    if (arr[mid] > k) return find(low, high - 1)
    if (arr[mid] === k) return mid + 1
  }

  let index = find(0, arr.length)

  return arr[index]
}

console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 5))
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 8))
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 11))
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 20))
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 0))
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 2))

console.log('----------')

console.log(findCeil([1, 2, 8, 10, 10, 12, 19], 5))
console.log(findCeil([1, 2, 8, 10, 10, 12, 19], 8))
console.log(findCeil([1, 2, 8, 10, 10, 12, 19], 11))
console.log(findCeil([1, 2, 8, 10, 10, 12, 19], 20))
console.log(findCeil([1, 2, 8, 10, 10, 12, 19], 0))
console.log(findCeil([1, 2, 8, 10, 10, 12, 19], 2))
console.log(findCeil([1, 2, 8, 10, 10, 12, 19], 3))