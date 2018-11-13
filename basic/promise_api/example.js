function loadCached(url) {
  let cache = loadCached.cache || (loadCached.cache = new Map())

  if (cache.has(url)) {
    return Promise.resolve(cache.get(url))
  }

  return fetch(url)
    .then(response => {
      return response.text()
    })
    .then(text => {
      cache.set(url, text)
      return text
    })
}

function testSelf() {

  testSelf.inner = function () {
    console.log(this)
  }

  testSelf.inner()
}

// Promise.all([
//   new Promise((resolve, reject) => setTimeout(() => reject(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(2), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))
// ])
// .then(console.log)
// .catch(console.log)

// let urls = [
//   'https://api.gihub.com/users/iliakan',
//   'https://api.gihub.com/users/remy',
//   'https://api.gihub.com/users/hblee12294'
// ]

// let requests = urls.map(url => fetch(url))

// Promise.all(requests)
//   .then(responses => responses.forEach(
//     response => console.log(`${ response.url }: ${ response.status }`)
//   ))


let names = ['iliakan', 'remy', 'jeresig']

let requests = names.map(name => fetch(`https://api.github.com/users/${ name }`))

Promise.all(requests)
  .then(responses => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`)
    }

    return responses
  })
  .then(responses => Promise.all(responses.map(r => r.json())))
  .then(users => users.forEach(user => console.log(user.name)))