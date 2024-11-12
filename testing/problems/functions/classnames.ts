export type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined;
export type ClassDictionary = Record<string, any>;
export type ClassArray = Array<ClassValue>;

export function classnames(...args: Array<ClassValue>): string {
  const flattenedArgs = args.flat(Infinity as 10);
  const filteredArgs = flattenedArgs.filter(
    (arg) => !!arg && typeof arg !== "boolean"
  ) as (string | number | ClassDictionary)[];

  return filteredArgs.reduce((prev: string, current) => {
    if (typeof current === "object") {
      const cur = current as ClassDictionary;
      const keys = Object.keys(cur);
      let prevCopy = prev;

      for (const key of keys) {
        if (!!cur[key]) {
          prevCopy = prevCopy ? prevCopy + " " + key : key;
        }
      }

      return prevCopy;
    } else {
      return prev ? prev + " " + current : current.toString();
    }
  }, "");
}
