/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let step1 = head, step2 = head;
    while(step2 && step2.next) {
      step1 = step1.next;
      step2 = step2.next.next;
    }
    return step1;
};
