var inorderTraversal = function(root) {
  const stack = [];
  let p = root;
  let res = [];
  while(stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    let n = stack.pop();
    res.push(n.val);
    n.right ? p = n.right : null;
  }
  return res;
};