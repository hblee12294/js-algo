function debounce(func, ms) {
  let isHold = false
  let timeId = null

  return function (...args) {
    if (isHold) {
      clearTimeout(timeId)
      timeId = setTimeout(() => isHold = false, ms)
      return
    }

    let result = func.apply(this, args)
    timeId = setTimeout(() => isHold = false, ms)
    isHold = true
    return result
  }
}

// function debounce(f, ms) {

//   let isCooldown = false;

//   return function() {
//     if (isCooldown) return;

//     f.apply(this, arguments);

//     isCooldown = true;

//     setTimeout(() => isCooldown = false, ms);
//   };

// }

let f = debounce(console.log, 1000)

f(1)
setTimeout(() => f(2), 500)
// setTimeout(() => f(3), 98)
// setTimeout(() => f(4), 1100)
// setTimeout(() => f(5), 1500)
setTimeout(() => f(3), 1000)