// test case
function f(data, scb, ecb) {
  let success = false
  // let success = true

  if (success) {
    scb(data)
  } else {
    ecb(data)
  }
}

function retry(n, data, scb, ecb) {
  let nscb = function () {
    n = 0
    scb()
  }

  f(data, nscb, ecb)

  return n === 0 ? null : retry(n - 1, data, scb, ecb)
}

/*
  If sucess, there will be only 1 successs (the only execution)
  If fail, there will be 5 fail (the first execution + four extra executions)
*/
retry(4, 2, () => console.log('success'), () => console.log('fail'))
