/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let temp = 1;
    while (temp <= n) {
      if (temp === n) {
        return true;
      } else {
        temp = temp * 3;
      }
    }
    return false;
};
