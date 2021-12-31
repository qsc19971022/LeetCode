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
var averageOfLevels = function (root) {
    if (!root) return [];
    let res = [];
    let team = [root];
    while (team.length) {
      let length = team.length;
      let sum = 0;
      for (let i = 0; i < length; i ++) {
        let node = team.shift();
        sum += node.val;
        if (node.left) team.push(node.left);
        if (node.right) team.push(node.right);
      }
      res.push(sum / length);
    }
    return res;
};
