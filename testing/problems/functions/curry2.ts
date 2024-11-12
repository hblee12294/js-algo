export function curry2(func: Function): Function {
  return function curried(this: any, ...args: any[]) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }

    return (...args2: any[]) => curried.apply(this, args.concat(args2));
  };
}
