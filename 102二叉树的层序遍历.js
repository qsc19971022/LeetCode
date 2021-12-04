var levelOrder = function(root) {
  if (!root) return [];
  const stack = [[root, 1]];
  const m = new Map();
  const result = [];
  while(stack.length) {
    let [p, l] = stack.shift();
    console.log(p.val);
    m.has(l) ? m.get(l).push(p.val) : m.set(l, [p.val]);
    if(p.left) {
      stack.push([p.left, l + 1]);
    }
    if (p.right) {
      stack.push([p.right, l + 1]);
    }
  }
  for(var [key, val] of m) {
    result.push(val);
  }
  return result;
};


// 根据广度优先 把层数一样的节点push到一个数组里面   
// 我这个写法是有缺点的  缺点是多开辟了一个字典  其实可以根据result那个数组的下标判断  起到的是和字典一样的效果  我自己没有想到 看别人的题解是看到的