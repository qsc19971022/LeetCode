/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  let temp = 0;
  nums.map(item => {
    if(nums[temp] === 0) {
      nums.splice(temp, 1);
      nums.push(0);
    } else {
      temp ++;
    }
  })
  return nums;
};