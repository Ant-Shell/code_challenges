/* 
https://structy.net/problems/reverse-list

reverse list
Write a function, reverseList, that takes in the head of a linked list as an argument.

The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// ## Test 1:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

// ## Test 2:
const x = new Node("x");
const y = new Node("y");

x.next = y;

// x -> y

// ## Test 3:
const p = new Node("p");

// p

// ## Solution 1:
// const reverseList = (head) => {
//   let current = head
//   let previous = null

//   while (current !== null) {
//     let next = current.next
//     current.next = previous
//     previous = current
//     current = next
//   }
//   return previous
// }

/* 
Pseudocode:
- Create a Node class with "val" as a parameter and the following properties:
  - this.val which is assigned with the value of the "val" argument
  - this.next which is initialized to null

- Define function reverseList with a parameter of "head"
- Assign variable "current" the value of "head" argument
- Initialize variable "previous" as null
- While current does not strictly equal null
  - Assign variable "next" with the value of current.next
  - Reassign current.next with the value of "previous"
  - Reassign "previous" with the value of "current"
  - Reassign "current" with the value of "next"
- Return "previous" as the default (which is the new head of the reversed linked list)
*/

// ## Solution 2:
const reverseList = (head, previous=null) => {
  if (head === null) {
    return previous
  }
  const next = head.next
  head.next = previous
  return reverseList(next, head)
};

console.log(reverseList(a)) // f -> e -> d -> c -> b -> a
console.log(reverseList(x)) // y -> x
console.log(reverseList(p)) // p
