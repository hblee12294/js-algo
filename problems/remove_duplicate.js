function removeDuplicate(arr) {
  const map = {}
  const result = []

  for (const item of arr) {
    if (!map[item]) {
      map[item] = true
      result.push(item)
    }
  }
  return result
}

console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1]))
console.log(removeDuplicate(['r', '4', '4', 'y', 's', 'r', 'r', 'r']))
console.log(removeDuplicate(['1', 1, 2, 3, 4, '4']))

function removeDuplicate1(arr) {
  const map = {}
  const result = []

  for (let item of arr) {
    if (typeof item === 'number') {
      item = item + '$'
    }
    if (!map[item]) {
      map[item] = true
      item.indexOf('$') !== -1 ? result.push(parseFloat(item)) : result.push(item)
    }
  }

  return result
}

console.log(typeof 3)
console.log(removeDuplicate1([1,3,3,3,1,5,6,7,8,1]))
console.log(removeDuplicate1(['r', '4', '4', 'y', 's', 'r', 'r', 'r']))
console.log(removeDuplicate1(['1', 1, 2, 3, 4, '4']))