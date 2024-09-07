# https://structy.net/problems/max-value

'''
max value
Write a function, max_value, that takes in list of numbers as an argument.

The function should return the largest number in the list.

Solve this without using any built-in list methods.

You can assume that the list is non-empty.
'''

def max_value(nums):
  highestNumber = None
  for num in nums:
    if highestNumber == None:
      highestNumber = num
    
    if num > highestNumber:
      highestNumber = num
    
  return highestNumber

print(max_value([4, 7, 2, 8, 10, 9]))