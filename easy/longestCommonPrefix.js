/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * https://leetcode.com/problems/longest-common-prefix/ 
 *
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
	if( strs.length === 0 ) return '';
	let word = 0;
	let prefix = '';
	for(let letter = 0; letter < strs[0].length; letter++) {
		while( undefined !== strs[++word] && strs[word][letter] === strs[0][letter] ) {
		}
		if( word >= strs.length ) {
			prefix += strs[0][letter];
			word = 0;
		}
		else return prefix;
	}

	return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]) );
console.log(longestCommonPrefix(["dog","racecar","car"]) );
console.log(longestCommonPrefix([]) );
/*
Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/
