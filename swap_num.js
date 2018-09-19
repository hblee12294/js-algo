function swapNum(a, b) {
  a = a + b
  b = a - b
  a = a - b
  return a + ' ' + b
}

console.log(swapNum(2, 4))
console.log(swapNum(8, 2))
console.log(swapNum(-3, 9))