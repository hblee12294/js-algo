// --- Q1 Number of Islands ---

function numIslands(grid) {
  let res = 0
  if (!grid) return

  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[0].length; ++j) {
      if (grid[i][j] === 1) {
        searchIsland(grid, i, j)
        res++
      }
    }
  }

  function searchIsland(grid, i, j) {
    grid[i][j] = 0
  
    if (i > 0 && grid[i-1][j] === 1) searchIsland(grid, i - 1, j)
    if (j > 0 && grid[i][j-1] === 1) searchIsland(grid, i, j - 1)
    if (i < grid.length -1 && grid[i+1][j] === 1) searchIsland(grid, i + 1, j)
    if (j < grid[0].length - 1 && grid[i][j+1] === 1) searchIsland(grid, i, j + 1)
  }

  return res
}

/* Test Case */
let grid1 = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
]

let grid2 = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
]

console.log('--- Q1 ---')
console.log(numIslands(grid1))
console.log(numIslands(grid2))


// --- Q2 Diameter of Binary Tree ---

function diameterOfBinaryTree(root) {
  if(!root) return 0;
  let diameter = 0
  
  function findDiameter(root) {
      if(!root.left && !root.right) return 0
      let rDiameter = 0, lDiameter = 0;
      if(root.left) lDiameter = 1 + findDiameter(root.left)
      if(root.right) rDiameter = 1 + findDiameter(root.right)
      diameter = Math.max(diameter,lDiameter + rDiameter)
      return Math.max(lDiameter, rDiameter)
  }

  findDiameter(root)
  return diameter
}

/* Test Case*/
let tree1 = {
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
    left: null,
    right: null
  }
}

console.log('--- Q2 ---')
console.log(diameterOfBinaryTree(tree1))


 // --- Q3 Tiling Problem ---

function numberOfWaysToTile(boardColumns) {
  let n = boardColumns
  if (n === 0 || n === 1) return n

  let a = 0
  let b = 1

  while (n > 0) {
    let tmp = b
    b = a + b
    a = tmp
    --n
  }

  return b
}

/* Test Case */

let boardsNum1 = 3
let boardsNum2 = 4

console.log('--- Q3 ---')
console.log(numberOfWaysToTile(boardsNum1))
console.log(numberOfWaysToTile(boardsNum2))


// --- Q4 ---

function checkValidString(s) {
  let lo = 0, hi = 0
  for (let c of s) {
    lo += c === '(' ? 1 : -1
    hi += c !== ')' ? 1 : -1

    if (hi < 0) break
    lo = Math.max(lo, 0)
  }

  return lo === 0
}

/* Test Case */

let str1 = '()'
let str2 = '(*)'
let str3 = '(*))'
let str4 = '('

console.log('--- Q4 ---')
console.log(checkValidString(str1))
console.log(checkValidString(str2))
console.log(checkValidString(str3))
console.log(checkValidString(str4))