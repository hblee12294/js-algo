let user = {
  firstName: 'John',
  sayHi() {
    console.log('Hi, ' + this.firstName)
  }
}

setTimeout(user.sayHi, 500)
// Notice the difference, wrapped in a function
setTimeout(() => user.sayHi(), 1000)

for (const key in user) {
  if (typeof user[key] === 'funciton') {
    user[key] = user[key].bind(user)
  }
}

function f() {
  console.log(this.name)
}

f = f.bind({ name: 'John' }).bind({ name: 'Peter' })
f()