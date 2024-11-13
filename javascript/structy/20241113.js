/* 
https://structy.net/problems/undirected-path

Write a function, undirectedPath, that takes in an array of edges for an undirected
graph and two nodes (nodeA, nodeB).

The function should return a boolean indicating whether or not there exists a path
between nodeA and nodeB.
*/

// ## Test 1:
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
]


// ## Test 2:
// const edges = [
//   ['b', 'a'],
//   ['c', 'a'],
//   ['b', 'c'],
//   ['q', 'r'],
//   ['q', 's'],
//   ['q', 'u'],
//   ['q', 't'],
// ]


// ## Test 3:
// const edges = [
//   ['s', 'r'],
//   ['t', 'q'],
//   ['q', 'r'],
// ];

// ## Helper functions:
const buildGraph = (edges) => {
  const graph = {}

  for (let index in edges) {
    let edge = edges[index]
    let firstVal = edge[0]
    let secondVal = edge[1]

    if (Object.hasOwn(graph, firstVal)) {
      graph[firstVal].push(secondVal)
    } else {
      graph[firstVal] = [secondVal]
      
    }
    if (Object.hasOwn(graph, secondVal)) {
      graph[secondVal].push(firstVal)
    } else {
      graph[secondVal] = [firstVal]
    }
  }
  return graph
}

/* 
Pseudocode:
- Define buildGraph function with parameter of edges
- Declare "graph" variable as an empty object
- Iterate through each value in the "edges" array:
  - Declare "edge" as "edges" at the index number of current array value
  - Declare "firstVal" as "edge" at index zero
  - Declare "secondVal" as "edge" at index one
  - If "firstVal" is found as a key in "graph":
    - Push "secondVal" to the array value of "graph" at index "firstVal"
  - Else:
    - Add a new key of "firstvVl" to the graph object and assign it an array containing "secondVal"
  - If "secondVal" is found as a key in "graph":
    - Push "secondVal" to the array value of "graph" at index "firstVal"
  - Else:
    - Add a new key of "secondVal" to the graph object and assign it an array containing "firstVal"
- After the for loop has completed, return the resulting "graph" object
*/

const hasPath = (graph, src, dst, visited) => {
  if (src === dst) { // Base case
    return true
  }
  if (visited.has(src)) { // Base case
    return false
  }
  visited.add(src)
  for (let index in graph[src]) {
    let neighbor = graph[src][index]
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true
    }
  }
  return false
}

/* 
Pseudocode:
- Define function "hasPath" with parameters "graph", "src", "dst" and "visited"
- If "src" is strictly equal to "dst" (Base case)
  - Return true
- If "src" is in the visited set (Base case)
  - Return False
- Add "src" to the visited set if base cases are not met
- Iterate through the "index" values in the list associated with "graph" at key of "src"
- Declare neighbor as "graph" at index "src" at current "index"
- If the recursive call of has_path with arguments "graph", "neighbor", "dst" and "visited" is equal to true
  - Return true
- Return false as the default
*/

// ## Depth-First Traversal (Stack - LIFO)
// const undirectedPath = (edges, nodeA, nodeB) => {
//   const graph = buildGraph(edges)
//   const stack = [nodeA]
//   const visited = new Set()

//   while (stack.length) {
//     let current = stack.pop()
//     visited.add(current)
//     for (let index in graph[current]) {
//       let neighbor = graph[current][index]
//       if (neighbor === nodeB) {
//         return true
//       }
//       if (!visited.has(neighbor)) {
//         stack.push(neighbor)
//       }
//     }
//   }
//   return false
// }

/* 
Pseudocode:
- Define the undirectedPath function with "edges", "nodeA" and "nodeB" as parameters
- Declare "graph" variable as the call of helper function buildGraph with "edges" as an argument
- Declare "stack" variable as an array containing "nodeA"
- While "stack" has length
  - Declare "current" as the value popped from the end of the "stack"
  - Add "current" to the "visited" set
  - Iterate through "graph" at index "current"
  - Declare "neighbor" as "graph" at index "current" at index "index"
  - If "neighbor" strictly equals "nodeB"
    - Return true
  - If the "visited" set does not have "neighbor" in it
    - Push "neighbor" to the stack
- After the while loop has completed, return false as the default
*/

// ## Recursive Traversal (Stack - LIFO)
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)
  return hasPath(graph, nodeA, nodeB, new Set())
}

/* 
Pseudocode:
- Define the undirectedPath function with "edges", "nodeA" and "nodeB" as parameters
- Declare "graph" variable as the result of calling the buildGraph helper function with edges as an argument
- Return the result of hasPath helper function, with arguments of "graph", "nodeA", "nodeB" and an empty set
*/

// ## Breadth-First Traversal (Queue - FIFO)
// const undirectedPath = (edges, nodeA, nodeB) => {
//   const graph = buildGraph(edges)
//   const queue = [nodeA]
//   const visited = new Set()

//   while (queue.length) {
//     let current = queue.shift()
//     visited.add(current)
//     for (let index in graph[current]) {
//       let neighbor = graph[current][index]
//       if (neighbor === nodeB) {
//         return true
//       }
//       if (!visited.has(neighbor)) {
//         queue.push(neighbor)
//       }
//     }
//   }
//   return false
// }

/* 
Pseudocode:
- Define the undirectedPath function with "edges", "nodeA" and "nodeB" as parameters
- Declare "graph" variable as the call of helper function buildGraph with "edges" as an argument
- Declare "queue" variable as an array containing "nodeA"
- While "queue" has length
  - Declare "current" as the value shifted from the beginning of the "queue"
  - Add "current" to the "visited" set
  - Iterate through "graph" at index "current"
  - Declare "neighbor" as "graph" at index "current" at index "index"
  - If "neighbor" strictly equals "nodeB"
    - Return true
  - If the "visited" set does not have "neighbor" in it
    - Push "neighbor" to the queue
- After the while loop has completed, return false as the default
*/

// ## Test 1:
console.log(undirectedPath(edges, 'j', 'm')) // -> true
console.log(undirectedPath(edges, 'm', 'j')) // -> true
console.log(undirectedPath(edges, 'l', 'j')) // -> true
console.log(undirectedPath(edges, 'k', 'o')) // -> false
console.log(undirectedPath(edges, 'i', 'o')) // -> false

// ## Test 2:
// console.log(undirectedPath(edges, 'a', 'b')) // -> true
// console.log(undirectedPath(edges, 'a', 'c')) // -> true
// console.log(undirectedPath(edges, 'r', 't')) // -> true
// console.log(undirectedPath(edges, 'r', 'b')) // -> false

// ## Test 3:
// console.log(undirectedPath(edges, 'r', 't')) // -> true