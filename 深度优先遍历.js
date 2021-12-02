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

const dfs = (root) => {
  console.log(root.val);
  root.children.map(dfs);
}
dfs(obj);

// 深度优先
// 1.访问根节点
// 2.对根节点的children进行深度优先遍历    其实就是递归