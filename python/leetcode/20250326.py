'''
https://leetcode.com/problems/maximum-69-number/description/

Maximum 69 Number

You are given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).


Example 1:

Input: num = 9669
Output: 9969
Explanation: 
- Changing the first digit results in 6669.
- Changing the second digit results in 9969.
- Changing the third digit results in 9699.
- Changing the fourth digit results in 9666.
The maximum number is 9969.


Example 2:

Input: num = 9996
Output: 9999
Explanation: Changing the last digit 6 to 9 results in the maximum number.


Example 3:

Input: num = 9999
Output: 9999
Explanation: It is better not to apply any change.
 

Constraints:

1 <= num <= 104
num consists of only 6 and 9 digits.


'''

class Solution:
  def maximum69Number(self, num: int) -> int:
    number_map = {"9": "6", "6": "9"}
    num_list = [x for x in str(num)]
    max_number = int(num)

    for i in range(len(num_list)):
      current_num = num_list[i]
      num_list_copy = list(num_list)
      num_list_copy[i] = number_map[current_num]
      max_number = max(max_number, int("".join(num_list_copy)))
    return max_number

## Optimized solution (thanks ChatGPT):
# class Solution:
#   def maximum69Number(self, num: int) -> int:
#     num_list = list(str(num))
#     max_number = num

#     for i in range(len(num_list)):
#       original_digit = num_list[i]
#       num_list[i] = "9" if original_digit == "6" else "6"
#       max_number = max(max_number, int("".join(num_list)))
#       num_list[i] = original_digit

#     return max_number

solution = Solution()

print(solution.maximum69Number(9669)) # -> 9969
print(solution.maximum69Number(9996)) # -> 9996
print(solution.maximum69Number(9999)) # -> 9999

'''
Pseudocode:
- Declare number_map as a dictionary with key of 6 or 9 and value of 9 or 6 respectively
- Declare num_list as num converted into a list of string values
- Declare max_number as new num integer
- Iterate through num_list
  - Declare current_num as num_list at current index
  - Declare num_list_copy as a new list of num_list
  - Reassign num_list_coup at current index as value of number_map at index current_num
  - Reassign max_number as the max between max_number and num_list_copy joined together
    as a string and converted to an integer
- Return max_number

- Time complexity: O(n)
- Space complexity: O(n)
'''