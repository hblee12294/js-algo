async function f() {
  return 1
}

f().then(console.log)


async function showAvatar() {
  let response = await fetch('/article/promise-chaining/user.json')
  let user = await response.json()

  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`)
  let githubUser = githubResponse.json()

  let img = document.createElement('img')
  img.src = githubUser.avatar_url
  img.className = 'promises-avartar-example'
  document.body.append(img)

  await new Promise((resolve, reject) => setTimeout(resolve, 3000))

  img.remove()

  return githubUser
}

class Waiter {
  async wait() {
    return await Promise.resolve(1)
  }
}

new Waiter()
  .wait()
  .then(console.log)

async function f() {
  let response = await fetch('http://xxxx')
}

f().catch(console.log)


let results = await Promise.all([
  fetch(url1),
  fetch(url2)
])