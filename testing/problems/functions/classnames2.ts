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

export function classnames2(...args: Array<ClassValue>): string {
  const flattenedArgs = args.flat(Infinity as 10);
  const executedArgs = flattenedArgs.map((item) =>
    typeof item === "function" ? item() : item
  );
  const filteredArgs = executedArgs.filter(
    (arg) => !!arg && typeof arg !== "boolean"
  ) as (string | number | ClassDictionary)[];

  const classSet = new Set<string>();

  filteredArgs.forEach((value) => {
    if (typeof value === "object") {
      const cur = value as ClassDictionary;
      const keys = Object.keys(cur);

      for (const key of keys) {
        if (!!cur[key]) {
          classSet.add(key);
        } else {
          classSet.delete(key);
        }
      }

      return;
    }

    classSet.add(value.toString());
  });

  return classSet.values().toArray().join(" ");
}
