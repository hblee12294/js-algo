let date = new Date()

console.log(date.getTime())

let date2 = new Date(1994, 0, 22)
console.log(date2)
console.log(date2.getFullYear())
console.log(date2.getMonth())
console.log(date2.getDate())
console.log(date2.getHours())
console.log(date2.getDay())

console.log(+date)

let ms = Date.parse('2012-01-26T13:51:50.417-07:00')
console.log(new Date(ms))