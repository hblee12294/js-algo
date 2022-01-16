// 1 Write a function to see if two link List intersect

// 1_0 -> 1_1 -> 0_0 -> 0_1
//        2_0 ----|
// 3_0 -> 3_1
const node0_1 = { name: 'node0_1', next: null }     // Tail
const node0_0 = { name: 'node0_0', next: node0_1 }
const node1_1 = { name: 'node1_1', next: node0_0 }
const node1_0 = { name: 'node1_0', next: node1_1 }  // Head1
const node2_0 = { name: 'node2_0', next: node0_0 }  // Head2
const node3_1 = { name: 'node3_1', next: null }
const node3_0 = { name: 'node3_0', next: node3_1}

function getListLength(list) {
  let length = 0

  while(list) {
    list = list.next
    ++length
  } 

  return length 
}

function checkIntersect(listA, listB) {
  let pA = 0, pB = 0
  let lenA = getListLength(listA), lenB = getListLength(listB)
  let lenDiff = lenA > lenB ? lenA - lenB : lenB - lenA

  if (lenA > lenB) {
    while (pA !== lenDiff) {
      listA = listA.next
      ++pA
    }
  } else {
    while (pB !== lenDiff) {
      listB = listB.next
      ++pB
    }
  }

  while (listA && listB) {
    if (listA.name === listB.name) return listA.name + ' ' + listB.name
    listA = listA.next
    listB = listB.next
  }

  return false
}

// console.log(checkIntersect(node1_0, node2_0))
// console.log(checkIntersect(node3_0, node1_0))


// 2 Write class for double link list and write a function to add nodes in sorted manner

// node1 -> node2 -> node3 -> node4
//             |---------------|
let node2 = { name: 'node2', next: null }
let node4 = { name: 'node4', next: node2 }
let node3 = { name: 'node3', next: node4 }
node2.next = node3
let node1 = { name: 'node1', next: node2 }

function checkCircle(list) {
  let fastHead = list, slowHead = list
  
  while ((slowHead = slowHead.next) && (fastHead = fastHead.next.next)) {
    console.log(slowHead.name + ' ' + fastHead.name)
    if (fastHead.name === slowHead.name) return true
  }

  return false
}

console.log(checkCircle(node1))
console.log(checkCircle(node1_0))