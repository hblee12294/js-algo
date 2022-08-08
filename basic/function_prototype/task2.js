function f(a, b) {
  console.log(a + b);
}

Function.prototype.defer = function (ms) {
  const f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};

/* Test */

f.defer(1000)(1, 2); // shows 3 after 1 second

// let user = {
//   name: "John",
//   sayHi() {
//     console.log(this.name);
//   },
// };

// user.sayHi = user.sayHi.defer(1000);

// user.sayHi();
