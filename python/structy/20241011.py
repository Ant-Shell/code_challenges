'''
https://structy.net/problems/linked-list-find

linked list find
Write a function, linked_list_find, that takes in the head of a linked list and a target value.

The function should return a boolean indicating whether or not the linked list contains the target.
'''

class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

### Test 1:
a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")

a.next = b
b.next = c
c.next = d

## Test 2:
# node1 = Node("jason")
# node2 = Node("leneli")

# node1.next = node2

## Test 3:
node1 = Node(42)

# def linked_list_find(head, target):
#   current = head
#   while current is not None:
#     if current.val == target:
#       return True
#     current = current.next
#   return False

'''
Pseudocode:
- Define the Node class
- Define the linked_list_find with parameters "head" and "target"
- Assign the "current" variable the vallue of "head"
- While current is not None:
  - If current.val equals the value of the "target" argument:
    - return True
  - Otherwise, assign "current" the value of current.next
- Return False as a default
'''

def linked_list_find(head, target):
  if head == None:
    return False
  if target == head.val:
    return True
  return linked_list_find(head.next, target)

'''
Pseudocode:
- Define the Node class
- Define the linked_list_find with parameters "head" and "target"
- If the "head" argument is equal to None:
  - Return False
- If the "target" argument is equal to head.val:
  - Return True
- Return the recursive call of linked_list_find with arguments of "head.next" and "target"
'''

print(linked_list_find(a, "c")) # True
print(linked_list_find(a, "d")) # True
print(linked_list_find(a, "q")) # False
# print(linked_list_find(node1, "jason")) # True
print(linked_list_find(node1, 42)) # True
print(linked_list_find(node1, 100)) # False