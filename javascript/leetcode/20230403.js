// https://leetcode.com/problems/roman-to-integer

const romanToInt = (s) => {
  const numeralObj = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }

  const numeralList = s.split("")
  let returnNum = 0

  for (let i = 0 ; i < numeralList.length ; i++) {
    if (numeralList[i] + numeralList[i+1] === "IV" || 
        numeralList[i] + numeralList[i+1] === "IX") {
      returnNum -= 1
    } else if (numeralList[i] + numeralList[i+1] === "XL" || 
               numeralList[i] + numeralList[i+1] === "XC") {
      returnNum -= 10
    } else if (numeralList[i] + numeralList[i+1] === "CD" || 
               numeralList[i] + numeralList[i+1] === "CM") {
      returnNum -= 100
    } else {
      returnNum += numeralObj[numeralList[i]]
    }
  }
  return returnNum
}

/* 
Explanation:
- First, we create an object (numeralObj) which has keys representing roman numerals and values which represent the integer equivalent 
- Next, we create an array of strings (numeralList), derived from the string input, which represents each roman numeral to be evaluated
- We then initialize an integer, which will represent the returned number (returnNum)
- At this point, we loop through numeralList and compare the current index with the following index for various scenarios:
  - If current and following index are either “IV” or “IX’, subtract 1 from returnNum
  - If current and following index are either “XL” or “XC’, subtract 10 from returnNum
  - If current and following index are either “XL” or “XC’, subtract 100 from returnNum
  - If none of the above scenarios are the case, add the integer equivalent of the current string value to returnNum
- We then return the result of returnNum after the loop and evaluations therein have been completed
*/