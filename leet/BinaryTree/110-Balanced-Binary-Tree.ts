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

export function isBalanced(root: TreeNode | null): boolean {
  return maxDepth(root) !== -1;
}

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1;
  }

  return Math.max(left, right) + 1;
}
