/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
  let index = 0;
  while(index < arr.length) {
    if (!arr[index]) {
      arr.splice(index, 0, 0);
      arr.pop();
      index ++;
    }
    index ++;
  }
  return arr;
};