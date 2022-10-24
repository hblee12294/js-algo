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

export function reverseList(head: ListNode | null): ListNode | null {
  let pre: ListNode | null = null;
  let tmp: ListNode | null;

  while (head) {
    tmp = head.next;
    head.next = pre;
    pre = head;
    head = tmp;
  }

  return pre;
}
