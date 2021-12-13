/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  let res = 0;
  for (const current of nums) {
    res ^= current;
  }
  return res
};