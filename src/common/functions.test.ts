import { someFunction } from "./functions";

describe("Function()", () => {
  test("return value", () => {
    expect(someFunction()).toBe("test");
  });
});
