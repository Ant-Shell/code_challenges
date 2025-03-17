'''
https://leetcode.com/problems/divide-array-into-equal-pairs/description/

Divide Array Into Equal Pairs

You are given an integer array nums consisting of 2 * n integers.

You need to divide nums into n pairs such that:

Each element belongs to exactly one pair.
The elements present in a pair are equal.
Return true if nums can be divided into n pairs, otherwise return false.


Example 1:

Input: nums = [3,2,3,2,2,2]
Output: true
Explanation: 
There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.


Example 2:

Input: nums = [1,2,3,4]
Output: false
Explanation: 
There is no way to divide nums into 4 / 2 = 2 pairs such that the pairs satisfy every condition.
 
Constraints:

nums.length == 2 * n
1 <= n <= 500
1 <= nums[i] <= 500
'''

from typing import List

class Solution:
  def divideArray(self, nums: List[int]) -> bool:
    occurrences = {}

    for num in nums:
      if num not in occurrences:
        occurrences[num] = 0
      occurrences[num] += 1

    for key in occurrences:
      if occurrences[key] % 2 == 1:
        return False
    return True

solution = Solution()

print(solution.divideArray([3,2,3,2,2,2])) # -> True
print(solution.divideArray([1,2,3,4])) # -> False

'''
Pseudocode:
- Create a hashmap for occurrences of each number in nums
- Iterate through the nums list
  - If key does not exist for num does not exist in hashmap, create it
  - Otherwise, increase value of num key by one
- Iterate though hash
  - If a value is odd
    - Return False
- Return True

- Time complexity: O(n)
- Space complexity: O(n)
'''