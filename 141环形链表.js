var hasCycle = function(head) {
  let p1 = head;
  let p2 = head;
  while(p1 && p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    if(p1 === p2) {
      return true;
    }
  }
  return false;
};

// 双指针一快一慢遍历链表，如果他们能相遇表示是有环的 要是没有相遇的情况 表示无环