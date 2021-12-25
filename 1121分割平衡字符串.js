/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
  let [res, count] = [0, 0];
  for (let item of s) {
    item === 'L' ? count ++ : count --;
    count === 0 && res ++;
  }
  return res;
};