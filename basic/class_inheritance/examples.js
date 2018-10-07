// function f(phrase) {
//   return class {
//     sayHi() { console.log(phrase) }
//   }
// }

// class User extends f('Hello') {}

// new User().sayHi()


// class Animal {
//   constructor(name) {
//     this.speed = 0
//     this.name = name
//   }

//   run(speed) {
//     this.speed += speed
//     console.log(`${ this.name } runs with speed ${ this.speed }`)
//   }

//   stop() {
//     this.speed = 0
//     console.log(`${ this.name } stopped.`)
//   }
// }

// class Rabbit extends Animal {
//   hide() {
//     console.log(`${ this.name } hides`)
//   }

//   stop() {
//     super.stop()
//     this.hide()
//   }
// }

// let rabbit = new Rabbit('White rabbit')

// rabbit.run(5)
// rabbit.stop()

// let animal = {
//   name: 'Animal',
//   eat() {
//     console.log(`${ this.name } eats.`)
//   }
// }

// let rabbit = {
//   __proto__: animal,
//   eat() {
//     // Endless call here, this === longEar
//     this.__proto__.eat.call(this);
//   }
// }

// let longEar = {
//   __proto__: rabbit,
//   eat() {
//     this.__proto__.eat.call(this)
//   }
// }

// longEar.eat()


class PowerArray extends Array{
  isEmpty() {
    return this.length === 0
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50)
console.log(arr.isEmpty())

let filteredArr = arr.filter(item => item >= 10)
console.log(filteredArr)
console.log(filteredArr.constructor)
console.log(filteredArr.isEmpty()) // it works