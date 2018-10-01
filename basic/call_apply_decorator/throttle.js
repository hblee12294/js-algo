function f(a) {
  console.log(a)
}

function throttle(func, ms) {
  let isThrottled = false
  let savedArgs, savedThis

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments
      savedThis = this
      return
    }

    isThrottled = true
    setTimeout(function () {
      isThrottled = false
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs)
        savedArgs = savedThis = null
      }
    }, ms)
    
    return func.apply(this, arguments)
  }

  return wrapper
}

let f1000 = throttle(f, 3000)

f1000(1)
f1000(2)
f1000(4)