/* 
https://leetcode.com/problems/count-subarrays-with-score-less-than-k/description

Count Subarrays With Score Less Than K

The score of an array is defined as the product of its sum and its length.

For example, the score of [1, 2, 3, 4, 5] is (1 + 2 + 3 + 4 + 5) * 5 = 75.
Given a positive integer array nums and an integer k, return the number of non-empty subarrays of nums whose score is strictly less than k.

A subarray is a contiguous sequence of elements within an array.

 

Example 1:

Input: nums = [2,1,4,3,5], k = 10
Output: 6
Explanation:
The 6 subarrays having scores less than 10 are:
- [2] with score 2 * 1 = 2.
- [1] with score 1 * 1 = 1.
- [4] with score 4 * 1 = 4.
- [3] with score 3 * 1 = 3. 
- [5] with score 5 * 1 = 5.
- [2,1] with score (2 + 1) * 2 = 6.
Note that subarrays such as [1,4] and [4,3,5] are not considered because their scores are 10 and 36 respectively, while we need scores strictly less than 10.
Example 2:

Input: nums = [1,1,1], k = 5
Output: 5
Explanation:
Every subarray except [1,1,1] has a score less than 5.
[1,1,1] has a score (1 + 1 + 1) * 3 = 9, which is greater than 5.
Thus, there are 5 subarrays having scores less than 5.
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105
*/

// First attempt - TLE
// const countSubarrays = (nums, k) => {
//   let left = 0
//   const n = nums.length
//   let result = 0

//   while (left < n) {
//     let sum = 0
//     let subArrayLength = 1

//     for (let right = left ; right < n ; right++) {
//       sum += nums[right]

//       if (sum * subArrayLength < k) {
//         result += 1
//       } else {
//         break
//       }
//       subArrayLength += 1
//     }
//     left += 1
//   }
//   return result
// }

// console.log(countSubarrays([2,1,4,3,5], 10)) // -> 6
// console.log(countSubarrays([1,1,1], 5)) // -> 5

/* 
Pseudocode:
- Initialize a result counter
- Initalize a left pointer
- While left pointer is greater than the length of nums
  - Initialize a sum
  - Declare a right pointer
  - Add nums at index of right pointer to the sum
  - If sum * right pointer is less than k
    - Increment result
  - Else:
    - Break
- Return result

- Time complexity: O(n^2) | Time Limit Exceeded
- Space complexity: O(1)
*/

// Second attempt, with assistance
const countSubarrays = (nums, k) => {
  const n = nums.length
  let left = 0
  let sum = 0
  let result = 0

  for (let right = 0 ; right < n ; right++) {
    sum += nums[right]
    
    while (sum * (right - left + 1) >= k) {
      sum -= nums[left]
      left += 1
    }

    const windowLength = right - left + 1
    result += windowLength
  }

  return result
}

console.log(countSubarrays([2,1,4,3,5], 10)) // -> 6
console.log(countSubarrays([1,1,1], 5)) // -> 5

/* 
Pseudocode:
- Declare n as length of nums array
- Initialize left pointer
- Initialize sum
- Initialize result
- Iterate through the nums array (move right pointer forward)
  - Add the value of nums[right] to sum
  - While sum times (right - left + 1) is greater than or equal to k
    - Subtract nums[left from sum]
    - Increment left (move pointer forward)
  - Declare windowLength as right - left + 1
  - Add value of windowLength to result
    - Note: this adds all occurrences of valid subarrays within the windowLength to result
- Return result

- Time complexity: O(n)
- Space complexity: O(1)
*/