'''
https://structy.net/problems/tree-includes

tree includes
Write a function, tree_includes, that takes in the root of a binary tree and a target value.

The function should return a boolean indicating whether or not the value is contained in the tree.
'''

from collections import deque

class Node:
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None

## Test 1:
a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")
e = Node("e")
f = Node("f")

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
# a = Node("a")
# b = Node("b")
# c = Node("c")
# d = Node("d")
# e = Node("e")
# f = Node("f")

# a.left = b
# a.right = c
# b.left = d
# b.right = e
# c.right = f

#      a
#    /   \
#   b     c
#  / \     \
# d   e     f

## Test 3:
# a = Node("a")
# b = Node("b")
# c = Node("c")
# d = Node("d")
# e = Node("e")
# f = Node("f")

# a.left = b
# a.right = c
# b.left = d
# b.right = e
# c.right = f

#      a
#    /   \
#   b     c
#  / \     \
# d   e     f

## Test 4:
# a = Node("a")
# b = Node("b")
# c = Node("c")
# d = Node("d")
# e = Node("e")
# f = Node("f")
# g = Node("g")
# h = Node("h")

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

## Test 5:
# a = Node("a")
# b = Node("b")
# c = Node("c")
# d = Node("d")
# e = Node("e")
# f = Node("f")
# g = Node("g")
# h = Node("h")

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

## Depth First (Stack - LIFO)
def tree_includes(root, target):
  if root is None:
    return False

  stack = deque([root])

  while stack:
    current = stack.pop()
    if current.val is target:
      return True
    if current.left is not None:
      stack.append(current.left)
    if current.right is not None:
      stack.append(current.right)
  return False

'''
Pseudocode:
- Define Node class
- Define tree_includes function with "root" and "target" as parameters
- If the value of "root" is None, return False
- Declare "stack" variable as a deque containing the "root" node
- While stack is truthy:
  - Declare "current" variable as the node popped from the end of the "stack"
  - If current.val is the "target"
    - Return True
  - If current.left is not None:
    - Add the current.left node to the end of the "stack" (append)
  - If current.right is not None:
    - Add the current.right node to the end of the "stack" (append
- After the while loop has completed, return False
'''

## Recursive (Stack - LIFO)
# def tree_includes(root, target):
#   if root is None: # Base case
#     return False
#   if root.val is target: # Base case
#     return True
#   left_subtree = tree_includes(root.left, target)
#   right_subtree = tree_includes(root.right, target)
#   return left_subtree or right_subtree

'''
Pseudocode:
- Define Node class
- Define tree_includes function with "root" and "target" as parameters
- If the value of "root" is None, return False (Base case)
- If root.val is the "target", return True (Base case)
- Declare left_subtree as the recursive call of tree_includes, with arguments root.left and "target"
- Declare right_subtree as the recursive call of tree_includes, with arguments root.right and "target"
- Return left_subtree or right_subtree
- Note: This works because if any of the values in the unwiding phase of the call stack are True,
  then the return value is True, otherwise the return value is False
'''

## Breadth First (Queue - FIFO)
# def tree_includes(root, target):
#   if root is None:
#     return False
  
#   queue = deque([root])

#   while queue:
#     current = queue.popleft()
#     if current.val is target:
#       return True
#     if current.left is not None:
#       queue.append(current.left)
#     if current.right is not None:
#       queue.append(current.right)
#   return False

'''
Pseudocode:
- Define Node class
- Define tree_includes function with "root" and "target" as parameters
- If the value of "root" is None, return False
- Declare "queue" variable as a deque containing the "root" node
- While "queue" is truthy:
  - Declare "current" variable as the node popped from the beginning of the "queue"
  - If current.val is the "target"
    - Return True
  - If current.left is not None:
    - Add the current.left node to the end of the "queue" (append)
  - If current.right is not None:
    - Add the current.right node to the end of the "queue" (append)
- After the while loop has completed, return False
'''

print(tree_includes(a, "e")) # -> True
# print(tree_includes(a, "a")) # -> True
# print(tree_includes(a, "n")) # -> False
# print(tree_includes(a, "f")) # -> True
# print(tree_includes(a, "p")) # -> False
print(tree_includes(None, "b")) # -> False
