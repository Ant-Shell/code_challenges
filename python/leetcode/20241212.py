'''
https://leetcode.com/problems/contains-duplicate-ii/description/

Contains Duplicate II

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.


Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 
Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105
'''

from typing import List

class Solution:
  def containsNearbyDuplicate(self, nums: List[int], k: int):
    if len(nums) < 2: return False

    occurrences = {}

    for i in range(len(nums)):
      if nums[i] not in occurrences:
        occurrences[nums[i]] = []
      occurrences[nums[i]].append(i)
    
    longest_value = max(occurrences.values(), key=sum)

    if len(longest_value) < 2:
      return False

    if len(longest_value) == 2:
      return abs(longest_value[0] - longest_value[1]) <= k

    for i in range(len(longest_value)):
      if abs(longest_value[i] - longest_value[i+1]) <= k:
        return True

    return False

solution = Solution()

print(solution.containsNearbyDuplicate([1,2,3,1], 3)) # -> True
print(solution.containsNearbyDuplicate([1,0,1,1], 1)) # -> True
print(solution.containsNearbyDuplicate([1,2,3,1,2,3], 2)) # -> False
print(solution.containsNearbyDuplicate([1,2], 2)) # -> False
print(solution.containsNearbyDuplicate([1,4,2,3,1,2], 3)) # -> True
print(solution.containsNearbyDuplicate([0,1,2,3,4,0,0,7,8,9,10,11,12,0], 1)) # -> True

'''
Pseudocode:
- Return false if the length of the nums list is less than two (unable to have duplicates)
- Declare occurrences dict
- Iterate through the nums list
  - If nums at index i is not in occurrences dict
    - Add key of nums at index i to occurrences dict with value of an empty list
  - Append index value to the list value of occurrences at index i
- Declare longest_value as the max of the values in the occurrences dict, according to their sum
- If the length of longest_value is less than two:
  - Return False (unable to have duplicates)
- If the length of longest_value is equal to two:
  - Return the evaluation of the absolute value of longest_value at index zero minus longest_value at index one is less
  than or equal to k
- Iterate through the longest_value list:
  - If the evaluation of the absolute value of longest_value at index i minus longest_value at index i + one is less
  than or equal to k
    - Return true
- Return False as the default
- Note: Not my finest code, but a win is a win
'''