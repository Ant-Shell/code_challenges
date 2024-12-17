'''
https://leetcode.com/problems/merge-sorted-array/description/

Merge Sorted Array

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109
'''
from typing import List


class Solution:
  def merge(self, nums1: List[int], m: int, nums2: List, n: int) -> None:
    nums1_len = m-1
    nums2_len = n-1
    total_len = (m+n)-1

    while nums2_len >= 0:
      if nums1_len >= 0 and nums1[nums1_len] > nums2[nums2_len]:
        nums1[total_len] = nums1[nums1_len]
        nums1_len -= 1
      else:
        nums1[total_len] = nums2[nums2_len]
        nums2_len -= 1
      total_len -= 1
    print(nums1)

solution = Solution()

print(solution.merge([1,2,3,0,0,0], 3, [2,5,6], 3)) # -> [1,2,2,3,5,6]
print(solution.merge([1], 1, [], 0)) # -> [1]
print(solution.merge([0], 0, [1], 1)) # -> [1]
print(solution.merge([4,5,6,0,0,0], 3, [1,2,3], 3)) # -> [1,2,3,4,5,6]

'''
Pseudocode:
- Declare nums1_len as m minus one
- Declare nums2_len as n minus one
- Declare total_len as m plus n, minus one
- While nums2_len is greater than or equalt to zero:
  - If nums1_len is greater than or equal to zero and nums1 at index nums1_len is greater than 
  nums2 at index nums2_len:
    - nums1 at index total_len is reassigned as nums1 at index nums1_len
    - Decrement nums1_len by one
  - Else:
    - nums1 at index total_len is reassigned as nums2 at nums2_len
    - Decrement nums2_len by one
  - Decrement total_len by one

- Note: I was unable to solve this on my own, need to come back and study
'''