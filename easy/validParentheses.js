/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	if(s.length % 2) return false
	let brackets = [], temp = '';
	const openers = ['(', '{', '['];
	const closers = [')', '}', ']'];

	for(let i = 0; i < s.length; i++){
		if( openers.indexOf(s[i]) >= 0 ) {
			brackets.push(s[i]);
		} else {
			temp = brackets.pop();
			console.log( openers.indexOf(temp), closers.indexOf(s[i]) );
			if( openers.indexOf(temp) !== closers.indexOf(s[i]) ) {
				return false;
			}
		}
	}
	return brackets.length === 0;
};

console.log( isValid('()'));
console.log( isValid('()[]{}'));
console.log( isValid('(]'));
console.log( isValid('([)]'));
console.log( isValid('['));
console.log( isValid('(('));
