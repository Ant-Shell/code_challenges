'''
https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/description/

Check If All 1's Are at Least Length K Places Away

Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, 
otherwise return false.

Example 1:

Input: nums = [1,0,0,0,1,0,0,1], k = 2
Output: true
Explanation: Each of the 1s are at least 2 places away from each other.


Example 2:

Input: nums = [1,0,0,1,0,1], k = 2
Output: false
Explanation: The second 1 and third 1 are only one apart from each other.
 

Constraints:

1 <= nums.length <= 105
0 <= k <= nums.length
nums[i] is 0 or 1
'''

from typing import List
from collections import deque

class Solution:
  def kLengthApart(self, nums: List[int], k: int) -> bool:
    one_location = deque()

    for i, num in enumerate(nums):
      if num and not len(one_location):
        one_location.append(i)
        continue
      if num:
        if abs(one_location[0] - i) - 1 < k:
          return False 
        one_location.pop()
        one_location.append(i)

    return True

solution = Solution()

print(solution.kLengthApart([1,0,0,0,1,0,0,1], 2)) # -> true
print(solution.kLengthApart([1,0,0,1,0,1], 2)) # -> false
print(solution.kLengthApart([1,0,0,1,0,0,1], 2)) # -> true

'''
Pseudocode:
- Declare one_loc as a stack containing the location (index) of a one
- Iterate through the nums list
  - If num is truthy (meaning num a 1) and the one_loc stack is empty (meaning no location of a 1 has been recorded yet)
    - Append the location (index) of the current number to the stack
    - Continue to the next iteration
    - Note: This takes care of the first time a 1 is detected
  - If num is truthy:
    - If (the result of the absolute value of the one_loc stack at index 0 minus one) minus one is less than k
      - Return false
      - Note, this would mean 1's did not have enough spaces from each other at some point
    - Else:
      - Pop the previous location (index) from the stack
      - Add the current location (index) to the stack
- Return true as the default

- O(n) time complexity
- O(1) space complexity
'''