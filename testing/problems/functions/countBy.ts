export function countBy<T>(
  array: Array<T>,
  iteratee: (value: T) => number | string
): Record<string, number> {
  const result = {} as Record<string, number>;

  for (const item of array) {
    const itemValue = iteratee(item);

    result[itemValue] = (result[itemValue] || 0) + 1;
  }

  return result;
}
