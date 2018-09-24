let id = Symbol('id')

let user = {
  name: 'jogn',
  [id]: 123
}

console.log(user.id)
console.log(user[id])

// read from the global registry
let idA = Symbol.for("id")  // if the symbol did not exist, it is created

// read it again
let idB = Symbol.for("id")

// the same symbol
console.log( idA === idB ) // true


let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name from symbol
console.log( Symbol.keyFor(sym) ); // name
console.log( Symbol.keyFor(sym2) ); // id
