/**
 * The count-and-say sequence is the sequence of integers with the first five terms as following:
 * 
 * 1
 * 11
 * 21
 * 1211
 * 111221
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 *
 * 
 * Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.
 * 
 * Note: Each term of the sequence of integers will be represented as a string.
 * @param {number} n
 * @return {string}
*/
var countAndSay = function(n) {
	const sayings = {
		'1': '11',
		'11': '21',
		'111': '31',
		'2': '12',
		'22': '22',
		'222': '32',
		'3': '13',
		'33': '23',
		'333': '33'
	}
	
	const saying = function(say) {
		let counting = say[0], said = '';
		for( let i = 1; i < say.length; i++ ) {
			if( counting === '' || counting[counting.length-1] === say[i] ) {
				counting += say[i];
			} else {
				said += sayings[counting];
				counting = say[i];
			}
		}
		said += sayings[counting];
		return said;
	}

	let said = '1';
	for( let x = 0; x < n-1; x++ ) {
		said = saying(said);
	}
	return said;
};
console.log(countAndSay(0));
