/* 
https://leetcode.com/problems/first-bad-version/description/

First Bad Version

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
Example 2:

Input: n = 1, bad = 1
Output: 1
 

Constraints:

1 <= bad <= n <= 231 - 1
*/

// API simulation with 4 as the bad version
const isBadVersion = (version) => {
  return version >= 4 ? true : false;
};

// Binary search

// Testing version
const solution = (isBadVersion) => {
  const firstBadVersion = (n) => {
    let left = 1; // First version
    let right = n; // Last version

    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  };

  return firstBadVersion(5);
};

console.log(solution(isBadVersion));

/* 
Pseudocode:
- Initialize left as 1
- Initialize right as n
- While left is less than right
  - Declare mid as left plus right, divided by 2 and rounded down
  - If the API call of isBadVersion with mid as an argument is truthy
    - Reassign right as the value of mid
  - Else
    - Reasign right as the evaluation of mid + 1
- Return left
*/

// Submitted version:
// var solution = function(isBadVersion) {
//   /**
//    * @param {integer} n Total versions
//    * @return {integer} The first bad version
//    */
//   return function(n) {
//     let left = 1;
//     let right = n;

//     while (left < right) {
//       let mid = Math.floor((left + right) / 2);

//       if (isBadVersion(mid)) {
//         right = mid;
//       } else {
//         left = mid + 1;
//       }
//     }

//     return left;
//   };
// };

/* 
See: Closures
- https://www.w3schools.com/js/js_function_closures.asp
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures
- https://www.geeksforgeeks.org/closure-in-javascript/
*/


