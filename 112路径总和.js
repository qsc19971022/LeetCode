var hasPathSum = function(root, targetSum) {
  if (!root) return false;
  let res = false;
  const dfs = (n, val) => {
    console.log(n.val, val);
    n.left && dfs(n.left, val + n.left.val);
    n.right && dfs(n.right, val + n.right.val);
    if (val === targetSum && !n.right && !n.left) {
      res = true;
    }
  }
  dfs(root, root.val);
  return res;
};