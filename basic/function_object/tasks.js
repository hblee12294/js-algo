// 1
function makeCounter() {
  let count = 0
  
  function counter() {
    return ++count
  }

  counter.decrease = function (value) {
    return count -= value
  }

  counter.set = function (value) {
    return count = value
  }

  return counter
}

let counter = makeCounter()

console.log(counter())
console.log(counter())
console.log(counter.set(6))
console.log(counter.decrease(4))

// 2
function sum(x) {
  let tempSum = x

  function func(y) {
    tempSum += y
    return func
  }
  func.toString = () => tempSum

  return func
}

console.log(sum(3))
console.log(sum(3)(5))
console.log(sum(3)(8)(-4))