'''
https://structy.net/problems/undirected-path

undirected path
Write a function, undirected_path, that takes in a list of edges for an undirected
graph and two nodes (node_A, node_B).

The function should return a boolean indicating whether or not there exists a path
between node_A and node_B.
'''

from collections import deque

## Test 1:
edges = [
  ('i', 'j'),
  ('k', 'i'),
  ('m', 'k'),
  ('k', 'l'),
  ('o', 'n')
]

# Convert edge list into undirected adjacency list dictionary
# graph = { 
#   'i': ['j', 'k'],
#   'j': ['i'],
#   'k': ['i', 'm', 'l'],
#   'l': ['k'],
#   'm': ['k'],
#   'n': ['o'],
#   'o': ['n']
# }

## Test 2:
# edges = [
#   ('b', 'a'),
#   ('c', 'a'),
#   ('b', 'c'),
#   ('q', 'r'),
#   ('q', 's'),
#   ('q', 'u'),
#   ('q', 't'),
# ]

## Convert edge list into undirected adjacency list dictionary
# graph = {
#   'a': ['b', 'c'],
#   'b': ['a', 'c'],
#   'c': ['a', 'b'],
#   'q': ['r', 's', 'u', 't'],
#   'r': ['q'],
#   's': ['q'],
#   't': ['q'],
#   'u': ['q']
# }

## Test 3:
# edges = [
#   ('s', 'r'),
#   ('t', 'q'),
#   ('q', 'r'),
# ]

## Convert edge list into undirected adjacency list dictionary
# graph = { 
#   'q': ['r', 't'],
#   'r': ['q','s'],
#   's': ['r'],
#   't': ['q']
# }

# Helper function for converting edge lists into undirected adjacency list dictionary
def build_graph(edges): 
  graph = {}

  for list_val in edges:
    index = edges.index(list_val)
    first_val = edges[index][0]
    second_val = edges[index][1]

    if first_val in graph:
      graph[first_val].append(second_val)
    else:
      graph[first_val] = [second_val]

    if second_val in graph:
      graph[second_val].append(first_val)
    else:
      graph[second_val] = [first_val]

  return graph

'''
Pseudocode:
- Define build_graph function with parameter of edges
- Declare "graph" variable as an empty dictionary
- Iterate through each value in the edges list:
  - Declare "index" as the index number of current list value
  - Declare "first_val" as the value found in "edges" at index "index" and the value found at index zero
  - Declare "second_val" as the value found in "edges" at index "index" and the value found at index one
  - If "first_val" is found as a key in "graph:
    - Append "second_val" to the list value of "graph" at index "first_val"
  - Else:
    - Add a new key of "first_val" to the graph dict and assign it a list containing "second_val"
  - If "second_val" is found as a key in "graph:
    - Append "second_val" to the list value of "graph" at index "first_val"
  - Else:
    - Add a new key of "second_val" to the graph dict and assign it a list containing "first_val"
- After the for loop has completed, return the resulting "graph" dictionary
'''

## Recursive Traversal (Stack - LIFO) - helper function for use in recursive undirected_path function
def has_path(graph, src, dst, visited):
  if src == dst: # Base case
    return True
  
  if src in visited: # Base case
    return False
  
  visited.add(src)

  for neighbor in graph[src]:
    if has_path(graph, neighbor, dst, visited) == True:
      return True
  return False

'''
Pseudocode:
- Define function "has_path" with parameters "graph", "src", "dst" and "visited
  - Function will take the graph, source and destination as arguments
- If src is equal to dst: (Base case)
  - Return True
- If "src" is in the visited set: (Base case)
  - Return False
- Add "src" to the visited set if Base cases are not met
- Iterate through the "neighbor" values in the list associated with "graph" at key of "src"
- If the recursive call of has_path with arguments "graph", "neighbor" and "dst" is equal to True
  - Return True
- Return False as the default
'''

## Depth-First Traversal (Stack - LIFO)
# def undirected_path(edges, node_A, node_B):
#   graph = build_graph(edges)
#   stack = deque([node_A])
#   visited = set()

#   while len(stack):
#     current = stack.pop()
#     visited.add(current)
#     for neighbor in graph[current]:
#       if neighbor == node_B:
#         return True
#       if neighbor not in visited:
#         stack.append(neighbor)
#   return False

'''
Pseudocode:
- Define undirected_path function with parameters of "graph", "node_A" and "node_B"
- Declare "graph" variable as the result of calling the build_graph helper function with edges as an argument
- Declare "stack" variable as a deque contaning "node_A"
- Declare "visited" variable as an empty set
- While "stack" has length:
  - Declare "current" variable as the value popped from the end of the "stack"
  - Add "current" to the "visited" set
  - Iterate through the "neighbor" values in the list value of "graph" at index "current":
    - If "neighbor" is equal to "node_B":
      - Return True
    - If "neighbor" is not in the "visited" set:
      - Append "neighbor" to the end of the "stack"
- After the while loop has completed, return False as the default
'''

## Recursive Traversal (Stack - LIFO)
def undirected_path(edges, node_A, node_B):
  graph = build_graph(edges)
  return has_path(graph, node_A, node_B, set())

'''
Pseudocode:
- Define undirected_path function with parameters of "graph", "node_A" and "node_B"
- Declare "graph" variable as the result of calling the build_graph helper function with edges as an argument
- Return the result of has_path helper function, with arguments of "graph", "node_A", "node_B" and an empty set
'''

## Breadth-First Traversal (Queue - FIFO)
# def undirected_path(edges, node_A, node_B):
#   graph = build_graph(edges)
#   queue = deque([node_A])
#   visited = set()

#   while len(queue):
#     current = queue.popleft()
#     visited.add(current)
#     for neighbor in graph[current]:
#       if neighbor == node_B:
#         return True
#       if neighbor not in visited:
#         queue.append(neighbor)
#   return False

'''
Pseudocode:
- Define undirected_path function with parameters of "graph", "node_A" and "node_B"
- Declare "graph" variable as the result of calling the build_graph helper function with edges as an argument
- Declare "queue" variable as a deque contaning "node_A"
- Declare "visited" variable as an empty set
- While "queue" has length:
  - Declare "current" variable as the value popped from the beginning of the "queue"
  - Add "current" to the "visited" set
  - Iterate through the "neighbor" values in the list value of "graph" at index "current":
    - If "neighbor" is equal to "node_B":
      - Return True
    - If "neighbor" is not in the "visited" set:
      - Append "neighbor" to the end of the "queue"
- After the while loop has completed, return False as the default
'''

# Test 1:
print(undirected_path(edges, 'j', 'm')) # -> True
print(undirected_path(edges, 'm', 'j')) # -> True
print(undirected_path(edges, 'l', 'j')) # -> True
print(undirected_path(edges, 'k', 'o')) # -> False
print(undirected_path(edges, 'i', 'o')) # -> False

# Test 2:
# print(undirected_path(edges, 'a', 'b')) # -> True
# print(undirected_path(edges, 'a', 'c')) # -> True
# print(undirected_path(edges, 'r', 't')) # -> True
# print(undirected_path(edges, 'r', 'b')) # -> False

# Test 3:
# print(undirected_path(edges, 'r', 't')) # -> True
