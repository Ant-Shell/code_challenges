/* 
https://structy.net/problems/zipper-lists

zipper lists
Write a function, zipperLists, that takes in the head of two linked lists as arguments.

The function should zipper the two lists together into single linked list by alternating nodes.

If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes.

The function should return the head of the zippered linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty.
*/

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// ## Test 1:
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// a.next = b;
// b.next = c;
// a -> b -> c

// const x = new Node("x");
// const y = new Node("y");
// const z = new Node("z");
// x.next = y;
// y.next = z;
// x -> y -> z


// ## Test 2:
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

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z


// ## Test 3:
// const s = new Node("s");
// const t = new Node("t");
// s.next = t;
// s -> t

// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// const four = new Node(4);
// one.next = two;
// two.next = three;
// three.next = four;
// 1 -> 2 -> 3 -> 4


// ## Test 4:
// const w = new Node("w");

// w

// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// one.next = two;
// two.next = three;
// 1 -> 2 -> 3 


// ## Test 5:
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;
// 1 -> 2 -> 3 

const w = new Node("w");
// w

const zipperLists = (head1, head2) => {
  let tail = head1
  let current1 = head1.next
  let current2 = head2
  let count = 0

  while (current1 !== null && current2 !== null) {
    if (count % 2 == 0) { // Even = add node from list 2 to tail
      tail.next = current2
      current2 = current2.next
    } else { // Odd = add node from list 1 to tail
      tail.next = current1
      current1 = current1.next
    }
    tail = tail.next // tail becomes tail.next
    count += 1 // increase count
  }
  // Whichever current is not null, add to the end of the tail
  if (current1 !== null) {
    tail.next = current1
  }
  if (current2 !== null) {
    tail.next = current2
  }
  return head1
}


// console.log(zipperLists(a, x)) // a -> x -> b -> y -> c -> z
console.log(zipperLists(a, x)) // a -> x -> b -> y -> c -> z -> d -> e -> f
// console.log(zipperLists(s, one)) // s -> 1 -> t -> 2 -> 3 -> 4
// console.log(zipperLists(w, one)) // w -> 1 -> 2 -> 3
console.log(zipperLists(one, w)) // 1 -> w -> 2 -> 3