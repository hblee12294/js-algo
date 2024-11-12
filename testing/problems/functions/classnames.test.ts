import { describe, test, expect } from "vitest";

import { classnames } from "./classnames";

describe("classnames", () => {
  test("empty values", () => {
    expect(classnames([])).toEqual("");
  });

  test("single value", () => {
    expect(classnames("foo")).toEqual("foo");
  });

  test("two values", () => {
    expect(classnames("foo", "bar")).toEqual("foo bar");
  });

  test("array values", () => {
    expect(classnames(["foo", "bar", "baz"])).toEqual("foo bar baz");
  });

  test("object values", () => {
    expect(classnames({ "foo-bar": true })).toEqual("foo-bar");
    expect(classnames({ "foo-bar": false })).toEqual("");
    expect(classnames({ foo: true }, { bar: true })).toEqual("foo bar");
    expect(classnames({ foo: true, bar: false, qux: true })).toEqual("foo qux");
  });

  test("mixed values", () => {
    expect(
      classnames(
        "foo",
        {
          bar: true,
          duck: false,
        },
        "baz",
        { quux: true }
      )
    ).toEqual("foo bar baz quux");
    expect(
      classnames("boo", true && "loo", false && "booz", {
        foo: true,
        bar: false,
        baz: 1,
      })
    ).toEqual("boo loo foo baz");
  });

  test("ignores falsey values", () => {
    expect(
      classnames(null, false, "bar", undefined, 0, 1, { baz: null }, "")
    ).toEqual("bar 1");
  });

  test("recursively flattens arrays", () => {
    expect(classnames("a", ["b", { c: true, d: false }])).toEqual("a b c");
    expect(classnames("a", ["b", ["c", ["d"]]])).toEqual("a b c d");
  });
});
