'''
https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/description

Maximum Value of an Ordered Triplet I

You are given a 0-indexed integer array nums.

Return the maximum value over all triplets of indices (i, j, k) such that i < j < k. If all such triplets have a negative value, return 0.

The value of a triplet of indices (i, j, k) is equal to (nums[i] - nums[j]) * nums[k].

 

Example 1:

Input: nums = [12,6,1,2,7]
Output: 77
Explanation: The value of the triplet (0, 2, 4) is (nums[0] - nums[2]) * nums[4] = 77.
It can be shown that there are no ordered triplets of indices with a value greater than 77. 
Example 2:

Input: nums = [1,10,3,4,19]
Output: 133
Explanation: The value of the triplet (1, 2, 4) is (nums[1] - nums[2]) * nums[4] = 133.
It can be shown that there are no ordered triplets of indices with a value greater than 133.
Example 3:

Input: nums = [1,2,3]
Output: 0
Explanation: The only ordered triplet of indices (0, 1, 2) has a negative value of (nums[0] - nums[1]) * nums[2] = -3. Hence, the answer would be 0.
 

Constraints:

3 <= nums.length <= 100
1 <= nums[i] <= 106
'''

from typing import List

## Incorrect First Pass: ##
# class Solution:
#   def maximumTripletValue(self, nums: List[int]) -> int:
#     preMax = 0
#     postMax = 0
#     indices = set()
#     start = 0
#     end = len(nums)-1

#     while start < end:
#       current = nums[start]
#       for i in range(start+1, end):
#         if current - nums[i] > preMax:
#           indices.clear()
#           indices.add(start)
#           indices.add(i)
#           preMax = current - nums[i]
#       start += 1

#     for j in range(len(nums)): # Issue here, not getting the actual max element consistently
#       if j in indices:
#         continue
#       postMax = max(postMax, nums[j])

#     return preMax * postMax

## Incorrect Second Pass: ##
# def maximumTripletValue(self, nums: List[int]) -> int:
#     preMax = 0
#     postMax = 0
#     start = 0
#     end = len(nums)-1
#     result = 0

#     while start < end: # Not needed, can be done in single pass #
#       current = nums[start]
#       for i in range(start+1, end):
#         if current - nums[i] > preMax:
#           preMax = current - nums[i]
#           postMax = max(nums[i:]) # Timeout due to rerunning this each time #
#           result = max(result, preMax * postMax)
#       start += 1

#     return result

class Solution:
  def maximumTripletValue(self, nums: List[int]) -> int:
    max_element = 0
    max_difference = 0
    max_triplet = 0

    for i in range(len(nums)):
      max_triplet = max(max_triplet, max_difference * nums[i])
      # print("max_triplet", max_triplet)
      max_difference = max(max_difference, max_element - nums[i])
      # print("max_difference", max_difference)
      max_element = max(max_element, nums[i])
      # print("max_element", max_element)
      # print("###########")
        
    return max_triplet
  
solution = Solution()

print(solution.maximumTripletValue([12,6,1,2,7])) # -> 77
print(solution.maximumTripletValue([1,10,3,4,19])) # -> 133
print(solution.maximumTripletValue([1,2,3])) # -> 0
print(solution.maximumTripletValue([2,3,1])) # -> 0
print(solution.maximumTripletValue([6,11,12,12,7,9,2,11,12,4,19,14,16,8,16])) # -> 190

'''
Psuedocode:
- Initialize max_element, max_difference and max_triplet at zero
- Iterate through the nums list:
  - Reassign max_triplet as the max between max_triplet and max_difference * nums[i]
    - Note: This must happen before the following
  - Reassign max_difference as the max between max_difference and max_element - nums[i]
  - Reassign max_element as the max between max_element and nums[i]
- Return max_triplet

- Time complexity: O(n)
- Space complexity: O(1)

- Notes:
  - I needed help with this one
  - Review Dynamic Programming
    - https://www.geeksforgeeks.org/dynamic-programming/
'''