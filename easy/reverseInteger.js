/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of
 * this problem, assume that your function returns 0 when the reversed integer
 * overflows.
 *
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let reverse = parseInt(String(x).split('').reverse().join(''));
  if( x < 0 ) reverse = 0 - reverse;
  if( reverse < -2147483648 || reverse > 2147483647) return 0;
  return reverse;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));

// without converting to a string
function reverseInt(x) {
	let number = Math.abs(x), reversed = 0;
	while( number ) {
		reversed = (reversed * 10) + (number % 10);
		number = Math.floor( number / 10 );
	}
  if( reversed < -2147483648 || reversed > 2147483647) return 0;
	return x > 0 ? reversed : 0 - reversed;
}

console.log(reverseInt(123));
console.log(reverseInt(-123));
console.log(reverseInt(120));

