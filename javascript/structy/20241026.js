/* 
https://structy.net/problems/breadth-first-values

breadth first values
Write a function, breadthFirstValues, that takes in the root of a binary tree.

The function should return an array containing all values of the tree in breadth-first order.
*/


class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

// ## Test 1:
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f


// ## Test 2:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('g');
// const h = new Node('h');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h


// ## Test 3:
// const a = new Node('a');

//      a

// ## Test 4:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const x = new Node('x');

// a.right = b;
// b.left = c;
// c.left = x;
// c.right = d;
// d.right = e;

//      a
//       \
//        b
//       /
//      c
//    /  \
//   x    d
//         \
//          e


const breadthFirstValues = (root) => {
  if (root === null) {
    return []
  }

  const queue = [root]
  const values = []
  let current = null

  while (queue.length) {
    current = queue.shift()
    values.push(current.val)
    if (current.left) {
      queue.push(current.left)
    }
    if (current.right) {
      queue.push(current.right)
    }
  }
  return values
}

/* 
Pseudocode:
- Create Node class
- Define function breadthFirstValues with "root" as a parameter
- If "root" is strictly equal to null, return an empty array
- Declare variable "values" as an empty array
- Declare variable "queue" as an array with the root value (FIFO)
- Initialize variable "current" as null
- While queue has length
  - Assign "current" the value of the first value of the queue
  - Add current.val to the values array
  - If current.left is truthy (not null)
    - Add current.left to the back of the queue
  - If current.right is truthy (not null)
    - Add current.right to the back of the queue
- After the while loop has completed, return the "values" array
*/

console.log(breadthFirstValues(a)) //    -> ['a', 'b', 'c', 'd', 'e', 'f']
// console.log(breadthFirstValues(a)) //   -> ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
// console.log(breadthFirstValues(a)) //    -> ['a']
// console.log(breadthFirstValues(a)) //    -> ['a', 'b', 'c', 'x', 'd', 'e']
console.log(breadthFirstValues(null)) //    -> []