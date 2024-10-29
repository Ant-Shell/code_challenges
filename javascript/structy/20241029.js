/* 
https://structy.net/problems/tree-sum

tree sum
Write a function, treeSum, that takes in the root of a binary tree that contains number values.

The function should return the total sum of all values in the tree.
*/


class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

// ## Test 1:
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1


// ## Test 2:
// const a = new Node(1);
// const b = new Node(6);
// const c = new Node(0);
// const d = new Node(3);
// const e = new Node(-6);
// const f = new Node(2);
// const g = new Node(2);
// const h = new Node(2);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

//      1
//    /   \
//   6     0
//  / \     \
// 3   -6    2
//    /       \
//   2         2

// # Depth First (Stack - LIFO)
// const treeSum = (root) => {
//   if (root === null) {
//     return 0
//   }

//   const stack = [root]
//   let totalSum = 0
  
//   while (stack.length) {
//     let current = stack.pop()
//     totalSum += current.val
//     if (current.left !== null) {
//       stack.push(current.left)
//     }
//     if (current.right !== null) {
//       stack.push(current.right)
//     }
//   }
//   return totalSum
// }

/* 
Pseudocode:
- Create Node class
- Define treeSum function with "root" as a parameter
- If "root" is stricly equal to null
  - Return zero
- Declare "stack" as an array containing the value of "root"
- Initialize "totalSum" as zero
- While "stack" has length
  - Declare current as the value of the last node on the stack (via pop method)
  - Add current.val to the totalSum value
  - If current.left is not strictly equal to null
    - Add current.left node to the end of the "stack" (via push method)
  - If current.right is not strictly equal to null
    - Add current.right node to the end of the "stack" (via push method)
- After the while loop has completed, return the value of totalSum
*/

// # Recursive (Stack - LIFO)
const treeSum = (root) => {
  if (root === null) { // Base case
    return 0
  }
  return root.val + treeSum(root.left) + treeSum(root.right)
}

/* 
Pseudocode:
- Create Node class
- Define treeSum function
- Return the value of root.val, plus the recursive call of treeSum with root.left as an argument,
  plus the recursive call of treeSum with root.right as an argument
- Note: This works because once the base case has been reached, the call stack will unwind an
  add the value of root.val with all the values of the left subtree and right subtree
*/

// # Breadth First (Queue - FIFO)
// const treeSum = (root) => {
//   if (root === null) {
//     return 0
//   }

//   const queue = [root]
//   let totalSum = 0

//   while (queue.length) {
//     let current = queue.shift()
//     totalSum += current.val
//     if (current.left !== null) {
//       queue.push(current.left)
//     }
//     if (current.right !== null) {
//       queue.push(current.right)
//     }
//   }
//   return totalSum
// }

/* 
Pseudocode:
- Create Node class
- Define treeSum function with "root" as a parameter
- If "root" is stricly equal to null
  - Return zero
- Declare "queue" as an array containing the value of "root"
- Initialize "totalSum" as zero
- While "queue" has length
  - Declare current as the value of the first node on the queue (via shift method)
  - Add current.val to the totalSum value
  - If current.left is not strictly equal to null
    - Add current.left node to the end of the "queue" (via push method)
  - If current.right is not strictly equal to null
    - Add current.right node to the end of the "queue" (via push method)
- After the while loop has completed, return the value of totalSum
*/

console.log(treeSum(a)) // -> 21
// console.log(treeSum(a)) // -> 10
console.log(treeSum(null)) // -> 0
