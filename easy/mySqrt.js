/**
 * Compute and return the square root of x, where x is guaranteed to be a
 * non-negative integer.
 *
 * Since the return type is an integer, the decimal digits are truncated and only
 * the integer part of the result is returned.
 *
 * @param {number} x
 * @return {number}
 * Newton's iterative method
 * x² = 612
 * f(x) = x² - 612
 * f'(x) = 2x
 * first guess -> x₀ = 10
 * x₁ = x₀ - f(x₀)/f'(x₀) = 10 - ( (10²-612)/(2*10) ) = 35.6
 * x₂ = x₁ - f(x₁)/f'(x₁) = 35.6 - ( (35.6²-612)/(2*35.6) ) = 26.395....
 */
var mySqrt = function(x) {
	if( x === 0) return 0;
	let sqrt = x/2;
	while( Math.floor(sqrt) != Math.floor(sqrt = sqrt - ((sqrt*sqrt)-x)/(2*sqrt) ) ) {
		console.log({sqrt});
	}
	return Math.floor(sqrt);
};

console.log(mySqrt(0));
console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(612));
