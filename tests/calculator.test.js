import { it, describe, expect } from "vitest";
import { calculator } from "../src/calculator";

describe("calculator", () => {
  it("should return null if any input is not a number", () => {
    expect(calculator.add(3, undefined)).toBe(null);
  });

  it("should return the addition of two numbers", () => {
    expect(calculator.add(3, 7)).toBe(10);
  });

  it("should return the subtraction of two numbers", () => {
    expect(calculator.subtract(10, 7)).toBe(3);
  });

  it("should return the division of two numbers", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  it("should return the multiplication of two numbers", () => {
    expect(calculator.multiply(3, 3)).toBe(9);
  });
});
