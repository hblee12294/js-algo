// 1 Filter anagram
let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares']

function aclean(arr) {
  const map = new Map()

  for (let word of arr) {
    const sortedWord = word.toLowerCase().split('').sort().join()
    map.set(sortedWord, word)
  }

  return Array.from(map.values())
}

console.log(aclean(arr))

