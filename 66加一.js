/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
  let res = JSON.parse(JSON.stringify(digits));
  let i = digits.length - 1;
  let temp = 0;
  res[i] += 1;
  function fun() {
    res[i] += temp
    if (temp = 1) temp = 0;
    if (res[i] === 10) {
      res[i] = 0;
      temp = 1;
    }
    if (i === 0 && res[i] === 0) res.unshift(1);
    i--;
    if(temp === 1) fun()
  }
  fun();
  return res;
};