/* 
https://structy.net/problems/sum-list

sum list
Write a function, sumList, that takes in the head of a linked list containing numbers as an argument.

The function should return the total sum of all values in the linked list.
*/

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// ## Test 1:
const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// ## Test 2:
const x = new Node(38);
const y = new Node(4);

x.next = y;

// ## Test 3:
const z = new Node(100);

// ## Solution 1:
// const sumList = (head) => {
//   let current = head
//   let sum = 0

//   while (current !== null) {
//     sum += current.val
//     current = current.next
//   }
//   return sum
// }

/* 
Pseudocode:
- Create a class called "Node"
  - The constructor has a parameter "val"
  - Node class has two properties:
    - this.val with is assigned the value of "val"
    - this.next which is assigned the value of null

- Define the function sumList, which has a parameter of "head"
- Assign variable "current" the value of "head"
- Initialize the variable "sum" as a value of zero
- While current is not strictly equal to null
  - Add the value of current.val to the "sum" variable
  - Reassign "current" with the value of current.next
- Return the value of "sum" once the while loop has completed
*/

// ## Solution 2:
const sumList = (head) => {
  let current = head

  if (current === null) {
    return 0
  }
  return current.val + sumList(current.next)
}

/* 
Pseudocode:
- Create a class called "Node"
- Define the function sumList, which has a parameter of "head"
- Assign variable "current" the value of "head"
- If current strictly equals null
  - Return 0 (Base case)
- Return current.val + sumList with argument of current.next
- Note: This will sum up the values that are part of the recursive call and return the result
during the unwinding process after meeting the base case
*/


console.log(sumList(a)); // 19
console.log(sumList(x)); // 42
console.log(sumList(z)); // 100
console.log(sumList(null)); // 0