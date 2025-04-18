'''
https://leetcode.com/problems/smallest-even-multiple/description/

Smallest Even Multiple

Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.
 

Example 1:

Input: n = 5
Output: 10
Explanation: The smallest multiple of both 5 and 2 is 10.
Example 2:

Input: n = 6
Output: 6
Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.
 

Constraints:

1 <= n <= 150
'''

# import math

# class Solution:
  # def smallestEventMultiple(self, n: int) -> int:
  #   end = n * 2
  #   for i in range(1, end+1):
  #     if i % 2 == 0 and i % n == 0:
  #       return i

'''
Pseudocode:
- Declare end as n times 2
- Iterate through number range of 1, end + 1
  - If i is a multiple of 2 and n
    - Return i

- Time complexity: O(n)
- Space complexity O(1)
'''

# class Solution:
#   def smallestEventMultiple(self, n: int) -> int:
#     if n % 2 == 0:
#       return n
#     else:
#       return n * 2

# Further optimized:
class Solution:
  def smallestEventMultiple(self, n: int) -> int:
    return n if n % 2 == 0 else n * 2
  
'''
Pseudocode:
- Previous solution made me realize:
- If n is a multiple of 2 and itself
  - Return n
- Else:
  - Return n * 2

- Time complexity: O(1)
- Space complexity: O(1)
'''

solution = Solution()

print(solution.smallestEventMultiple(5)) # -> 10
print(solution.smallestEventMultiple(6)) # -> 6
print(solution.smallestEventMultiple(77)) # -> 154
print(solution.smallestEventMultiple(109)) # -> 218
print(solution.smallestEventMultiple(625)) # -> 1250

