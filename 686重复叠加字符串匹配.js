/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
 var repeatedStringMatch = function (a, b) {
  const count = Math.ceil(b.length / a.length);
  console.log(count, a.repeat(count + 1));
  if (a.repeat(count).includes(b)) return count;
  if (a.repeat(count + 1).includes(b)) return count + 1;
  return -1;
};