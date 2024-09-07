// https://leetcode.com/problems/longest-common-prefix/

const longestCommonPrefix = (strs) => {
  if (!strs.length) return "Invalid entry"
  if (strs.length === 1) return strs[0]
  if (strs.includes('')) return ''
  const sortedStrs = strs.sort((a,b) => a.length - b.length)
  let returnVal = sortedStrs[0].split('')

  for (let i = 0 ; i < sortedStrs.length ; i++) {
    let currentStr = sortedStrs[i].split('')
    for (let j = 0 ; j < returnVal.length ; j++) {
      if (returnVal[j] !== currentStr[j]) {
          returnVal.splice(j)
      }
    }
  }
  return returnVal.join('')
}

/*
Explanation:

- First we catch for edge cases and/or unwanted scenarios:

  Return the string “Invalid entry” if the array of strings passed in as an argument (strs) 
  has no length

  If the array of strings passed in as an argument (strs) has a length of one, return 
  the string at index zero

  If the array of strings passed in as an argument (strs) includes an empty string, 
  return an empty string

- Next, we assign the following variables:

  sortedStrs which is a sort of the array of strings passed in as an argument (strs) from 
  least amount of letters to most amount of letter and assign to the variable

  returnVal which is sortedStrs at the first index (first string), which is split into an 
  array of letters

- We then do a nested for loop:

  In the outer for loop, we loop through sortedStrs and assign the variable currentStr, 
  which is sortedStrs at the current index, split into an array of letters

  In the inner for loop, we loop through returnVal and do an if statement which says:
  “If returnVal at the current index does not equal currentStr at the current index then splice returnVal at the current index - this will splice out any letters that do not match

- Finally, we return the joined version of returnVal




*/