/* 
https://structy.net/problems/get-node-value

get node value
Write a function, getNodeValue, that takes in the head of a linked list and an index.

The function should return the value of the linked list at the specified index.

If there is no node at the given index, then return null.
*/

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}


// ## Test 1:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// # Test 2:
const node1 = new Node("banana");
const node2 = new Node("mango");

node1.next = node2;


// const getNodeValue = (head, index) => {
//   current = head
//   currentIndex = 0

//   while (current !== null) {
//     if (index === currentIndex) {
//       return current.val
//     }
//     current = current.next
//     currentIndex++
//   }
//   return null
// }

/* 
Pseudocode:
- Create a Node class which has "val" as a parameter, and the following properties
- this.val which is assigned the value of the "val" argument
- this.next which is initialized as null

- Define function getNodeValue, with parameters "head" and "index"
- Assign variable "current" the value of the "head" argument
- Initialize variable "currentIndex" as zero
- While "current" does not strictly equal null
  - If "index" strictly equals "currentIndex"
    - Return current.val
  - Otherwise
    - Reassign "current" with the value of current.next
    - Increment "currentIndex"
- Return null as the default
*/

const getNodeValue = (head, index) => {
  const nodeValueIndex = 0
  if (head === null) {
    return null
  }
  if (nodeValueIndex === index) {
    return head.val
  }
  return getNodeValue(head.next, index-1)
}

/* 
Pseudocode:
- Create a Node class which has "val" as a parameter, and the following properties
- this.val which is assigned the value of the "val" argument
- this.next which is initialized as null

- Define function getNodeValue, with parameters "head" and "index"
- Initalize variable nodeValueIndex as zero
- If "head" strictly equals null
  - Return null
- If "nodeValueIndex" strictly equals index
  - Return head.val
- Return recursive call of getNodeValue with arguments head.next and index minus one
*/

console.log(getNodeValue(a, 2)) // 'c'
console.log(getNodeValue(a, 3)) // 'd'
console.log(getNodeValue(a, 7)) // null
console.log(getNodeValue(node1, 0)) // 'banana'
console.log(getNodeValue(node1, 1)) // 'mango'