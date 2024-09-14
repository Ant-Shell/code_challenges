'''
https://structy.net/problems/uncompress

Write a function, uncompress, that takes in a string as an argument.
The input string will be formatted into multiple groups according to the following pattern:

<number><char>

for example, '2c' or '3a'.

The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively.
You may assume that the input string is well-formed according to the previously mentioned pattern.
'''

def uncompress(s):
  number_string = ""
  return_string = ""

  for char in s:
    if char.isdigit():
      number_string += char
    else:
      return_string += int(number_string) * char
      number_string = ""
      continue
  return return_string

print(uncompress("2c3a1t")) # -> 'ccaaat'
print(uncompress("2p1o5p")) # -> 'ppoppppp'
print(uncompress("127y")) # -> 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'

'''
Pseudocode:
- Initialize number_string and return_string as empty strings
- Loop through the string argument s
  - If the current char is a digit, append char to number_string
  - Else, append the result of multiplying char by integer number_string,
    reset number_string to an empty string, and continue the loop
- Return return_string

Note: 
- Line 23 is linear, not constant - this adds to the complexity
- See below for a more efficient solution
'''

'''
Two pointer solution:

def uncompress(s):
  numbers = '0123456789'
  result = []
  i = 0
  j = 0
  while j < len(s):
    if s[j] in numbers:
      j += 1
    else:      
      num = int(s[i:j])
      result.append(s[j] * num)
      j += 1
      i = j
      
  return ''.join(result)
'''

