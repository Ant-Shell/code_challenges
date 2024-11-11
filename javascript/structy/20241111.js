/* 
https://structy.net/problems/has-path

has path
Write a function, hasPath, that takes in an object representing the adjacency list of a
directed acyclic graph and two nodes (src, dst).

The function should return a boolean indicating whether or not there exists a directed
path between the source and destination nodes.
*/

// ## Test 1:
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

// ## Test 2:
// const graph = {
//   f: ['g', 'i'],
//   g: ['h'],
//   h: [],
//   i: ['g', 'k'],
//   j: ['i'],
//   k: []
// };

// ## Test 3:
// const graph = {
//   f: ['g', 'i'],
//   g: ['h'],
//   h: [],
//   i: ['g', 'k'],
//   j: ['i'],
//   k: []
// };

// ## Test 4:
// const graph = {
//   v: ['x', 'w'],
//   w: [],
//   x: [],
//   y: ['z'],
//   z: [],  
// };

// ## Test 5:
// const graph = {
//   v: ['x', 'w'],
//   w: [],
//   x: [],
//   y: ['z'],
//   z: [],  
// };

// ## Depth-First Traversal (Stack - LIFO)
// const hasPath = (graph, src, dst) => {
//   const stack = [src]
//   while (stack.length) {
//     let current = stack.pop()
//     for (index in graph[current]) {
//       let neighbor = graph[current][index]
//       if (neighbor === dst) {
//         return true
//       }
//       stack.push(neighbor)
//     }
//   }
//   return false
// }

/* 
Pseudocode:
- Define hasPath function with parameters of "graph", "src" and "dst"
- Declare "stack" variable as an empty array containing "src"
- While "stack" has length
  - Declare "current" variable as the value popped from the end of "stack"
  - Iterate through the indices of "graph" at index "current"
    - Declare "neighbor" variable as "graph" at index "current" at index "index" 
  - If "neighbor" strictly equals "dst"
    - Return true
  - Otherwise, push "neighbor" to the "stack"
- After the while loop has completed, return false as the default
*/

// ## RecursiveTraversal (Stack - LIFO)
// const hasPath = (graph, src, dst) => {
//   if (src === dst) { // Base case
//     return true
//   }
//   for (index in graph[src]) {
//     let neighbor = graph[src][index]
//     if (hasPath(graph, neighbor, dst) === true) {
//       return true
//     }
//   }
//   return false
// }

/* 
Pseudocode:
- Define hasPath function with parameters of "graph", "src" and "dst"
- If "src" strictly equals "dst", return true (Base case)
- Iterate through the indices of "graph" at index "src"
- Declare "neighbor" variable with the value of "graph" at index "src" at index "index"
- If the recursive call of hasPath with arguments "graph", "neighbor" and "dst" strictly equalt true
  - Return true
- Return false as the default
*/

// ## Breadth-First Traversal (Queue - FIFO)
const hasPath = (graph, src, dst) => {
  const queue = [src]
  while (queue.length) {
    let current = queue.shift()
    for (index in graph[current]) {
      let neighbor = graph[current][index]
      if (neighbor === dst) {
        return true
      }
      queue.push(neighbor)
    }
  }
  return false
}

/* 
Pseudocode:
- Define hasPath function with parameters of "graph", "src" and "dst"
- Declare "queue" variable as an empty array containing "src"
- While "queue" has length
  - Declare "current" variable as the value shifted from the front of "stack"
  - Iterate through the indices of "graph" at index "current"
    - Declare "neighbor" variable as "graph" at index "current" at index "index" 
  - If "neighbor" strictly equals "dst"
    - Return true
  - Otherwise, push "neighbor" to the "queue"
- After the while loop has completed, return false as the default
*/

console.log(hasPath(graph, 'f', 'k')) // true
// console.log(hasPath(graph, 'f', 'j')) // false
// console.log(hasPath(graph, 'i', 'h')) // true
// console.log(hasPath(graph, 'v', 'w')) // true
// console.log(hasPath(graph, 'v', 'z')) // false





