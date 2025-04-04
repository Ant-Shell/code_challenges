'''
https://leetcode.com/problems/binary-search/description/

Binary Search

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
'''

from typing import List
import math


## First pass:
# class Solution:
#   def search(self, nums: List[int], target: int) -> int:
#     if len(nums) == 1:
#       return 0 if nums[0] == target else -1
#
#     start = 0
#     end = len(nums)-1
#
#     while start <= end:
#       if nums[start] == target:
#         return start
#       if nums[end] == target:
#         return end
#       start += 1
#       end -= 1
#     return -1
#
# Note: Time complexity O(n) | Space complexity: O(1)


class Solution:
  def search(self, nums: List[int], target: int) -> int:
    start = 0
    end = len(nums) - 1

    while start <= end:
      middle = math.floor((start + end) / 2)

      if nums[middle] == target:
        return middle
      
      if nums[middle] > target:
        end = middle - 1
      else:
        start = middle + 1
    
    return -1


solution = Solution()

print(solution.search([-1,0,3,5,9,12], 9)) # -> 4
print(solution.search([-1,0,3,5,9,12], 2)) # -> -1
print(solution.search([5], 5)) # -> 0
print(solution.search([5], -5)) # -> -1
print(solution.search([-1,0,5], 0)) # -> 1

'''
Pseudocode:
- Initialize start as zero
- Initialize end as length of nums list minus one
- While start is less than or equal to end:
  - Declare middle as start + end divided by two and rounded down
  - If nums at index middle is equal to target
    - Return middle
  - If nums at index middle is greater than target:
    - Reassign end as middle - 1
  - Else:
    - Reassign start as middle + 1
- Return -1 as default
- Time complexity: O(log n)
- Space complexity: O(1)

- Note:
  - I needed help on the O(log n) solution
  - Keep practicing and studying:
    - https://builtin.com/software-engineering-perspectives/nlogn
'''