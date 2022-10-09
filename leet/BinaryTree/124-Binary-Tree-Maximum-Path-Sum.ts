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

export function maxPathSum(root: TreeNode | null): number {
  return helper(root).maxSum;
}

function helper(root: TreeNode | null): {
  singleSum: number;
  maxSum: number;
} {
  if (!root) {
    return {
      singleSum: 0,
      maxSum: -Infinity,
    };
  }

  const leftSums = helper(root.left);
  const rightSums = helper(root.right);

  let singleSum = Math.max(leftSums.singleSum, rightSums.singleSum) + root.val;
  singleSum = Math.max(singleSum, 0);

  const maxSum = Math.max(
    leftSums.maxSum,
    rightSums.maxSum,
    leftSums.singleSum + rightSums.singleSum + root.val
  );

  return {
    singleSum,
    maxSum,
  };
}
