/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

interface ListNode {
  val: number;
  next: ListNode | null;
}

export function partition(head: ListNode | null, x: number): ListNode | null {
  const dummyLeft: ListNode = {
    val: -1,
    next: null,
  };
  let headLeft = dummyLeft;
  const dummyRight: ListNode = {
    val: -1,
    next: null,
  };
  let headRight = dummyRight;

  while (head) {
    if (head.val < x) {
      headLeft.next = head;
      headLeft = head;
    } else {
      headRight.next = head;
      headRight = head;
    }

    head = head.next;
  }

  headLeft.next = dummyRight.next;
  headRight.next = null;

  return dummyLeft.next;
}
