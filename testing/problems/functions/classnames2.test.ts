import { describe, test, expect } from "vitest";

import { classnames2 } from "./classnames2";

describe("classnames2", () => {
  test("empty values", () => {
    expect(classnames2([])).toEqual("");
  });

  test("single value", () => {
    expect(classnames2("foo")).toEqual("foo");
  });

  test("two values", () => {
    expect(classnames2("foo", "bar")).toEqual("foo bar");
  });

  test("array values", () => {
    expect(classnames2(["foo", "bar", "baz"])).toEqual("foo bar baz");
  });

  test("object values", () => {
    expect(classnames2({ "foo-bar": true })).toEqual("foo-bar");
    expect(classnames2({ "foo-bar": false })).toEqual("");
    expect(classnames2({ foo: true }, { bar: true })).toEqual("foo bar");
    expect(classnames2({ foo: true, bar: false, qux: true })).toEqual(
      "foo qux"
    );
  });

  test("mixed values", () => {
    expect(
      classnames2(
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
      classnames2("boo", true && "loo", false && "booz", {
        foo: true,
        bar: false,
        baz: 1,
      })
    ).toEqual("boo loo foo baz");
  });

  test("ignores falsey values", () => {
    expect(
      classnames2(null, false, "bar", undefined, 0, 1, { baz: null }, "")
    ).toEqual("bar 1");
  });

  test("recursively flattens arrays", () => {
    expect(classnames2("a", ["b", { c: true, d: false }])).toEqual("a b c");
    expect(classnames2("a", ["b", ["c", ["d"]]])).toEqual("a b c d");
  });

  describe("duplicate values", () => {
    test("isolated", () => {
      expect(classnames2("foo", "foo")).toEqual("foo");
    });

    test("composite", () => {
      expect(classnames2("foo", "bar", "foo")).toEqual("foo bar");
      expect(classnames2("foo", { foo: true }, "bar")).toEqual("foo bar");
      expect(classnames2({ foo: true }, { bar: true }, { foo: true })).toEqual(
        "foo bar"
      );
      expect(classnames2(1, "1")).toEqual("1");
      expect(classnames2("foo", 1, "1")).toEqual("foo 1");
    });

    test("nested", () => {
      expect(classnames2("foo", ["foo"])).toEqual("foo");
      expect(classnames2("foo", [{ foo: true }])).toEqual("foo");
      expect(classnames2([{ foo: true }, { foo: true }])).toEqual("foo");
      expect(classnames2([1], "1")).toEqual("1");
    });
  });

  describe("function values", () => {
    test("single", () => {
      expect(classnames2(() => "foo")).toEqual("foo");
    });

    test("composite", () => {
      expect(classnames2(() => "foo", "bar", "foo")).toEqual("foo bar");
      expect(classnames2(() => "foo", { foo: true }, "bar")).toEqual("foo bar");
      expect(classnames2(() => 1, "1")).toEqual("1");
      expect(classnames2("foo", 1, () => "1")).toEqual("foo 1");
    });

    test("nested", () => {
      expect(classnames2("foo", [() => "foo"])).toEqual("foo");
      expect(classnames2("foo", [{ foo: true }, () => "bar"])).toEqual(
        "foo bar"
      );
    });
  });

  describe("turning off values", () => {
    test("single", () => {
      expect(classnames2("foo", { foo: false })).toEqual("");
    });

    test("on before off", () => {
      expect(classnames2(() => "foo", "bar", { foo: false })).toEqual("bar");
      expect(classnames2(() => "foo", { foo: true }, "bar")).toEqual("foo bar");
      expect(classnames2(() => 1, "1", { 1: false })).toEqual("");
      expect(classnames2("foo", 1, () => "1")).toEqual("foo 1");
    });

    test("off before on", () => {
      expect(classnames2(() => "foo", "bar", { foo: false }, "foo")).toEqual(
        "bar foo"
      );
      expect(
        classnames2(() => "foo", { foo: false }, { foo: true }, "bar")
      ).toEqual("foo bar");
      expect(classnames2(() => 1, "1", { 1: false }, 1)).toEqual("1");
    });

    describe("nested", () => {
      test("turn off in nested", () => {
        expect(classnames2("foo", [{ foo: false }])).toEqual("");
        expect(classnames2("foo", [() => "foo", { foo: false }])).toEqual("");
      });

      test("turn on in nested", () => {
        expect(classnames2("foo", [{ foo: false }, "foo"])).toEqual("foo");
        expect(
          classnames2("foo", [{ foo: false }, "foo", { foo: false }])
        ).toEqual("");
      });
    });
  });
});
