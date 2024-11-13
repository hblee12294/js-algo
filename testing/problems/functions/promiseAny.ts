export function promiseAny<T>(iterable: Array<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    const errors = new Array(iterable.length);
    let rejectedCounter = 0;

    if (iterable.length === 0) {
      reject(new AggregateError([]));

      return;
    }

    iterable.forEach((item, index) => {
      Promise.resolve(item).then(
        (result) => {
          resolve(result);
        },
        (reason) => {
          errors[index] = reason;

          rejectedCounter++;

          if (rejectedCounter === iterable.length) {
            reject(new AggregateError(errors));
          }
        }
      );
    });
  });
}
