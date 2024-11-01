/* 
https://structy.net/problems/tree-includes

tree includes
Write a function, treeIncludes, that takes in the root of a binary tree and a target value.

The function should return a boolean indicating whether or not the value is contained in the tree.
*/

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

// ## Test 1:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

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
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// const g = new Node("g");
// const h = new Node("h");

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


// # Depth First Search (Stack - LIFO)
const treeIncludes = (root, target) => {
  if (root === null) {
    return false
  }

  let stack = [root]

  while (stack.length) {
    let current = stack.pop()
    if (current.val === target) {
      return true
    }
    if (current.left !== null) {
      stack.push(current.left)
    }
    if (current.right !== null) {
      stack.push(current.right)
    }
  }
  return false
}

/* 
Pseudocode:
- Create Node class
- Define treeIncludes function with "root" and "target" as parameters
- If "root" strictly equals null
  - Return false
- Declare "stack" as an array containing "root"
- While "stack" array has length
  - Declare current as the node taken from the back of the "stack" (via pop method)
  - If current.val strictly equals target
    - Return true
  - If current.left does not strictly equal null
    - Add current.left to the end of the array (via push method)
  - If current.right does not strictly equal null
    - Add current.right to the end of the array (via push method)
- After the while loop has completed, return false
*/


// # Recursive Search (Stack - LIFO)
// const treeIncludes = (root, target) => {
//   if (root === null) { // Base case
//     return false
//   }
//   if (root.val === target) { // Base case
//     return true
//   }
//   return treeIncludes(root.left, target) || treeIncludes(root.right, target)
// }

/* 
Pseudocode:
- Create Node class
- Define treeIncludes function with "root" and "target" as parameters
- If "root" strictly equals null
  - Return false
- If root.val strictly equals target, return true
- Return the recursive call of treeIncludes, with arguments of root.left and target,
  or the recursive call of treeIncludes, with arguments of root.right and target
- Note: This works because if any of the values in the unwiding phase of the call stack are true,
  then the return value is true, otherwise the return value is false
*/


// # Breadth First Search (Queue - FIFO)
// const treeIncludes = (root, target) => {
//   if (root === null) {
//     return false
//   }

//   let queue = [root]

//   while (queue.length) {
//     let current = queue.shift()
//     if (current.val === target) {
//       return true
//     }
//     if (current.left !== null) {
//       queue.push(current.left)
//     }
//     if (current.right !== null) {
//       queue.push(current.right)
//     }
//   }
//   return false
// }

/* 
Pseudocode:
- Create Node class
- Define treeIncludes function with "root" and "target" as parameters
- If "root" strictly equals null
  - Return false
- Declare "queue" as an array containing "root"
- While "queue" array has length
  - Declare current as the node taken from the front of the "queue" (via shift method)
  - If current.val strictly equals target
    - Return true
  - If current.left does not strictly equal null
    - Add current.left to the end of the array (via push method)
  - If current.right does not strictly equal null
    - Add current.right to the end of the array (via push method)
- After the while loop has completed, return false
*/

console.log(treeIncludes(a, "e")) // -> true
// console.log(treeIncludes(a, "a")) // -> true
// console.log(treeIncludes(a, "n")) // -> false

// console.log(treeIncludes(a, "f")) // -> true
// console.log(treeIncludes(a, "p")) // -> false

console.log(treeIncludes(null, "b")) // -> false