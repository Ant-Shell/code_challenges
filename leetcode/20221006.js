// https://leetcode.com/problems/richest-customer-wealth/

const maximumWealth = (accounts) => {
  let accountsTotalList = []
  accounts.forEach(account => {
    let acc = 0
    account.forEach(amount => {
      acc += amount
    })  
    accountsTotalList.push(acc)
  })
  const sortedList = accountsTotalList.sort((a,b) => {
    return b - a
  })
  return sortedList[0]
};