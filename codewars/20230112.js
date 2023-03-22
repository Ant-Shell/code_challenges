'https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript'

const toCamelCase = (str) => {
  let modifiedStr = ''
  let modifiedVal = ''
  let returnVal = ''
  
  if (str.includes('-') && str.includes('_')) {
    modifiedStr = str.replace(/-|_/g, ' ')
  } else if (str.includes('-')) {
    modifiedStr = str.replaceAll('-', ' ')
  } else if (str.includes('_')) {
    modifiedStr = str.replaceAll('_', ' ')
  } 

  if (modifiedStr.charAt(0) === modifiedStr.charAt(0).toUpperCase()) {
    returnVal = modifiedStr.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
    return returnVal.join('')
  } else {
    modifiedVal = modifiedStr.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
    returnVal = modifiedVal.join('')
    return returnVal.charAt(0).toLowerCase() + returnVal.slice(1)
  }
}