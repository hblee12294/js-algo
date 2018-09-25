// 1
let arr = ['a', 'b']

arr.push(function () {
  console.log(this)
})

// Take arr[2] as an object
arr[2]()

// 2
function Calculator() {
  let fxs = { '+': (a, b) => a + b }

  this.calculate = function (str) {
    const paras = str.split(' ')
    const op = paras[1]

    if (!fxs[op]) return

    return fxs[op](+paras[0], +paras[2])
  }

  this.addMethod = function (op, fx) {
    fxs[op] = fx
  }
}

let cal = new Calculator()
cal.addMethod('*', (a, b) => a * b )
cal.addMethod('**', (a, b) => a ** b )

console.log(cal.calculate('3 + 7'))
console.log(cal.calculate('3 * 7'))
console.log(cal.calculate('3 ** 3'))

// 3
function getMaxSubSum(arr) {
  let sum = 0, nxtSum = 0

  for (n of arr) {
    nxtSum += n
    nxtSum > sum ? sum = nxtSum : nxtSum = 0
  }

  return sum
}

console.log( getMaxSubSum([-1, 2, 3, -9]) )
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) )
console.log( getMaxSubSum([-1, -2, -3]) )