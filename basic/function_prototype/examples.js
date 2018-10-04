let animal = {
  eats: true
}

function Rabbit(name) {
  this.name = name
}

Rabbit.prototype = animal
let rabbit = new Rabbit('White')
console.log(rabbit.eats)

function Rabbit2() {}
/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/
console.log(Rabbit2.prototype.constructor === Rabbit2)

function Rabbit3 () {}
Rabbit3.prototype = {
  jumps: true
}

let rabbit3 = new Rabbit3()
console.log(rabbit3.constructor === Rabbit3)
console.log(rabbit3.jumps)