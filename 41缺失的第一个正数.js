/**
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function(nums) {
  let num = 1;
  nums = nums.sort((a,b) => a-b);
  nums.map((item, index) => {
    if(item === num) {
      num ++;
    }
  })
  return num;
};