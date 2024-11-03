'''
https://structy.net/problems/tree-min-value

tree min value
Write a function, tree_min_value, that takes in the root of a binary tree that contains number values.

The function should return the minimum value within the tree.

You may assume that the input tree is non-empty.
'''

import math
from collections import deque

class Node:
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None


## Test 1:
a = Node(3)
b = Node(11)
c = Node(4)
d = Node(4)
e = Node(-2)
f = Node(1)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

#       3
#    /    \
#   11     4
#  / \      \
# 4   -2     1


## Test 2:
# a = Node(5)
# b = Node(11)
# c = Node(3)
# d = Node(4)
# e = Node(14)
# f = Node(12)

# a.left = b
# a.right = c
# b.left = d
# b.right = e
# c.right = f

#       5
#    /    \
#   11     3
#  / \      \
# 4   14     12


## Test 3:
# a = Node(-1)
# b = Node(-6)
# c = Node(-5)
# d = Node(-3)
# e = Node(-4)
# f = Node(-13)
# g = Node(-2)
# h = Node(-2)

# a.left = b
# a.right = c
# b.left = d
# b.right = e
# c.right = f
# e.left = g
# f.right = h

#        -1
#      /   \
#    -6    -5
#   /  \     \
# -3   -4   -13
#     /       \
#    -2       -2


## Test 4:
# a = Node(42)

#        42

## Depth First Search (Stack - LIFO)
def tree_min_value(root):
  stack = deque([root])
  min_value = None
  
  while stack:
    current = stack.pop()
    if min_value is None or min_value > current.val:
      min_value = current.val
    if current.left is not None:
      stack.append(current.left)
    if current.right is not None:
      stack.append(current.right)
  return min_value

'''
Pseudocode:
- Create Node class
- Define tree_min_value function with "root" parameter
- Declare "stack" variable and assign deque data structure containing "root"
- Declare "min_value" variable and initialize as None
- While "stack" is truthy:
  - Declare current and assign it the value of stack.pop
  - If "min_value" is None or if "min_value" is greater then current.val
    - Reassign "min_value" as current.val
  - If current.left is not None:
    - Append current.left to the stack
  - If current.right is not None:
    - Append current.right to the stack
- After the while loop has completed, return "min_value"
'''

## Recursive Search (Stack - LIFO)
def tree_min_value(root):
  if root is None:
    return math.inf
  left_subtree = tree_min_value(root.left)
  right_subtree = tree_min_value(root.right)
  return min(root.val, left_subtree, right_subtree)

'''
Pseudocode:
- Create Node class
- Define tree_min_value function with "root" parameter
- If root is None:
  - Return infinity
- Define "left_subtree" and assign it the recursive call of tree_min_value with argument root.left
- Define "right_subtree" and assign it the recursive call of tree_min_value with argument root.right
- Return the minimum number of root.val and all values in the call stack during the unwiding phase of left_subtree and right_subtree
'''

## Breadth First Search (Queue - FIFO)
def tree_min_value(root):
  queue = deque([root])
  min_value = None
 
  while queue:
    current = queue.popleft()
    if min_value is None or min_value > current.val:
      min_value = current.val
    if current.left is not None:
      queue.append(current.left)
    if current.right is not None:
      queue.append(current.right)
  return min_value

'''
Pseudocode:
- Create Node class
- Define tree_min_value function with "root" parameter
- Declare "queue" variable and assign deque data structure containing "root"
- Declare "min_value" variable and initialize as None
- While "queue" is truthy:
  - Declare current and assign it the value of queue.popleft
  - If "min_value" is None or if "min_value" is greater then current.val
    - Reassign "min_value" as current.val
  - If current.left is not None:
    - Append current.left to the queue
  - If current.right is not None:
    - Append current.right to the queue
- After the while loop has completed, return min_value
'''

print(tree_min_value(a)) # -> -2
# print(tree_min_value(a)) # -> 3
# print(tree_min_value(a)) # -> -13
# print(tree_min_value(a)) # -> 42