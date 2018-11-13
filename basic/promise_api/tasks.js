
// 1
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'http://no-such-url'
]

let requests = urls.map(url => fetch(url).catch(error => error))

Promise.all(requests)
  .then(responses => {
    console.log(responses[0].status)
    console.log(responses[1].status)
    console.log(responses[2])
  })

  // 2
  let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
  ]

  Promise.all(urls.map(url => fetch(url).catch(error => error)))
    .then(responses => Promise.all(
      responses.map(r => r instanceof Error ? 
        r : r.json().catch(error => error)
      )
    ))
    .then(users => {
      for (let user of users) {
        if (user.name) {
          console.log(user.name)
        }
      }
    })
  