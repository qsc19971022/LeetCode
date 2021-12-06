var isBalanced = function(root) {
  if(!root) return true;
    let res = true;
    const dfs = (m) => {
      let left = m.left ? dfs(m.left) : 0;
      let right = m.right ? dfs(m.right) : 0;
      console.log(left, right);
      if(Math.abs(left - right) > 1) res = false;
      return Math.max(left, right) + 1;
    }
    dfs(root);
    return res;
};