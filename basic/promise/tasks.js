
// 1
// let promise = new Promise(function(resolve, reject) {
//   resolve(1)

//   setTimeout(() => resolve(2), 1000)
// })

// promise.then(console.log)

// 2
function delay(ms) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), ms)
  })
}

delay(3000).then(() => console.log('run after 3 seconds'))