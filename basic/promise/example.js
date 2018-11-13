// const myPromise = new Promise((resolve, reject)=> {
//   setTimeout(function () {
//     resolve('Success')
//   }, 2000)
// })

// myPromise.then((success) => {
//   console.log('Yeah + ' + success)
// })

(function test() {
  setTimeout(function() {console.log(4)}, 0);
  new Promise(function executor(resolve) {
      console.log(1);
      for( var i=0 ; i<10000 ; i++ ) {
          i == 9999 && resolve();
      }
      console.log(2);
  }).then(function() {
      console.log(5);
  });
  console.log(3);
})()