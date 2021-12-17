/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  function deleteArr(arr) {
    if (arr.indexOf(val) !== -1) {
      arr.splice(arr.indexOf(val), 1);
      deleteArr(arr);
    } else {
      return arr.length;
    }
  }
  deleteArr(nums);
};