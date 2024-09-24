'''
https://structy.net/problems/five-sort

five sort
Write a function, five_sort, that takes in a list of numbers as an argument.
The function should rearrange elements of the list such that all 5s appear at the end.
Your function should perform this operation in-place by mutating the original list.
The function should return the list.

Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the list.
'''

def five_sort(nums):
  i = 0
  j = len(nums) - 1

  while i < j:
    if nums[i] != 5:
      i += 1
    else:
      nums[i], nums[j] = nums[j], nums[i]
    
    if nums[j] == 5:
      j -= 1
  return nums


print(five_sort([12, 5, 1, 5, 12, 7])) # -> [12, 7, 1, 12, 5, 5] 
print(five_sort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5])) # -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5] 
print(five_sort([5, 5, 5, 1, 1, 1, 4])) # -> [4, 1, 1, 1, 5, 5, 5] 
print(five_sort([5, 5, 6, 5, 5, 5, 5])) # -> [6, 5, 5, 5, 5, 5, 5] 
print(five_sort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5])) # -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5]

'''
Pseudocode:
- Initialize two pointer variables i and j
- Loop through the array from opposite ends of the nums array argument;
i starting at the beginning and j starting at the end
- While i is less than j:
  - If nums at index i does not equal 5:
    - Increment i by one
  - Else:
    - Swap the values of nums at index i and j
  - If nums at index j equals 5, decrememt j
'''