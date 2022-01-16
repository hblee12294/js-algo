const list = [ {id:1}, {id:2}, {id:3}, {id:4}, {id:5} ]

function processOne(item, cb) {
  setTimeout(() => {
    console.log('process' + item.id)
    cb()
  }, Math.random() * 1000)
}

// Async
// async function processSet(items) {
//   try {
//     for (let item of items) {
//       await new Promise(function (resolve, reject) {
//         processOne(item, resolve)
//       })
//     }
//   } catch(error) {
//     console.log(error)
//   }

// }

// Callback
// function processSet(items) {
//   let index = 0
  
//   function handle() {
//     if (index === items.length ) return
//     processOne(items[index], handle)
//     index++
//   }
  
//   handle(items[index])
// }

// Promise
function processSet(items) {
  const promises = items.map(item => {
    return () => new Promise(resolve => processOne(item, resolve))
  })

  promises.reduce((chain, current) => {
    return chain.then(current)
  }, Promise.resolve())
}

processSet(list)

