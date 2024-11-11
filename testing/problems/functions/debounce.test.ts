import { test, expect, vi } from "vitest";

import { debounce } from "./debounce";

test("debounce", () => {
  vi.useFakeTimers();

  const callback = vi.fn();
  const debounced = debounce(callback, 1000);

  debounced();
  expect(callback).toHaveBeenCalledTimes(0);

  debounced();
  expect(callback).toHaveBeenCalledTimes(0);

  vi.advanceTimersByTime(1000);
  debounced();
  expect(callback).toHaveBeenCalledTimes(1);

  vi.useRealTimers();
});
