'''
https://leetcode.com/problems/reformat-the-string/description/

Reformat The String

You are given an alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).

You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. That is, no two adjacent characters have the same type.

Return the reformatted string or return an empty string if it is impossible to reformat the string.


Example 1:

Input: s = "a0b1c2"
Output: "0a1b2c"
Explanation: No two adjacent characters have the same type in "0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.

Example 2:

Input: s = "leetcode"
Output: ""
Explanation: "leetcode" has only characters so we cannot separate them by digits.

Example 3:

Input: s = "1229857369"
Output: ""
Explanation: "1229857369" has only digits so we cannot separate them by characters.
 

Constraints:

1 <= s.length <= 500
s consists of only lowercase English letters and/or digits.
'''



# class Solution:
#   def reformat(self, s:str) -> str:
#     letter_count = 0
#     number_count = 0
#     nums = []
#     letters = []
#     result = []

#     for char in s:
#       if char.isdigit():
#         number_count +=1
#         nums.append(char)
#       else:
#         letter_count += 1
#         letters.append(char)
    
#     char_diff = letter_count - number_count

#     if char_diff < -1 or char_diff > 1:
#       return ''
    
#     if char_diff == 0:
#       return s

#     i = 0
#     j = 0

#     while i < len(nums) or j < len(letters):
#       if letter_count > number_count:
#         if j < len(letters):
#           result.append(letters[j])
#           j += 1
#         if i < len(nums):
#           result.append(nums[i])
#           i += 1
#       else:
#         if i < len(nums):
#           result.append(nums[i])
#           i += 1
#         if j < len(letters):
#           result.append(letters[j])
#           j += 1

#     return ''.join(result)

## Refactored code (Thanks ChatGPT):
from itertools import zip_longest

class Solution:
  def reformat(self, s: str) -> str:
    nums = [char for char in s if char.isdigit()]
    letters = [char for char in s if char.isalpha()]
    
    if abs(len(nums) - len(letters)) > 1:
        return ""

    if len(letters) > len(nums):
        first, second = letters, nums
    else:
        first, second = nums, letters

    return "".join(a + (b if b else "") for a, b in zip_longest(first, second))


solution = Solution()

print(solution.reformat("a0b1c2")) # -> a0b1c2
print(solution.reformat("leetcode")) # -> ""
print(solution.reformat("1229857369")) # -> ""
print(solution.reformat("covid2019")) # -> "c2o0v1i9d"


'''
Pseudocode:
- Make a list of letters
- Make a list of numbers
- If the absolute value of nums length - letters length is greater than 1
  - Return an empty string
- Ensure the longer list starts first and unpack tuples
- Merge the two lists in an alternating fashion using join and zip_longest()
  - zip_longest() pairs up letters and numbers
  - If second runs out, None values are replaced with ""
  - "".join(...) merges everything into one final string

- Note: I needed lots of help with this one :|

- Need to study:
  - List comprehension:
    - https://www.w3schools.com/python/python_lists_comprehension.asp
    - https://www.geeksforgeeks.org/python-list-comprehension/

  - Intertools(zip_longest):
    - https://docs.python.org/3/library/itertools.html#itertools.zip_longest

  - Tuple unpacking:
    - https://www.w3schools.com/python/python_tuples_unpack.asp
    - https://www.geeksforgeeks.org/unpacking-a-tuple-in-python/
'''