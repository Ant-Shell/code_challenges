'''
https://leetcode.com/problems/shuffle-the-array/

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].


Example 1:

Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

Example 2:

Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]

Example 3:

Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]
'''

from typing import List

class Solution:
  def shuffle(self, nums: List[int], n: int):
    first_half = nums[:n]
    second_half = nums[n:]
    shuffled = []

    for index, num in enumerate(first_half):
      shuffled.append(num)
      shuffled.append(second_half[index])

    return shuffled

solution = Solution()

print(solution.shuffle([2,5,1,3,4,7], 3)) # -> [2,3,5,4,1,7] 
print(solution.shuffle([1,2,3,4,4,3,2,1], 4)) # -> [1,4,2,3,3,2,4,1]
print(solution.shuffle([1,1,2,2], 2)) # -> [1,2,1,2]


'''
Pseudocode:
- Define the shuffle method with parameters self, nums and n 
- Divide the nums list in two at the index of n
  - Declare first_half as nums list divided from beginning until index n
  - Declare second half as nums list divided from index n until the end
- Declare shuffled as an empty list
- Append to shuffled list, alternating betwen first_half and second_half values at the current num and index respectively
- Return shuffled list
'''