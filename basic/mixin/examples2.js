let eventMixin = {

  on(eventName, handler) {
    if (!this._eventHandlers) {
      this._eventHandlers = {}
    }
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = []
    }
    this._eventHandlers[eventName].push(handler)
  },

  off(eventName, handler) {
    let handlers = this._eventHandlers && this._eventHandlers[eventName]
    if (!handlers) return

    for (let i = 0; i < handlers.length; ++i) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1)
      }
    }
  },

  trigger(eventName, ...args) {
    if (!this._eventHandlers || !this._eventHandlers[eventName]) {
      return
    }

    this._eventHandlers[eventName].forEach(handler => handler.apply(this, args))
  }
}

class Menu {
  select(value) {
    this.trigger('select', value)
  }
}

Object.assign(Menu.prototype, eventMixin)

let menu = new Menu()

menu.on('select', value => console.log('value selected: ' + value))
menu.select('123')