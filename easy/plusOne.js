/**
 * Given a non-empty array of digits representing a non-negative integer, plus
 * one to the integer.
 *
 * The digits are stored such that the most significant digit is at the head of
 * the list, and each element in the array contain a single digit.
 *
 * You may assume the integer does not contain any leading zero, except the number
 * 0 itself.
 *
 * https://leetcode.com/problems/plus-one/
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	let carry = 1;
	let added = digits.reverse().map( function(cur) {
		if(carry) {
			cur = cur + carry;
			carry = 0;
		}
		if(cur >= 10) {
			carry = 1;
			cur -= 10;
		}
		return cur;
	}).reverse();
	if(carry) added.unshift(1);
	return added;
};

console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
console.log(plusOne([9,9,9,9]));
console.log(plusOne([9]));
