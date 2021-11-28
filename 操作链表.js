let a = { val : 'a'};
let b = { val : 'b'};
let c = { val : 'c'};
let d = { val : 'd'};

a.next = b;
b.next = c;
c.next = d;

let p = a;
while(p) {
  console.log(p);
  p = p.next;
}

// 这是js中模拟链表的一种方式  ，虽然可以这么理解 但是指针其实指向的是一块空间 还不是具体的值 当指针空间内的值发生变化，相关联的值也会繁盛变化