const num1 = '3 3 9 1 6 5 8 1 5 3'

function findNum(str) {
  const nums = str.split(' ')

  const dict = new Map()
  
  for (const num of nums) {
    if (!dict.has(num)) {
      dict.set(num, 0)
    } else {
      dict.set(num, dict.get(num) + 1)
    }
  }

  let max = 0
  let maxLetter = ''
  for (const item of dict.entries()) {
    if (item[1] > max) {
      max = item[1]
      maxLetter = item[0]
    }
  }

  return { max, maxLetter }
}

console.log(findNum(num1))