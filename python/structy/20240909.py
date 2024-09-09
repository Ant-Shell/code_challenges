'''
https://structy.net/problems/most-frequent-char

most frequent char

Write a function, mostFrequentChar, that takes in a string as an argument.
The function should return the most frequent character of the string.
If there are ties, return the character that appears earlier in the string.
You can assume that the input string is non-empty.
'''

def most_frequent_char(s):
  char_count = {}
  return_char = ""

  for char in s:
    if not char in char_count:
      char_count[char] = 0
    char_count[char] += 1

  for key in char_count:
    if return_char == "" or char_count[key] > char_count[return_char]:
      return_char = key

  return return_char

print(most_frequent_char('mississippi'))

'''
- Initialize an empty dict char_count for keeping a character count (character: occurrences)
- Initialize an empty string return_char for the character that will be returned
- Loop through the characters in the string
  - If char_count does not have a key that is string object at index char, create the key with a value of zero
  - Increment by one
- Loop through the keys of char_count dict
  - If return_char strictly equals and empty string, or if the value of char_count[key] is greater than
  char_count[returnChar], give return_char the value of key
  Note: If there is a tie here, return_char will remain the character that appears earlier in the string
- Return return_char
'''