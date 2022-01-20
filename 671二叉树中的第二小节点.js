/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
  let res = [];
  const dfs = (node) => {
    if (!node) return;
    res.push(node.val);
    node.left && dfs(node.left);
    node.right && dfs(node.right);
  }
  dfs(root);
  res = [...new Set(res)].sort((a, b) => a -b);
  return res.length > 1 ? res[1] : -1;
};
