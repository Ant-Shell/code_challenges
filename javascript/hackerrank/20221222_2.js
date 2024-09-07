// www.hackerrank.com/challenges/three-month-preparation-kit-breaking-best-and-worst-records/problem

function breakingRecords(scores) {
  let currentMaxScore = null
  let currentMinScore = null
  let maxScoreCount = 0
  let minScoreCount = 0
  
  scores.forEach(score => {
      if (currentMaxScore === null && currentMinScore === null) {
          currentMaxScore = score
          currentMinScore = score
      } else if (score > currentMaxScore) {
          currentMaxScore = score
          maxScoreCount++
      } else if (score < currentMinScore) {
          currentMinScore = score
          minScoreCount++
      }
  })
  return [maxScoreCount, minScoreCount]
}