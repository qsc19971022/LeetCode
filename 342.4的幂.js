/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfFour = function(n) {
  if (n <= 0) return false;
  if (n === 1) return true;
  let i = 1;
  while(i < n) {
    let temp = i * 4;
    if (temp === n) return true;
    else if (temp > n) return false;
    i = temp;
  }
};