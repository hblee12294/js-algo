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

export function postorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  const stack: TreeNode[] = [];
  let currentNode: TreeNode | null = root;
  let lastNode: TreeNode | null = null;

  while (currentNode || stack.length) {
    while (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }

    currentNode = stack.pop();
    if (!currentNode.right || currentNode.right === lastNode) {
      result.push(currentNode.val);
      lastNode = currentNode;
      currentNode = null;
    } else {
      stack.push(currentNode);
      currentNode = currentNode.right;
    }
  }

  return result;
}
