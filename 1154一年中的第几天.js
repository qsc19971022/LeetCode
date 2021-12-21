/**
 * @param {string} date
 * @return {number}
 */
 var dayOfYear = function(date) {
  let [y, m, d] = date.split('-');
  let res = Number(d);
  m --;
  while(m > 0) {
    let diff = 0;
    if (m === 2) {
      res += y % 4 ? 28 : 29;
    } else if(m <= 7) {
      res += m % 2 ? 31 : 30;
    } else {
      res += m % 2 ? 30 : 31;
    }
    m --;
  }
  return res;
};