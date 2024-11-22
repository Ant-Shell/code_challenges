'''
https://leetcode.com/problems/maximum-subarray

Maximum Subarray

Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
'''

from typing import List

class Solution:
  def maxSubArray(self, nums: List[int]):
    result = nums[0]
    max_ending = nums[0]

    for i in range(1, len(nums)):
      max_ending = max(max_ending + nums[i], nums[i])
      result = max(result, max_ending)

    return result

    
solution = Solution()

print(solution.maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) # -> 6
print(solution.maxSubArray([1])) # -> 1
print(solution.maxSubArray([5,4,-1,7,8])) # -> 23

'''
Pseudocode:
- Define method maxSubArray, with parameters of self and nums
- Declare result as nums at index zero
- Declare maex_ending as nums at index zero
- Iterate through a range from 1, to the lenght of the nume list
  - Reassign max_ending as the max between max_ending + nums at current index (i) and nums at current index (i)
    - Note: This will either extend the sublist or start a new sublist
  - Reassign result as the max between result and max_ending
    - Note: This will update the result if the max sublist  sume ending at the current index (i) is greater than the result
- Return result
- Note: I was unaware of Kadane's Algorithm - need to study this
'''

## Resources:
# https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d
# https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/