/*
  input: 
  endorsements = [{skill: 'javascript', user: 'user1'}, {skill: 'css', user: 'user2'}, {skill: 'html', user: 'user3'}, {skill: 'javascript', user: 'user2'}, {skill: 'css', user: 'user3'}, {skill: 'javascript', user: 'user3'}]
  output:
  [{skill: 'javascript', users:['user1', 'user2', 'user3'], count: 3}, {skill: 'css', users:['user2', 'user3'], count: 2},  {skill: 'html', users: ['user3'], count: 1}]
*/

let endorsements = [
  {skill: 'javascript', user: 'user1'},
  {skill: 'css', user: 'user2'},
  {skill: 'html', user: 'user3'},
  {skill: 'javascript', user: 'user2'},
  {skill: 'css', user: 'user3'},
  {skill: 'javascript', user: 'user3'},
  {skill: 'css', user: 'user4'},
  {skill: 'css', user: 'user5'},
]

function endorse(endorsements) {
  let skills = new Map()
  let result = []

  endorsements.forEach(item => {
    skills.has(item.skill) || skills.set(item.skill, [])
    skills.get(item.skill).push(item.user)
  })

  skills.forEach((value, key) => {
    result.push({
      skill: key,
      users: value,
      count: value.length
    })
  })

  result.sort((itemA, itemB) => itemB.count - itemA.count)

  return result
}

console.table(endorse(endorsements))