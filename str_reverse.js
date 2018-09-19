function strReverse(str) {
  let newStr = ''

  for (let i = str.length - 1; i > -1; --i) {
    newStr += str[i]
  }

  return newStr
}

console.log(strReverse('abcdefg'))
console.log(strReverse('autobiography'))


function strReverse1(str) {
  let newStr = []

  for (let i = 0, j = str.length -1; i <= j; ++i, --j) {
    newStr[i] = str[j]
    newStr[j] = str[i]
  }

  return newStr.join('')
}

console.log(strReverse1('abcdefg'))
console.log(strReverse1('autobiography'))

function strReverse2(str) {
  if (str === '') {
    return ''
  }
  else {
    return strReverse2(str.slice(1)) + str[0]
  }
}

console.log(strReverse2('abcdefg'))
console.log(strReverse2('autobiography'))

function strReverse3(str) {
  return str.split('').reverse().join('')
}

console.log(strReverse3('abcdefg'))
console.log(strReverse3('autobiography'))

// function reverse() {
//   return this.split('').reverse().join('')
// }

// let f = new String()
// // String.prototype.reverse = reverse
// Object.settPrototypeOf(String).reverse = reverse

// console.log('abcdefg'.reverse())
// console.log('autobiography'.reverse())