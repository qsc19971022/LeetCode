/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
 var mostCommonWord = function(paragraph, banned) {
  paragraph = paragraph.replaceAll(/[!?',;.]/g," ");
  let arr = paragraph.split(' ');
  console.log(arr)
  let map = new Map();
  let reg = /[,.?!]/
  let res = {
    val: '',
    index: 0
  };
  arr.map((item, index) => {
    item = item.toLowerCase();
    reg.test(item) ? item = item.substring(0, item.length - 1) : null;
    if (banned.indexOf(item) !== -1 || !item) {
      arr.splice(index, 0);
    } else {
      console.log(item)
      map.has(item) && item ? map.set(item, map.get(item) + 1) : map.set(item, 1);
    }
  })
  for( [value, index] of map) {
    if (index > res.index) {
      res.index = index;
      res.val = value;
    }
  }
  return res.val;
};