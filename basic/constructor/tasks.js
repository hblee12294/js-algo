// 1
let obj = {
  name: 'coco',
  age: 45
}

function A() { return obj } 
function B() { return obj }

let a = new A
let b = new B

console.log(a == b)
console.log(a === b)

// 2
function Calculator() {
  this.read = function (...args) {
    this.args = args
    return args
  },

  this.sum = function () {
    return this.args.reduce((pre, crt) => pre + crt, 0)
  },

  this.mul = function () {
    return this.args.reduce((pre, crt) => pre * crt, 1)
  }
}

let cal = new Calculator()

console.log(cal.read(3, 3, 3))
console.log(cal.args)
console.log(cal.sum())
console.log(cal.mul())