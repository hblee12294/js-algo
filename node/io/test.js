process.stdin.resume();
process.stdin.setEncoding('ascii')

let input_stdin = ''
let chunk = ''
let input_currentline = 0

process.stdin.on('data', function (data) {
  input_stdin += data
})

process.stdin.on('end', function () {
  chunk = input_stdin.split('\n')
  main()
})

function readLine () {
  return chunk[input_currentline++]
}

function solveFirst(a, b) {
  return a + b
}

function main() {
  let a = parseInt(readLine())
  let b = parseInt(readLine())

  let res = solveFirst(a, b)
  console.log(res)
}

main()