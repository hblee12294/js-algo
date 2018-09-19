function fibonacci(n) {
  let fibo = [0, 1]

  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2]
  }

  return fibo[n]
}

function fibonacci1(n) {
  if (n <= 1) {
    return n
  }
  else {
    return fibonacci1(n-1) + fibonacci1(n-2)
  }
}

console.log(fibonacci1(1))
console.log(fibonacci1(2))
console.log(fibonacci1(5))
console.log(fibonacci1(7))
console.log(fibonacci1(10))
console.log(fibonacci1(12))