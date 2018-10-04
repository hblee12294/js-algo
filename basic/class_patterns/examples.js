// Functional class pattern

function User(name, birthday) {
  function calcAge() {
    return new Date().getFullYear() - birthday.getFullYear()
  }

  this.sayHi = function () {
    console.log(name + ', ' + calcAge())
  }
}

let user = new User('John', new Date(2000, 0, 1))
user.sayHi()

// Factory class pattern

function User2(name, birthday) {
  function calcAge() {
    return new Date().getFullYear() - birthday.getFullYear()
  }

  return {
    sayHi() {
      console.log(name + ', ' + calcAge())
    }
  }
}

let user2 = User2('John', new Date(2000, 0, 1))
user2.sayHi()

// Prototype based classes

function User3(name, birthday) {
  this._name = name
  this._birthday = birthday
}

User.prototype._calcAge = function () {
  return new DataCue().getFullYear() - this._birthday.getFullYear()
}

User.prototype.sayHi = function () {
  console.log(this._name + ', ' + this._calcAge())
}

let user3 = new User('John', new Date(2000, 0, 1))
user3.sayHi()

// Prototype based 2

function Animal(name) {
  this.name = name
}

Animal.prototype.eat = function () {
  console.log(this.name + ' eats')
}

function Rabbit(name) {
  this.name = name
} 

Rabbit.prototype.jump = function () {
  console.log(this.name + ' jumps')
}

Rabbit.prototype.__proto__ = Animal.prototype

let rabbit = new Rabbit('Black')
rabbit.eat()
rabbit.jump()