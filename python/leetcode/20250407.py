'''
https://leetcode.com/problems/partition-equal-subset-sum/description/

Partition Equal Subset Sum

Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.


Example 1:

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:

Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
 

Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= 100
'''

from typing import List
from functools import lru_cache

class Solution:
  def canPartition(self, nums: List[int]) -> bool:
    if sum(nums) % 2 == 1:
      return False

    target = sum(nums) // 2
    
    @lru_cache(maxsize=None) # Used for memoization
    def finder(index, current_sum):
      if current_sum == target:
        return True
      if index >= len(nums) or current_sum > target:
        return False

      return finder(index+1, current_sum + nums[index]) or finder(index+1, current_sum) # Will return True if either is True, else False

    return finder(0,0)

solution = Solution()

print(solution.canPartition([1,5,11,5])) # ->> True
print(solution.canPartition([1,2,3,5])) # -> False
print(solution.canPartition([1,3,1,2,2,3])) # -> True

'''
Pseudocode:
- If the sum of all values in the nums list is odd:
  - Return False (unable to be partitioned into equal sum subsets)
- Declare target as ths sum of nums divided by two (and rounded down)
- Utilize @lru_cache for memoization, which omits the need to recalculate previously seen function call results,
  which are stored in memory and recalled when needed
- Declare helper function finder with parameters of index and current_sum
  - If current_sum == target: (Base case #1)
    - Return True
  - If index >= the length of nums or current_sum is greater than target: (Base case #2)
    - Return False
  - Return the recursive call of finder with arguments of index+1 and current_sum + nums[index]
  or
  - Return the recursive call of finder with arguments of index+1 and current_sum
- Return the invocation of finder function, with arguments of 0,0

- Time complexity: O(2^n) without memoization, O(n * target) with memoization
- Space complexity: O(2^n) without memoization, O(n * target) with memoization

- Notes:
  - I needed assistance to arrive at this answer
  - Concepts to study:
    - https://www.w3schools.com/dsa/dsa_ref_knapsack.php
    - https://www.w3schools.com/dsa/dsa_ref_dynamic_programming.php
    - https://www.w3schools.com/dsa/dsa_ref_memoization.php
'''