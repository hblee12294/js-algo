const foo = {
  data: 'dfdfdf',
}

function bar(a, b) {
  console.log(this.data, a, b)
  return this.data
}

const newBar = bar.bind(foo, 'dfd')

newBar('dfdf')

Function.prototype.bind2 = function(context, ...args) {
  return (...args2) => {
    this.call(context, ...args, ...args2)
  }
}

const newFoo = bar.bind2(foo, 'dfsdf')

newFoo('sdfd')
