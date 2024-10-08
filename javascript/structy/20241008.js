/* 
https://structy.net/problems/linked-list-values

linked list values
Write a function, linkedListValues, that takes in the head of a linked list as an argument.

The function should return an array containing all values of the nodes in the linked list.
*/

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// ## Test 1: ##
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// ## Test 2: ##
const x = new Node("x");
const y = new Node("y");

x.next = y;

// ## Test 3: ##
const q = new Node("q")


const linkedListValues = (head) => {
  let current = head
  const returnVal = []

  while (current !== null) {
    returnVal.push(current.val)
    current = current.next
  }
  return returnVal
}

console.log(linkedListValues(a)) // -> [ 'a', 'b', 'c', 'd' ]
console.log(linkedListValues(x)) // -> [ 'x', 'y' ]
console.log(linkedListValues(q)) // -> [ 'q' ]
console.log(linkedListValues(null)) // -> [ ]

/* 
Pseudocode:
- Create a class called "Node"
  - The constructor has a parameter of "val"
  - Properties are:
    - this.val which is assigned the value of "val"
    - this.next which is initialized as null

- Funtcion linkedListValues has a parameter of "head"
- Assign variable "current" the value of "head"
- Initialize variable returnVal as an empty array
- While current is not strictly equal to null:
  - Push the value of current.val into the returnVal array
  - Reassign current witht the value of current.next
- After the while loop has completed, return the returnVal array
*/