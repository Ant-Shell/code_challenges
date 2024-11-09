'''
https://structy.net/problems/has-path

has path
Write a function, has_path, that takes in a dictionary representing the adjacency list
of a directed acyclic graph and two nodes (src, dst).

The function should return a boolean indicating whether or not there exists a directed
path between the source and destination nodes.

'''

from collections import deque

## Test 1:
# graph = {
#   'f': ['g', 'i'],
#   'g': ['h'],
#   'h': [],
#   'i': ['g', 'k'],
#   'j': ['i'],
#   'k': []
# }

## Test 2:
# graph = {
#   'f': ['g', 'i'],
#   'g': ['h'],
#   'h': [],
#   'i': ['g', 'k'],
#   'j': ['i'],
#   'k': []
# }

## Test 3:
graph = {
  'f': ['g', 'i'],
  'g': ['h'],
  'h': [],
  'i': ['g', 'k'],
  'j': ['i'],
  'k': []
}

## Test 4:
# graph = {
#   'v': ['x', 'w'],
#   'w': [],
#   'x': [],
#   'y': ['z'],
#   'z': [],  
# }

## Test 5:
# graph = {
#   'v': ['x', 'w'],
#   'w': [],
#   'x': [],
#   'y': ['z'],
#   'z': [],  
# }

## Depth-First Traversal (Stack - LIFO)
# def has_path(graph, src, dst):
#   stack = deque([src])
#   while len(stack):
#     current = stack.pop()
#     for neighbor in graph[current]:
#       if neighbor == dst:
#         return True
#       stack.append(neighbor)
#   return False

'''
Pseudocode:
- Define function "has_path" with parameters "graph", "src" and "dst"
  - Function will take the graph, source and destination as arguments
- Declare "stack" variable and initialize it as a deque containing the source (src)
- While the "stack" has length:
  - Declare "current" and assign it the node popped from the end of the "stack"
  - Iterate through the "neighbor" values in the list associated with "graph" at key of "current"
    - If "neighbor" is equal to "dst"
      - Return True
    - If not, append the "neighbor" value to the end of the "stack"
- After the while loop has completed, return False as the default
'''

## Recursive Traversal (Stack - LIFO)
def has_path(graph, src, dst):
  if src == dst: # Base case
    return True
  for neighbor in graph[src]:
    if has_path(graph, neighbor, dst) == True:
      return True
  return False

'''
Pseudocode:
- Define function "has_path" with parameters "graph", "src" and "dst"
  - Function will take the graph, source and destination as arguments
- Iterate through the "neighbor" values in the list associated with "graph" at key of "src"
- If the recursive call of has_path with arguments "graph", "neighbor" and "dst" is equal to True
  - Return True
- Return False as the default
'''

## Breadth-First Traversal (Queue - FIFO)
# def has_path(graph, src, dst):
#   queue = deque([src])
#   while len(queue):
#     current = queue.popleft()
#     for neighbor in graph[current]:
#       if neighbor == dst:
#         return True
#       queue.append(neighbor)
#   return False

'''
Pseudocode:
- Define function "has_path" with parameters "graph", "src" and "dst"
  - Function will take the graph, source and destination as arguments
- Declare "queue" variable and initialize it as a deque containing the source (src)
- While the "queue" has length:
  - Declare "current" and assign it the node popped from the beginning of the "queue"
  - Iterate through the "neighbor" values in the list associated with "graph" at key of "current"
    - If "neighbor" is equal to "dst"
      - Return True
    - If not, append the "neighbor" value to the end of the "queue"
- After the while loop has completed, return False as the default
'''

print(has_path(graph, 'f', 'k')) # True
# print(has_path(graph, 'f', 'j')) # False
# print(has_path(graph, 'i', 'h')) # True
# print(has_path(graph, 'v', 'w')) # True
# print(has_path(graph, 'v', 'z')) # False