'''
https://leetcode.com/problems/add-binary/

Add Binary

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.

'''
# Solution 1
# class Solution:
#   def addBinary(self, a: str, b: str) -> str:
#     return bin(int(a, 2) + int(b, 2))[2:]

# solution = Solution()

# print(solution.addBinary("11", "1")) # -> "100"
# print(solution.addBinary("1010", "1011")) # -> "10101"

'''
Pseudocode:
- Convert a and b into base 10 numbers
- Add them
- Convert result back to a binary number

- Time complexity: O(n + m)
- Space complecity: O(n + m)

- Notes:
  - https://www.w3schools.com/python/ref_func_int.asp
  - https://www.w3schools.com/Python/ref_func_bin.asp
  - https://www.w3schools.com/python/python_strings_slicing.asp
'''

# Solution 2 (with assistance):
class Solution:
  def addBinary(self, a: str, b: str) -> str:
    i = len(a) - 1
    j = len(b) - 1
    carry = 0
    result = []

    while i >= 0 or j >= 0:
      digit_a = int(a[i]) if i >= 0 else 0
      digit_b = int(b[j]) if j >= 0 else 0
      sum = digit_a + digit_b + carry
      result.append(str(sum % 2))
      carry = sum // 2
      i -= 1
      j -= 1
    
    if carry == 1: result.append("1")

    return ''.join(reversed(result))


solution = Solution()

print(solution.addBinary("11", "1")) # -> "100"
print(solution.addBinary("1010", "1011")) # -> "10101"

'''
Pseudocode:
- Declare i pointer as the length of a minus 1
- Declare j pointer as the length of b minus 1
- Initialize carry as zero
- Declare result as an emprty list
- While i is greater than or equal to zero or j is greater than or equal to zero:
  - Declare digit_a as a[i] if i is greater than or equal to zero, else zero
  - Declare digit_b as b[j] if j is greater than or equal to zero, else zero
  - Declare sum as the evaluation of digit_a + digit_b + carry
  - Append sum mod 2, converted to a string, to the result list
  - Reassign carry as the evaluation of sum divided by 2 and rounded down
  - Decrement i by 1
  - Decrement j by 1
- If carry is equal to 1, append 1 to the result list
- Return the joined and reversed result list

- Time complexity: O(max(n,m))
- Space complecity: O(max(n, m))
'''