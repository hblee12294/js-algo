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

export function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true;

  const stack: TreeNode[] = [];
  let currentNode = root;
  let previousNode: TreeNode = null;

  while (currentNode || stack.length) {
    while (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }

    currentNode = stack.pop();

    if (previousNode && previousNode.val >= currentNode.val) return false;

    previousNode = currentNode;
    currentNode = currentNode.right;
  }

  return true;
}
