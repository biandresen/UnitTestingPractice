import { it, expect, describe } from "vitest";
import { analyzeArray } from "../src/analyzeArray";

describe("analyzeArray", () => {
  it("should return the average sum of the array", () => {
    const arrayInfo = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(arrayInfo.average).toBe(4);
  });

  it("should return the min of an array", () => {
    const arrayInfo = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(arrayInfo.min).toBe(1);
  });

  it("should return the max of an array", () => {
    const arrayInfo = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(arrayInfo.max).toBe(8);
  });

  it("should return the length of an array", () => {
    const arrayInfo = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(arrayInfo.length).toBe(6);
  });
});
