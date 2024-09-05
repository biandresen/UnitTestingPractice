import { it, describe, expect } from "vitest";
import { capitalize } from "../src/capitalize";

describe("capitalize", () => {
  it("should return error message if input isn't a string", () => {
    expect(capitalize(10)).toBe("invalid input");
  });
  it("should return the string with the first letter capitalized if all letters are lower case", () => {
    expect(capitalize("random")).toBe("Random");
  });

  it("should return the string with the first letter capitalized if all letters are upper case", () => {
    expect(capitalize("RANDOM")).toBe("RANDOM");
  });

  it("should return the string with the first letter capitalized if only first letter is lower case", () => {
    expect(capitalize("rANDOM")).toBe("RANDOM");
  });
});
