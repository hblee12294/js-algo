// 1.  Print Bottom View of Binary Tree in order from Left to right

const tree = {
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

function bottomView(root) {
  if (!Object.keys(root).length) return

  let hd = 0
  let map = new Map()
  let queue = []

  root.hd = hd
  queue.push(root)

  while (queue.length > 0) {
    let tNode = queue[queue.length-1]
    queue.pop()

    hd = tNode.hd
    map[hd] = tNode.value

    if (tNode.left) {
      tNode.left.hd = hd - 1
      queue.push(tNode.left)
    }

    if (tNode.right) {
      tNode.right.hd = hd + 1
      queue.push(tNode.right)
    }
  }
  console.log(map)
}

// bottomView(tree)

// 2. Get Max Width of a Tree
function getMaxWidth(root) {
  if (!Object.keys(root).length) return

  let result = 0
  let queue = []
  queue.push(root)

  while (queue.length > 0) {
    let count = queue.length
    result = count > result ? count : result

    while (count--) {
      let tNode = queue[queue.length-1]
      queue.pop()

      if (tNode.left) queue.push(tNode.left)
      if (tNode.right) queue.push(tNode.right)
    }
  }

  console.log(result)
}

// getMaxWidth(tree)

// 3. Print top view of tree with no repetition of the root.
function topView(root) {
  if (!Object.keys(root).length) return

  let queue = []
  let map = new Map()
  let hd = 0
  root.hd = hd

  queue.push(root)

  while (queue.length > 0) {
    hd = root.hd

    if (!map[hd]) map[hd] = root.value

    if (root.left) {
      root.left.hd = hd - 1
      queue.push(root.left)
    }
    if (root.right) {
      root.right.hd = hd + 1
      queue.push(root.right)
    }

    queue.pop()
    root = queue[queue.length - 1]
  }

  console.log(queue)
}

// topView(tree)