'''
https://structy.net/problems/sum-list

sum list
Write a function, sum_list, that takes in the head of a linked list containing numbers as an argument.

The function should return the total sum of all values in the linked list.
'''

class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

## Test 1:
a = Node(2)
b = Node(8)
c = Node(3)
d = Node(-1)
e = Node(7)

a.next = b
b.next = c
c.next = d
d.next = e

## Test 2:
x = Node(38)
y = Node(4)

x.next = y

## Test 3:
z = Node(100)

## Solution 1:
# def sum_list(head):
#   current = head
#   return_val = 0

#   while current is not None:
#     return_val += current.val
#     current = current.next
#   return return_val

'''
Pseudocode:
- Create a Node class
  - Define the init method with parameters of "self" and "val"
  - Assign instance variable self.val the value
- Define function sum_list with a parameter of "head"
- Assign "current" variable the value of "head" argument
- Initialize "returnVal" as zero
- While current is not None:
  - Add the value of current.next to returnVal
  - Assign current the value of current.next
- Return returnVal once while loop has completed
'''

## Solution 2:
def sum_list(head):
  current = head
  return sum_total(current)

def sum_total(current):
  if current is None:
    return 0
  return current.val + sum_total(current.next)

'''
Pseudocode:
- Create a Node class
- Define function sum_list with a parameter of "head"
- Assign "current" variable the value of "head" argument
- Return the function invocation of sum_total, with "current" as an argument

- Define sum_total with a parameter of "current"
- If "current" is None:
  - Return 0 (Base case)
- Return current.val + the recursive call of sum_total, with an argument of current.next
- Note: This will sum up the values that are part of the recursive call and return the result
during the unwinding process after meeting the base case
'''
print(sum_list(a))  # 19
print(sum_list(x)) # 42
print(sum_list(z)) # 100
print(sum_list(None)) # 0