


from typing import List

class Solution:
  def reverseString(self, s: List[str]) -> None:
   start = 0
   end = len(s) - 1

   while start < end:
     start_char = s[start]
     end_char = s[end]
     s[start] = end_char
     s[end] = start_char
     start += 1
     end -= 1
     print(s)
    

solution = Solution()

print(solution.reverseString(["h","e","l","l","o"])) # -> ["o","l","l","e","h"]
print(solution.reverseString(["H","a","n","n","a","h"])) # -> ["h","a","n","n","a","H"]

'''
Pseudocode:
- Initialize start variable as zero
- Declate end variable as the length of s input string minus one
- While start is less than end:
  - Declare start_char as the value s at index of the start value
  - Declare end_char as the value s at index of the end value
  - Reassign s at index of the start value as end_char
  - Reassign s at index of end value as start_char
  - Increment start by one
  - Decrement end by one
'''