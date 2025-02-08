'''
https://leetcode.com/problems/reverse-only-letters/description/

Reverse Only Letters

Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.


Example 1:

Input: s = "ab-cd"
Output: "dc-ba"


Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"


Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
 

Constraints:

1 <= s.length <= 100
s consists of characters with ASCII values in the range [33, 122].
s does not contain '\"' or '\\'.
'''

class Solution:
  def reverseOnlyLetters(self, s: str) -> str:
    s_list = list(s)
    start = 0
    end = len(s_list) - 1

    while start < end:
      if not s_list[start].isalpha() or s_list[start].isnumeric():
        start += 1
        continue
      if not s_list[end].isalpha() or s_list[end].isnumeric():
        end -= 1
        continue

      letter_1 = s_list[start]
      letter_2 = s_list[end]

      s_list[start] = letter_2
      s_list[end] = letter_1

      start += 1
      end -= 1

    return "".join(s_list)


solution = Solution()

print(solution.reverseOnlyLetters("ab-cd")) # -> "dc-ba"
print(solution.reverseOnlyLetters("a-bC-dEf-ghIj")) # -> "j-Ih-gfE-dCba"
print(solution.reverseOnlyLetters("Test1ng-Leet=code-Q!")) # -> "Qedo1ct-eeLg=ntse-T!"

'''
Pseudocode:
- Declare a list from s string argument
- Declare start as zero
- Declare end as the length of s list minus one
- While start is less than end:
  - If the current character is not a letter
    - Increment start and/or increment end
    - Continue
  - Swap the characters of the s list at index start and end
  - Increment start
  - Decrement end
- Return the joined result of the s list
'''