'''
https://leetcode.com/problems/defuse-the-bomb/description/

Defuse the Bomb

You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

If k > 0, replace the ith number with the sum of the next k numbers.
If k < 0, replace the ith number with the sum of the previous k numbers.
If k == 0, replace the ith number with 0.
As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!

 

Example 1:

Input: code = [5,7,1,4], k = 3
Output: [12,10,16,13]
Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.
Example 2:

Input: code = [1,2,3,4], k = 0
Output: [0,0,0,0]
Explanation: When k is zero, the numbers are replaced by 0. 
Example 3:

Input: code = [2,4,9,3], k = -2
Output: [12,5,6,13]
Explanation: The decrypted code is [3+9, 2+3, 4+2, 9+4]. Notice that the numbers wrap around again. If k is negative, the sum is of the previous numbers.
 

Constraints:

n == code.length
1 <= n <= 100
1 <= code[i] <= 100
-(n - 1) <= k <= n - 1
'''

from typing import List

class Solution:
  def decrypt(self, code: List[int], k: int):
    start = 0
    end = len(code)
    result = []

    if k == 0:
        for i in range(end):
          result.append(k)
        return result
    
    while start < end:
      sum = 0
      if k > 0:
        for i in range(k):
          current = ((start + 1) + i) % end # Needed help with this - allows for circular array traversal
          sum += code[current]
      else:
        for i in range(abs(k)):
          current = ((start + k) + i) % end # Needed help with this - allows for circular array traversal
          sum += code[current]
      result.append(sum)
      start += 1
    return result

solution = Solution()

print(solution.decrypt([5,7,1,4], 3)) # -> [12, 10, 16, 13]
print(solution.decrypt([1,2,3,4], 0)) # -> [0, 0, 0, 0]
print(solution.decrypt([2,4,9,3], -2)) # -> [12, 5, 6, 13]

'''
Pseudocode:
- Initialize start at zero
- Initialize end as the length of the list
- Declare result as an empty list
- If k is equal to zero
  - Fill the resilt with zeroes equal to the length of the arralist
  - Return the reult list
- While start is greater then end:
  - If k is greater than zero (positive):
    - Iterate through the code list at a range of k
      - Declare current as ((start + 1) + the current index) % end
        - Note: This effectively makes the array "circular"; won't go out of bounds
      - Add code at current to the value of sum
  - If k is less than zero (negative):
    - Iterate through the code list at a range of the absolute value of k
      - Declare current as ((start + k) + the current index) % end
        - Note: This effectively makes the array "circular"; won't go out of bounds
      - Add code at current to the value of sum
  - Append the value of sum to the resilt array
  - Increment start by one
- Return result list
'''