/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let res = [];
  for (let i = 0; i < numbers.length; i ++) {
    if (numbers.indexOf(target - numbers[i]) !== -1) {
      res = [i + 1, numbers.indexOf(target - numbers[i]) + 1];
      if (target / numbers[i] === 2 || target === 0) res = [i + 1, i + 2];
      return res;
    };
  }
};
