/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  let a = (x < 0 ? 0 - x : x) + '';
  let i = 0;
  let result = '';
  while(i < a.length) {
    result += a[a.length - 1 - i];
    i ++;
  }
  return x > 0 ? parseInt(result) > Math.pow(2, 31) - 1 ? 0 : parseInt(result) : parseInt(-result) < -Math.pow(2, 31) ? 0 :  parseInt(-result);
};