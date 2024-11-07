import { test, expect } from "vitest";

import { minBy } from "./minBy";

test("minBy", () => {
  expect(minBy([2, 3, 1, 4], (num) => num)).toBe(1);
});

test("minBy nested object", () => {
  expect(minBy([{ n: 1 }, { n: 2 }], (o) => o.n)).toStrictEqual({ n: 1 });
});

test("minBy empty", () => {
  expect(minBy([], (value) => value)).toBe(null);
});
