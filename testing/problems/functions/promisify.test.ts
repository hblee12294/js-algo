import { test, expect } from "vitest";

import { promisify } from "./promisify";

test("promisify", async () => {
  const callbackFn = (
    arg: number,
    callback: (err: any, result: number) => void
  ) => {
    callback(null, arg * 2); // Simulates a successful callback
  };

  const promisedFn = promisify(callbackFn);
  const result = await promisedFn(5);
  expect(result).toBe(10);
});
