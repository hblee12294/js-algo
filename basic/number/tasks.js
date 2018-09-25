// A random integer from min to max
function randomInt(x, y) {
  return x + Math.trunc( Math.random() * (y - x) )
}

console.log( randomInt(1, 5) )
console.log( randomInt(1, 5) )
console.log( randomInt(1, 5) )
console.log( randomInt(1, 5) )
console.log( randomInt(1, 5) )