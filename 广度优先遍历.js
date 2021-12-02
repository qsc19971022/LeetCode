// 广度优先遍历
// 1.新建一个队列，然后把根节点存入到队列中
// 2.头节点出队并访问
// 3.根节点的children挨个入队
// 4.重复2、3步

let obj = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: []
        },
        {
          val: 'e',
          children: []
        }
      ]
    },
    {
      val: 'c',
      children: [
        {
          val: 'f',
          children: []
        },
        {
          val: 'g',
          children: []
        }
      ]
    }
  ]
}

const bfs = (root) => {
  const team = [root];
  while(team.length) {
    let head = team.shift();
    console.log(head.val)
    head.children.map(item => {
      team.push(item)
    });
  }
}
bfs(obj);