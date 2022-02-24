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
var sumOfLeftLeaves = function(root) {
  let res = 0;
  add(root,0);
  function add (root,num) {
    if (root.left) add(root.left, 1);
    if (root.right) add(root.right, 2);
    if (!root.left && !root.right && num === 1) res += root.val;
  }
  return res;
};
