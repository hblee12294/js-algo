function checkPalindrom(str) {
  return str === str.split('').reverse().join('')
}

console.log(checkPalindrom('madam'))
console.log(checkPalindrom('madau'))