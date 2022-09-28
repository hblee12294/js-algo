/**
 * @param root: A Tree
 * @return: Preorder in ArrayList which contains node values.
 */

// Divde & Conquer
const preorderTraversal = root => {
  // write your code here
  const result = []

  if (!root) {
    return []
  }

  // Divide
  const left = preorderTraversal(root.left)
  const right = preorderTraversal(root.right)

  // Conquer
  result.push(root.value)
  result.push(...left)
  result.push(...right)

  return result
}

// Traverse
const preorderTraversal2 = root => {
  const stack = []
  const result = []

  if (!root) {
    return result
  }

  stack.push(root)
  while (stack.length) {
    const node = stack.pop()
    result.push(node.value)

    if (node.right) {
      stack.push(node.right)
    }

    if (node.left) {
      stack.push(node.left)
    }
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

console.log(preorderTraversal(tree))
console.log(preorderTraversal2(tree))
