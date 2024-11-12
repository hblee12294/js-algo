export function curry(func: Function): Function {
  return function curried(this: any, ...args: any[]) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }

    return (arg: any) =>
      arg === undefined
        ? curried.apply(this, args)
        : curried.apply(this, [...args, arg]);
  };
}
