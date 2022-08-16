import { RangeList } from "../src";

test("official example", () => {
  const rl = new RangeList();

  rl.add([1, 5]);
  expect(rl.print()).toBe("[1, 5)");

  rl.add([10, 20]);
  expect(rl.print()).toBe("[1, 5) [10, 20)");

  rl.add([20, 20]);
  expect(rl.print()).toBe("[1, 5) [10, 20)");

  rl.add([20, 21]);
  expect(rl.print()).toBe("[1, 5) [10, 21)");

  rl.add([2, 4]);
  expect(rl.print()).toBe("[1, 5) [10, 21)");

  rl.add([3, 8]);
  expect(rl.print()).toBe("[1, 8) [10, 21)");

  rl.remove([10, 10]);
  expect(rl.print()).toBe("[1, 8) [10, 21)");

  rl.remove([10, 11]);
  expect(rl.print()).toBe("[1, 8) [11, 21)");

  rl.remove([15, 17]);
  expect(rl.print()).toBe("[1, 8) [11, 15) [17, 21)");

  rl.remove([3, 19]);
  expect(rl.print()).toBe("[1, 3) [19, 21)");
});

test("negative range", () => {
  const rl = new RangeList();

  rl.add([-1, 5]);
  expect(rl.print()).toBe("[-1, 5)");

  rl.add([10, 20]);
  expect(rl.print()).toBe("[-1, 5) [10, 20)");

  rl.remove([0, 19]);
  expect(rl.print()).toBe("[-1, 0) [19, 20)");

  rl.add([-20, -1]);
  expect(rl.print()).toBe("[-20, 0) [19, 20)");

  rl.remove([-10, -7]);
  expect(rl.print()).toBe("[-20, -10) [-7, 0) [19, 20)");

  rl.remove([-100, 100]);
  expect(rl.print()).toBe("");
});

test("bad inputs", () => {
  const rl = new RangeList();

  rl.add([5, 1]);
  expect(rl.print()).toBe("[1, 5)");

  rl.remove([3, 2]);
  expect(rl.print()).toBe("[1, 2) [3, 5)");

  expect(() => rl.add([5])).toThrow();

  expect(() => rl.add(["1", "5"])).toThrow();
});
