// node1 -> node2 -> node3 -> node4
//             |---------------|
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

deleteNode(3, node1)
console.table(node1)