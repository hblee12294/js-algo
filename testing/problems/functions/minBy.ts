export function minBy<T>(array: Array<T>, iteratee: (value: T) => any) {
  let min = Number.POSITIVE_INFINITY;
  let minItem = null;

  for (const item of array) {
    const itemValue = iteratee(item);

    if (itemValue < min) {
      min = itemValue;
      minItem = item;
    }
  }

  return minItem;
}
