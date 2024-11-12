type ReturnValue<T> = { -readonly [P in keyof T]: Awaited<T[P]> };

export function promiseAll<T extends readonly unknown[] | []>(
  iterable: T
): Promise<ReturnValue<T>> {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length) as ReturnValue<T>;
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(results);

      return;
    }

    iterable.forEach((item, index) => {
      Promise.resolve(item).then(
        (result) => {
          results[index] = result;
          unresolved--;

          if (unresolved === 0) {
            resolve(results);
          }
        },
        (reason) => reject(reason)
      );
    });
  });
}
