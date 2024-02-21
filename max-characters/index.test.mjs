import { test, expect, describe } from "vitest";
import { getMaxCharacters } from "./index.mjs";

describe("get max character tests", () => {
  test("getMaxCharacters function is defined", () => {
    expect(typeof getMaxCharacters).toEqual("function");
  });

  test("finds the most frequently used char", () => {
    expect(getMaxCharacters("a")).toEqual("a");
    expect(getMaxCharacters("abcdefghijklmnaaaaa")).toEqual("a");
  });

  test("works with numbers in the string", () => {
    expect(getMaxCharacters("ab1c1d1e1f1g1")).toEqual("1");
  });
});
