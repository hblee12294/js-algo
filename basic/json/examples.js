let user = {
  name: 'john',
  age: 30,

  toString() {
    return `{name: ${ this.name }, age: ${ this.age }}`
  }
}

// console doesn't use tostring directly
console.log(user + ' tostring')

// let room = {
//   number: 23
// }

// let meetup = {
//   title: 'Conference',
//   participants: [{name: 'John'}, {name: 'Alice'}],
//   place: room
// }

// room.occupiedBy = meetup

// console.log(JSON.stringify(meetup, ['title', 'participants']))

// let room = {
//   number: 23
// }

// let meetup = {
//   title: 'Conference',
//   participants: [{name: 'John'}, {name: 'Alice'}],
//   place: room
// }

// room.occupiedBy = meetup
// console.log(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']))

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}, {name: 'Todd'}],
  place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

console.log( JSON.stringify(meetup, function replacer(key, value) {
  console.log(`${key}: ${value}`); // to see what replacer gets
  return (key === 'occupiedBy') ? undefined : value;
}));