'''
https://leetcode.com/problems/maximum-ascending-subarray-sum/description/

Maximum Ascending Subarray Sum

Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.

A subarray is defined as a contiguous sequence of numbers in an array.

A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where l <= i < r, numsi  < numsi+1. Note that a subarray of size 1 is ascending.

 

Example 1:

Input: nums = [10,20,30,5,10,50]
Output: 65
Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.
Example 2:

Input: nums = [10,20,30,40,50]
Output: 150
Explanation: [10,20,30,40,50] is the ascending subarray with the maximum sum of 150.
Example 3:

Input: nums = [12,17,15,13,10,11,12]
Output: 33
Explanation: [10,11,12] is the ascending subarray with the maximum sum of 33.
 

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
'''

from typing import List

class Solution:
  def maxAscendingSum(self, nums: List[int]) -> int:
    if len(nums) == 1:
      return nums[0]

    ascending_nums = []
    max_sum = 0
    
    for i in range(len(nums)):
      if not len(ascending_nums):
        ascending_nums.append(nums[i])
        continue
      if nums[i] > nums[i-1]:
        ascending_nums.append(nums[i])
      else:
        max_sum = max(max_sum, nums[i-1])
        ascending_nums.clear()
        ascending_nums.append(nums[i])
      max_sum = max(max_sum, sum(ascending_nums))
    return max_sum

solution = Solution()

print(solution.maxAscendingSum([10,20,30,5,10,50])) # -> 65
print(solution.maxAscendingSum([10,20,30,40,50])) # -> 150
print(solution.maxAscendingSum([12,17,15,13,10,11,12])) # -> 33
print(solution.maxAscendingSum([100,10,1])) # -> 100
print(solution.maxAscendingSum([6])) # -> 6

'''
Pseudocode:
- If there is only one number in nums, return the number
- Declare ascending_nums as an empty list
- Initialize max_sum at zero
- Iterate through the nums list:
  - If the ascending_nums is empty:
    - Append the current number to ascending_nums
    - Continue
  - If current number is greater then the previous number:
    - Append the current number to ascending_nums
  - Else:
    - Reassign max_sum as the max between max_sum and the previous number
    - Clear the ascending_nums list
    - Append the current number to ascending_nums
  - Reassign max_sum as the max between max_sum and the summation of ascending_nums
- Return max_sum
'''