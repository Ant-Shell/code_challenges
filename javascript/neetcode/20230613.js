// Neetcode Arrays & Hashing Problem Number 6
// https://leetcode.com/problems/product-of-array-except-self/

const productExceptSelf = (nums) => {
  const returnList = []
  let prefix = 1
  let postfix = 1
  
  for (let i = 0 ; i < nums.length ; i++) {
    returnList[i] = prefix
    prefix *= nums[i]
    console.log('Prefix', prefix) // track prefix value
  }

  for (let i = nums.length -1 ; i >= 0 ; i--) {
    returnList[i] *= postfix
    postfix *= nums[i]
    console.log('Postfix', postfix) // track postfix value
  }
  return returnList
}


console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1,1,0,-3,3]))

/* 
Explanation:
This one is still confusing to me, will continue to study/revisit
*/