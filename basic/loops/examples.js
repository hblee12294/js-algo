outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + ' ' + j)

    let endPoint = { x: 1, y: 1 }
    if (i === endPoint.x && j === endPoint.y) {
      break outer
    }
  }
}

console.log('Done1')

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + ' ' + j)

    let endPoint = { x: 1, y: 1 }
    if (i === endPoint.x && j === endPoint.y) {
      break
    }
  }
}

console.log('Done2')