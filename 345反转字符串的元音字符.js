/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let l = 0, r = s.length - 1;
  s = s.split('')
  let arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  while(l < r) {
    if (!arr.includes(s[l])) {
      l ++;
      continue;
    }
    if (!arr.includes(s[r])) {
      r --;
      continue
    }
    [s[l], s[r]] = [s[r], s[l]];
    l ++;
    r --;
  }
  return s.join('');
};

