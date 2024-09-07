// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

const solution = (str, ending) => {
  let returnVal = false
  
  if (!ending.length) {
    return true
  }

  for(let i = 0 ; i < ending.length ; i++) {
    if(str[str.length-(i+1)] !== ending[ending.length-(i+1)]) {
      return false
    } else {
      returnVal = true
    }
  }
  return returnVal
}