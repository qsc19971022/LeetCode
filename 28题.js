/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') return 0;
  const arr = haystack.split(needle);
  return arr.length > 1 ? arr[0].length : -1;
};
