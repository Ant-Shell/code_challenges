'''
https://structy.net/problems/anagrams

anagrams
Write a function, anagrams, that takes in two strings as arguments.
The function should return a boolean indicating whether or not the strings are anagrams.
Anagrams are strings that contain the same characters, but in any order.
'''

def anagrams(s1, s2):
  s1_dict = {}
  s2_dict = {}

  for letter in s1:
    if not letter in s1_dict:
      s1_dict[letter] = 1
    else:
      s1_dict[letter] += 1

  for letter in s2:
    if not letter in s2_dict:
      s2_dict[letter] = 1
    else:
      s2_dict[letter] += 1
      
  return s1_dict == s2_dict
  
print(anagrams('restful', 'fluster')) # True
print(anagrams('cats', 'tocs')) # False

'''
Pseudocode:
- Initialize two empty dictionaries
- Loop through each string and create key value pairs {letter: # of occurrence(s)}
- Compare the dictionaries
'''