const serialize = root => {
  if (!root) {
    return '{}'
  }

  const queue = []
  queue.push(root)

  for (let i = 0; i < queue.length; ++i) {
    const node = queue[i]

    if (!node) {
      continue
    }

    queue.push(node.left)
    queue.push(node.right)
  }

  while (!queue[queue.length - 1]) {
    queue.pop()
  }

  let result = `{${queue[0].value}`
  for (let i = 1; i < queue.length; ++i) {
    const node = queue[i]

    if (node) {
      result += ',' + node.value
    } else {
      result += ',#'
    }
  }
  result += '}'

  return result
}

const deserialize = data => {
  let str = data.slice(1)
  str = str.slice(0, -1)
  const values = str.split(',')
  const root = {
    value: values[0],
  }
  const queue = []
  queue.push(root)

  let index = 0
  isLeftChild = true

  for (let i = 1; i < values.length; i++) {
    if (values[i] !== '#') {
      const node = {
        value: values[i],
      }

      if (isLeftChild) {
        queue[index].left = node
      } else {
        queue[index].right = node
      }

      queue.push(node)
    }

    if (!isLeftChild) {
      index++
    }

    isLeftChild = !isLeftChild
  }

  return root
}

const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    // right: {
    //   value: 5,
    //   left: null,
    //   right: null,
    // },
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
}

const data = serialize(tree)
console.log(data)

console.log(JSON.stringify(deserialize(data), null, 2))
