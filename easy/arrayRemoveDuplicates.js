/**
 * Given a sorted array nums, remove the duplicates in-place such that each
 * element appear only once and return the new length.
 *
 * Do not allocate extra space for another array, you must do this by modifying
 *
 * the input array in-place with O(1) extra memory.
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	let i = 0;
	while( i < nums.length ) {
		if( nums[i] === nums[i + 1 ] ) {
			nums.splice(i, 1);
		} else {
			i++;
		}
	}
	return nums.length;
};
nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums));
console.log({nums});
