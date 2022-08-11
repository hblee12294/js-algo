function debounce(f, cooldown) {
  let timeoutID;

  return function (...args) {
    clearTimeout(timeoutID);

    timeoutID = setTimeout(() => {
      f.apply(this, args);
    }, cooldown);
  };
}

let f = debounce(console.log, 1000);

f("a");

setTimeout(() => f("b"), 200);
setTimeout(() => f("c", "d"), 500);
