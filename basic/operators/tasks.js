let a = 1, b = 1
let c = ++a
let d = b++

console.log(b)  // 2
console.log(c)  // 2
console.log(d)  // 1

let y = 2
let x = 1 + (y *= 2)

console.log(x)  // 5
console.log(y)  // 4