import { test, expect } from "vitest";

import { Spreadsheet } from "./spreadsheet";

test("Spreadsheet", () => {
  const sheet = new Spreadsheet();

  sheet.set("A", 1, 10);
  sheet.set("A", 2, 20);

  expect(sheet.get("A", 1)).equal(10);

  sheet.set("A", 1, 50);

  expect(sheet.get("A", 1)).equal(50);
});
