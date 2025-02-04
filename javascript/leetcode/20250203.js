/* 
https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/

Longest Strictly Increasing or Strictly Decreasing Subarray

You are given an array of integers nums. Return the length of the longest 
subarray of nums which is either strictly increasing or strictly decreasing.


Example 1:

Input: nums = [1,4,3,3,2]

Output: 2

Explanation:

The strictly increasing subarrays of nums are [1], [2], [3], [3], [4], and [1,4].

The strictly decreasing subarrays of nums are [1], [2], [3], [3], [4], [3,2], and [4,3].

Hence, we return 2.


Example 2:

Input: nums = [3,3,3,3]

Output: 1

Explanation:

The strictly increasing subarrays of nums are [3], [3], [3], and [3].

The strictly decreasing subarrays of nums are [3], [3], [3], and [3].

Hence, we return 1.


Example 3:

Input: nums = [3,2,1]

Output: 3

Explanation:

The strictly increasing subarrays of nums are [3], [2], and [1].

The strictly decreasing subarrays of nums are [3], [2], [1], [3,2], [2,1], and [3,2,1].

Hence, we return 3.

Constraints:

1 <= nums.length <= 50
1 <= nums[i] <= 50
*/

const longestMonotonicSubarray = (nums) => {
  let ascendCount = 1;
  let descendCount = 1;
  let maxlength = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i+1] < nums[i]) {
      ascendCount++;
      descendCount = 1;
    }

    if (nums[i+1] > nums[i]) {
      descendCount++;
      ascendCount = 1;
    }

    if (nums[i+1] === nums[i]) {
      ascendCount = 1;
      descendCount = 1;
    }
    maxlength = Math.max(maxlength, ascendCount, descendCount)
  }

  return maxlength;
};

console.log(longestMonotonicSubarray([1,4,3,3,2])) // -> 2
console.log(longestMonotonicSubarray([3,3,3,3])) // -> 1
console.log(longestMonotonicSubarray([3,2,1])) // -> 3
console.log(longestMonotonicSubarray([1,2])) // -> 2
console.log(longestMonotonicSubarray([1, 10, 10])); // -> 2
/* 
Pseudocode:
- Initialize ascendCount, descendCount and maxlength at 1
- Iterate through the nums array
  - If nums at current index +1 is less than nums at current index
    - Increment ascendCount
    - Reassign descendCount back to 1
  - If nums at current index +1 is greater than nums at current index
    - Increment descendCount
    - Reassign ascendCount back to 1
  - If nums at current index +1 is equal to nums at current index
    - Reassign ascendCount and descendCount back to 1
  - Reassign maxlength as the maximum between maxlength, ascendCount and descendCount
- Return maxlength

- Note: I had help arriving at this answer, but I finally got there
*/
