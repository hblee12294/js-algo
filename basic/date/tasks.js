// 1
console.log(new Date(2012, 1, 20, 3, 12))

// 2
let date = new Date(2012, 0 ,3)
console.log(date)
console.log(date.getDay())

const WEEK_NAME = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']
function getWeekDay(date) {
  return WEEK_NAME[date.getDay()]
}

console.log(getWeekDay(date))

// Sun ----- Sat
// 0 1 2 3 4 5 6
// 6 1 2 2 3 4 5
function getEuDay(date) {
  let usDay = date.getDay()
  return usDay === 0 ? 7 : usDay
}

console.log(getEuDay(date))

// 3
let date2 = new Date(2015, 0, 2)

function getDateAgo(date, days) {
  let newDate = new Date(date)
  newDate.setDate(date.getDate() - days)
  return `${ newDate.getDate() } ${ newDate.getMonth() } ${ newDate.getFullYear() }`
}

console.log(getDateAgo(date2, 1))

// 4
function getLastDayOfMonth(year, month) {
  let nextMonth = new Date(year, month + 1)
  nextMonth.setDate(0)
  return nextMonth.getDate()
}

console.log(getLastDayOfMonth(2012, 1))

// 5
function getSecondsToday() {
  const today = new Date()
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate())

  return Math.round((Date.now() - todayStart) / 1000)
}

console.log(getSecondsToday())

// 6
function getSecondsToTomorrow() {
  const today = new Date()
  const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)

  return Math.round((tomorrow - Date.now()) / 1000)
}

console.log(getSecondsToTomorrow())

// 7
function formatDate(date) {
  let diff = Date.now() - date

  if (diff < 1000) return 'right now'
  if (diff < 1000 * 60) return `${ diff / 1000 } sec. ago`
  if (diff < 1000 * 60 * 60) return `${ diff / 1000 / 60 } min. ago`
  
  return `${ date.getDate() }.${ date.getMonth() }.${ date.getFullYear() } ${ date.getHours() }:${ date.getMinutes() }`
}

console.log(formatDate(new Date(new Date - 1)))
console.log(formatDate(new Date(new Date - 30 * 1000)))
console.log(formatDate(new Date(new Date(new Date - 5 * 60 * 1000))))
console.log(formatDate(new Date(new Date - 86400 * 1000)))