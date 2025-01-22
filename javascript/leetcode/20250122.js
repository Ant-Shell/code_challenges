/*

https://leetcode.com/problems/reformat-date/description/

Reformat Date

Given a date string in the form Day Month Year, where:

Day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}.
Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}.
Year is in the range [1900, 2100].
Convert the date string to the format YYYY-MM-DD, where:

YYYY denotes the 4 digit year.
MM denotes the 2 digit month.
DD denotes the 2 digit day.
 

Example 1:

Input: date = "20th Oct 2052"
Output: "2052-10-20"

Example 2:

Input: date = "6th Jun 1933"
Output: "1933-06-06"

Example 3:

Input: date = "26th May 1960"
Output: "1960-05-26"
 

Constraints:
The given dates are guaranteed to be valid, so no error handling is necessary.

*/

const reformatDate = (date) => {
  const months = {
    "Jan": "1", 
    "Feb": "2", 
    "Mar": "3",
    "Apr": "4",
    "May": "5",
    "Jun": "6",
    "Jul": "7",
    "Aug": "8",
    "Sep": "9",
    "Oct": "10",
    "Nov": "11",
    "Dec": "12"
  }

  const dateList = date.split(" ")
  const day = stringFormatter(dateList[0].slice(0, -2))
  const month = stringFormatter(months[dateList[1]])
  const year = dateList[2]

  return `${year}-${month}-${day}`
}

const stringFormatter = (value) => {
  return value.length === 1 ? "0" + value : value
}

console.log(reformatDate("20th Oct 2052")) // "2052-10-20"
console.log(reformatDate("6th Jun 1933")) // "1933-06-06"
console.log(reformatDate("26th May 1960")) // "1960-05-26"

/* 
Pseudocode:
- Map the month to digit relationship
- Split the date into sections
- Isolate the day, month and year from the split sections
- Format the respective day, month and year as appropriate
- Return the interpolated date per the conversion requirements (YYYY-MM-DD)
*/

