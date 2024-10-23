'''
https://structy.net/problems/depth-first-values

depth first values
Write a function, depth_first_values, that takes in the root of a binary tree.

The function should return a list containing all values of the tree in depth-first order.
'''
from collections import deque

class Node:
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None

## Test 1:
a = Node('a')
b = Node('b')
c = Node('c')
d = Node('d')
e = Node('e')
f = Node('f')        
a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

#      a
#    /   \
#   b     c
#  / \     \
# d   e     f

## Test 2:
# a = Node('a')
# b = Node('b')
# c = Node('c')
# d = Node('d')
# e = Node('e')
# f = Node('f')
# g = Node('g')
# a.left = b
# a.right = c
# b.left = d
# b.right = e
# c.right = f
# e.left = g

#      a
#    /   \
#   b     c
#  / \     \
# d   e     f
#    /
#   g


## Test 3:
# a = Node('a')

#     a


## Test 4:
# a = Node('a')
# b = Node('b')
# c = Node('c')
# d = Node('d')
# e = Node('e')
# a.right = b
# b.left = c
# c.right = d
# d.right = e

#      a
#       \
#        b
#       /
#      c
#       \
#        d
#         \
#          e


# def depth_first_values(root):
#   stack = deque() # Doubly Ended Queue from collections module
#   values = []
#   current_node = None

#   if not root:
#     return values
  
#   stack.append(root)
#   while stack:
#     current_node = stack.pop()
#     values.append(current_node.val)
#     if current_node.right:
#       stack.append(current_node.right)
#     if current_node.left:
#       stack.append(current_node.left)
#   return values

'''
Pseudocode:
- Note: Stack is FILO (Last In First Out) - append to the top, pop from the top
- Initialize stack as a deque from the collections module
- Initialize values as an empty list
- Initialize as None
- If root is empty, return values
- Add root node to the stack
- Check if stack is empty
- If stack is not empty, pop the top value (and label as current)
  - If value leaves the stack, it is considered "visited"
    - Add visited node values to values list
- Check if current node has children
  - If so, append the children to the stack (right to left / reverse order, due to FILO)
  - If not, check the next node in the stack
- Repeat until the stack is empty
- Return the values list
'''

## Recursive solution:
def depth_first_values(root):
  if root is None:
    return []
  left_values = depth_first_values(root.right)
  right_values = depth_first_values(root.left)
  return [ root.val, *left_values, *right_values]

'''
- Notes: 
  - The stack is built into the recursion under the hood; recursive calls with the respective child
      nodes will give a list of the all the nodes on the left and right of the tree
  - The return is a concatenation of the root value, plus the unpacked values in the
      list results of left_values and right_values
  - * is an unpacking operator for lists and tuples (sort of like spread operator '...' in JavaScript)
  - ** is the unpacking operator for dictionaries
'''

print(depth_first_values(a)) #   -> ['a', 'b', 'd', 'e', 'c', 'f']
# print(depth_first_values(a)) #   -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']
# print(depth_first_values(a)) #   -> ['a']
# print(depth_first_values(a)) #   -> ['a', 'b', 'c', 'd', 'e']
# print(depth_first_values(None)) # -> []





