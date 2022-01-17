/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let m = new Map();
    for (let i of nums) {
        if (m.has(i)) m.set(i, m.get(i)+1);
        else m.set(i, 1);
    }
    let res = 0;
    for (let k of m.keys()) {
      if (m.get(k - 1)) {
        res = Math.max(res, m.get(k - 1) + m.get(k));
      }
      if (m.get(k + 1)) {
        res = Math.max(res, m.get(k + 1) + m.get(k));
      }
    }
    return res;
};
