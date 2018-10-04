let arr = [1, 2, 3]
console.log(arr.__proto__ === Array.prototype)
console.log(arr.__proto__.__proto__ === Object.prototype)
console.log(arr.__proto__.__proto__.__proto__)

String.prototype.show = function() {
  console.dir(this)
}
"BOOM".show()

function showArgs() {
  console.log([].join.call(arguments, '-'))
}

showArgs(1, 2, 3)