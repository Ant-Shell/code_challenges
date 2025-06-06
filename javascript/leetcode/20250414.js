/* 
https://leetcode.com/problems/count-good-triplets/

Count Good Triplets

Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

0 <= i < j < k < arr.length
|arr[i] - arr[j]| <= a
|arr[j] - arr[k]| <= b
|arr[i] - arr[k]| <= c
Where |x| denotes the absolute value of x.

Return the number of good triplets.

 

Example 1:

Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
Output: 4
Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].
Example 2:

Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1
Output: 0
Explanation: No triplet satisfies all conditions.
 

Constraints:

3 <= arr.length <= 100
0 <= arr[i] <= 1000
0 <= a, b, c <= 1000
*/

const countGoodTriplets = (arr, a, b, c) => {
  let count = 0

  for (let i = 0 ; i < arr.length - 2 ; i++) {
    for (let j = i + 1 ; j < arr.length - 1 ; j++) {
      for (let k = j + 1 ; k < arr.length ; k++) {
        if ((Math.abs(arr[i] - arr[j]) <= a) && 
            (Math.abs(arr[j] - arr[k]) <= b) && 
            (Math.abs(arr[i] - arr[k]) <= c)) {
          count++
        }
      }
    }
  }
  return count
}


console.log(countGoodTriplets([3,0,1,1,9,7], 7, 2, 3)) // -> 4
console.log(countGoodTriplets([1,1,2,2,3], 0, 0, 1)) // -> 0

/* 
- Initialize a count
- Three nested loops
- In innermost loop, if all checks pass, increase the count
- Return the count
Time complexity: O(n^3)
Space complexity: O(1)
*/