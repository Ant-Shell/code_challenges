/* 
https://leetcode.com/problems/number-of-distinct-averages/description/

Number of Distinct Averages

You are given a 0-indexed integer array nums of even length.

As long as nums is not empty, you must repetitively:

Find the minimum number in nums and remove it.
Find the maximum number in nums and remove it.
Calculate the average of the two removed numbers.
The average of two numbers a and b is (a + b) / 2.

For example, the average of 2 and 3 is (2 + 3) / 2 = 2.5.
Return the number of distinct averages calculated using the above process.

Note that when there is a tie for a minimum or maximum number, any can be removed.


Example 1:

Input: nums = [4,1,4,0,3,5]
Output: 2
Explanation:
1. Remove 0 and 5, and the average is (0 + 5) / 2 = 2.5. Now, nums = [4,1,4,3].
2. Remove 1 and 4. The average is (1 + 4) / 2 = 2.5, and nums = [4,3].
3. Remove 3 and 4, and the average is (3 + 4) / 2 = 3.5.
Since there are 2 distinct numbers among 2.5, 2.5, and 3.5, we return 2.


Example 2:

Input: nums = [1,100]
Output: 1
Explanation:
There is only one average to be calculated after removing 1 and 100, so we return 1.
*/

const distinctAverages = (nums) => {
  const uniqueAverages = new Set();
  const sortedNums = nums.toSorted((a,b) => a - b);
  let start = 0;
  let end = sortedNums.length - 1;

  while (start < end) {
    uniqueAverages.add(averageValues(sortedNums[start], sortedNums[end]));
    start++;
    end--;
  }

  return uniqueAverages.size;
};

const averageValues = (a, b) => {
  return (a + b) / 2;
};

console.log(distinctAverages([4, 1, 4, 0, 3, 5])); // -> 2
console.log(distinctAverages([1,100])) // -> 1
console.log(distinctAverages([10,2,2,0,4,0])) // -> 2

/* 
- Declare function distinctAverages, which has nums as a parameter
- Declare uniqueAverages recording unique (distinct) averages
- Sort the nums array
- Initialize start at zero
- Initialize end as the length of sortedNums - 1
- While start is less than end:
  - Add the result of calling averageValues with arguments sortedNums[start] and sortedNums[end]
    to the uniqueAverages set
  - Increment start
  - Decrement end
- Return the size of uniqueAverages

- Time complexity: O(n log n)
- Space complexity: O(n)

- Note:
  - The performace could be improved by using a Counting Sort instead of .toSorted()
  - More info here: https://www.geeksforgeeks.org/counting-sort/
*/
