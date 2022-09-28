/**
 * @param root: A Tree
 * @return: Level order a list of lists of integer
 */
const levelOrder = root => {
  // write your code here
  const result = []

  if (!root) {
    return result
  }

  const queue = []
  queue.push(root)

  while (queue.length) {
    const level = []
    const size = queue.length

    for (let i = 0; i < size; ++i) {
      const head = queue.shift()
      level.push(head.value)

      if (head.left) {
        queue.push(head.left)
      }
      if (head.right) {
        queue.push(head.right)
      }
    }

    result.push(level)
  }

  return result
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
    right: {
      value: 5,
      left: null,
      right: null,
    },
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

console.table(levelOrder(tree))
