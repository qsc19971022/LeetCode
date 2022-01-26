/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    // nums.sort((a,b)=>a-b)
    //排序更耗时不如直接取最小
  let min = Math.min(...nums);
  let sum = 0;
  nums.map(item => {
    sum += item - min;
  });
  return sum;
};
