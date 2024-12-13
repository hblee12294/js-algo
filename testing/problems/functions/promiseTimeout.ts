export function promiseTimeout<T>(
  promise: Promise<T>,
  duration: number
): Promise<T> {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => reject("Promise timeout"), duration);

    Promise.resolve(promise)
      .then(
        (value) => resolve(value),
        (error) => reject(error)
      )
      .finally(() => clearTimeout(timeoutId));
  });
}
