/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  let map = new  Map();
  nums.map((item, index) => {
    !map.has(item) ? map.set(item, 1) : map.set(item, map.get(item) + 1);
  })
  let res = [];
  const getMax = () => {
    if (!map.size) return;
    let deep = {
      val : 0
    };
    map.forEach((item, index) => {
      if (item > deep.val) {
        deep.val = item;
        deep.index = index;
      }
    })
    res.push(deep.index);
    map.delete(deep.index);
    getMax();
  }
  getMax();
  return res.slice(0, k)
};