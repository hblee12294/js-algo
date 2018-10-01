function slow(x) {
  console.log('call with ' + x)
  return x
}

function cachingDecorator(func) {
  let cache = new Map()

  return function(...args) {
    let key =  hash(args)

    if (cache.has(key)) {
      return cache.get(key)
    }

    let result = func.apply(this, args)
    cache.set(key, result)

    return result
  }
}

function hash(args) {
  // console.log(args)
  // return args.reduce((prev, next) => prev + next, '')
  return args.join('')
}

slow = cachingDecorator(slow)

console.log(slow(1))
console.log(slow(1))
console.log(slow(4))

console.log('--------')

let worker = {
  someMethod() {
    return 1
  },
  slow(x) {
    console.log('call with ' + x)
    return x * this.someMethod()
  }
}

worker.slow = cachingDecorator(worker.slow)

console.log(worker.slow(2))
console.log(worker.slow(2))

console.log('------')

let cal = {
  sum(...args) {
    console.log('call in sum')
    return args.reduce((prev, next) => prev + next)
  }
}

console.log(cal.sum(1, 2, 3, 4))

cal.sum = cachingDecorator(cal.sum)

console.log(cal.sum(2, 3, 4))
console.log(cal.sum(2, 3, 4))
console.log(cal.sum(2, 3, 4))