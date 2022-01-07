/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let maxLength = Math.max(num1.length, num2.length);
  num1 = num1.padStart(maxLength, 0);
  num2 = num2.padStart(maxLength, 0);
  let res = '';
  let temp = 0;
  while (maxLength > 0) {
    const sum = parseInt(num1[maxLength - 1]) + parseInt(num2[maxLength - 1]) + temp;
    temp =  Math.floor(sum / 10);
    res = (sum % 10) + res;
    maxLength --;
  }
  return temp ? 1 + res : res;
};

