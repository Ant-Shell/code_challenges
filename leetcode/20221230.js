'https://leetcode.com/problems/single-number/'

const singleNumber = (nums) => {
  if (nums.length === 1) {
    return nums[0]
  }

  const numsSorted = nums.sort((a,b) => {
    return a - b
  })

  const duplicates = new Array

  for (let i = 0 ; i < numsSorted.length ; i++) {
    if (numsSorted[i] === numsSorted[i+1]) {
      duplicates.push(numsSorted[i+1])
    }
  }
  for (let j = 0 ; j < numsSorted.length ; j++) {
    if (!duplicates.includes(numsSorted[j])) {
      return numsSorted[j]
    }
  }
};