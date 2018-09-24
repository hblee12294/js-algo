let user = {
  name: 'john',
  hi() { console.log(this.name) },
  bye() { console.log('Bye') }
}

user.hi()

(user.name === 'john' ? user.hi : user.bye)()