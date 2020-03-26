/**
 * @param root: A Tree
 * @return: inorder in ArrayList which contains node values.
 */

// Divde & Conquer
const inorderTraversal = root => {
  // write your code here
  const result = []

  if (!root) {
    return []
  }

  const left = inorderTraversal(root.left)
  const right = inorderTraversal(root.right)

  result.push(...left)
  result.push(root.value)
  result.push(...right)

  return result
}

// Traverse
const inorderTraversal2 = root => {
  const stack = []
  const result = []
  let currentNode = root

  while (currentNode || stack.length) {
    // Most left node
    while (currentNode) {
      stack.push(currentNode)
      currentNode = currentNode.left
    }

    currentNode = stack.pop()
    result.push(currentNode.value)
    currentNode = currentNode.right
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

console.log(inorderTraversal(tree))
console.log(inorderTraversal2(tree))
