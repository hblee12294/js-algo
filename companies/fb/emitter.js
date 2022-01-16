// create emmiter
let isFunction = function(obj) {
  return typeof obj === 'function' || false
}

class EventEmitter {
  constructor() {
    this.listeners = new Map()
  }

  addListener(label, callback) {
    // set a callback queue
    this.listeners.has(label) || this.listeners.set(label, [])
    this.listeners.get(label).push(callback)
  }

  removeListener(label, callback) {
    let listeners = this.listeners.get(label)
    
    if (listeners && listeners.length) {
      this.listeners.set(label, listeners.filter(value => !(typeof value === 'function' && value === callback) ))
      return true
    }

    return false
  }

  emit(label, ...args) {
    let listeners = this.listeners.get(label)

    if (listeners && listeners.length) {
      listeners.forEach(listener => {
        listener(...args)
      })
    }
  }
}

class Observer {
  constructor(id, subject) {
    this.id = id
    this.subject = subject
    this.subject.addListener('change', data => this.onChange(data))
  }

  onChange(data) {
    console.log(`${ this.id } notified of change:`, data)
  }
}

let observable = new EventEmitter()

let [observer1, observer2] = [
  new Observer(1, observable),
  new Observer(2, observable)
]

observable.emit('change', { a:1 })