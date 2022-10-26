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

/**
 Do not return anything, modify head in-place instead.
 */
interface ListNode {
  val: number;
  next: ListNode | null;
}

export function reorderList(head: ListNode | null): void {
  if (!head || !head.next) return;

  const mid = findMiddle(head);
  const tail = reverse(mid.next);
  mid.next = null;

  merge(head, tail);
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

function reverse(head: ListNode) {
  let newHead: ListNode | null = null;

  while (head) {
    const tmp = head.next;
    head.next = newHead;
    newHead = head;
    head = tmp;
  }

  return newHead;
}

function merge(head1: ListNode | null, head2: ListNode | null) {
  let dummy = {
    val: -1,
    next: null,
  };
  let counter = 0;

  while (head1 && head2) {
    if (counter % 2 === 0) {
      dummy.next = head1;
      head1 = head1.next;
    } else {
      dummy.next = head2;
      head2 = head2.next;
    }
    dummy = dummy.next;
    counter++;
  }

  if (head1) {
    dummy.next = head1;
  } else {
    dummy.next = head2;
  }
}
