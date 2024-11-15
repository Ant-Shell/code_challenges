/* 
https://structy.net/problems/connected-components-count

connected components count
Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph.

The function should return the number of connected components within the graph.
*/

// ## Test 1:
const graph1 = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}

// ## Test 2:
const graph2 = {
  1: [2],
  2: [1,8],
  6: [7],
  9: [8],
  7: [6, 8],
  8: [9, 7, 2]
}

// ## Test 3:
const graph3 = {
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
}

// ## Test 4:
const graph4 = {
  0: [4,7],
  1: [],
  2: [],
  3: [6],
  4: [0],
  6: [3],
  7: [0],
  8: []
}

// ## Helper function
const explore = (graph, current, visited) => {
    if (visited.has(String(current))) { // Base case
      return false
    }

    visited.add(String(current))
  
    for (let neighbor of graph[current]) {
      explore(graph, neighbor, visited)
    }

  return true
}

/* 
Pseudocode:
- Define explore with parameters of graph, current and visited
  - If visited has th string value of current
    - Return false
- Add the string value of curret to the visited set
- Iterate through neighbor of graph at index current
  - Recursively call explore with the rguments of graph, neighbor and visited
*/

// ## Depth-First Traversal (Stack - LIFO)
// const connectedComponentsCount = (graph) => {
//   const visited = new Set()
//   const stack = []
//   let count = 0

//   for (let node in graph) {
//     if (!visited.has(node)) {
//       stack.push(node)
//       visited.add(node)
//       count += 1
//     }
//     while (stack.length) {
//       let current = stack.pop()
//       for (let node in graph[current]) {
//         let neighbor = String(graph[current][node])
//         if (!visited.has(neighbor)) {
//           stack.push(neighbor)
//           visited.add(neighbor)
//         }
//       }
//     }
//   }
//   return count
// }

/* 
Pseudocode:
- Define connectedComponentsCount with graph as a parameter
- Declate visited as an empty set
- Declare stack as an empty array
- Initialize count as zero
- Iterate through the keys (nodes) of the graph
  - If node is not found in the visited set
    - Add node to visited
    - Push node to the end stack
    - Increment count by one
  - While stack has length
    - Declare current as the node removed from the end of the stack
    - Iterate through the indices in graph at index current
      - Declare neighbor as the value of graph at index current, at index node
        - If neighbor is not in the visited set
          - Add neighbor to visited
          - Push neighbor to the end of the stack
- Return count
*/

// ## Recursive Traversal (Stack - LIFO)
const connectedComponentsCount = (graph) => {
  const visited = new Set()
  let count = 0

  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count += 1
    }
  }
  return count
}

/* 
Pseudocode:
- Define connectedComponentsCount function with graph as a parameter
- Declare visited variable as an empty set
- Initialize count variable as zero
- Iterate through the nodes (keys) in graph
  - If the call of the explore function with arguments of graph, node and visited strictly equals true
    - Increment count by one
- Return count
*/

// ## Breadth-First Traversal (Queue - FILO)
// const connectedComponentsCount = (graph) => {
//   const visited = new Set()
//   const queue = []
//   let count = 0

//   for (let node in graph) {
//     if (!visited.has(node)) {
//       queue.push(node)
//       visited.add(node)
//       count += 1
//     }
//     while (queue.length) {
//       let current = queue.shift()
//       for (let node in graph[current]) {
//         let neighbor = String(graph[current][node])
//         if (!visited.has(neighbor)) {
//           queue.push(neighbor)
//           visited.add(neighbor)
//         }
//       }
//     }
//   }
//   return count
// }

/* 
Pseudocode:
- Define connectedComponentsCount with graph as a parameter
- Declate visited as an empty set
- Declare queue as an empty array
- Initialize count as zero
- Iterate through the keys (nodes) of the graph
  - If node is not found in the visited set
    - Add node to visited
    - Push node to the end queue
    - Increment count by one
  - While queue has length
    - Declare current as the node removed from the beginning of the queue
    - Iterate through the indices in graph at index current
      - Declare neighbor as the value of graph at index current, at index node
        - If neighbor is not in the visited set
          - Add neighbor to visited
          - Push neighbor to the end of the queue
- Return count
*/

console.log(connectedComponentsCount(graph1)) // -> 2
console.log(connectedComponentsCount(graph2)) // -> 1
console.log(connectedComponentsCount(graph3)) // -> 3
console.log(connectedComponentsCount(graph4)) // -> 5
console.log(connectedComponentsCount({})) // -> 0