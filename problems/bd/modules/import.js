const revealingModule = (function () {
  let privateValue = 'hongbin'

  function setName(name) {
    privateValue = name
    return true
  }

  function getName() {
    return privateValue
  }

  return {
    setName,
    getName,
  }
})()

console.log(revealingModule.getName())
console.log(revealingModule.setName('joe'))
console.log(revealingModule.getName())
