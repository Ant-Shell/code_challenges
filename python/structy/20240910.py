'''
https://structy.net/problems/pair-sum

pair sum

Write a function, pair_sum, that takes in a list and a target sum as arguments. The function should return a tuple containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair that sums to the target.
'''

def pair_sum(numbers, target_sum):
  if len(numbers) == 2: 
    return (0,1)
    
  indices_map = {}
  
  for num in numbers:
    complement = target_sum - num
      
    if complement in indices_map:
      return (indices_map[complement], numbers.index(num))

    indices_map[num] = numbers.index(num)

print(pair_sum([3, 2, 5, 4, 1], 8)) # -> (0, 2)
print(pair_sum([9, 9], 18)) # -> (0, 1)
print(pair_sum([6, 4, 2, 8 ], 12)) # -> (1, 3)

'''
Pseudocode:
- Initialize a hashmap (dict), comparison_hash
- Loop through the list and for each value, subtract the target_sum by the current num iteration in the loop; assign to compliment variable
- If the compliment and current num iteration are equal, continue to the next iteration of the loop
- Add a key/value pair to the comparison_hash: {num: index of num in numbers list}
- If compliment appears as a key in comparison_hash
  - Return a tuple that is the value of: (comparison_hash at index compliment, index of the current num iteration in the loop)
'''