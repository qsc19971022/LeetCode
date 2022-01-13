/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    const n = s.length;
    for (let i = 0; i < s.length; i ++) {
      let str = s.substr(0, i);
      if (n % str.length === 0) {
        if (str.repeat(n / str.length) === s) return true;
      }
    }
    return false;
};
