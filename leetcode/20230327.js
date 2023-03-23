'https://leetcode.com/problems/palindrome-number/'

var isPalindrome = function(x) {
  return x.toString() === x.toString().split("").reverse().join("")
};

// Just needed a small win today (;﹏;)