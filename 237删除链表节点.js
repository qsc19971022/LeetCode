const deleteNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
}


// 关于这种写法我有一个疑惑 
// 其实上述两部达到的目的是为了拿到下个节点的值，然后改变当前指针到下下个节点    其实就是把下个节点copy到当前节点
// 那么我直接node = node.next  这样写他不即时拿到了值有拿到了指针吗