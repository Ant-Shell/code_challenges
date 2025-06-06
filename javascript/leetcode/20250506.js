/* 
https://leetcode.com/problems/build-array-from-permutation/

Build Array from Permutation

Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

 

Example 1:

Input: nums = [0,2,1,5,3,4]
Output: [0,1,2,4,5,3]
Explanation: The array ans is built as follows: 
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
    = [0,1,2,4,5,3]
Example 2:

Input: nums = [5,0,1,2,3,4]
Output: [4,5,0,1,2,3]
Explanation: The array ans is built as follows:
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
    = [4,5,0,1,2,3]
 

Constraints:

1 <= nums.length <= 1000
0 <= nums[i] < nums.length
The elements in nums are distinct.


Follow-up: Can you solve it without using an extra space (i.e., O(1) memory)?
*/

// Solution 1
// const buildArray = (nums) => {
//   const permutation = []

//   for (let i = 0 ; i < nums.length ; i++) {
//     permutation.push(nums[nums[i]])
//   }
//   return permutation
// }

// console.log(buildArray([0,2,1,5,3,4])) // -> [0,1,2,4,5,3]
// console.log(buildArray([5,0,1,2,3,4])) // -> [4,5,0,1,2,3]

/* 
Pseudocode:
- Declare permutation as an empty array
- Iterate through the nums array
  - Push nums at index of nums at index i onto the permutation array
- Return permutation

- Time complexity: O(n)
- Space complexity: O(n)
*/

// Solution 2
const buildArray = (nums) => {
  const n = nums.length
  for (let i = 0 ; i < n ; i++) {
    nums[i] = nums[i] + ((nums[nums[i]] % n) * n)
  }

  for (let i = 0 ; i < nums.length ; i++) {
    nums[i] = Math.floor(nums[i] / n)
  }
  return nums
}

console.log(buildArray([0,2,1,5,3,4])) // -> [0,1,2,4,5,3]
console.log(buildArray([5,0,1,2,3,4])) // -> [4,5,0,1,2,3]

/* 
Pseudocode:
- Declare n as the length of nums
- Iterate through the nums array - first pass
  - Encode the value of nums[i]
    - nums[i] = original_value + (new_value * n)
- Iterate through the nums array - second pass
  - Decode the value of nums[i]
- Return nums

- Time complexity: O(n)
- Space complexity: O(1)

- Note: I needed help on this solution
*/