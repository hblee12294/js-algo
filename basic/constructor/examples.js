function User(name) {
  this.name = name
  this.isAdmin = false
}

let user = new User('Jack')

console.log(user.name)
console.log(user.isAdmin)

function BigUser() {
  this.name = 'John'
  return { name: 'Popo' }
}

console.log(new BigUser().name)

function SmallUser() {
  this.name = 'John'
  return
}

console.log(new SmallUser().name)