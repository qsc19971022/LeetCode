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

const preorder = (root) => {
  const stack = [root];
  while(stack.length) {
    const n = stack.pop();
    console.log(n.val);
    if(n.right) stack.push(n.right);
    if(n.left) stack.push(n.left);
  }
}

// preorder(bt); // 利用了栈先进后出的思想

const inorder = (root) => {
  if(!root) return;
  const stack = [];
  let p = root;
  while(stack.length || p) {
    while(p) {
      stack.push(p);
      p = p.left;
    }
    const n = stack.pop();
    console.log(n.val);
    p = n.right;
  }
}

// inorder(bt);

const postorder = (root) => {
  if(!root) return;
  const outStack = [];
  const stack = [root];  
  while(stack.length) {
    const n = stack.pop();
    outStack.push(n);
    n.left && stack.push(n.left);
    n.right && stack.push(n.right);
  }
  while(outStack.length) {
    let n = outStack.pop();
    console.log(n.val);
  }
}
// 利用先序遍历的思想 把先序要输出的东西存在一个栈中，然后逆序输出
postorder(bt);