/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  nums.sort((a,b) => a - b);
  let res = 0;
  if(nums.indexOf(target) === -1) {
    nums.forEach((item, index) => {
      if(target > item && target < nums[index + 1]) {
        res = index + 1;
      } else if (target > item && index === nums.length -1) {
        res = nums.length;
      } else if (target < nums[0]) {
        res = 0;
      }
    })
  } else {
    res = nums.indexOf(target);
  }
  return res;
};