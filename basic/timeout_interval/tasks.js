// 1
// function printNumbers(from, to) {
//   let current = from

//   setTimeout(function go() {
//     console.log(current)
//     if (current < to) {
//       setTimeout(go, 1000)
//     }
//     ++current
//   }, 1000)
// }

// printNumbers(2, 5)

// 2
let i = 0
let start = Date.now()
let timer = setInterval(count, 0)

function count() {
  for (let j = 0; j < 1e3; ++j) {
    ++i
  }
  console.log(i)

  if (i === 1e5) {
    console.log('Done in ' + (Date.now() - start) + 'ms')
    clearInterval(timer)
  }
}
