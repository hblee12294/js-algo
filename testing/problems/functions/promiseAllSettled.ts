interface PromiseFulfilledResult<T> {
  status: "fulfilled";
  value: T;
}

interface PromiseRejectedResult {
  status: "rejected";
  reason: any;
}

export function promiseAllSettled<T>(
  iterable: Array<T>
): Promise<Array<PromiseFulfilledResult<T> | PromiseRejectedResult>> {
  return new Promise((resolve) => {
    const results = new Array<
      PromiseFulfilledResult<T> | PromiseRejectedResult
    >(iterable.length);
    let counter = iterable.length;

    function checkAndResolveResults() {
      if (counter === 0) {
        resolve(results);

        return;
      }
    }

    checkAndResolveResults();

    iterable.forEach((item, index) => {
      Promise.resolve(item).then(
        (result) => {
          results[index] = {
            status: "fulfilled",
            value: result,
          };

          counter--;
          checkAndResolveResults();
        },
        (reason) => {
          results[index] = {
            status: "rejected",
            reason: reason,
          };

          counter--;
          checkAndResolveResults();
        }
      );
    });
  });
}
