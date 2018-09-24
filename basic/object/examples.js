console.log(undefined === undefined)

let fruit = 'apple'
let bag = {
  [fruit + 'Computers']: 5
}

console.log(bag.appleComputers)

console.log('---')

let codes = {
  '49': 'sdef',
  '41': 'sdfd',
  '44': 'g3sfw',
  '1': 'fw3'
}

for (const code in codes) {
  console.log(code)
}

console.log('---')

let user = {
  name: 'john',
  surname: 'lora'
}

user.age = 45

for (const prop in user) {
  console.log(prop)
}

console.log('---')

user = { name: 'john' }
let permission1 = { canView: true }
let permission2 = { canEdit: true }
Object.assign(user, permission1, permission2)

console.log(user)