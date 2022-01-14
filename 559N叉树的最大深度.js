/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    let res = 1;
    const dfs = (node, deep) => {
      res = Math.max(deep, res);
      node.children.map(item => {
        if (item.children) dfs(item, deep + 1);
      })
    }
    dfs(root, 1)
    return res;
};
