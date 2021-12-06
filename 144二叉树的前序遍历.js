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
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
  let res = [];
  if (!root) return [];
  let stack = [root];
  while(stack.length) {
    const n = stack.pop();
    res.push(n.val);
    n.right && stack.push(n.right);
    n.left && stack.push(n.left);
  }
  return res;
};