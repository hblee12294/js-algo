const list = [ {id:1}, {id:2}, {id:3}, {id:4}, {id:5} ]

function processOne(item, cb) {
  setTimeout(() => {
    console.log('process' + item.id)
    cb()
  }, Math.random() * 1000)
}

async function processSet(items) {
  try {
    for (let item of items) {
      await new Promise(function (resolve, reject) {
        processOne(item, resolve)
      })
    }
  } catch(error) {
    console.log(error)
  }

}

processSet(list)

