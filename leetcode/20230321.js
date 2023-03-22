'https://leetcode.com/problems/isomorphic-strings/'

const isIsomorphic = (s,t) => {
  const sList = s.split("")
  const tList = t.split("")
  let letterObj = new Object()

  for (letter in sList) {
    if (!letterObj.hasOwnProperty([sList[letter]]) &&
       Object.values(letterObj).includes(...[tList[letter]]) === false) {
      letterObj[sList[letter]] = tList[letter]
    }
  }
  
  const newWord = sList.map(letter => {
   return letterObj[letter]
  })

  return newWord.join("") === tList.join("")
}