var maxDepth = function(root) {
  let deep = 0;
  const dfs = (n, l) => {
    if(!n) return;
    dfs(n.left, l + 1);
    dfs(n.right, l + 1);
    if(!n.left && !n.right) deep = Math.max(deep, l);
  }
  dfs(root, 1);
  return deep;
};