'''
https://leetcode.com/problems/sort-an-array/description/

Sort an Array

Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.

'''

from typing import List

class Solution:
  def sortArray(self, nums: List[int]) -> List[int]:
    for i in range(len(nums)):
      for j in range(i, len(nums)):
        lowest = float('inf')
        current = nums[i]
        if current > nums[j]:
          lowest = nums[j]
          nums[i] = lowest
          nums[j] = current
    return nums


solution = Solution()

print(solution.sortArray([5,2,3,1])) # -> [1,2,3,5]
print(solution.sortArray([5,1,1,2,0,0], 0)) # -> [0,0,1,1,2,5]

#0,0,2,1,1,5

'''
- Iterate through outer loop
  - Iterate through inner loop
    - Declate lowest variable as infinity
    - Declare current variable as nums at index i
    - If current is greater than nums at index j:
      - Reassign lowest to nums at index j:
      - Reassign nums at index i to lowest
      - Reassign nums at index j to current
  - Return nums 

- Note: I was only able to get an O(n^2) solution
  - Resources for O(nlog(n)) solutions can be found here:
    - https://www.geeksforgeeks.org/python-program-for-merge-sort/
    - https://www.geeksforgeeks.org/python-program-for-quicksort/
'''