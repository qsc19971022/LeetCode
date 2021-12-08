/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
  let head1 = headA;
  let head2 = headB;
  while(head1 !== head2) {
    head1 = !head1 ? headB : head1.next;
    head2 = !head2 ? headA : head2.next;
  }
  return head1;
};