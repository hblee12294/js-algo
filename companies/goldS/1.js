let json = {
  1: 'a',
  2: 'b',
  3: {
    4: 'd',
    5: 'e'
  }
}

// let obj = JSON.parse(JSON.stringify(json))

// console.log(json)
// console.dir(json)
// console.dir(obj)

function getValues(obj) {
  let result = []

  function func (obj) {
    let values = Object.values(obj)

    if (!values.length) return

    for (let value of values) {
      if (typeof value === 'object') {
        func(value)
      } else {
        result.push(value)
      }
    }
  }
  func(obj)

  return result
}

console.dir(getValues(json))