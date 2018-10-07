let sayHiMixin = {
  sayHi() {
    console.log(`Hello ${ this.name }`)
  },
  sayBye() {
    console.log(`Bye ${ this.name }`)
  }
}

class User {
  constructor(name) {
    this.name = name
  }
}

Object.assign(User.prototype, sayHiMixin)
new User('Dude').sayHi()