/* 
https://structy.net/problems/linked-list-find

linked list find
Write a function, linkedListFind, that takes in the head of a linked list and a target value.

The function should return a boolean indicating whether or not the linked list contains the target.
*/

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// ## Test 1:
const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")

a.next = b
b.next = c
c.next = d

// ##Test 2:
// const node1 = new Node("jason")
// const node2 = new Node("leneli")

// node1.next = node2


// ## Test 3:
const node1 = new Node(42)


// ## Solution 1
// const linkedListFind = (head, target) => {
//   let current = head

//   while (current !== null) {
//     if (current.val === target) {
//       return true
//     }
//     current = current.next
//   }
//   return false
// }

/* 
Pseudocode:
- Create a Node class
  - The constructor has "val" as a parameter
  - Property this.val is assigned the "val" argument value
  - Property this.next is initialized as a null value

- Create function linkedListFind, with parameters "head" and "target"
- Assign variable current the value of "head"
- While current is not strictly equal to null
  - If current.val is strictly equal to the target
    - Return true
  - Reassign "current" as the value of current.next
- Return false as a default
*/


// ## Solution 2
const linkedListFind = (head, target) => {
  if (head === null) {
    return false
  }
  if (head.val === target) {
    return true
  }
  return linkedListFind(head.next, target)
}

/* 
Pseudocode:
- Create a Node class
  - The constructor had val as a parameter
  - Property this.val is assigned the val argument value
  - Property this.next is initialized as a null value

- Create function linkedListFind, with parameters "head" and "target"
- If head is strictly equal to null
  - Return False (base case)
- If head.val is strictly equal to target
  - Return true (base case)
- Return recursive call of linkedListFind with head.next and target as arguments
*/

console.log(linkedListFind(a, "c")) // true
console.log(linkedListFind(a, "d")) // true
console.log(linkedListFind(a, "q")) // false
// console.log(linkedListFind(node1, "jason")) // true
console.log(linkedListFind(node1, 42)) // true
console.log(linkedListFind(node1, 100)) // false
