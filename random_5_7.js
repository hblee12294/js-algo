function rand5() {
  return 1 + Math.random() * 4
}

console.log(rand5())
console.log(rand5())
console.log(rand5())
console.log(rand5())

function random57() {
  return 5 + (rand5() - 1) / 4 * 2
}

console.log('-----------------------------')

console.log(random57())
console.log(random57())
console.log(random57())
console.log(random57())
console.log(random57())
console.log(random57())
console.log(random57())
console.log(random57())