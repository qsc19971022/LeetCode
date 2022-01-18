/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let res = [];
  for (let i = left; i < right + 1; i++) {
    if ([...i.toString()].every(item => item !== '0' && i % item === 0))  res.push(i);
  } 
  return res;
};
