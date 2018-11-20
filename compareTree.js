let tree1 = {
  data: 1,
  left: {
    data: 3,
    left: {
      data: 5,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    data: 2,
    left: null,
    right: null
  }
}

let tree2 = {
  data: 2,
  left: {
    data: 1,
    left: null,
    right: {
      data: 4,
      left: null,
      right: null
    }
  },
  right: {
    data: 3,
    left: null,
    right: {
      data: 7,
      left: null,
      right: null
    }
  }
}

function compareTree(node1, node2) {
  if (!node1 && !node2) return true

  if (node1 && node2) {
    return node1.data === node2.data && compareTree(node1.left, node2.left) && compareTree(node1.right, node2.right)
  }

  return false
}

console.log(compareTree(tree1, tree1))
console.log(compareTree(tree1, tree2))