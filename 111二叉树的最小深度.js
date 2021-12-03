var minDepth = function(root) {
  if (!root) return 0;   
  const stack = [[root, 1]];
  while(stack.length) {
    let [head, l] = stack.shift();
    if(!head.left && !head.right) return l
    head.left && stack.push([head.left, l + 1]);
    head.right && stack.push([head.right, l + 1]);
  }
};