const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
}
let visted = new Set();
const dfs = (n) => {
  console.log(n);
  visted.add(n);
  graph[n].map(item => {
    if (!visted.has(item)) {
      dfs(item);
    }
  })
}

dfs(2);

// 访问根节点
// 对根节点没有访问过的相邻节点挨个进行深度优先遍历

// 对没有访问过的相邻节点进行挨个深度优先遍历，是因为如果遍历访问过的那么就会来回访问，导致陷入死循环

// http://www.woftsun.cn/images/graph.png