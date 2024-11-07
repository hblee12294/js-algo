import { test, expect } from "vitest";

import { countBy } from "./countBy";

test("countBy", () => {
  expect(countBy([6.1, 4.2, 6.3], Math.floor)).toStrictEqual({
    "4": 1,
    "6": 2,
  });
});

test("countBy object", () => {
  expect(countBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n)).toStrictEqual({
    "3": 2,
    "5": 1,
  });
});

test("countBy empty", () => {
  expect(countBy([], (o) => o)).toStrictEqual({});
});

test("countBy undefined", () => {
  expect(
    countBy([{ n: 1 }, { n: 2 }], (o) => (o as any as { m: number }).m)
  ).toStrictEqual({ undefined: 2 });
});
