// 函数不能在delay中连续执行
function throttle(fn, delay) {
  let isHold = false

  return function(...args) {
    if (isHold) return

    isHold = true

    fn.apply(this, args)

    setTimeout(() => {
      isHold = false
    }, delay)
  }
}

const say = () => {
  console.log('say')
}

const throttledSay = throttle(say, 500)

throttledSay()
setTimeout(() => {
  throttledSay()
  // }, 400)
}, 500)
