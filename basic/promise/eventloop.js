// Case 1
new Promise(resolve => {
  console.log(1)
  resolve(3)
}).then(num => {
  console.log(num)
})

console.log(2)
