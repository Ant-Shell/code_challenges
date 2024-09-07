// https://leetcode.com/problems/contains-duplicate/

const containsDuplicate = (nums) => {
  const sortedNums = nums.sort((a,b) => a - b)
  let duplicateFound = false

  for (let i = 0 ; i < sortedNums.length ; i++) {
    if (sortedNums[i] === sortedNums[i+1]) {
      duplicateFound = true
      return duplicateFound
    }
  }
  return duplicateFound
}