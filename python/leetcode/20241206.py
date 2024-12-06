
'''
https://leetcode.com/problems/valid-parentheses/description/

Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

 
Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
'''

class Solution:
  def isValid(self, s: str) -> bool:
    if len(s) % 2 != 0 or len(s) == 0:
      return False

    bracket_map = {
      "(": ")",
      "{": "}",
      "[": "]"
    }
    opening_brackets = []
    
    for i in range(len(s)):
      if s[i] in bracket_map:
        opening_brackets.append(s[i])

      if s[i] not in bracket_map:
        if len(opening_brackets) == 0:
          return False
        current_bracket = opening_brackets.pop()
        if bracket_map[current_bracket] != s[i]:
          return False
    return len(opening_brackets) == 0

solution = Solution()

print(solution.isValid("")) # -> False
print(solution.isValid(")")) # -> False
print(solution.isValid("()")) # -> True
print(solution.isValid("()[]{}")) # -> True
print(solution.isValid("(]")) # -> False
print(solution.isValid("([])")) # -> True
print(solution.isValid("([)]")) # -> False
print(solution.isValid("((")) # -> False
print(solution.isValid("){")) # -> False

'''
Pseudocode:
- Guard against strings that are uneven or empty
- Create a bracket_map dictionary mapping the open brackets to their closing counterparts
- Initialize opening_brackets as an empty list
- Iterate through the s string argument
  - If the current character in the s string is the bracket_map dictionary:
    - Append it to the opening_brackets list
  - If the current character in the s string is not in the bracket_map dictionary:
      - Return False if the opening_brackets list is empty at this point
  - Declare current_bracket as the value popped from the opening_brackets list
  - If bracket_map at index current_bracket does not equal the current character in the s string:
    - Return False
- Return evaluation of opening_brackets length being equal to zero
'''


