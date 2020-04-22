function deepCopy(data) {
  let dataTmp = undefined

  if (data === null || !(typeof data === 'object')) {
    dataTmp = data
  } else {
    dataTmp = data.constructor.name === 'Array' ? [] : {}

    for (let key in data) {
      dataTmp[key] = deepCopy(data[key])
    }
  }

  return dataTmp
}
