/* 
https://structy.net/problems/tree-min-value

tree min value
Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree.

You may assume that the input tree is non-empty.

*/

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}


// ## Test 1:
// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(4);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// ## Test 2:
// const a = new Node(5);
// const b = new Node(11);
// const c = new Node(3);
// const d = new Node(4);
// const e = new Node(14);
// const f = new Node(12);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//       5
//    /    \
//   11     3
//  / \      \
// 4   14     12


// ## Test 3:
const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(-4);
const f = new Node(-13);
const g = new Node(-2);
const h = new Node(-2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   -4   -13
//     /       \
//    -2       -2


// ## Test 4:
// const a = new Node(42);

//        42

// # Depth-First Traversal (Stack - LIFO)
const treeMinValue = (root) => {
  const stack = [root]
  let minValue = null

  while (stack.length) {
    let current = stack.pop()
    if (minValue === null || minValue > current.val) {
      minValue = current.val
    }
    if (current.left !== null) {
      stack.push(current.left)
    }
    if (current.right !== null) {
      stack.push(current.right)
    }
  }
  return minValue
}

/* 
Pseudocode:
- Define the Node class
- Define the treeMinValue function with "root" as a parameter
- Declare "stack" variable as an array containing "root"
- Initialize the "minValue" variable as null
- While "stack" array has length
  - Declare the "current" variable as the node popped from the end of the stack
  - If "minValue" is strictly equal to null or "minValue" is greater then current.val
    - Reassign "minValue" as current.val
  - If current.left is not strictly equal to null
    - Push current.left to the end of the "stack"
  - If current.right is not strictly equal to null
    - Push current.right to the end of the "stack"
- Once the while loop has completed, return "minValue"

*/

// # Recursive Traversal (Stack - LIFO)
// const treeMinValue = (root) => {
//   if (root === null) {
//     return Number.POSITIVE_INFINITY
//   }
//   return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right))
// }

/* 
Pseudocode:
- Define the Node class
- Define the treeMinValue function with "root" as a parameter
- If root strictly equals null
  - Return Infinity
- Return the minimum number found between root.val, the recursive call of treeMinValue with argument root.left
  and treeMinValue with argument of root.right
*/

// Breadth-First Traversal (Queue - FIFO)
// const treeMinValue = (root) => {
//   const queue = [root]
//   let min_value = null

//   while (queue.length) {
//     let current = queue.shift()
//     if (min_value === null || min_value > current.val) {
//       min_value = current.val
//     }
//     if (current.left !== null) {
//       queue.push(current.left)
//     }
//     if (current.right !== null) {
//       queue.push(current.right)
//     }
//   }
//   return min_value
// }

/* 
Pseudocode:
- Define the Node class
- Define the treeMinValue function with "root" as a parameter
- Declare "queue" variable as an array containing "root"
- Initialize the "minValue" variable as null
- While "queue" array has length
  - Declare the "current" variable as the node shifted from the front of the "queue"
  - If "minValue" is strictly equal to null or "minValue" is greater then current.val
    - Reassign "minValue" as current.val
  - If current.left is not strictly equal to null
    - Push current.left to the end of the "queue"
  - If current.right is not strictly equal to null
    - Push current.right to the end of the "queue"
- Once the while loop has completed, return "minValue"
*/

// console.log(treeMinValue(a)) // -> -2
// console.log(treeMinValue(a)) // -> 3
console.log(treeMinValue(a)) // -> -13
// console.log(treeMinValue(a)) // -> 42