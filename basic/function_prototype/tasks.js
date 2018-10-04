function Rabbit() {}
Rabbit.prototype = {
  eats: true
}

let rabbit = new Rabbit()

// console.log(rabbit.eats)

// 1
// Rabbit.prototype = {}
// console.log(rabbit.eats)

// 2
// Rabbit.prototype.eats = false
// console.log(rabbit.eats)

// 3
// delete rabbit.eats
// console.log(rabbit.eats)

delete Rabbit.prototype.eats
console.log(rabbit.eats)