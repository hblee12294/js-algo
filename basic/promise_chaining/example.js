// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 3000)
// }).then(function (result) {
//   console.log(result)
//   return result * 2
// }).then(function (result) {
//   console.log(result)
//   return result * 2
// }).then(function (result) {
//   console.log(result)
//   return result * 2
// })



// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 2000)
// })

// promise.then(function (result) {
//   console.log(result)
//   return result * 2
// })

// promise.then(function (result) {
//   console.log(result)
//   return result * 2
// })

// promise.then(function (result) {
//   console.log(result)
//   return result * 2
// })



// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000)
// }).then(function (result) {
//   console.log(result)
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(result * 2), 1000)
//   })
// }).then(function (result) {
//   console.log(result)
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(result * 2), 1000)
//   })
// }).then(function (result) {
//   console.log(result)
// })



// class Thenable {
//   constructor(num) {
//     this.num = num
//   }

//   then(resolve, reject) {
//     console.log(resolve)
//     setTimeout(() => resolve(this.num * 2), 1000)
//   }
// }

// new Promise(resolve => resolve(1))
//   .then(result => {
//     return new Thenable(result)
//   })
//   .then(console.log)


// new Promise(function (resolve, reject) {
//   console.log('start')
//   reject(1)
// })
// .then(result => {
//   console.log(result)
//   console.log('end')
// }, error => {
//   console.log(error)
// })

new Promise(function (resolve, rejet) {
  throw new Error('Aho')
})
.catch(error => {
  console.log(error)
})