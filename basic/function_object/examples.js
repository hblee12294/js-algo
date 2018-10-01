function sayHi(a) {
  console.log('hi')
}

console.log(sayHi.name)
console.log(sayHi.length)

function sayHo() {
  console.log('HO ' + sayHo.counter)
  sayHo.counter++
}
sayHo.counter = 0

sayHo()
sayHo()
sayHo()

console.log('--------')
let sayYeh = function func(who) {
  if (who) {
    console.log('Hello, ' + who)
  } else {
    func('guest')
  }
}

sayYeh()
func()