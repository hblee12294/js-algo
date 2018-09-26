let arr = ['dada', 'toto']
let [first, second] = arr

console.log(first)
console.log(second)

let [a, b, c] = 'abc'
console.log(b)
let [one, two, three] = new Set([1, 2, 3])
console.log(two)

let user = {
  name: 'Jogn',
  age: 34
}

for (let [key, value] of Object.entries(user)) {
  console.log(`key: ${ key }, value: ${ value }`)
}

let [n1, n2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]
console.log(rest.length)

// let options = {
//   title: 'menu',
//   width: 100,
//   height: 200
// }

// let { width: w, height: h, title } = options
// console.log(w)

let options2 = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true    // something extra that we will not destruct
};

// destructuring assignment on multiple lines for clarity
let {
  size: { // put size here
    width,
    height
  },
  items: [item1, item2], // assign items here
  title = "Menu" // not present in the object (default value is used)
} = options2;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut