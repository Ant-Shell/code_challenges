// https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript

const isValidIP = (str) => {
  const ipList = str.split(".")

  if (ipList.length !== 4) {
    return false
  } else {
    for (let i = 0 ; i < ipList.length ; i++) {
    let octet = parseInt(ipList[i])
      if (isNaN(octet)) {
        return false
      } else if (ipList[i].charAt(0) === '0' &&  ipList[i].length > 1) {
        return false
      } else if (octet < 0 || octet > 255) {
        return false
      } else if (ipList[i].search(/[A-Za-z\s\n]/) > -1) {
        return false
      }
    }
  }
    return true
}