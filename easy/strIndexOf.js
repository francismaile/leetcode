/**
 * Implement strStr() - JavaScript indexOf().
 *
 * Return the index of the first occurrence of needle in haystack, or -1 if
 * needle is not part of haystack.
 * https://leetcode.com/problems/implement-strstr/
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	if( needle === '' ) return 0;
	if( needle.length > haystack.length ) return -1;
	for( let i = 0; i <= haystack.length - needle.length; i++ ) {
		console.log( {i}, haystack[i], needle.length );
		if( haystack[i] === needle[0] ) {
			if( haystack.substring(i, i + needle.length) === needle ) return i;
		}
	}
	return -1;
};
let haystack = "hello", needle = "ll";
haystack = "a", needle = "a";
haystack = "apple", needle = "a";
console.log(strStr(haystack, needle) );
