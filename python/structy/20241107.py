'''
https://structy.net/problems/max-root-to-leaf-path-sum

max root to leaf path sum
Write a function, max_path_sum, that takes in the root of a binary tree that contains number values.

The function should return the maximum sum of any root to leaf path within the tree.

You may assume that the input tree is non-empty.
'''
from collections import deque
import math

class Node:
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None


## Test 1:
# a = Node(3)
# b = Node(11)
# c = Node(4)
# d = Node(4)
# e = Node(-2)
# f = Node(1)

# a.left = b
# a.right = c
# b.left = d
# b.right = e
# c.right = f

#       3
#    /    \
#   11     4
#  / \      \
# 4   -2     1


## Test 2:
# a = Node(5)
# b = Node(11)
# c = Node(54)
# d = Node(20)
# e = Node(15)
# f = Node(1)
# g = Node(3)

# a.left = b
# a.right = c
# b.left = d
# b.right = e
# e.left = f
# e.right = g

#        5
#     /    \
#    11    54
#  /   \      
# 20   15
#      / \
#     1  3


## Test 3:
a = Node(-1)
b = Node(-6)
c = Node(-5)
d = Node(-3)
e = Node(0)
f = Node(-13)
g = Node(-1)
h = Node(-2)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f
e.left = g
f.right = h

#        -1
#      /   \
#    -6    -5
#   /  \     \
# -3   0    -13
#     /       \
#    -1       -2


## Test 4:
# a = Node(42)

#        42

## Recursive Traversal (Stack - LIFO)
def max_path_sum(root):
  if root is None: # Base case
    return -math.inf
  if root.left is None and root.right is None: # Base case
    return root.val
  left_subtree = max_path_sum(root.left)
  right_subtree = max_path_sum(root.right)
  return root.val + max(left_subtree, right_subtree)

'''
Pseudocode:
- Create Node class
- Define max_path_sum function with "root" as a parameter
- If there is no "root":
  - Return negative infinity
- If there is no root.left nor root.right:
- Declare left_subtree and assign it the recursive call of max_path_sum with argument of root.left
- Declare right_subtree and assign it the recursive call of max_path_sum with argument of root.right
- Return root.val, plus the maximum of left_subtree and right_subtree
'''

# print(max_path_sum(a)) # -> 18
# print(max_path_sum(a)) # -> 59
print(max_path_sum(a)) # -> -8
# print(max_path_sum(a)) # -> 42