// let timeId = setInterval(() => console.log('tick'), 1000)
// setTimeout(() => {
//   clearInterval(timeId)
//   console.log('tok')
// }, 4000)

// let delay = 500

// let timeId = setTimeout(function repeat() {
//   console.log(delay)
//   delay *= 2
//   setTimeout(repeat, delay)
// }, delay)

// setTimeout(() => console.log('1st'), 0)
// setTimeout(() => console.log('2nd'), 0)

// console.log('start')
// console.log('Then')

// let i = 0
// let start = Date.now()

// function count() {
//   for (let j = 0; j < 1e9; ++j) {
//     ++i
//   }
//   console.log('Done in ' + (Date.now() - start) + 'ms')
// }

// count()
// console.log('After count')

let i = 0
let start = Date.now()

function count() {
  do {
    i++
  } while (i % 1e6 != 0)

  if (i === 1e9) {
    console.log('Done in ' + (Date.now() - start) + 'ms')
  } else {
    setTimeout(count)
  }
}

count()
console.log('During count')