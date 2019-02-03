/**
 * Given and interger, determine if the number is a numeric palindrome.
 * ...without converting the number to a string.
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	if(x < 0 || (x % 10 === 0 && x !== 0 )) return false;
	let number = x, reversed = 0;
	while( number > reversed ) {
		reversed = (reversed * 10) + (number % 10);
		number = Math.floor(number / 10);
	}
	return reversed === number || Math.floor(reversed / 10) === number;
};

console.log(isPalindrome(12321));
console.log(isPalindrome(1220));

