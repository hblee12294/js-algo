// 1
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

/* Test
console.table(tree)
reverseBTree(tree)
console.table(tree)
*/

// 2
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

/* Test
const mergedTree = mergeTwoTree(tree1, tree2)
console.table(mergedTree)
*/

// 3
function compareTree(node1, node2) {
  if (!node1 && !node2) return true

  if (node1 && node2) {
    return node1.data === node2.data && compareTree(node1.left, node2.left) && compareTree(node1.right, node2.right)
  }

  return false
}

/* Test
console.log(compareTree(tree1, tree1))
console.log(compareTree(tree1, tree2))
*/

// 4
let node2 = { data: 2, next: null }
let node4 = { data: 4, next: node2 }
let node3 = { data: 3, next: node4 }
node2.next = node3
let node1 = { data: 1, next: node2 }

function deleteNode(data, node, prev  = null) {
  if (node.visited) return

  node.visited = true

  if (node.data === data) {
    prev.next = node.next
  }

  deleteNode(data, node.next, node)
}

/* Test
deleteNode(3, node1)
console.table(node1)
*/

// 5
const arr = [6, 8, 2, 34]

function printNextGreater(nums) {
  let result = []
  nums1 = nums
  nums2 = nums

  for (let v of nums1) {
    const i = nums2.indexOf(v)
    let find = false
    for (let j = i + 1; j < nums2.length; j++) {
      if (nums2[j] > v) {
        result.push(nums2[j])
        find = true
        break
      }
    }
    if (!find) result.push(-1)
  }
  return result
}

/* Test
console.table(printNextGreater(arr))
*/