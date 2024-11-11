type ThrottleFunction<T extends any[]> = (...args: T) => any;

export function throttle<T extends any[]>(
  func: ThrottleFunction<T>,
  wait: number
): ThrottleFunction<T> {
  let isThrottling = false;

  return function (this: any, ...args: T) {
    if (isThrottling) return;

    isThrottling = true;
    func.apply(this, args);

    setTimeout(() => {
      isThrottling = false;
    }, wait);
  };
}
