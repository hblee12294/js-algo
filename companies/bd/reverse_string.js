function reverse1(str) {
  return str.split('').reverse().join('')
}

function reverse2(str) {
  return str.split(' ').reverse().join(' ')
}

const input = 'you are an idiot'

console.log(reverse1(input))
console.log(reverse2(input))
