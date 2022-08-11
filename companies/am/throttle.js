function throttle(f, interval) {
  let throttled;
  let savedArgs;

  return function wrapper(...args) {
    if (!throttled) {
      f.apply(this, args);

      setTimeout(() => {
        throttled = false;

        if (savedArgs) {
          wrapper.apply(this, savedArgs);
          savedArgs = undefined;
        }
      }, interval);

      throttled = true;
    } else {
      savedArgs = args;
    }
  };
}

// function f(a) {
//   console.log(a);
// }

// // f1000 passes calls to f at maximum once per 1000 ms
// let f1000 = throttle(f, 1000);

// f1000(1); // shows 1
// f1000(2); // (throttling, 1000ms not out yet)
// f1000(3); // (throttling, 1000ms not out yet)

// // when 1000 ms time out...
// // ...outputs 3, intermediate value 2 was ignored

const obj = {
  name: "Bily",
  sayHi(num) {
    console.log(`Hi ${this.name} ${num}`);
  },
};

obj.sayHi = throttle(obj.sayHi, 1000);

obj.sayHi(1);
obj.sayHi(2);
obj.sayHi(3);

setTimeout(() => {
  obj.sayHi(4);
}, 1050);
