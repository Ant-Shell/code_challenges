'''
https://structy.net/problems/compress

compress
Write a function, compress, that takes in a string as an argument.
The function should return a compressed version of the string where
consecutive occurrences of the same characters are compressed into the
number of occurrences followed by the character.
Single character occurrences should not be changed.

'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'

You can assume that the input only contains alphabetic characters.
'''

def compress(s):
  i = 0
  j = 0
  result = []

  while j <= len(s):
    if s[i] == s[j]:
      j += 1
    else:
      append_string_to_result(s, i, j, result)
      i = j
    if j == len(s):
      append_string_to_result(s, i, j, result)
      break
  return "".join(result)

def append_string_to_result(s:str, i:int, j:int, result:list):
  if j - i == 1:
    result.append(s[i])
  else:
    result.append(str(j - i))
    result.append(s[i])


print(compress('ccaaatsss')) # -> '2c3at3s'
print(compress('ssssbbz')) # -> '4s2bz'
print(compress('ppoppppp')) # -> '2po5p'
print(compress('nnneeeeeeeeeeeezz')) # -> '3n12e2z'
print(compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'))
# # -> '127y'

'''
Pseudocode:
- Define the compress function, with parameter s
- Initialize the value of i and j the value of zero, and result as an empty list
- While j is less than or equal to the length of the s string arument:
  - If s at index i is equal to s at index j:
    - Increment the value of j by one
  - Else:
    - Call the append_string_to_results function with s, i, j and result as arguments
    - Assign i the value of j
  - If j is equal to the length of s:
    - Call the append_string_to_results function with s, i, j and result as arguments
    - Break out of the while loop
  - Join and return the result array

- Define the append_string_to_result function, with s, i, j and result as parameters
  - If j - i == 1:
    - Append s at index i to the result array
  - Else:
    - Convert j - i into a string and append to the result array
    - Append s at index i to the result array
'''