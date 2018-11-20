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

function mergeTwoTree(node1, node2) {
  if (!node1) return node2
  if (!node2) return node1

  let temp = {
    data: node1.data + node2.data
  }

  temp.left = mergeTwoTree(node1.left, node2.left)
  temp.right = mergeTwoTree(node1.right, node2.right)

  return temp
}

const mergedTree = mergeTwoTree(tree1, tree2)
console.table(mergedTree)