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

export function removeElements(
  head: ListNode | null,
  val: number
): ListNode | null {
  if (!head) return null;

  const dummy: ListNode = {
    val: -1,
    next: head,
  };
  head = dummy;

  while (head.next) {
    if (head.next.val === val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }

  return dummy.next;
}
