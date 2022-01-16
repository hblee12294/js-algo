function mergeArray(arrA, arrB) {
  let pa = 0, pb = 0
  let arrM = []

  if (arrA.length === 0) { return arrB }
  if (arrB.length === 0) { return arrA }

  while (pa !== arrA.length && pb !== arrB.length) {
    if (arrA[pa] < arrB[pb]) {
      arrM.push(arrA[pa])
      ++pa
    }
    else {
      arrM.push(arrB[pb])
      ++pb
    }
  }

  if (pa === arrA.length) {
    arrM = arrM.concat(arrB.slice(pb))
  }
  else {
    arrM = arrM.concat(arrA.slice(pa))
  }

  return arrM
}

console.log(mergeArray([2,5,6,9], [1,2,3,29]))
console.log(mergeArray([2,5,6,9], []))
console.log(mergeArray([1, 6, 20], [3, 7, 67, 86, 90]))

function mergeArray1(arrA, arrB) {
  let itemA = arrA[0], itemB = arrB[0]
  let arrM = []
  let pa = 1, pb = 1

  while (itemA || itemB) {
    if ((itemA && !itemB) || itemA < itemB) {
      arrM.push(itemA)
      itemA = arrA[pa++]
    }
    else {
      arrM.push(itemB)
      itemB = arrB[pb++]
    }
  }

  return arrM
}

console.log(mergeArray1([2,5,6,9], [1,2,3,29]))
console.log(mergeArray1([2,5,6,9], []))
console.log(mergeArray1([1, 6, 20], [3, 7, 67, 86, 90]))