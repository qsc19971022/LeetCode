let obj = {
  val: "A",
  children: [
    {
      val: "B",
      children: [
        {
          val: "D",
          children: [],
        },
        {
          val: "E",
          children: [],
        },
      ],
    },
    {
      val: "C",
      children: [
        {
          val: "F",
          children: [],
        },
        {
          val: "G",
          children: [],
        },
      ],
    },
  ],
};

const dfs = (root) => {
  console.log(root.val);
  root.children.map(dfs);
};
dfs(obj);

// 深度优先
// 1.访问根节点
// 2.对根节点的children进行深度优先遍历    其实就是递归
