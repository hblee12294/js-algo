/*
var Foo = function(a) {
  function bar() {
    return a;
  }
  this.baz = function() {
    return a;
  }
}

Foo.prototype = {
  biz: function(a) {
    return a;
  }
}
// follow up
Foo.prototype = {
  biz: function() {
    return this.baz();
  }
}

foo = new Foo(7)

console.log(foo.bar())
console.log(foo.baz())
console.log(foo.biz())
*/

/*
function fib(n) {
  let nums = [0, 1]

  for (let i = 2; i <= n; ++i) {
    nums[i] = nums[i-1] + nums[i-2]
  }

  return nums[n]
}

function fib2(n) {
  if (n < 2) return n

  return fib2(n-1) + fib2(n-2)
}

console.log(fib(12))
console.log(fib2(12))
*/