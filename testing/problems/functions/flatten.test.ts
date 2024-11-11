import { test, expect } from "vitest";

import { flatten } from "./flatten";

test("flatten", () => {
  expect(flatten([1, 2, 3])).toStrictEqual([1, 2, 3]);

  expect(flatten([1, [2, 3]])).toStrictEqual([1, 2, 3]);

  expect(
    flatten([
      [1, 2],
      [3, 4],
    ])
  ).toStrictEqual([1, 2, 3, 4]);

  expect(flatten([1, [2, [3, [4, [5]]]]])).toStrictEqual([1, 2, 3, 4, 5]);
});
