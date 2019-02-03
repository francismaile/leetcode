/**
 * Given a Roman numeral as a string, return its arabic equivalent.
 * @param {string} s
 * @return {number}
 */
    
var romanToInt = function(rNum) {
	romanDigits = [
		['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
		['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
		['X', 10], ['IX', 9], ['V', 5], ['IV',4], ['I', 1]
	]
	let int = 0;
	this.romanDigits.forEach( ([roman, arabic]) => {
		while( rNum.substring(0, roman.length) === roman ) {
			int += arabic;
			rNum = rNum.substring(roman.length);
		}
	});
	return int;
}

console.log(romanToInt('XXI'), 21)
console.log(romanToInt('I'), 1)
console.log(romanToInt('III'), 3)
console.log(romanToInt('IV'), 4)
console.log(romanToInt('MMVII'), 2007)
console.log(romanToInt('MDCLXIX'), 1669)

