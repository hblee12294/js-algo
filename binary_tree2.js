let tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null
    },
    right: {
      value: 5,
      left: null,
      right: null
    }
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 7,
      left: null,
      right: null,
    }
  }
}

// 1. Print all Full Nodes in a binary tree
function findFullNode(root) {
  if (root) {
    findFullNode(root.left)
    if (root.left && root.right) {
      console.log(root.value)
    }
    findFullNode(root.right)
  }
}

// 2. findFullNode(tree)

function printMiddleLevel(root) {
  let aRoot = root
  let bRoot = root

  function func (an, bn) {
    if (an === null || bn === null) return

    if (bn.left === null && bn.right === null) {
      console.log(an.value)
      return
    }

    func(an.left, bn.left.left)
    func(an.right, bn.right.right)
  }

  func(aRoot, bRoot)
}

// printMiddleLevel(tree)

// 3. Check if all Leaves are at same level

function checkSameLevel(root) {
  let leafLevel = 0

  function func(root, level) {
    if (!Object.keys(root)) return true

    if (root.left === null && root.right === null) {
      if (leafLevel === 0) {
        leafLevel = level
        return true
      }

      return level === leafLevel
    }
    return func(root.left, level + 1) && func(root.right, level + 1)
  }

  console.log(func(root, 0))
}

// checkSameLevel(tree)