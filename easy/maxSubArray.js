/**
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 *
 * If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 * https://leetcode.com/problems/maximum-subarray/
 *
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
	let maxSoFar = Number.MIN_SAFE_INTEGER, maxToHere = 0;
	for(let i = 0; i < nums.length; i++) {
		maxToHere += nums[i];
		if(maxToHere > maxSoFar) {
			maxSoFar = maxToHere;
		}
		if(maxToHere < 0) {
			maxToHere = 0;
		}
	}
	return maxSoFar;
};

let input = [-2,1,-3,4,-1,2,1,-5,4];
input = [-1];
input = [-2,-1];
console.log(maxSubArray(input));
