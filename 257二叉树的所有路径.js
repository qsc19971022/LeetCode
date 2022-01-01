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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let result = [];
  let dfs = (node, pre) => {
    if(node){
      if(pre == ''){
          pre+=node.val
      }else{
          pre+=('->'+node.val)
      }
      if(node.left && !node.right){
          dfs(node.left,pre)
      }else if(!node.left && node.right){
          dfs(node.right,pre)
      }else{
          dfs(node.left,pre)
          dfs(node.right,pre)
      }
    }else{
      if(result.indexOf(pre)==-1){
          result.push(pre)  //最后一个节点push2次 做去重
      }
    }
  }
  dfs(root, '');
  return result;
};
