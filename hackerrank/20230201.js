'https://www.hackerrank.com/challenges/three-month-preparation-kit-grading/problem'

function gradingStudents(grades) {
  const results = grades.map(grade => {
     if (grade < 38) {
       return grade
     } else if (5 - (grade % 5) >= 3) {
       return grade
     } else if (5 - (grade % 5) < 3) {
       return 5 - (grade % 5) + grade
     }
   })
 return results
}