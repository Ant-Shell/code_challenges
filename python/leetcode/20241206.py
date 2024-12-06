


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


