class Rabbit {}
let rabbit = new Rabbit()

console.log(rabbit instanceof Rabbit)
console.log(rabbit instanceof Object)

let arr = [1, 2, 3]
console.log(arr instanceof Array)

let objectToString = Object.prototype.toString

let arr2 = []
console.log(objectToString.call(arr2)) 

let user = {
  [Symbol.toStringTag]: 'User'
}

console.log(user.toString())