/**
 * Given a string s consists of upper/lower-case alphabets and empty space
 * characters ' ', return the length of last word in the string.
 * If the last word does not exist, return 0.
 * Note: A word is defined as a character sequence consists of non-space characters only.
 * https://leetcode.com/problems/length-of-last-word/
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	const asArr = s.trim().split(' ');
	return asArr[asArr.length-1].length
};

console.log(5, lengthOfLastWord('Hello World'));
console.log(1, lengthOfLastWord('a '));
