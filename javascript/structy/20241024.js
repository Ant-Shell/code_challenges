/* 
https://structy.net/problems/depth-first-values

depth first values
Write a function, depthFirstValues, that takes in the root of a binary tree.

The function should return an array containing all values of the tree in depth-first order.
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

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g

// ## Test 3:
// const a = new Node('a');
//      a


// ## Test 4:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');

// a.right = b;
// b.left = c;
// c.right = d;
// d.right = e;

//      a
//       \
//        b
//       /
//      c
//       \
//        d
//         \
//          e


// const depthFirstValues = (root) => {
//   const stack = [root]
//   const values = []
//   let current = null

//   if (root === null) {
//     return values
//   }
//   while (stack.length) {
//     current = stack.pop()
//     values.push(current.val)
//     if (current.right !== null) {
//       stack.push(current.right)
//     }
//     if (current.left !== null) {
//       stack.push(current.left)
//     }
//   }
//   return values
// }

/* 
Pseudocode:
- Define Node class with "val" as a parameter and the following properties:
  - this.val which is assigned the value of val
  - this.left which is initialized to null
  - this.right which is initialized to null

- Define function depthFirstValues with "root" as a parameter
  - Declare variable "stack" and initialize as an array with value of "root"
  - Declare variable "values" and initialize as an empty array
  - Declare vairable "current" and initialize to null
  - If root is null, return "values"
  - While "stack" has length
    - Assign "current" as the most recently added node
    - Add current.val to the array of "values"
      - If the value of current.right does not strictly equal null
        - Push current.right to the stack
      - If the value of current.left does not strictly equal null
        - Push current.left to the stack
  - After the while loop completes, return values
*/

// ## Recursive solution:
const depthFirstValues = (root) => {
  if (root === null) {
    return []
  }
  let values_left = depthFirstValues(root.left)
  let values_right = depthFirstValues(root.right)
  return [root.val, ...values_left, ...values_right]
}

/* 
Pseudocode:
- Define depthFirstValues with parameter of root
- If root strictly equal null
   - Return an empty array
- Declare variable "values_left" and assign it the value of 
  depthFirstValues recursive call with argument of root.left
- Declare variable "values_right" and assign it the value of
  depthFirstValues recursive call with argument of root.right
- Return an array with root.val, spread of values_left and 
  spread of values_right
- Note: returning root instead of root.val in the array output
  changes all values within to nodes instead of node values
*/

console.log(depthFirstValues(a)) // -> ['a', 'b', 'd', 'e', 'c', 'f']
// console.log(depthFirstValues(a)) // -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']
// console.log(depthFirstValues(a)) // -> ['a']
// console.log(depthFirstValues(a)) // -> ['a', 'b', 'c', 'd', 'e']
console.log(depthFirstValues(null)) // -> []