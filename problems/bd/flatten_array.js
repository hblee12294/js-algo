function flatten(arr) {
  return arr.reduce(
    (prev, cur) => prev.concat(Array.isArray(cur) ? flatten(cur) : cur),
    [],
  )
}

input = [[12, 2, 43], 3, [343, 23], [454, [342, [3243, 243]], [234, 3453]]]

console.log(JSON.stringify(flatten(input)))
