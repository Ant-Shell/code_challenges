// Codewars - List Filtering
//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

/* 
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
*/

// const filter_list = (list) => {
//   const intList = []

//   for (i in list) {
//     if (typeof list[i] === 'number') {
//       intList.push(list[i])
//     }
//   }
//   return intList
// }

const filter_list = (list) => {
  return list.filter(char => typeof char === 'number')
}


console.log(filter_list([1,2,'a','b']))
console.log(filter_list([1,'a','b',0,15]))
console.log(filter_list([1,2,'aasf','1','123',123]))
console.log(filter_list(['a']))

/* 

Explanation:

The “filter_list” function returns an array which only contains characters of the number type

This was done using an initialized array “intList”, a for loop and an if statement in the first iteration

In the second iteration, the filter array prototype was used

*/