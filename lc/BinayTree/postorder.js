/**
 * @param root: A Tree
 * @return: postorder in ArrayList which contains node values.
 */

// Divde & Conquer
const postorderTraversal = root => {
  // write your code here
  const result = []

  if (!root) {
    return []
  }

  const left = postorderTraversal(root.left)
  const right = postorderTraversal(root.right)

  result.push(...left)
  result.push(...right)
  result.push(root.value)

  return result
}

// Traverse
const postorderTraversal2 = root => {
  const stack = []
  const result = []
  let currentNode = root
  let last = null

  while (currentNode || stack.length) {
    // Most left node
    while (currentNode) {
      stack.push(currentNode)
      currentNode = currentNode.left
    }

    currentNode = stack.pop()
    if (!currentNode.right || currentNode.right === last) {
      result.push(currentNode.value)
      last = currentNode
      currentNode = null
    } else {
      stack.push(currentNode)
      currentNode = currentNode.right
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

console.log(postorderTraversal(tree))
console.log(postorderTraversal2(tree))
