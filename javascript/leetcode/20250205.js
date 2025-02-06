/* 
https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/

Check if One String Swap Can Make Strings Equal

You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

 

Example 1:

Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank".

Example 2:

Input: s1 = "attack", s2 = "defend"
Output: false
Explanation: It is impossible to make them equal with one string swap.

Example 3:

Input: s1 = "kelb", s2 = "kelb"
Output: true
Explanation: The two strings are already equal, so no string swap operation is required.
 

Constraints:

1 <= s1.length, s2.length <= 100
s1.length == s2.length
s1 and s2 consist of only lowercase English letters.
*/

// const areAlmostEqual = (s1, s2) => {
//   if (s1 === s2) {
//     return true
//   }

//   const s1Occurrences = {}
//   const s2Occurrences = {}

//   for (i in s1) {
//     if (!Object.hasOwn(s1Occurrences, s1[i])) {
//       s1Occurrences[s1[i]] = 0
//     } else {
//       s1Occurrences[s1[i]] += 1
//     }

//     if (!Object.hasOwn(s2Occurrences, s2[i])) {
//       s2Occurrences[s2[i]] = 0
//     } else {
//       s2Occurrences[s2[i]] += 1
//     }
//   }

//   const s1Chars = new Set(s1)
//   let notEqualcount = 0

//   for (i in s1) {
//     if (!s1Chars.has(s2[i])) {
//       return false
//     }

//     if(s1Occurrences[s1[i]] !== s2Occurrences[s1[i]]) {
//       return false
//     }

//     if (s1[i] !== s2[i]) {
//       notEqualcount += 1
//     }
//   }
//   return (notEqualcount === 0 || notEqualcount === 2)
// } // yikes - refactoring

const areAlmostEqual = (s1, s2) => {
  if (s1 === s2) {
    return true
  }

  let mismatchCount = 0;
  const s1Mismatch = [];
  const s2Mismatch = [];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      mismatchCount++;
      s1Mismatch.push(s1[i]);
      s2Mismatch.push(s2[i]);
    }
  }
  
  if (mismatchCount !== 2) {
    return false
  } else {
    return s1Mismatch.sort().join("") === s2Mismatch.sort().join("")
  }
};

console.log(areAlmostEqual("bank", "kanb")); // -> true
console.log(areAlmostEqual("attack", "defend")); // -> false
console.log(areAlmostEqual("kelb", "kelb")); // -> true
console.log(areAlmostEqual("abcd", "dcba")); // false
console.log(areAlmostEqual("caa", "aaz")); // false
console.log(areAlmostEqual("bankb", "kannb")); // false  Character occurrences have to be the same
console.log(
  areAlmostEqual(
    "dcfqvylmcxfmpikrymujsqmutpdwjxhwsvtssudeprzjjpludsdtbxurfpehpaihplazqnheret",
    "dcfqvylmcxfipmkrymujsqmutpdwjxhwsvtssudeprzjjpludsdtbxurfpehpaihplazqnheret"
  )
); // true

/* 
- If both strings are equal, return true
- Initialize mismatchCount as zero
- Declare s1Mismatch and s2Mismatch as empty arrays
- Iterate through the s1 string
  - If s1 at current index does not equal s2 at current index
    - Increment mismatchCount
    - Add the current character of s1 into s1Mismatch
    - Add the current character of s2 into s2Mismatch
- If mismatchCount is not equal to 2 (meaning more or less than 2 characters need a swap)
  - Return false
- Else:
  - Return the evaluation of sorted and joined s1Mismatch is equal to sorted and joined s2Mismatch

- Time complexity O(n)
- Space complexity O(1)

- Notes: 
  - Finally had a breakthrough realizing mismatchCount has to be 2, or its false
  - Also, no need for overly redundant data structures
*/
