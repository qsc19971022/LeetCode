/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
 var findOcurrences = function(text, first, second) {
  let arr = text.split(' ');
  let res = [];
  arr.map((item, index) => {
    if(arr[index - 2] === first && arr[index - 1] === second) res.push(item);
  })
  return res;
};