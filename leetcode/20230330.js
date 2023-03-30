// https://leetcode.com/problems/two-sum/

const twoSum = (nums, target) => {
  const hash = {}
  for (let i = 0 ; i < nums.length ; i++) {
    if (hash.hasOwnProperty(nums[i]) === false) {
      hash[nums[i]] = i
    }
    if (hash.hasOwnProperty([target - nums[i]]) === true &&
       hash[target - nums[i]] !== i) {
      return [hash[target - nums[i]], i]
    }
  }
} // Finally!!!!

/*
## Explanation: ##
- First, we initialize an empty object, variable name of hash
- We then loop through the array that is passed in as an argument (nums)
- During loop, we state: 
  “If hash does not have a property of nums at the current index, 
  create property in hash object, with value of the current index”
- During the same loop, we do a separate statement: 
  “If hash has a property that is the target number argument minus the 
  number at the current index and if the value of hash 
  property target minus nums at current index does not equal the 
  current index, return an array which contains value of hash property 
  target minus nums a current index and current index”
*/