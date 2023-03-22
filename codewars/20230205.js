'https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript'

function longestConsec(strarr, k) {
  let longestString = ''

if (!strarr.length || strarr.length < k  ||  k <= 0) {
  return longestString
}

 for (let i = 0 ; i < strarr.length ; i++) {
  let currentString = strarr.slice(i, i+k).join("")
  if (!longestString || currentString.length > longestString.length) {
    longestString = currentString
  } 
}
return longestString
}