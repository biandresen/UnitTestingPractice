import { it, describe, expect } from "vitest";
import { reverseString } from "../src/reverseString";

describe("reverseString", () => {
  it("should return null if the input is not a string", () => {
    expect(reverseString(undefined)).toBe(null);
  });

  it("should return the string in reverse", () => {
    expect(reverseString("Random")).toBe("modnaR");
  });

  it("should return the string in reverse even if it's one letter", () => {
    expect(reverseString("R")).toBe("R");
  });

  it("should return the string in reverse even if empty string", () => {
    expect(reverseString("")).toBe("");
  });
});
