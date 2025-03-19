

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