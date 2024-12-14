export function promiseResolve(value: any): Promise<any> {
  if (value instanceof Promise) {
    return value;
  }

  return new Promise((resolve, reject) => {
    if (value.then) {
      value.then(resolve, reject);
    } else {
      resolve(value);
    }
  });
}
