'''
https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/

Remove All Adjacent Duplicates In String

You are given a string s consisting of lowercase English letters. 

A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

 

Example 1:

Input: s = "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move. 

The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".


Example 2:

Input: s = "azxxzy"
Output: "ay"
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.

'''

from collections import deque

class Solution:
  def removeDuplicates(self, s: str) -> str:
    result = deque()

    for i in range(len(s)):
      if not len(result):
        result.append(s[i])
        continue
      if s[i] != result[-1]:
        result.append(s[i])
      else:
        result.pop()
    return ''.join(result)

solution = Solution()

print(solution.removeDuplicates("abbaca")) # -> "ca"
print(solution.removeDuplicates("azxxzy")) # -> "ay"

'''
Pseudocode:
- Declare result as an empty deque
- Iterate through the s string argument
  - If result stack is empty
    - Append the current letter to the stack
    - continue to the next iteration
  - If the current letter does not match the last letter in the result stack
    - Append the current letter to the stack
  - Else:
    - Remove the last letter from the stack
- Return the joined result, with no delimiters
  - Note: Turns the result deque into a string
'''