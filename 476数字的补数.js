/**
 * @param {number} num
 * @return {number}
 */
 var findComplement = function(num) {
  let arr = [];
  while(num !== 0) {
    arr.unshift(num % 2 === 0 ? 1 : 0);
    num = Math.floor(num / 2);
  }
  return nums = parseInt(arr.join(''), 2);
};