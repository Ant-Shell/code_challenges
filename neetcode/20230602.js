/*
Neetcode Arrays & Hashing problem 4
https://leetcode.com/problems/top-k-frequent-elements

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
*/

// const topKFrequent = (nums, k) => {
//   const occuranceHash = {}

//   for (i in nums) {
//    Object.hasOwn(occuranceHash, nums[i]) ? 
//     occuranceHash[nums[i]] += 1 : 
//     occuranceHash[nums[i]] = 1
//   }
//   const occuranceList = Object.entries(occuranceHash).sort((a,b) => b[1] - a[1])
//   return occuranceList.map(num => num[0]).slice(0, k)
// } // 85 ms

// const topKFrequent = (nums, k) => {
//   const occuranceHash = nums.reduce((acc, curr, i) => {
//     Object.hasOwn(acc, nums[i]) ? 
//     acc[nums[i]] += 1 : 
//     acc[nums[i]] = 1
//     return acc
//   }, {})
//   const occuranceList = Object.entries(occuranceHash).sort((a,b) => b[1] - a[1])
//   return occuranceList.map(num => num[0]).slice(0, k)
// } // 76 ms

const topKFrequent = (nums, k) => {
  const occuranceHash = nums.reduce((acc, curr) => {
    Object.hasOwn(acc, curr) ? 
    acc[curr] += 1 : 
    acc[curr] = 1
    return acc
  }, {})
  const occuranceList = Object.entries(occuranceHash).sort((a,b) => b[1] - a[1])
  return occuranceList.map(num => num[0]).slice(0, k)
} // 73 ms

console.log(topKFrequent([1,1,1,2,2,3], 2))
console.log(topKFrequent([1], 1))
console.log(topKFrequent([3,3,3,3,4,9,9,9,9,9,9,10,2,2,2,2], 3))

/* 

Explanation

The function “topKFrequent” accepts two arguments, an array of integers (nums) and an integer which represents the number of most frequent integers we would like to return (k)

In this problem, a hashmap object was used to capture each occurring integer in the nums array, as well as their frequency. We loop through the array of integers and use a ternary to determine the following:
Does the accumulator {} contain a key/property nums at the current index value?
If so, increment the value of the property by one
If not, create the property and assign a value of one
We then return the accumulator on each loop, per the syntax of a reduce

(In the first iteration, an empty array was assigned to variable “occuranceHash”, but in the second iteration a reduce was used instead.)

We then create an array of key value pairs by using the Object.enteries() prototype, and sort them in descending order by their values - this is assigned to the variable “occuranceList”

Finally, we return a mapped “occuranceList, which loops through the array of sorted key/value pair arrays, singles out the keys and slices the resulting array starting at index 0 and ending at k. This gives us the return syntax that we are looking for.

*/