export function promiseMerge(
  p1: Promise<unknown>,
  p2: Promise<unknown>
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    Promise.all([p1, p2]).then(
      ([v1, v2]) => {
        const type1 = typeof v1;
        const type2 = typeof v2;

        if (type1 !== type2) {
          reject("Unsupported data types");
        }

        if (type1 === "number") {
          resolve((v1 as number) + (v2 as number));
        }

        if (type1 === "string") {
          resolve((v1 as string) + (v2 as string));
        }

        if (Array.isArray(v1)) {
          resolve([...(v1 as unknown[]), ...(v2 as unknown[])]);
        }

        if (type1 === "object") {
          const isNull = v1 === null;
          const isPlainObject =
            !isNull && Object.getPrototypeOf(v1) === Object.prototype;

          if (isPlainObject) {
            resolve({
              ...(v1 as Record<string, unknown>),
              ...(v2 as Record<string, unknown>),
            });
          }
        }

        reject("Unsupported data types");
      },
      (error) => reject(error)
    );
  });
}
