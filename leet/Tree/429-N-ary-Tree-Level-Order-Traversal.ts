/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

interface Node {
  val: number;
  children: Node[];
}

export function levelOrder(root: Node | null): number[][] {
  const result: number[][] = [];

  if (!root) return result;

  const queue: Node[] = [];
  queue.push(root);

  while (queue.length) {
    const len = queue.length;
    const levelResult: number[] = [];

    for (let i = 0; i < len; i++) {
      const head = queue.shift();
      levelResult.push(head.val);

      if (head.children) {
        queue.push(...head.children);
      }
    }

    result.push(levelResult);
  }

  return result;
}
