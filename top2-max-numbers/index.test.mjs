import { test, expect, describe } from "vitest";
import { getTop2MaxNumbers } from "./index.mjs";

describe("get top 2 max max tests", () => {
  test("getTop2MaxNumbers function is defined", () => {
    expect(typeof getTop2MaxNumbers).toEqual("function");
  });

  test("Returns the top two maximum numbers", () => {
    expect(getTop2MaxNumbers([10, 40, 20, 2, 9, 19])).toEqual([40, 20]);
  });

  test("Returns the top two maximum numbers when there are duplicates", () => {
    expect(getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19])).toEqual([40, 20]);
  });

  test("Returns the top two maximum numbers when there are negative numbers", () => {
    expect(getTop2MaxNumbers([-10, -40, -20, -2, -9, -19])).toEqual([-2, -9]);
  });

  // Uncomment when need to elevate the level of complexity
  // test("Returns the top two maximum numbers when all numbers are the same", () => {
  //   expect(getTop2MaxNumbers([5, 5, 5, 5, 5])).toEqual([5, 5]);
  // });
});
