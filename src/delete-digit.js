const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  strNum = [...String(n)];
  arr = [];
  strNum.forEach((element, index) => {
     let arr1 = strNum.slice();
     arr1.splice(index, 1);
     arr.push(arr1.join(''));
  });
  return Number(arr.sort((a, b) => b - a)[0]);
}

module.exports = {
  deleteDigit
};
