function Promise(excutor) {
  this.status = 'pending'
  this.data = undefined
  this.onResolvedCallbacks = []
  this.onRejectedCallbacks = []

  const resolve = value => {
    if (this.status === 'pending') {
      this.status = 'fullfilled'
      this.data = value

      for (let callback of this.onResolvedCallbacks) {
        callback(value)
      }
    }
  }

  const reject = reason => {
    if (this.status === 'pending') {
      this.status = 'rejected'
      this.data = reason

      for (let callback of this.onRejectedCallbacks) {
        callback(reason)
      }
    }
  }

  try {
    excutor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

Promise.prototype.then = function(onResolved, onRejected) {
  onResolved =
    typeof onResolved === 'function'
      ? onResolved
      : function(value) {
          return value
        }
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : function(reason) {
          return reason
        }

  if (this.status === 'fullfilled') {
    return new Promise((resolve, reject) => {
      try {
        const x = onResolved(this.data)

        if (x instanceof Promise) {
          x.then(resolve, reject)
        }
        resolve(x)
      } catch (e) {
        reject(x)
      }
    })
  }

  if (this.status === 'rejected') {
    return new Promise((resolve, reject) => {
      try {
        const x = onRejected(this.data)

        if (x instanceof Promise) {
          x.then(resolve, reject)
        }
        resolve(x)
      } catch (e) {
        reject(x)
      }
    })
  }

  if (this.status === 'pending') {
    return new Promise((resolve, reject) => {
      this.onResolvedCallbacks.push(value => {
        try {
          const x = onResolved(value)

          if (x instanceof Promise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })

      this.onRejectedCallbacks.push(reason => {
        try {
          const x = onRejected(reason)

          if (x instanceof Promise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })
    })
  }
}

Promise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected)
}

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(1)
    reject(1)
  }, 500)
})
  // .then(res => {
  //   console.log(res)

  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve(2)
  //     }, 500)
  //   })
  // })
  // .then(console.log)
  .catch(console.log)
