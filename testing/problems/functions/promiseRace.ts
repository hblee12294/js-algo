export function promiseRace<T extends readonly unknown[] | []>(
  iterable: T
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    iterable.forEach((item) => Promise.resolve(item).then(resolve, reject));
  });
}
