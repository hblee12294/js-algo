function promiseAll(arr) {
  const result = []
  const length = arr.length
  let counter = 0

  return new Promise((resolve, reject) => {
    arr.forEach((promise, index) => {
      promise
        .then(res => {
          result[index] = res
          counter++

          checkResult()
        })
        .catch(reason => {
          reject(reason)
        })
    })

    function checkResult() {
      if (counter === length) {
        resolve(result)
      }
    }
  })
}

let promise1 = new Promise(function(resolve) {
  resolve(1)
})

let promise2 = new Promise(function(resolve) {
  setTimeout(() => {
    resolve(2)
  }, 1000)
})

let promise3 = new Promise(function(resolve) {
  setTimeout(() => {
    resolve(3)
  }, 500)
})

// let promise3 = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     reject(3)
//   }, 500)
// })

promiseAll([promise1, promise2, promise3])
  .then(res => {
    console.log(JSON.stringify(res))
  })
  .catch(e => {
    console.log(e)
  })

// let promiseAll = Promise.all([promise1, promise2, promise3])
// promiseAll.then(function(res) {
//   console.log(res)
// })
