let user = {
  name: 'John',
  surname: 'Smith',
  get fullname() {
    return `${ this.name } ${ this.surname }`
  },
  set fullname(value) {
    [this.name, this.surname] = value.split(' ')
  }
}

console.log(user.fullname)
user.fullname = 'alan walker'
console.log(user.fullname)

let user2 = {
  get name() {
    return this._name
  },
  set name(value) {
    if (value.length < 4) {
      console.log('name is too short')
      return
    }
    this._name = value
  }
}

user2.name = 'Peter '
console.log(user2.name)
console.log(user2._name)
user2.name = 'lo'