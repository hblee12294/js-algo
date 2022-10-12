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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root)
    return {
      val: val,
      left: null,
      right: null,
    };

  const stack: TreeNode[] = [];
  stack.push(root);

  while (stack.length) {
    const node = stack.pop();

    const nextNode = val < node.val ? node.left : node.right;

    if (nextNode) {
      stack.push(nextNode);
    } else {
      const nextValue = {
        val: val,
        left: null,
        right: null,
      };

      val < node.val ? (node.left = nextValue) : (node.right = nextValue);

      break;
    }
  }

  return root;
}
