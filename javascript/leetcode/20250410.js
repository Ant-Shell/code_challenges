/* 
https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/

Check if Array Is Sorted and Rotated

Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

There may be duplicates in the original array.

Note: An array A rotated by x positions results in an array B of the same length such that B[i] == A[(i+x) % A.length] for every valid index i.

 

Example 1:

Input: nums = [3,4,5,1,2]
Output: true
Explanation: [1,2,3,4,5] is the original sorted array.
You can rotate the array by x = 3 positions to begin on the element of value 3: [3,4,5,1,2].
Example 2:

Input: nums = [2,1,3,4]
Output: false
Explanation: There is no sorted array once rotated that can make nums.
Example 3:

Input: nums = [1,2,3]
Output: true
Explanation: [1,2,3] is the original sorted array.
You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.
*/

const check = (nums) => {
  let valueDecreaseCount = 0

  for (let i = 0 ; i < nums.length - 1 ; i++) {
    if (nums[i] > nums[i+1]) {
      valueDecreaseCount++
    }
  }

  if (nums[nums.length-1] > nums[0]) {
    valueDecreaseCount++
  }

  return valueDecreaseCount <= 1 
}

console.log(check([3,4,5,1,2])) // true
console.log(check([2,1,3,4])) // false
console.log(check([1,2,3])) // true
console.log(check([6,10,6])) // true
console.log(check([10,1,1,10])) // true

/* 
Pseudocode:
- Keep count of number of occurrences where a value in the nums array decreases
- Iterate through the nums array
  - If nums[i] is greater than nums[i+1]
    - Increase the count
- If the last number in the nums array is greater than the first number in the nums array
  - Increase the count
- Return the result of evaluating count is less than or equal to 1

- Time complexity: O(n)
- Space complexity: O(1)
*/