function mul(a, b) {
  return a * b
}

let double = mul.bind(null, 2)
console.log(double(3))
console.log(double(4))
console.log(double(5))

function partial(func, ...argsBound) {
  return function (...args) {
    return func.call(this, ...argsBound, ...args)
  }
}

let user = {
  firstName: 'John',
  say(time, phrase) {
    console.log(`[${ time }] ${ this.firstName }: ${ phrase }`)
  }
}

user.sayNow = partial(user.say, new Date().getHours())

user.sayNow('hello')

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

function sum(a, b, c) {
  return a + b + c
}

let curriedSum = curry(sum)

console.log(curriedSum(1, 2, 3))
console.log(curriedSum(1)(2)(3))
console.log(curriedSum(1, 2)(3))