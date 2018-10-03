let obj1 = { name: 'Lola' }
let obj2 = { name: 'Toda' }
let obj3 = { name: 'Orle' }
let arr = [obj1, obj2, obj3]

for (let obj of arr) {
  obj.name = 'Modified'
}

console.log(arr[1].name)

console.log('------------------')

let arr2 = Array.from(arr.map(item => item.name))
console.log(arr2)

for (let str of arr) {
  str = 'Not modified'
}
console.log(arr2)