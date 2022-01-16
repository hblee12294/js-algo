function add(a, b) {
  let result = ''
  let carry = 0

  a = a.toString().split('')
  b = b.toString().split('')

  while (a.length || b.length || carry) {
    carry += +a.pop() + +b.pop()

    result += carry % 10

    carry = carry > 9
  }

  return result
}

console.log(add('11111111111111111', '22222222222222222'))
console.log(add('2', '3'))
