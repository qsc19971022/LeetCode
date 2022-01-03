/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let set = new Set();
  for(let i = 1; i < nums.length + 1; i ++) {
    set.add(i)
  }
  nums.map(item => {
    set.has(item) ? set.delete(item) : null; 
  })
  return [...set];
};
