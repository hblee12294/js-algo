function primeFactors(num) {
  let factors = []
  let i = 2

  while (num > 2) {
    if (num % i === 0) {
      factors.push(i)
      num = num / i
    }
    else {
      i++
    }
  }

  return factors
}

console.log(primeFactors(2))
console.log(primeFactors(3))
console.log(primeFactors(5))
console.log(primeFactors(125))
console.log(primeFactors(137))
console.log(primeFactors(286))
console.log(primeFactors(734))