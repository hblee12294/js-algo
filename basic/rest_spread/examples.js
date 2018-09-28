let arr = [3, 5, 1]
console.log(Math.max(...arr))

let arr1 = [1, -2, 3, 4]
let arr2 = [8, 3, -8, 1]
console.log(Math.max(...arr1, ...arr2))

let merged = [0, ...arr, 6, ...arr1]
console.log(merged)

let str = 'Hello'
console.log([...str])