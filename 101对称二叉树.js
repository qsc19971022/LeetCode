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
 * @return {boolean}
 */
 var isSymmetric = function(root) {
  const symmetric = (p , q) => {
    if(!p && !q) return true;
    if(!p || !q) return false;
    if(p.val !== q.val) return false
    return symmetric(p.left, q.right) && symmetric(p.right, q.left);
  }
  return symmetric(root.left, root.right)
};