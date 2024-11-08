/* 
https://structy.net/problems/max-root-to-leaf-path-sum

max root to leaf path sum
Write a function, maxPathSum, that takes in the root of a binary tree that contains number values.

The function should return the maximum sum of any root to leaf path within the tree.

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
// const a = new Node(5);
// const b = new Node(11);
// const c = new Node(54);
// const d = new Node(20);
// const e = new Node(15);
// const f = new Node(1);
// const g = new Node(3);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// e.left = f;
// e.right = g;

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3


// ## Test 3:
// const a = new Node(-1);
// const b = new Node(-6);
// const c = new Node(-5);
// const d = new Node(-3);
// const e = new Node(0);
// const f = new Node(-13);
// const g = new Node(-1);
// const h = new Node(-2);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   0    -13
//     /       \
//    -1       -2


// ## Test 4:
// const a = new Node(42);

//        42

// # Recursive Traversal (Queue - LIFO)
const maxPathSum = (root) => {
  if (root === null) { // Base case
    return Number.NEGATIVE_INFINITY
  }
  if (root.left === null && root.right === null) { // Base case
    return root.val    
  }
  let left_subtree = maxPathSum(root.left)
  let right_subtree = maxPathSum(root.right)

  return root.val + Math.max(left_subtree, right_subtree)
}

/* 
Pseudocode:
- Create Node class
- Define maxPathSum funciton with "root" as a parameter
- Base case 1: If root is null, return negative infinity
- Base case 2: If root.left and root.right are null, return root.val
- Declare "left_subtree" variable as the recursive call of maxPathSum with argument of root.left
- Declare "right_subtree" variable as the recursive call of maxPathSum with argument of root.right
- Return root.val plus the maximum of left_subtree and right_subtree
*/

console.log(maxPathSum(a)) // -> 18
// console.log(maxPathSum(a)) // -> 59
// console.log(maxPathSum(a)) // -> -8
// console.log(maxPathSum(a)) // -> 42