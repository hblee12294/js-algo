const obj = {
  data: 'lala',
}

function func(params) {
  console.log(this, params)
}

func.call(null, 'ddfd')

Function.prototype.call2 = function(context, ...args) {
  context = context || globalThis
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}

func.call2(null, 'sdfd')

Function.prototype.apply2 = function(context, args) {
  context.fn = this
  const result = context.fn(...args)
  delete context.fn

  return result
}