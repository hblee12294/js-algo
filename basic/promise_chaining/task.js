new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error('woops'))
  }, 1000)
}).catch(error => {
  console.log('catch')
  console.log(error)
})