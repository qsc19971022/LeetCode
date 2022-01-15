/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let res = [];
    const dfs = (node) => {
      if (!node) return;
      res.push(node.val);
      node.children && node.children.map(item => {
        dfs(item);
      })
    }
    dfs(root);
    return res;
};
