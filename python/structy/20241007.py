'''
https://structy.net/problems/linked-list-values

linked list values
Write a function, linked_list_values, that takes in the head of a linked list as an argument.

The function should return a list containing all values of the nodes in the linked list.
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
# x = Node("x")
# y = Node("y")

# x.next = y

## Test 3:
# q = Node("q")

def linked_list_values(head):
  current = head
  returnVal = []

  while current is not None:
    returnVal.append(current.val)
    current = current.next
  return returnVal

print(linked_list_values(a)) # -> [ 'a', 'b', 'c', 'd' ]
# print(linked_list_values(x)) # -> [ 'x', 'y' ]
# print(linked_list_values(q)) # -> [ 'q' ]
# print(linked_list_values(None)) # -> [ ]

'''
Pseudocode:
- Create a class named Node
- Define a constructor that has self (Node) and val as parameters
- Properties of the Node class are 
  - self.val which is assigned the val argument
  - self.next which is initialized to None

- Define a function linked_list_values with a parameter of head
- Assign variable "current" the value of "head" argument
- Initialize returnVal as an empty list
- Add a while loop which continues while current is not None:
  - Append current.val to the returnVal list
  - Assign current the value of current.next
- After while loop terminates, return the returnVal list
'''