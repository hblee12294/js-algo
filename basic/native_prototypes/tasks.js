function f() {
  console.log('asfsdaf')
}

Function.prototype.defer = function(ms) {
  setTimeout(this, ms)
}