/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  let map = new Map();
  let res = {
    val: 0,
    index: 0
  };
  nums.map((item, index) => {
    if(!map.has(item)) {
      map.set(item, 1);
    } else {
      map.set(item, map.get(item) + 1);
    }
  })
  map.forEach((val, index) => {
    console.log(val, index)
    if (val > res.val) {
      res.val = val;
      res.index = index;
    }
  })
  return res.index;
};