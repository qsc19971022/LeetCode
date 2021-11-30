// es6中新增了集合这个数据结构 也就是set

// 去重

let arr = [1, 1, 2, 3, 3, 4];
let set = new Set(arr);  // set去重的原理就是因为集合必须是唯一的 
console.log([...set]);   

// 判断元素是否存在

console.log(set.has(1));  // true
console.log(set.has(5));  // false

// 求两个数组的交集

let arr1 = [...set];
let arr2 = [2, 3, 4, 5];

const result = arr1.filter(item => new Set(arr2).has(item));
console.log(result);