'''
https://leetcode.com/problems/two-sum/description/

Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add
up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

'''

from typing import List

# class Solution:
#   def twoSum(self, nums: List[int], target: int):
#     start = 0
#     end = len(nums) - 1

#     while start < end:
#       for current in range(end, start, -1):
#         if nums[start] + nums[current] == target:
#           return [start, current]
#       start += 1

'''
Pseudocode:
- Iterate thorough the nums list
- Initialize start as zero
- Initialize end as the last index of the list
- While start is less than end
  - Loop through the nums list backward at a range of end until start
    - If the nums at index start plus nums at index current equals target
      - Return start and current in a list
  - Increment start by one
'''

class Solution:
  def twoSum(self, nums: List[int], target: int):
    observed = {}
    
    for index, num in enumerate(nums):
      if num not in observed:
        observed[num] = index
      if (target - num) in observed and observed[target - num] != index:
        return [observed[target - num], index]

solution = Solution()

print(solution.twoSum([2,7,11,15], 9)) # -> [0,1]
print(solution.twoSum([3,2,4], 6)) # -> [1,2]
print(solution.twoSum([3,3], 6)) # -> [0,1]

'''
Pseudocode:
- Declare observed as an empty dictionary
- Iterate through the nums list
  - If current num is not in the observed dictionary:
    - Add a new key of num to the observed dict with a value of index
  - If (target - num) is in the observed dict and the value of observed at key [target - num] does not equal index:
    - Return a list of of observed at key [target - num] and the current index in the for loop
'''