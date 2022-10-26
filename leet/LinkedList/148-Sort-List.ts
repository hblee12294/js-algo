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

export function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  const mid = findMiddle(head);

  const right = sortList(mid.next);
  mid.next = null;
  const left = sortList(head);

  return merge(left, right);
}

function findMiddle(head: ListNode) {
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

function merge(head1: ListNode | null, head2: ListNode | null) {
  const dummy = {
    val: -1,
    next: null,
  };
  let tail = dummy;

  while (head1 && head2) {
    if (head1.val < head2.val) {
      tail.next = head1;
      head1 = head1.next;
    } else {
      tail.next = head2;
      head2 = head2.next;
    }

    tail = tail.next;
  }

  if (head1) {
    tail.next = head1;
  } else {
    tail.next = head2;
  }

  return dummy.next;
}
