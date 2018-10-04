let animal = {
  eats: true
}

let rabbit = Object.create(animal)

console.log(rabbit.eats)
console.log(Object.getPrototypeOf(rabbit) === animal)
Object.setPrototypeOf(rabbit, {})

let animals2 = {
  eats: true
}

let rabbit2 = {
  jumps: true,
  __proto__: animal
}

for (let prop in rabbit2) {
  let isOwn = rabbit2.hasOwnProperty(prop)
  console.log(`${ prop }: ${ isOwn }`)
}