/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
  return [...new Set(nums1.filter(item => new Set(nums2).has(item)))];
};

// 我怕是个魔鬼吧