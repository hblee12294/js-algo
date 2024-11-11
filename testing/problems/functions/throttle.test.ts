import { test, expect, vi } from "vitest";

import { throttle } from "./throttle";

test("throttle", () => {
  vi.useFakeTimers();

  const callback = vi.fn();
  const throttled = throttle(callback, 1000);

  throttled();
  expect(callback).toHaveBeenCalledTimes(1);

  throttled();
  throttled();
  expect(callback).toHaveBeenCalledTimes(1); // should still be 1 due to throttling

  vi.advanceTimersByTime(1000);
  throttled();
  expect(callback).toHaveBeenCalledTimes(2);

  vi.useRealTimers();
});
