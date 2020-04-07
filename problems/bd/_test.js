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

// Preorder
function preorderRecursive(root) {
  const result = []

  if (!root) return []

  const left = preorderRecursive(root.left)
  const right = preorderRecursive(root.right)

  result.push(root.value)
  result.push(...left)
  result.push(...right)

  return result
}

console.log(JSON.stringify(preorderRecursive(tree)))

function preorderStack(root) {
  const result = []
  const stack = []

  if (!root) return result

  stack.push(root)
  while (stack.length) {
    const head = stack.pop()
    result.push(head.value)

    if (head.right) {
      stack.push(head.right)
    }

    if (head.left) {
      stack.push(head.left)
    }
  }

  return result
}

console.log(JSON.stringify(preorderStack(tree)))

// Inorder
function inorderRecursive(root) {
  const result = []

  if (!root) return []

  const left = inorderRecursive(root.left)
  const right = inorderRecursive(root.right)

  result.push(...left)
  result.push(root.value)
  result.push(...right)

  return result
}

console.log(JSON.stringify(inorderRecursive(tree)))

function inorderStack(root) {
  const result = []
  const stack = []
  let currentNode = root

  if (!root) return result

  while (currentNode || stack.length) {
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

console.log(JSON.stringify(inorderStack(tree)))

// Post
function postorderRecursive(root) {
  const result = []

  if (!root) return result

  const left = postorderRecursive(root.left)
  const right = postorderRecursive(root.right)

  result.push(...left)
  result.push(...right)
  result.push(root.value)

  return result
}

console.log(JSON.stringify(postorderRecursive(tree)))

function postorderStack(root) {
  const result = []
  const stack = []
  let currentNode = root
  let lastNode = null

  if (!root) return result

  while (currentNode || stack.length) {
    while (currentNode) {
      stack.push(currentNode)
      currentNode = currentNode.left
    }

    currentNode = stack.pop()

    // 有右子，且没访问过，拿出来的放回去
    if (currentNode.right && currentNode.right !== lastNode) {
      stack.push(currentNode)
      currentNode = currentNode.right
    } else {
      result.push(currentNode.value)
      lastNode = currentNode
      currentNode = null
    }

    // // 1. 当前节点无右子 或 2. 右子和上次的当前节点为同一个(中间点, 右点已经访问过了)
    // if (!currentNode.right || currentNode.right === lastNode) {
    //   // 可以将当前节点值加入result了
    //   result.push(currentNode.value)
    //   lastNode = currentNode
    //   // 避免下一轮检查右子
    //   currentNode = null
    // } else {
    //   // 有右子，且没访问过，拿出来的放回去
    //   stack.push(currentNode)
    //   // 开始在下一轮检查右子
    //   currentNode = currentNode.right
    // }
  }

  return result
}

console.log(JSON.stringify(postorderStack(tree)))

// Level order
function levelOrder(root) {
  const result = []
  const queue = []

  if (!root) return result

  queue.push(root)
  while (queue.length) {
    const thisLevel = []
    const size = queue.length

    for (let i = 0; i < size; ++i) {
      const head = queue.shift()
      thisLevel.push(head.value)

      if (head.left) {
        queue.push(head.left)
      }

      if (head.right) {
        queue.push(head.right)
      }
    }

    result.push(thisLevel)
  }

  return result
}

console.log(JSON.stringify(levelOrder(tree)))
