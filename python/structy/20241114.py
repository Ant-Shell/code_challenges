'''
https://structy.net/problems/connected-components-count

connected components count
Write a function, connected_components_count, that takes in the adjacency list of an undirected graph.

The function should return the number of connected components within the graph.
'''

from collections import deque

## Test 1:
graph_1 = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}

## Test 2:
graph_2 = {
  1: [2],
  2: [1,8],
  6: [7],
  9: [8],
  7: [6, 8],
  8: [9, 7, 2]
}

## Test 3:
graph_3 = {
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
}

## Test 4:
graph_4 = {
  0: [4,7],
  1: [],
  2: [],
  3: [6],
  4: [0],
  6: [3],
  7: [0],
  8: []
}

## Helper function:
def explore(graph, current, visited):
  if current in visited: # Base case
    return False
  
  visited.add(current)

  for neighbor in graph[current]:
    explore(graph, neighbor, visited)

  return True

'''
Pseudocode:
- Define explore function with "graph", "current" and "visited" as a parameters
- If current is found in visited
  - Return false
- Add current to visited
- Iterate through the neighbor nodes found in "graph" at index "current
  - Recursively call explore function sith "graph", "neighbor" and "visited" as arguments

'''

## Depth-First Traversal (Stack - LIFO)
def connected_components_count(graph):
  stack = deque()
  visited = set()
  count = 0
  
  for node in graph:
    if node not in visited:
      stack.append(node)
      visited.add(node)
      count += 1
      while len(stack):
        current = stack.pop()
        for neighbor in graph[current]:
          if neighbor not in visited:
            stack.append(neighbor)
            visited.add(neighbor)
  return count

'''
Pseudocode:
- Define connected_components_count function with "graph" as a parameter
- Delcare "stack" variable as a deque
- Declare visited as an empty set
- Initialize "count" to zero
- Iterate through each node in graph:
  - If node is not in visited:
    - Add node to the end of ths stack
    - Add node to the visited set
    - Increment "count" by one
    - While stack has length:
      -Declare "current" variable as the node removed forom the end of the stack
      - Iterate through neighbor nodes in graph at index current:
        - If neighbor is not in visited:
          - Add neighbor to the end of the stack
          - Add neighbor to the visited set
- Return count
'''

## Recursive Traversal (Stack - LIFO)
# def connected_components_count(graph):
#   visited = set()
#   count = 0
#   for node in graph:
#     if explore(graph, node, visited) == True:
#       count += 1
#   return count

'''
Pseudocode:
- Define connected_components_count function with "graph" as a parameter
- Declare "visited" as an empty set
- Intitialize "count" as zero
- Iterate through each node in "graph"
  - If the recursive call of explore with arguments "graph", "node" and "visited" equals true
    - Increment "count" by one
- Return count
'''

## Breadth-First Traversal (Queue - FIFO)
# def connected_components_count(graph):
#   queue = deque()
#   visited = set()
#   count = 0
  
#   for node in graph:
#     if node not in visited:
#       queue.append(node)
#       visited.add(node)
#       count += 1
#       while len(queue):
#         current = queue.popleft()
#         for neighbor in graph[current]:
#           if neighbor not in visited:
#             queue.append(neighbor)
#             visited.add(neighbor)
#   return count

'''
Pseudocode:
- Define connected_components_count function with "graph" as a parameter
- Declare "queue" variable as a deque
- Declare visited as an empty set
- Initialize "count" to zero
- Iterate through each node in graph:
  - If node is not in visited:
    - Add node to the end of ths queue
    - Add node to the visited set
    - Increment "count" by one
    - While queue has length:
      - Declare "current" variable as the node removed from the beginning of the queue
      - Iterate through neighbor nodes in graph at index current:
        - If neighbor is not in visited:
          - Add neighbor to the end of the queue
          - Add neighbor to the visited set
- Return count
'''

print(connected_components_count(graph_1)) # -> 2
print(connected_components_count(graph_2)) # -> 1
print(connected_components_count(graph_3)) # -> 3
print(connected_components_count(graph_4)) # -> 5
print(connected_components_count({})) # -> 0