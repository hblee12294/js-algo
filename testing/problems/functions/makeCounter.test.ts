import { expect, test } from "vitest";

import { makeCounter } from "./makeCounter";

test("makeCounter", () => {
  const counter = makeCounter();

  expect(counter()).toBe(1);
});

test("makeCounter with initial value", () => {
  const counter = makeCounter(5);

  expect(counter()).toBe(6);
});
