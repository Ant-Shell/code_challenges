// https://www.codewars.com/kata/51c8e37cee245da6b40000bd/javascript

const solution = (input, markers) => {
  const list = input.split("\n")
  const returnVal = []

  for (let i = 0; i < list.length ; i++) {
    if (list[i].includes(markers[0])) {
      returnVal.push(list[i].substring(0,list[i].indexOf(markers[0])).trim())
    } else if (list[i].includes(markers[1])) {
      returnVal.push(list[i].substring(0,list[i].indexOf(markers[1])).trim())
    } else {
      returnVal.push(list[i])
    }
  }
  return returnVal.join("\n")
}

/*
Explanation:

First, we assign the variable “list” to an array of strings of the input, which are split at the newline (“\n”)

Next, we initialize variable “returnVal” to an empty array

We then loop through the list of strings and check the following:

If index includes markers at index zero - if it does, push a substring into returnVal array that removes the marker and every character after it

If index includes markers at index one - if it does, push a substring into returnVal array that removes the marker and every character after it

If index does not include either marker, push the string into returnVal as is

Then, after the for loop has completed, return returnVal joined at the newline (“\n”)

## Note: This could be refactored to account for the markers array being more/less than a length of 2 ##
*/