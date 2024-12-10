interface Counter {
  get: () => number;
  increment: () => number;
  decrement: () => number;
  reset: () => number;
}

export function makeCounter(initialValue: number = 0): Counter {
  return (() => {
    let counter = initialValue;

    return {
      get: function () {
        return counter;
      },
      increment: function () {
        return ++counter;
      },
      decrement: function () {
        return --counter;
      },
      reset: function () {
        return (counter = initialValue);
      },
    };
  })();
}
