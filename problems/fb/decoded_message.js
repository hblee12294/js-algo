/*
Given a grid of characters output a decoded message.
The message for the following would be IROCKA.
(diagonally down right and diagonally up right if you can't go further .. you continue doing this)

I B C A L K A
D R F C A E A
G H O E L A D
*/

let message = [
  ['I', 'B', 'C', 'A', 'L', 'K', 'A'],
  ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
  ['G', 'H', 'O', 'E', 'L', 'A', 'D']
]

function decode(arr) {
  let result = ''
  let height = arr.length
  let isDownside = true
  let x = y = 0

  while (arr[x][y]) {
    console.log(arr[x][y])
    result += arr[x][y]

    y++
    if (isDownside) {
      if (x + 1 === height) {
        x--
        isDownside = !isDownside
      } else {
        x++
      }
    } else {
      if (x - 1 === -1) {
        x++
        isDownside = !isDownside
      } else {
        x--
      }
    }
  }

  return result
}

console.log(decode(message))