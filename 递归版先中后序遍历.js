const bt = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right:{
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}

// 一、先序遍历
//    1.访问根节点
//    2.对根节点的左子树进行先序遍历
//    3.对根节点的右子树进行先序遍历
const preorder = (root) => {
  if (!root) return;
  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
}

// 二、中序遍历
//    1.对根节点的左子树进行先序遍历
//    2.访问根节点
//    3.对根节点的右子树进行先序遍历

const inorder = (root) => {
  if (!root) return;
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
}
// inorder(bt);

// 三、后序遍历
//    1.对根节点的右子树进行先序遍历
//    2.对根节点的左子树进行先序遍历
//    3.访问根节点

const postorder = (root) => {
  if (!root) return;
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
}
postorder(bt);
