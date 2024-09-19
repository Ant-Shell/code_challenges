'''
https://structy.net/problems/intersection

intersection
Write a function, intersection, that takes in two lists, a,b, as arguments.

The function should return a new list containing elements that are in both of the two lists.

You may assume that each input list does not contain duplicate elements.
'''

def intersection(a, b):
  item_set = set(return_long_list(a, b))
  result = []

  for item in return_short_list(a,b):
    if item in item_set:
      result.append(item)
  return result

def return_long_list(a:list, b:list):
  if len(a) > len(b):
    return a
  return b

def return_short_list(a:list, b:list):
  if len(a) < len(b):
    return a
  return b

'''
## Another solution: ##

def intersection(a, b):
  list_set = set(a)
  result = []

  for item in b:
    if item in list_set:
      result.append(item)
  return result
'''


print(intersection([4,2,1,6], [3,6,9,2,10])) # -> [2,6]
print(intersection([2,4,6], [4,2])) # -> [2,4]
print(intersection([4,2,1], [1,2,4,6])) # -> [1,2,4]
print(intersection([0,1,2], [10,11])) # -> []
# a = [ i for i in range(0, 50000) ]
# b = [ i for i in range(0, 50000) ]
# print(intersection(a, b)) # -> [0,1,2,3,..., 49999]


'''
Pseudocode:
- Initialize a set based on the larger list
- Initialize a result list
- Loop through the smaller list and verify if the value is included in the set
- If it is, append the value to the return list
- Return the result list
'''