/**
 * @param {number} num
 * @return {number}
 */
// var addDigits = function(num) {
//   function add(item) {
//     let length = String(item).length;
//     let res = 0;
//     for(let i = 0; i < String(item).length; i ++) {
//       res += +String(item)[i];
//     }
//     return String(res).length !== 1 ? add(res) : res;
//   }
//   return add(num);
// };
var addDigits = function(num) {
  if(num < 10) return num;
  let res = num%9;
  if(res === 0) {
      return 9;
  }
  return res;
};

// 个位数直接返回
// 数学推算如下：
// 两位数场景：
// ab ==> a10+b = a9+(a+b)
// 三位数场景 abc ==> a100+a10+c = a99 + b9 + (a+b+c) ==> a+b+c大于10符合两位数的场景
// 类推出数值最后的位数累计值为：num%9