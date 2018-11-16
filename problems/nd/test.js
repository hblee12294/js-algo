
// 1
const str = 'abcdefghik'
const str2 = '(ABW)23wjeiorej'

function getCode(str) {
  let result = ''
  const dict = new Map(Object.entries({
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9
  }))

  for (let letter of str) {
    if (dict.has(letter)) {
      result += dict.get(letter)
    } else if (parseInt(letter) >= 0) {
      result += letter
    }
  }

  return result ? result : 'NONE'
}

// console.log(getCode(str))
// console.log(getCode(str2))

// 2
const num1 = '3 3 9 1 6 5 8 1 5 3'
const num2 = '9 2 9 9 1 8 8 8 2 1 1'

function findWinner(str) {
  let result = 0
  const nums = str.split(' ')

  let dict = new Map()

  for (let num of nums) {
    if (!dict.has(num)) {
      dict.set(num, true)
    } else {
      dict.set(num, false)
    }
  }

  let newNums = []
  for (let item of dict.entries()) {
    if (item[1]) {
      newNums.push(item[0])
    }
  }

  newNums.sort()
  
  if (newNums.length) {
    result = nums.indexOf(newNums[0]) + 1
  }

  return result
}

console.log(findWinner(num1))
console.log(findWinner(num2))
