function checkPrime(num) {
  for (let i = 2; i < num; ++i) {
    if (num % i === 0) { return false}
  }

  return true
}

function checkPrime1(num) {
  for (let i = 2; i <= Math.sqrt(num); ++i) {
    if (num % i === 0) { return false }
  }
  return true
}

function checkPrime2(num) {
  if (num === 2 || num === 3) { return true }
  if (num % 2 === 0) { return false }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) { return false }
  }

  return true
}

console.log(checkPrime2(2))
console.log(checkPrime2(3))
console.log(checkPrime2(4))
console.log(checkPrime2(5))
console.log(checkPrime2(7))
console.log(checkPrime2(100))
console.log(checkPrime2(128))
console.log(checkPrime2(137))