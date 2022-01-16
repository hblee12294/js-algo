function get(obj, query) {
  return eval(`obj.${query}`)
}

function get(obj, query) {
  const properties = query.split('.')

  return properties.reduce((prev, cur) => (prev ? prev[cur] : prev), obj)
}

const obj = {
  a: {
    b: {
      c: 'hahahah',
    },
  },
  d: {
    e: 4,
  },
  f: null,
}

// console.log(JSON.stringify(get(obj, 'a.b.c')))
console.log(JSON.stringify(get(obj, 'f')))
