var deleteDuplicates = function(head) {
  let p = head;
  while(p && p.next) {
    if(p.val === p.next.val) {
      p.next = p.next.next
    } else {
      p = p.next;
    }
  }
  return head;
};

// 遍历链表 
// 然后比较前后两个节点的值 把相同的删掉就好