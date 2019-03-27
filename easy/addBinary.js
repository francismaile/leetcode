/**
 * Given two binary strings, return their sum (also a binary string).
 * The input strings are both non-empty and contains only characters 1 or 0.
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
	let i = (a.length > b.length ? a.length : b.length) - 1;
	let carry = 0;
	let binarySum = '';
	let bit = 0;
	if(a.length > b.length) {
		b = b.padStart(a.length, '0');
	} else {
		a = a.padStart(b.length, '0');
	}
	while(i >= 0) {
		bit = parseInt(a[i], 10) + parseInt(b[i], 10) + carry;
		if(bit > 1) {
			carry = 1;
			bit -= 2;
		} else {
			carry = 0;
		}
		binarySum = bit + binarySum;
		i--;
	}
	if(carry) binarySum = '1' + binarySum;
	return binarySum;
};

console.log(addBinary('11', '1'));
console.log(addBinary('1010', '1011'));
const a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
const b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
console.log(addBinary(a,b));

