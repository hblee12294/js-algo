let arr = ['I', 'go', 'home']
delete arr[1]

console.log(arr[1])
console.log(arr.length)

let arr2 = [1, 2]
let arrayLike = {
  0: 'something',
  1: 'else',
  [Symbol.isConcatSpreadable]: true,
  length: 2
}

console.log(arr2.concat(arrayLike))

let arr3 = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2)
console.log(arr3)

console.log(typeof [])
console.log(Array.isArray([]))

let user = {
  age: 18,
  younger(otherUser) {
    return otherUser.age < this.age;
  }
};

let users = [
  {age: 12},
  {age: 16},
  {age: 32}
];

// find all users younger than user
let youngerUsers = users.filter(user.younger, user);

console.log(youngerUsers.length); // 2