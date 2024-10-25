"""
https://structy.net/problems/breadth-first-values

breadth first values
Write a function, breadth_first_values, that takes in the root of a binary tree.

The function should return a list containing all values of the tree in breadth-first order.
"""

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
# h = Node('h')

# a.left = b
# a.right = c
# b.left = d
# b.right = e
# c.right = f
# e.left = g
# f.right = h

#      a
#    /   \
#   b     c
#  / \     \
# d   e     f
#    /       \
#   g         h

## Test 3:
# a = Node('a')

#      a


## Test 4:
# a = Node('a')
# b = Node('b')
# c = Node('c')
# d = Node('d')
# e = Node('e')
# x = Node('x')

# a.right = b
# b.left = c
# c.left = x
# c.right = d
# d.right = e

#      a
#       \
#        b
#       /
#      c
#    /  \
#   x    d
#         \
#          e


# def breadth_first_values(root):
#   if root is None:
#     return []
  
#   queue = deque()
#   values = []
#   current = None

#   queue.appendleft(root)
#   while queue:
#     current = queue.pop()
#     values.append(current.val)
#     if current.left is not None:
#       queue.appendleft(current.left)
#     if current.right is not None:
#       queue.appendleft(current.right)
#   return values

'''
Pseudocode:
- Define Node class, with parameters "self" and "val", and the following properties:
  - self.val with value of "val"
  - self.left initialized to None
  - self.right initialized to None

- Define function breadth_first_values with root as a parameter
- If root is None, return an empty list
- Declare "queue" as a new deque object (FIFO)
- Declare "values" as an empty list
- Initialize current as None
- Add root to the front of the queue
- While queue is not empty:
  - Assign "current" the node popped from the end of the queue
  - Add current.val to the values list
  - If the value of current.left is not None:
    - Append current.left (node) to the left side of the queue
  - If If the value of current.right is not None:
    - Append current.right (node) to the left side of the queue
- After the while loop has completed, return the values list
'''

# Refactored solution:
def breadth_first_values(root):
  if not root:
    return []
  
  queue = deque([root])
  values = []

  while queue:
    node = queue.popleft()
    values.append(node.val)
    if node.left:
      queue.append(node.left)
    if node.right:
      queue.append(node.right)
  return values


# Note - no recursive solution for breadth first traversal since it uses a queue and recursion uses a stack


print(breadth_first_values(a)) # -> ['a', 'b', 'c', 'd', 'e', 'f']
# print(breadth_first_values(a)) # -> ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
# print(breadth_first_values(a)) # -> ['a']
# print(breadth_first_values(a)) # -> ['a', 'b', 'c', 'x', 'd', 'e']
print(breadth_first_values(None)) # -> []