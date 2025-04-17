'''
https://leetcode.com/problems/count-the-number-of-good-subarrays/description/

Count the Number of Good Subarrays

Given an integer array nums and an integer k, return the number of good subarrays of nums.

A subarray arr is good if there are at least k pairs of indices (i, j) such that i < j and arr[i] == arr[j].

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,1,1,1,1], k = 10
Output: 1
Explanation: The only good subarray is the array nums itself.

Example 2:

Input: nums = [3,1,4,3,2,2,4], k = 2
Output: 4
Explanation: There are 4 different good subarrays:
- [3,1,4,3,2,2] that has 2 pairs.
- [3,1,4,3,2,2,4] that has 3 pairs.
- [1,4,3,2,2,4] that has 2 pairs.
- [4,3,2,2,4] that has 2 pairs.
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i], k <= 109
'''

from typing import List
from collections import defaultdict

# class Solution:
#   def countGood(self, nums: List[int], k: int) -> int:
#     good_pairs_count = 0
#     good_subarrays_count = 0

#     for start in range(len(nums)):
#       for end in range(start + 1, len(nums) + 1):
#         nums_count = Counter(nums[start:end])
#         good_pairs_count = 0

#         for count in nums_count.values():
#           if count >= 2:
#             good_pairs_count += (count * (count - 1)) // 2

#         if good_pairs_count >= k:
#           good_subarrays_count += 1
      
#     return good_subarrays_count
## Brute force: Time complexity O(n^3)

class Solution:
  def countGood(self, nums: List[int], k: int) -> int:
    left = 0
    current_good_pairs = 0
    good_subarrays_count = 0
    pair_occurrences = defaultdict(int)

    for right in range(len(nums)):
      current_good_pairs += pair_occurrences[nums[right]]
      pair_occurrences[nums[right]] += 1
      
      while current_good_pairs >= k:
        good_subarrays_count += len(nums) - right
        current_good_pairs -= pair_occurrences[nums[left]] - 1
        pair_occurrences[nums[left]] -= 1
        left +=1

    return good_subarrays_count

  
solution = Solution()

print(solution.countGood([1,1,1,1,1], 10)) # -> 1
print(solution.countGood([3,1,4,3,2,2,4], 2)) # -> 4
print(solution.countGood([2,1,3,1,2,2,3,3,2,2,1,1,1,3,1], 11)) # -> 21

'''
Pseudocode:
- Initialize left pointer, current_good_pairs and good_subarrays_count at zero
- Declare pair_occurrences as defaultdict
- Iterate through the nums list: (increase the window)
  - Increment current_good_pairs by value of pair_occurrences[nums[right]]
  - Increment pair_occurrences[nums[right]] by one
  - While current_good_pairs is less than or equal to k: (shrink the window and add good subarrays)
    - Increment good_subarrays_count by len(nums) - right
    - Decrement current_good_pairs by pair_occurrences[nums[left]] - 1
    - Decrement pair_occurrences[nums[left]] by 1
    - Increment left by 1
- Return good_subarrays_count

- Time complexity: O(n)
- Space complexity: O(n)

- Note: I needed a lot of help on this one
'''