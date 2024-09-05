import { it, describe, expect } from "vitest";
import { caesarCipher } from "../src/caesarCipher";

describe("caesarCipher", () => {
  it("should output letters of a string shifted 1 to the right for a shift of 1", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
  });

  it("should output letters of a string shifted 2 to the right for a shift of 2", () => {
    expect(caesarCipher("abc", 2)).toBe("cde");
  });

  it("should output letters of a string shifted 3 to the right for a shift of 3", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
  });

  it("should output letters abc from input xyz and shift 3", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  it("should output capitalized letters if input is capitalized", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  it("should output ignore other signs than letters", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});
