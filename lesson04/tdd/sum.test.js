const sum = require("./sum");

test("1 + 2 should equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adding 0 should give the original value", () => {
  const originalValue = 9;
  expect(sum(originalValue, 0)).toBe(originalValue);
});
