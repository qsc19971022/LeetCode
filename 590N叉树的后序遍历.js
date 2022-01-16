/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let res = [];
    const dfs = (node) => {
      if (!node) return;
      node.children && node.children.map(item => {
        dfs(item);
      })
      res.push(node.val);
    }
    dfs(root);
    return res;
};
