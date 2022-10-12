/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export function kthSmallest(root: TreeNode | null, k: number): number {
  if (!root) return -1;

  const stack: TreeNode[] = [];
  let currentNode: TreeNode = root;
  let counter = 0;

  while (currentNode || stack.length) {
    while (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }

    currentNode = stack.pop();
    if (++counter === k) {
      return currentNode.val;
    }

    currentNode = currentNode.right;
  }

  return -1;
}
