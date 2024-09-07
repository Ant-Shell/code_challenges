// Leetcode problem Counter
// https://leetcode.com/problems/counter/description/

/* 

Given an integer n, return a counter function. 
This counter function initially returns n and then returns 1 more than the previous 
value every subsequent time it is called (n, n + 1, n + 2, etc).

*/

var createCounter = function(n) {
  let count = -1
    return function() {
      count += 1
      return n + count
  };
};

const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12

/* 

Explanation:

createCounter is assigned an anonymous function which takes n as an parameter (n is an integer argument) and does the following:
Initialize count variable to -1
Return a function that increases the counter by 1 each time the counter invoked and returns 

Because createCounter is an anonymous function, it must be assigned to a variable, then invoked.

The variable is stored in memory, so each time it is invoked, it keeps the updated count value, which allows for the return value to increment as expected

*/