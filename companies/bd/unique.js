function unique(arr) {
  return Array.from(new Set(arr))
}

function uniqueMap(arr) {
  const map = new Map()

  arr.forEach(item => {
    map.set(item, 0)
  })

  return Array.from(map.keys())
}

const input = [
  1,
  1,
  'true',
  'true',
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  'NaN',
  0,
  0,
  'a',
  'a',
  {},
  {},
]

console.log(JSON.stringify(unique(input)))
console.log(JSON.stringify(uniqueMap(input)))
