function nonRepearChar(str) {
  const newStr = str.toLowerCase()
  const dict = {}

  for (let cha of newStr) {
    if (!dict[cha] && dict[cha] !== 0) { 
      dict[cha] = 0
    }
    else {
      dict[cha]++
    }
  }

  for (let cha of newStr) {
    if (dict[cha] === 0) { return cha }
  }

  return '-'
}

console.log(nonRepearChar('the quick brown fox jumps then quickly blow air'))
console.log(nonRepearChar('How would you reverse words in a sentence'))