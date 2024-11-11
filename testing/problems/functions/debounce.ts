export function debounce(func: Function, wait: number): Function {
  let lastArgs: any[] | undefined = undefined;

  return function (this: Function, ...args: any[]) {
    lastArgs = args;

    setTimeout(() => {
      if (Array.isArray(lastArgs)) {
        func.apply(this, lastArgs);
        lastArgs = undefined;
      }
    }, wait);
  };
}
