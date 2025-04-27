'''
https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/description

Count Subarrays of Length Three With a Condition


Given an integer array nums, return the number of subarrays of length 3 such that the sum of the first and third numbers equals exactly half of the second number.

 

Example 1:

Input: nums = [1,2,1,4,1]

Output: 1

Explanation:

Only the subarray [1,4,1] contains exactly 3 elements where the sum of the first and third numbers equals half the middle number.

Example 2:

Input: nums = [1,1,1]

Output: 0

Explanation:

[1,1,1] is the only subarray of length 3. However, its first and third numbers do not add to half the middle number.

Constraints:

3 <= nums.length <= 100
-100 <= nums[i] <= 100
'''

from typing import List

# First attempt
# class Solution:
#   def countSubarrays(self, nums: List[int]) -> int:
#     result = 0
    
#     for i in range (len(nums)-2):
#       sub = [nums[i], nums[i+1], nums[i+2]]
#       condition = sub[0] + sub[2]
#       if condition == (sub[1] / 2):
#         result += 1

#     return result


# Refactor
class Solution:
  def countSubarrays(self, nums: List[int]) -> int:
    result = 0
    
    for i in range (len(nums)-2):
      first, second, third = nums[i], nums[i+1], nums[i+2]

      if first + third == (second / 2):
        result += 1

    return result

solution = Solution()

print(solution.countSubarrays([1,2,1,4,1])) # -> 1
print(solution.countSubarrays([1,1,1])) # -> 0
print(solution.countSubarrays([0,-4,-4])) # -> 0

'''
Pseudocode:
- Initialize a counter
- Iterate through the nums list:
  - Isolate a sublist of length 3
  - If the the sum of the first and third values equals the second value in the sublist divided by 2:
    - Increment the counter
- Return the counter

- Time complexity: O(n)
- Space complexity: O(1)
'''