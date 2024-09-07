/*
https://leetcode.com/problems/minimum-common-value

Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.
*/

const getCommon = (nums1, nums2) => {
  let intList1 = nums1
  let intList2 = nums2
  
  if (nums1.length > nums2.length) {
    intList1 = nums2
    intList2 = nums1
  }

  let intSet = new Set(intList2)

  for (let i = 0; i < intList1.length ; i++) {
    const currentNum = intList1[i]
    if (intSet.has(currentNum)) {
      return currentNum
    }
  }
  return -1
}


console.log(getCommon([1,2,3], [2,4])) // 2
console.log(getCommon([1,2,3,6], [2,3,4,5])) // 2
console.log(getCommon([1,2,3,4,5], [6,7])) // -1


/* 
## Pseudocode: ##
I would like to compare numbers between two arrays
I would like to compare the array with the lower length to the array with the higher length
I need to capture the number that is in both arrays
I also need to ensure that the number that is in both arrays is the minium number
I need to return the number that is common in both arrays
If there is no number that is common in both arrays, I need to return a -1
*/