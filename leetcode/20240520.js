/* 
https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/description/

A string s can be partitioned into groups of size k using the following procedure:

The first group consists of the first k characters of the string, the second group consists of the next k characters of the string, and so on. Each character can be a part of exactly one group.
For the last group, if the string does not have k characters remaining, a character fill is used to complete the group.
Note that the partition is done so that after removing the fill character from the last group (if it exists) and concatenating all the groups in order, the resultant string should be s.

Given the string s, the size of each group k and the character fill, return a string array denoting the composition of every group s has been divided into, using the above procedure.
*/

const divideString = (s, k, fill) => {
  let groupIndexStart = 0
  let listOutput = []
  
  for (let i = groupIndexStart ; i < s.length ; i++) {
    let charGroup = s.slice(groupIndexStart, groupIndexStart+k)

    if (!charGroup.length) {
      continue
    } 
    
    if (k > charGroup.length) {
      let remanderFill = new Array(k-charGroup.length).fill(fill).join("")
      listOutput.push(charGroup + remanderFill)
    } else {
      listOutput.push(charGroup)
    }
    groupIndexStart += k
  }
  return listOutput
};

console.log(divideString("abcdefghi", 3, "x"))
console.log(divideString("abcdefghij", 3, "x"))
console.log(divideString("abcdefghaijklmnop", 4, "z"))

/* 
# Pseudocode:
Initialize a starting point for the group index (groupIndexStart)
Initialize and empty array (listOutput)
Loop through the "s" input string
Slice character groups by the groupIndexStart and groupIndexStart + the input size "k"
If the character group has no length, continue
If "k" is less than the character group length, create a new temp array of size "k" - charGroup.length,
fill it with the "fill" character, then join and push the result into the listOutput array
Otherwise, push the character group into the listOutput array
Increment groupIndexStart by the input size "k" on each loop
After the loop has been completed, return the listOutput array
*/