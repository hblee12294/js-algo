let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log(map.get(1)); // 'num1'
console.log(map.get('1')); // 'str1'

console.log( map.size ); // 3

map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');

console.log(map.size)

map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

map = new Map(Object.entries({
  name: 'John',
  age: 30,
  1: 4
}))

map.forEach((value, key) => {
  console.log(`key: ${ key }, value: ${ value }`)
})

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

set.forEach((value, valueAgain, set) => {
  console.log(value.name + ': ' + valueAgain.name)
})

Array.from(set.entries()).map((item) => console.log(item))

let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // works fine (object key)

weakMap.set("test", "Whoops"); // Error, because "test" is a primitive