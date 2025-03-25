'''
https://leetcode.com/problems/sum-multiples/description/

Sum Multiples

Given a positive integer n, find the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7.

Return an integer denoting the sum of all numbers in the given range satisfying the constraint.

 

Example 1:

Input: n = 7
Output: 21
Explanation: Numbers in the range [1, 7] that are divisible by 3, 5, or 7 are 3, 5, 6, 7. 
The sum of these numbers is 21.

Example 2:

Input: n = 10
Output: 40
Explanation: Numbers in the range [1, 10] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9, 10. 
The sum of these numbers is 40.

Example 3:

Input: n = 9
Output: 30
Explanation: Numbers in the range [1, 9] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9. 
The sum of these numbers is 30.
 

Constraints:

1 <= n <= 103

'''

class Solution:
  def sumOfMultiples(self, n: int) -> int:
    sum = 0

    for i in range(1, n+1):
      current = i

      if current % 3 == 0 or current % 5 == 0 or current % 7 == 0:
        sum += i
        continue
    return sum

solution = Solution()

print(solution.sumOfMultiples(7)) # -> 21
print(solution.sumOfMultiples(10)) # -> 40
print(solution.sumOfMultiples(9)) # -> 30
print(solution.sumOfMultiples(15)) # -> 81

'''
Pseudocode:
- Initialize sum as zero
- Iterate from a range of 1 to n+1
  - Declare current as i
  - If current is divisible by 3, or 5, or 7
    - Add i to sum
    - continue
- Return sum

- Time complextiy O(n)
- Space complexity O(1)
'''