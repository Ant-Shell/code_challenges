// Codewars - Most frequently used words in a text
// https://www.codewars.com/kata/51e056fe544cf36c410000fb

/*
Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Note: Visit problem URL for Assumptions
*/

const topThreeWords = (text) => {
  const charList = text.split(' ')
  const hashMap = {}
  const specials = /[!@#$%^&*()-+={}|:;"<>,.?\\/]/g

  for (let i = 0 ; i < charList.length ; i++) {
    const word = charList[i].replace(specials, '').toLowerCase()
   
    if (word) {
      hashMap[word] ? 
      hashMap[word] +=1 : 
      hashMap[word] = 1
    }
  }
  
  const returnList = Object.entries(hashMap).sort((a,b) => b[1] - a[1]).slice(0,3).map(pair => pair[0])
  if (returnList.length === 1 && returnList[0] === "'") {
    return []
  } else {
    return returnList
  }
}


console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"))
console.log(topThreeWords("a a c b b"))
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"))
console.log(topThreeWords("  //wont won't won't "))
console.log(topThreeWords("  , e   .. "))
console.log(topThreeWords("  ...  "))
console.log(topThreeWords("  '  "))

console.log(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`))

/* 

Explanation:

Assign charList variable as a split list of the text input string

Assign hashmap variable as an empty object

Assign specials variable to a regex which matches special characters

Loop through the charList

On each loop:
- Assign variable word to be charList at the current index and replace all special characters with an empty string, lowercased
- If there is a word, detect if hashMap has a key with the current word
- If so, increase the key value by 1
- If not, create a key of the current word with a value of 1
- Note: This is to count the occurrences of each word

After loop has completed, assign returnList variable as follows:
- Object.enteries provides an array of key / value pairs for hashMap
- We can then sort in descending order based on the values (index 1)
- We can the slice the array to only include up to three key / value pairs
- We can then map to only return an array of the keys (index 0)

To omit just an apostrophe result, per Assumptions, an if statement checks if the length of the returnList array is strictly equal to 1 and if returnList at index 0 is strictly equal to the apostrophe string
- If so, return an empty array
- If not, return returnList

*/