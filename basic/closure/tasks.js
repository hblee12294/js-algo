function sum(x) {
  return function (y) {
    return x + y
  }
}

console.log(sum(1)(-5))

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b
  }
}

function inArray(arr) {
  return function (x) {
    return arr.includes(x)
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr.filter(inBetween(3, 6)))
console.log(arr.filter(inArray([1, 2, 10])))

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
]

function byField(prop) {
  return function (a, b) {
    return a[prop] > b[prop] ? 1 : -1
  }
}

console.log(users.sort(byField('name')))
console.log(users.sort(byField('age')))