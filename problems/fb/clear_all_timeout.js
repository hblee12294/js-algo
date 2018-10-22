/*
  var id = setTimeout(callback, delay)
  clearTimeout(id)

  implement clearAllTimeout()
*/

// class implementation
class TimeoutManager {
  constructor() {
    this._queue = []
    this._defaultSetTimeout = setTimeout
    this._defaultClearTimeout = clearTimeout

    this.setTimeout = this.setTimeout.bind(this)
    this.clearTimeout = this.clearTimeout.bind(this)
    this.clearAllTimeout = this.clearAllTimeout.bind(this)
  }

  setTimeout(...args) {
    // this._queue.push(setTimeout(...args))
    this._queue.push(this._defaultSetTimeout(...args))
    return this._queue.length - 1
  }

  clearTimeout(id) {
    // clearTimeout(this._queue[id])
    this._defaultclearTimeout(this._queue[id])
    this._queue.splice(id, 1)
  }

  clearAllTimeout() {
    while(this._queue.length) {
      this._defaultClearTimeout(this._queue.pop())
    }
  }
}

let m = new TimeoutManager()
// 1. Using instance
/*
let id1 = m.setTimeout(() => console.log('hello'), 1000)
let id2 = m.setTimeout(() => console.log('bye'), 3000)
let id3 = m.setTimeout(() => console.log('it\'s me'), 5000)
console.log(m._queue)
m.clearAllTimeout()
console.log(m._queue)
*/

// 2. Cover default methods
setTimeout = m.setTimeout
clearTimeout = m.clearAllTimeout
clearAllTimeout = m.clearAllTimeout

let id1 = setTimeout(() => console.log('hello'), 1000)
let id2 = setTimeout(() => console.log('bye'), 3000)
let id3 = setTimeout(() => console.log('it\'s me'), 5000)
clearAllTimeout()