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

test("makeCounter with multi calls", () => {
  const counter = makeCounter(0);

  expect(counter()).toBe(1);
  expect(counter()).toBe(2);
  expect(counter()).toBe(3);
});
