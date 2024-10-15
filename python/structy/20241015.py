'''
https://structy.net/problems/get-node-value

get node value
Write a function, get_node_value, that takes in the head of a linked list and an index.

The function should return the value of the linked list at the specified index.

If there is no node at the given index, then return None.
'''

class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

## Test 1:
a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")

a.next = b
b.next = c
c.next = d

## Test 2:
node1 = Node("banana")
node2 = Node("mango")

node1.next = node2

## Solution 1:
# def get_node_value(head, index):
#   current = head
#   current_index = 0

#   while current is not None:
#     if current_index == index:
#       return current.val
#     current = current.next
#     current_index += 1
#   return None

'''
Pseudocode:
- Create a node class that takes "self" and "val" as parameters
and the following properties:
  - self.val wich is assigned the value of "val
  - self.next which is initialized as None

- Define get_node_value with "head" and "index" as parameters
- Assign the variable "current" with a value of "head"
- Initialize the variable "current_index" as zero
- While current is not None:
  - If the value of "current_index" is equal to the value of "index":
    return current.val
  - Otherwise:
    - Reassign "current" with the value of current.next
    - Increment "current_index" by one
- Return None as the default
'''

## Solution 2:
def get_node_value(head, index):
  if head is None:
    return None
  if index == 0:
    return head.val
  return get_node_value(head.next, index-1)

'''
Pseudocode:
- Create a node class that takes "self" and "val" as parameters
and the following properties:
  - self.val wich is assigned the value of "val
  - self.next which is initialized as None

- Define get_node_value with "head" and "index" as parameters
- If head is None:
  - Return None (Base case)
- If index equals zero:
  return head.val (Base case)
- If neither base case is met, return a recursive call of get_node_value
with head.next and index-1 as arguments
'''

print(get_node_value(a, 2)) # 'c'
print(get_node_value(a, 3)) # 'd'
print(get_node_value(a, 7)) # None
print(get_node_value(node1, 0)) # 'banana'
print(get_node_value(node1, 1)) # 'mango'
