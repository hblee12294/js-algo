let user = {
  name: 'john',
  money: 1000,
  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${ hint }`)
    return hint === 'string' ? `{ name: '${ this.name }' }` : this.money
  }
}

console.log(user)
console.log(+user)
console.log(user + 500)

console.log('-----')

let user2 = {
  name: 'john',
  money: 1000,

  toString() {
    return `{ name: '${ this.name }' }`
  },

  valueOf() {
    return this.money
  }
}

console.log(user2)
console.log(+user2)
console.log(user2 + 500)