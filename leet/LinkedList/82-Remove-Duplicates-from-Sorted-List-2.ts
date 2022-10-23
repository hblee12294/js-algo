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

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  const dummy: ListNode = {
    val: -1,
    next: head,
  };
  head = dummy;

  while (head.next && head.next.next) {
    if (head.next.val === head.next.next.val) {
      const value = head.next.val;

      while (head.next && head.next.val === value) {
        head.next = head.next.next;
      }
    } else {
      head = head.next;
    }
  }

  return dummy.next;
}
