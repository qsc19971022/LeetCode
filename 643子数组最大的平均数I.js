/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let total = 0, max = 0;
  for(let i = 0; i < nums.length; i ++) {
    total += nums[i];
    if (i > k - 1) {
      total -= nums[i - k];
    } 
    max = i === k - 1 ? total / k : max;
    max = i > k - 1 ? Math.max(total / k, max) : max;
  }
  return max;
};
