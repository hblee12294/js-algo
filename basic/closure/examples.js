function f() {
  let value = Math.random()
  return function () { console.log(value) }
}

let arr = [f(), f(), f()]

arr[0]()
arr[1]()