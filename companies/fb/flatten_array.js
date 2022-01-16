// flatten array

let arr1 = [1, 2, [3, 4]]
let arr2 = [1, 2, [3, 4, [5, 6]]]
let arr3 = [1, 2, , 4, 5]
let flat1
let flat2
let flat3

// reduce
// flat1 = arr1.reduce((acc, val) => acc.concat(val), [])
// flat2 = arr2.reduce((acc, val) => acc.concat(val), [])
// console.log(flat1)
// console.log(flat2)

// deep reduce
// function flattenDeep(arr) {
//   return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), [])
// }

// flat1 = flattenDeep(arr1)
// flat2 = flattenDeep(arr2)
// flat3 = flattenDeep(arr3)
// console.log(flat1)
// console.log(flat2)
// console.log(flat3)

// stack
function flatten(arr) {
  const stack = [...arr]
  const result = []

  while (stack.length) {
    const head = stack.pop()

    if (Array.isArray(head)) {
      stack.push(...head)
    } else {
      if (head) {
        result.push(head)
      }
    }
  }
  return result.reverse()
}

flat1 = flatten(arr1)
flat2 = flatten(arr2)
flat3 = flatten(arr3)
console.log(flat1)
console.log(flat2)
console.log(flat3)