'''
https://leetcode.com/problems/count-symmetric-integers/description/

Count Symmetric Integers

You are given two positive integers low and high.

An integer x consisting of 2 * n digits is symmetric if the sum of the first n digits of x is equal to the sum of the last n digits of x. Numbers with an odd number of digits are never symmetric.

Return the number of symmetric integers in the range [low, high].

Example 1:

Input: low = 1, high = 100
Output: 9
Explanation: There are 9 symmetric integers between 1 and 100: 11, 22, 33, 44, 55, 66, 77, 88, and 99.
Example 2:

Input: low = 1200, high = 1230
Output: 4
Explanation: There are 4 symmetric integers between 1200 and 1230: 1203, 1212, 1221, and 1230.
 

Constraints:

1 <= low <= high <= 104
'''

## First attempt:
# class Solution:
#   def countSymmetricIntegers(self, low: int, high: int) -> int:
#     symmetric_integers_count = 0

#     for i in range(low, high+1):
#       num_string = str(i)
#       divide = len(num_string) // 2

#       if len(num_string) % 2 == 1:
#         continue

#       first_half = sum(int(item) for item in num_string[:divide])
#       second_half = sum(int(item) for item in num_string[divide:])

#       if first_half == second_half:
#         symmetric_integers_count += 1
      
#     return symmetric_integers_count

## Second attempt:
# class Solution:
#   def countSymmetricIntegers(self, low: int, high: int) -> int:
#     startingNum = low
#     endingNum = high
#     symmetric_integers_count = 0

#     while startingNum <= endingNum:
#       digit_list = []
#       current_num = startingNum
#       while current_num > 0:
#         digit_list.append(current_num % 10)
#         current_num = current_num // 10

#       if len(digit_list) % 2 == 0:
#         divide = len(digit_list) // 2
#         digit_list.reverse()
#         if sum(digit_list[:divide]) == sum(digit_list[divide:]):
#           symmetric_integers_count += 1

#       startingNum += 1
  
#     return symmetric_integers_count

## More optimization
class Solution:
  def countSymmetricIntegers(self, low: int, high: int) -> int:
    symmetric_integers_count = 0

    for i in range(low, high +1):
      digit_list = []
      current_num = i
      while current_num > 0:
        digit_list.insert(0, current_num % 10)
        current_num = current_num // 10

      if len(digit_list) % 2 == 1:
        continue

      divide = len(digit_list) // 2
      if sum(digit_list[:divide]) == sum(digit_list[divide:]):
        symmetric_integers_count += 1
  
    return symmetric_integers_count
## Time complexity: O((high - low + 1) * d)
## Space complexity: O(d)

solution = Solution()

print(solution.countSymmetricIntegers(1,100)) # -> 9
print(solution.countSymmetricIntegers(1200, 1230)) # -> 4

'''
Pseudocode:
- Declare a counter for symmetric integers
- Iterate through the range of low and high
  - If number has odd number of digits, skip
  - If number has even number of digits
    - Isolate first half and second half of the number
    - Evaluate whether the summing the digits in each half are equal to each other
      - If so, increment the counter
- Return the symmetric integers counter

- Time complexity: O(high - low)
- Space complexity: O(n)
'''