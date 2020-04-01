// 函数会把dalay时段中把多次执行合并为一次, 反复只认最后一次
function debounce(fn, delay) {
  let timer = null

  return function(...args) {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      fn.call(this, args)
      timer = null
    }, delay)
  }
}

const say = arg => {
  console.log('say ' + arg)
}

const newSay = debounce(say, 500)

newSay(1)
setTimeout(() => {
  newSay(2)
}, 600)
