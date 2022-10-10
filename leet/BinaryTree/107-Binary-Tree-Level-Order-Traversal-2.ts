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

export function levelOrderBottom(root: TreeNode | null): number[][] {
  const result: number[][] = [];

  if (!root) return result;

  const queue: TreeNode[] = [];
  queue.push(root);

  while (queue.length) {
    const len = queue.length;
    const levelResult: number[] = [];

    for (let i = 0; i < len; i++) {
      const head = queue.shift();
      levelResult.push(head.val);

      if (head.left) {
        queue.push(head.left);
      }

      if (head.right) {
        queue.push(head.right);
      }
    }

    result.push(levelResult);
  }

  return result.reverse();
}
