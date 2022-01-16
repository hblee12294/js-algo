const str = '1.234 8.233 9.535 0.232 8.034 27.323'

function getFloat(str) {
  let nums = str.split(' ')
  let newNums = nums.map(item => {
    return parseFloat(item)
  })
  newNums.sort()
  
  return newNums
}

process.std

console.log(getFloat(str))