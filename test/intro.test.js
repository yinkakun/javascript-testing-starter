import { describe, it, expect } from "vitest";
import { max, fizzBuzz } from "../src/intro";

describe("intro", () => {
  it("should pass", () => {
    expect(1 + 1).toBe(2);
  });

  it("should return first argument if it's greater", () => {
    // arrange
    const firstArg = 5;
    const secondArg = 3;
    // act
    const result = max(firstArg, secondArg);
    // assert
    expect(result).toBe(firstArg);
  });

  it("should return first argument if both arguments are equal", () => {
    const firstArg = 5;
    const secondArg = 5;

    const result = max(firstArg, secondArg);

    expect(result).toBe(firstArg);
  });

  it("should return second argument if it's greater", () => {
    const firstArg = 3;
    const secondArg = 5;

    const result = max(firstArg, secondArg);

    expect(result).toBe(secondArg);
  });
});

describe("fizzBuzz", () => {
  it("should return FizzBuzz if the number is divisible by 3 and 5", () => {
    const num = 15;
    const result = fizzBuzz(num);
    expect(result).toBe("FizzBuzz");
  });

  it("should return Fizz of the number is divisible by 3", () => {
    const num = 6;
    const result = fizzBuzz(num);
    expect(result).toBe("Fizz");
  });

  it("should return Buzz of the number is divisible by 5", () => {
    const num = 10;
    const result = fizzBuzz(num);
    expect(result).toBe("Buzz");
  });

  it("should return the number as string if not divisible by 3 or 5", () => {
    const num = 7;
    const result = fizzBuzz(num);
    expect(result).toBe(`${num}`);
  });
});
