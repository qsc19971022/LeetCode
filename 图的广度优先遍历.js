const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
}
let visted = new Set();
let team = [2];
const bfs = () => {
  while(team.length) {
    let n = team.shift();
    console.log(n);
    visted.add(n);
    graph[n].map(item => {
      if (!visted.has(item)) {
        team.push(item);
      }
    })
  }
}

bfs();


// 新建一个队列，把根节点入队
// 然后把头节点出队并访问
// 把头节点相邻的没访问过的节点入队
// 重复二三步

// http://www.woftsun.cn/images/graph.png