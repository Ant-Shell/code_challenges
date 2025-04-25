'''
https://leetcode.com/problems/count-complete-subarrays-in-an-array/

Count Complete Subarrays in an Array

You are given an array nums consisting of positive integers.

We call a subarray of an array complete if the following condition is satisfied:

The number of distinct elements in the subarray is equal to the number of distinct elements in the whole array.
Return the number of complete subarrays.

A subarray is a contiguous non-empty part of an array.

 

Example 1:

Input: nums = [1,3,1,2,2]
Output: 4
Explanation: The complete subarrays are the following: [1,3,1,2], [1,3,1,2,2], [3,1,2] and [3,1,2,2].
Example 2:

Input: nums = [5,5,5,5]
Output: 10
Explanation: The array consists only of the integer 5, so any subarray is complete. The number of subarrays that we can choose is 10.
 

Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 2000
'''

from typing import List
from collections import Counter, defaultdict

class Solution:
  def countCompleteSubarrays(self, nums: List[int]) -> int:
    occurrences = Counter(nums)
    result = 0
    n = len(nums)

    for left in range(n):
      window_counter = defaultdict(int)

      for right in range(left, n):
        window_counter[nums[right]] += 1

        if len(window_counter) == len(occurrences):
          result += 1

    return result


solution = Solution()

print(solution.countCompleteSubarrays([1,3,1,2,2])) # -> 4
print(solution.countCompleteSubarrays([5,5,5,5])) # -> 10


'''
Pseudocode:
- Create an occurrences dict with keys of numbers in nums and their occurrences as values
- Initialize result as zero
- Declare n as length of nums
- Iterate through nums (outer loop)
  - Declare window_counter as an integer defaultdict
  - Iterate through the window (inner loop)
    - Increment window_counter[nums[right]] by 1
      - If length of window_counter and length of occurrences is equal:
        - Increment result by 1
- Return result

- Time complexity: O(n^2)
- Space complexity: O(n)
'''