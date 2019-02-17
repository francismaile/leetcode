/**
 * Given a sorted array and a target value, return the index if the target is
 * found. If not, return the index where it would be if it were inserted in
 * order.
 * You may assume no duplicates in the array.
 * https://leetcode.com/problems/search-insert-position/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/

var searchInsert = function(nums, target) {
	let idx = 0;
	while( idx < nums.length && nums[idx] < target ) idx++;
	return idx;
};
let nums = [1,3,5,6], target = 5;
// target = 2;
// target = 7;
// target = 0;
console.log(searchInsert(nums, target));
