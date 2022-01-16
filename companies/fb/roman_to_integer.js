
function romanToInteger(roman) {
  const NUM = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let result = 0
  const digits = roman.split('')

  if (!digits) return null

  for (let i = 0; i < digits.length; ++i) {
    const crtNum = NUM[digits[i]]
    const nxtNum = NUM[digits[i+1]]

    result += crtNum < nxtNum ? (() => {
      ++i
      return nxtNum - crtNum
    })() : crtNum
  }

  return result
}

console.log(romanToInteger('IV'))
console.log(romanToInteger('V'))
console.log(romanToInteger('C'))
console.log(romanToInteger('VI'))