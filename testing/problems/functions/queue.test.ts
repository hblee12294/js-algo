import { test, expect } from "vitest";

import { Queue } from "./queue";

test("Queue", () => {
  const queue = new Queue();

  expect(queue.isEmpty()).toBe(true);

  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.length()).toBe(2);

  queue.enqueue(3);
  expect(queue.front()).toBe(1);

  expect(queue.back()).toBe(3);

  expect(queue.dequeue()).toBe(1);

  expect(queue.isEmpty()).toBe(false);
});
