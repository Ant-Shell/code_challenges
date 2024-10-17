'''
https://structy.net/problems/reverse-list

reverse list
Write a function, reverse_list, that takes in the head of a linked list as an argument.

The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.
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
e = Node("e")
f = Node("f")

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f

## Test 2:
x = Node("x")
y = Node("y")

x.next = y

## Test 3:
p = Node("p")

## Solution 1:
def reverse_list(head):
  current = head
  previous = None
  
  while current is not None:
    next = current.next
    current.next = previous
    previous = current
    current = next
  return previous

'''
Pseudocode:
- Create a class called Node wich has "self" and "val" as parameters, and the following properties:
 - self.val which is assigned the value of the "val" argument
 - self.next which is initialized to None

- Define function reverse_list, with "head" as a parameter
- Assign "current" the value of "head"
- Initialize "previous" as None
- While current is not None:
  - Assign "next" the value of current.next
  - Assign current.next the value of "previous"
  - Assign "previous" the value of "current"
  - Assign "current" the value of "next"
- Return previous, which is the new head of the reversed linked list
'''

print(reverse_list(a)) # f -> e -> d -> c -> b -> a
print(reverse_list(x)) # y -> x
print(reverse_list(p)) # p