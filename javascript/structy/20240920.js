/* 
https://structy.net/problems/intersection

intersection
Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

You may assume that each input array does not contain duplicate elements.

*/

const intersection = (a, b) => {
  let itemsSet = new Set(a)
  let items = b
  let result = []

  if (b.length > a.length) {
    itemsSet = new Set(b)
    items = a
  } 

  for (i in items) {
    if (itemsSet.has(items[i])) {
      result.push(items[i])
    }
  }
  return result
}

/* 
# Another version:
const intersection = (a, b) => {
  let itemsSet = new Set(b)
  let result = []

  for (i in a) {
    if (itemsSet.has(a[i])) {
      result.push(a[i])
    }
  }
  return result
}
*/

console.log(intersection([4,2,1,6], [3,6,9,2,10])) // -> [2,6]
console.log(intersection([2,4,6], [4,2])) // -> [2,4]
console.log(intersection([4,2,1], [1,2,4,6])) // -> [1,2,4]
console.log(intersection([0,1,2], [10,11])) // -> []

/* 
Pseudocode:
- Create a variable itemsSet, which is a new set of the "a" array argument
- Create a variable items and assign it the "b" array argument
- Initialize result as an empty array
- If the length of "b" is greater than "a"
  - Reassign itemsSet as a set of the "b" array argument
  - Reassign items as the the "b" array argument
- For i in items
  - If itemsSet has items at index i
    - Push the value of items at index i into the result array
- Return the result array
*/