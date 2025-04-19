/* 
https://leetcode.com/problems/search-insert-position/description/

Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 
Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/

const searchInsert = (nums, target) => {
  let lowerBound = 0
  let upperBound = nums.length - 1

  while (lowerBound <= upperBound) {
    let mid = Math.floor((lowerBound + upperBound) / 2)

    if (nums[mid] === target) {
      return mid
    }

    if (nums[mid] < target) {
      lowerBound = mid + 1
    } else {
      upperBound = mid - 1
    }
  }
  return lowerBound
}

console.log(searchInsert([1,3,5,6], 5)) // -> 2
console.log(searchInsert([1,3,5,6], 2)) // -> 1
console.log(searchInsert([1,3,5,6], 7)) // -> 4

/* 
Pseudocode:
- Initalize lower bound
- Initalize upper bound
- While lower bound is less than or equal to upper bound
  - Declare a mid point
  - If nums at index mid is equal to target
    - Return mid
  - If nums at index mid is less than target
    - Reassign lower bound to mid + 1
  - Else
    - Reassign upper bound to mid - 1
- Return lower bound

- Note:
  - Continue to study Binary Search algorithm

- Time complexity: O(log n)
- Space complexity: O(1)
*/