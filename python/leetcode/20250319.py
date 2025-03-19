'''
https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/description

Minimum Operations to Make Binary Array Elements Equal to One I

You are given a binary array nums.

You can do the following operation on the array any number of times (possibly zero):

Choose any 3 consecutive elements from the array and flip all of them.
Flipping an element means changing its value from 0 to 1, and from 1 to 0.

Return the minimum number of operations required to make all elements in nums equal to 1. If it is impossible, return -1.


Example 1:

Input: nums = [0,1,1,1,0,0]

Output: 3

Explanation:
We can do the following operations:

Choose the elements at indices 0, 1 and 2. The resulting array is nums = [1,0,0,1,0,0].
Choose the elements at indices 1, 2 and 3. The resulting array is nums = [1,1,1,0,0,0].
Choose the elements at indices 3, 4 and 5. The resulting array is nums = [1,1,1,1,1,1].


Example 2:

Input: nums = [0,1,1,1]

Output: -1

Explanation:
It is impossible to make all elements equal to 1.

 
Constraints:

3 <= nums.length <= 105
0 <= nums[i] <= 1
'''

from typing import List

class Solution:
  def minOperations(self, nums: List[int]) -> int:
    indexMap = {
      0: 1,
      1: 0
    }

    n = len(nums)
    start = 0
    mid = start + 1
    end = start + 2
    flip_count = 0

    while end < n:
      if nums[start] == 0:
        nums[start] = indexMap[nums[start]]
        nums[mid] = indexMap[nums[mid]]
        nums[end] = indexMap[nums[end]]
        flip_count +=1
      start += 1
      mid = start + 1
      end = start + 2

    is_valid = all(nums)

    if is_valid:
      return flip_count
    else:
      return -1

solution = Solution()

print(solution.minOperations([0,1,1,1,0,0])) # -> 3
print(solution.minOperations([0,1,1,1])) # -1


'''
Pseudocode:
- Declare indexMap, where each key is either zero or one, and the value is the opposite binary
- Declare n as the length of the nums list
- Initialize start at zero
- Initialize mid as start + 1
- Initialize end as start + 2

- While end is less than n:
  - If nums at index start is equal to zero:
    - Reassign nums at index start to indexMap at [nums[start]]
    - Reassign nums at index mid to indexMap at [nums[mid]]
    - Reassign nums at index end to indexMap at [nums[end]]
    - Increment flip_count by one
  - Increment start by one
  - Ressign mid to start + 1
  - Reassign end to start + 2
- Declare is_valid as all(nums)
  - Note: this will return True or False based on if all values in nums are 1
- If is_valid is Truthy:
  - Return flip_count
- Else:
  - Return -1

- Time complexity: O(n)
- Space complexity O(1)
'''