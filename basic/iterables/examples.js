let range = {
  from: 1,
  to: 5
}

range[Symbol.iterator] = function() {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ }
      } else {
        return { done: true }
      }
    }
  }
}

for (const n of range) {
  console.log(n)
}

console.log('-----')

let str = 'Hello'

let iterator = str[Symbol.iterator]()
// console.log(iterator)

while (true) {
  let result = iterator.next()
  if (result.done) break
  console.log(result.value)
}

console.log('-----')

let arrayLike = {
  0: 'Hello',
  1: 'world',
  length: 2
}

let arr = Array.from(arrayLike)
console.log(arr)

console.log(Array.from(arr, cha => cha + 'Yo'))

let arrayLike2 = {
  0: 'Hello',
  2: 'world',
  length: 3
}

console.log(Array.from(arrayLike2))