'''
https://leetcode.com/problems/intersection-of-two-arrays-ii/description

Intersection of Two Arrays II

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000

'''

from typing import List
from collections import Counter

class Solution:
  def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
    small_list = nums2 if len(nums2) < len(nums1) else nums1
    large_list = nums1 if len(nums1) > len(nums2) else nums2
    occurrences = Counter(small_list)
    result = []

    for num in large_list:
      if num in occurrences:
        occurrences[num] -= 1
        result.append(num)

      if occurrences[num] == 0:
        del occurrences[num]

    return result




solution = Solution()

print(solution.intersect([1,2,2,1], [2,2])) # -> [2,2]
print(solution.intersect([4,9,5], [9,4,9,8,4])) # -> [4,9]
print(solution.intersect([1,2], [1,1])) # -> [1] (currently [1,2])

'''
Pseudocode:
- Declare small_list as nums2 or nums1, whether len(nums2) < len(nums1)
- Declate large_list as nums1 or nums2, whether len(nums1) > len(nums2)
- Declare occurrences as a Counter dict of small_list
- Declare result as an empty list
- Iterate through large_list:
  - If num is in occurrences:
    - Decrement the value of occurrences at index num
    - Append num to the result list
  - If the value of occurrences at index num is equal to zero
    - Delete occurrences at index num (key and value)
- Return result

- Time complexity: O(n + m)
- Space complexity: O(min(n,m))
'''