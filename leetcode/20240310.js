/* 
https://leetcode.com/problems/intersection-of-two-arrays

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
*/

const intersection = (nums1, nums2) => {
  let list1 = nums1
  let list2 = nums2
  const returnList = []
  

  if (nums1.length > nums2.length) {
    list1 = nums2
    list2 = nums1
  }

  const intersection = new Set(list2)
  for (let i = 0 ; i < list1.length ; i++) {
    let currentNum = list1[i]
    if (intersection.has(currentNum) && !returnList.includes(currentNum)) {
      returnList.push(currentNum)
    }
  }
  return returnList
} // Note: Could be improved, due to nested loop with .includes

/* 
## Pseudocode: ##
The parameters of the intersection function are two arrays of integers
Find the intersection of the two arrays
The intersection can contain any amount of numbers, as long as they are unique
I would like to return an array of the intersecting numbers
The return array can be in any order
*/


console.log(intersection([1,2,2,1], [2,2]))
console.log(intersection([4,9,5], [9,4,9,8,4]))
console.log(intersection([1,2,2,3], [1,2,3]))