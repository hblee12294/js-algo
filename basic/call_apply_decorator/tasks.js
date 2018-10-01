// 1
// function spy(func) {
//   function inner(...args) {
//     inner.calls.push(args)
//     return func.apply(this, args)
//   }
//   inner.calls = []

//   return inner
// }

// function work(a, b) {
//   console.log('' + a + b)
// }

// work = spy(work)
// work(1, 2)
// work(2, 6)

// for (const args of work.calls) {
//   console.log( 'call: ' + args.join(','))
// }

// 2
function f(x) {
  console.log(x)
}

function delay(f, ms) {
  return function (...args) {
    console.log('start')
    setTimeout(() => f.apply(this, args), ms)
  }
}

let f1000 = delay(f, 1000)
let f1500 = delay(f, 3000)

f1000('test')
f1500('test')