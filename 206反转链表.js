var reverseList = function(head) {
  let p1 = head;
  let p2 = null;
  while(p1) {
      const temp = p1.next
      p1.next = p2;
      p2 = p1;
      p1 = temp;
  }
  return p2;

};

// 思路：
// 1.先思考如何反转两个节点   其实就是把后一个节点的指针指向前一个节点   即n + 1 . next = n;
// 2.知道了两个节点的反转  然后遍历链表就可以了 因为要反转，所以需要双指针遍历一前一后，然后将前面的指针指向后面就可以了
// 3.最后把后面那个给return出去就ok