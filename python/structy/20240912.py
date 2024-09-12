'''
https://structy.net/problems/pair-product

pair product

Write a function, pair_product, that takes in a list and a target product as arguments. The function should return a tuple containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair whose product is the target.
'''

def pair_product(numbers, target_product):
  index_hash = {}

  for index, number in enumerate(numbers):
    complement = target_product / number
    if complement in index_hash:
      return (index_hash[complement], index)
    index_hash[number] = index

print(pair_product([3, 2, 5, 4, 1], 8)) # -> (1, 3)
print(pair_product([4, 6, 8, 2], 16)) # -> (2, 3)

'''
Pseudocode:
- Initialize index_hash dict
- Loop through and enumerate the numbers list argument:
  - Assign the result of target_product argument / number during each loop to the complement variable
  - If complement is found as a key in index_hash:
    - Return the tuple (value of index_hash with key of complement, current index in the loop)
  - Add new key value pair to index_hash: {current number in the loop: current index in the loop}
'''