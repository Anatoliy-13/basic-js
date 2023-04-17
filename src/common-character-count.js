const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * 
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = [];

  for (let letter of s1) {
    if (s2.includes(letter)) {
      arr.push(letter);
      s2 = s2.replace(letter, "");
    }
  }

  return arr.length;
}

module.exports = {
  getCommonCharacterCount
};
