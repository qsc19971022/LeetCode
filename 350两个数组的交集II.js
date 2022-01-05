/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const res = [];
  for(let i = 0; i < nums1.length;) {
    let temp = nums2.indexOf(nums1[i]);
    if (temp !== -1) {
      res.push(nums1[i]);
      nums1.splice(i, 1);
      nums2.splice(temp, 1);
    } else {
      i ++;
    }
  }
  return res;
};
