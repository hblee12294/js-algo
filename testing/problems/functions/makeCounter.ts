export function makeCounter(initialValue = 0) {
  let counter = initialValue;

  return function () {
    return ++counter;
  };
}
