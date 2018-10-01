let sum = new Function('a', 'b', 'return a + b') 
console.log(sum(1, 2))

let sayHi = new Function('console.log("Hello")')
sayHi()

let sum2 = new Function('a,b', 'return a + b')
console.log(sum2(1, 2))

let sum3 = new Function('a , b', 'return a + b')
console.log(sum3(1, 2))