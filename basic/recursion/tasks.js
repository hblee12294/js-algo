// 1
function sumTo(n) {
  if (n === 1) return 1
  return n + sumTo(n-1)
}

console.log(sumTo(4))
console.log(sumTo(100))

// 2
function factorial(n) {
  if (n === 1) return 1
  return n * factorial(n-1)
}

console.log(factorial(3))
console.log(factorial(5))

// 3
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

function printList(list) {
  if (!list) return
  console.log(list.value)
  printList(list.next)
}

printList(list)

console.log('--------')

function printListReverse(list) {
  if (list.next) {
    printListReverse(list.next)
  }
  console.log(list.value)
}

printListReverse(list)