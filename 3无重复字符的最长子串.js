var lengthOfLongestSubstring = function(s) {
  // let arr = [];
  // let res = 0; 
  // let i = 0;
  // while(i < s.length) {
  //   if(arr.indexOf(s[i]) === -1) {
  //     arr.push(s[i]);
  //   } else {
  //     arr.shift();
  //     continue;
  //   }
  //   res = res > arr.length ? res : arr.length;
  //   i++;
  // }
  // return res;

  // 动态滑窗

  let l = 0;
  let length = 0;
  let map = new Map();
  for(let r = 0; r < s.length; r ++) {Q
    if(map.has(s[r]) && l <= map.get(s[r])) {
      l = map.get(s[r]) + 1;
    }
    length = Math.max(length, r - l + 1);
    map.set(s[r], r);
  }
  return length;
};