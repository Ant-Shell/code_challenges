'''
https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/description

Count Subarrays Where Max Element Appears at Least K Times

You are given an integer array nums and a positive integer k.

Return the number of subarrays where the maximum element of nums appears at least k times in that subarray.

A subarray is a contiguous sequence of elements within an array.

 

Example 1:

Input: nums = [1,3,2,3,3], k = 2
Output: 6
Explanation: The subarrays that contain the element 3 at least 2 times are: [1,3,2,3], [1,3,2,3,3], [3,2,3], [3,2,3,3], [2,3,3] and [3,3].
Example 2:

Input: nums = [1,4,2,1], k = 3
Output: 0
Explanation: No subarray contains the element 4 at least 3 times.
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 106
1 <= k <= 105
'''

from typing import List

## First attempt - TLE
# class Solution:
#   def countSubarrays(self, nums: List[int], k: int) -> int:
#     n = len(nums)
#     max_value = max(nums)
#     result = 0

#     for left in range(n):
#       max_value_count = 0
#       subarray_count = 0
#       invalid_subarrays = 0
#       right = left

#       while (right < n):
#         if nums[right] == max_value:
#           max_value_count += 1
        
#         if max_value_count < k:
#           invalid_subarrays += 1

#         subarray_count += 1
#         right +=1
      
#       result += subarray_count - invalid_subarrays

#     return result

# solution = Solution()

# print(solution.countSubarrays([1,3,2,3,3], 2)) # -> 6
# print(solution.countSubarrays([1,4,2,1], 3)) # -> 0


'''
Pseudocode:
- Declare variable n for length of nums
- Declare a counter for subarrays where the maximum element of nums appearts at least k times
- Declare a variable for the max value in nums
- Loop through the nums list
  - Initialize a counter for max values detected
  - Initialize a counter for subarrays
  - Initialize a counter for invalid subarrays
  - Declare right as vlaue of left
  - While right is less than n
    - If nums[right] is equal to max value
      - Increment max value count by one
    - If max value coun is less than k
      - Increment invalid subarrays by one
    - Increment subarray count
    - Increment right
  - Add subarray count - invalid subarrays to the result
- Return result

  

- Time complexity: O(n^2) - TLE
- Space complexity: O(1)
'''

## Second attempt with assistance
class Solution:
  def countSubarrays(self, nums: List[int], k: int) -> int:
    n = len(nums)
    max_value = max(nums)
    max_value_count = 0
    left = 0
    result = 0

    for right in range(n):
      if nums[right] == max_value:
        max_value_count += 1

        while max_value_count >= k:
          result += n - right

          if nums[left] == max_value:
            max_value_count -= 1
          left += 1

    return result


solution = Solution()

print(solution.countSubarrays([1,3,2,3,3], 2)) # -> 6
print(solution.countSubarrays([1,4,2,1], 3)) # -> 0

'''
Pseudocode:
- Declare variable n for length of nums
- Declare a variable for the max value in nums
- Declare a counter for subarrays where the maximum element of nums appearts at least k times
- Declare a left pointer
- Declare result
- Loop through the nums list with a right pointer
  - If nums at index right is equal to max value
    - Increment max value count
  - While max value count is greater than or equal to k
    - Add n - right to result
    - If nums at index left is equal to max value
      - Decrement max value count
    - Increment left
- Return result



- Time complexity: O(n)
- Space complexity: O(1)
'''