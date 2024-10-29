'''
https://structy.net/problems/tree-sum

tree sum
Write a function, tree_sum, that takes in the root of a binary tree that contains number values.

The function should return the total sum of all values in the tree.
'''

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
# a = Node(1)
# b = Node(6)
# c = Node(0)
# d = Node(3)
# e = Node(-6)
# f = Node(2)
# g = Node(2)
# h = Node(2)

# a.left = b
# a.right = c
# b.left = d
# b.right = e
# c.right = f
# e.left = g
# f.right = h

#      1
#    /   \
#   6     0
#  / \     \
# 3   -6    2
#    /       \
#   2         2

## Depth First (Stack - LIFO):
def tree_sum(root):
  if root is None:
    return 0

  stack = deque([root])
  sum = 0

  while stack:
    current = stack.pop()
    sum += current.val
    if current.left is not None:
      stack.append(current.left)
    if current.right is not None:
      stack.append(current.right)
  return sum

'''
Pseudocode:
- Define node class
- Define function tree_sum with "root" parameter
- If root is None:
  - Return zero
- Declare "stack" variable as a deque containing "root"
- Initialize "sum" variable as zero
- While stack is truthy:
  - Declare "current" with a value of the last node on the stack (via pop)
  - Add current.val to "sum" (as it is removed from the stack)
  - If current.left is not None:
    - Add current.left to the end of the stack (append)
  - If current.right is not None:
    - Add current.right to the end of the stack (append)
- After the while loop has completed, return the integer value of "sum"
'''

## Recursive (Stack - LIFO):
# def tree_sum(root):
#   if root is None: # Base case
#     return 0
#   sum_left = tree_sum(root.left)
#   sum_right = tree_sum(root.right)
#   return root.val + sum_left + sum_right
'''
Pseudocode:
- Define node class
- Define function tree_sum with "root" parameter
- If root is None:
  - Return zero
- Declare sum_left as the recursive call of tree_sum, with argument of root.left
- Declare sum_right as the recursive call of tree_sum, with argument of root.right
- Return the root.val + the value of sum_left + the value of sum_right
- Note: This works because once root is None for both recursive calls, it will add the return
  of zero to the unwinding of the call stack values in the "sum_left" and "sum_right" variables
'''

## Breadth First (Queue - FIFO):
# def tree_sum(root):
#   if root is None:
#     return 0

#   queue = deque([root])
#   sum = 0
  
#   while queue:
#     current = queue.popleft()
#     sum += current.val
#     if current.left is not None:
#       queue.append(current.left)
#     if current.right is not None:
#       queue.append(current.right)
#   return sum

'''
Pseudocode:
- Define node class
- Define function tree_sum with "root" parameter
- If root is None:
  - Return zero
- While queue is truthy:
  - Declare current with node value at the beginning of the queue (via popleft)
  - Add current.val the the "sum"
  - If current.left is not None:
    - Add current.left node to the end of the queue (append)
  - If current.right is not None:
    - Add current.right node to the end of the queue (append)
- After the while loop is completed, return the integer value of "sum"
'''


print(tree_sum(a)) # -> 21
# print(tree_sum(a)) # -> 10
# print(tree_sum(None)) # -> 0