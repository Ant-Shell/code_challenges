'https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript'

const countSheeps = (arrayOfSheep) => {
  const presentSheep = arrayOfSheep.filter(sheep => sheep === true)
  return presentSheep.length
}