let tree = {
  data: 4,
  left: {
    data: 2,
    left: {
      data: 1,
      left: null,
      right: null
    },
    right: {
      data: 3,
      left: null,
      right: null
    }
  },
  right: {
    data: 7,
    left: {
      data: 6,
      left: null,
      right: null
    },
    right: {
      data: 9,
      left: null,
      right: null
    }
  }
}

function reverseBTree(node) {
  if (!node) return

  let temp = node.left
  node.left = reverseBTree(node.right)
  node.right = reverseBTree(temp)

  return node
}

console.table(tree)
reverseBTree(tree)
console.table(tree)