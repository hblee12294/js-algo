function missingNumber(arr) {
  let sum
  for (const n in arr) {
    sum += n
  }

  return (1 + 100) * 100 / 2 - sum
}

function missingNumber1(last) {
  let sum
  for (let n = 1; n <= last; ++n) {
    sum += n
  }

  return (1 + last) * n / 2 - sum
}