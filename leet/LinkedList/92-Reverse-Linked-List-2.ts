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

export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (!head) return head;

  const dummy: ListNode = {
    val: -1,
    next: head,
  };
  let preLeft = dummy;

  for (let i = 0; i < left - 1; ++i) {
    preLeft = preLeft.next;
  }

  head = preLeft.next;
  let tmp: ListNode | null;

  for (let i = left; i < right; ++i) {
    tmp = preLeft.next;
    preLeft.next = head.next;
    head.next = preLeft.next.next;
    preLeft.next.next = tmp;
  }

  return dummy.next;
}
