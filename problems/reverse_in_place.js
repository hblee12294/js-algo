function reverse(str) {
  let words = str.split(' ')
  return words.map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}

console.log(reverse('How would you reverse words in a sentence'))