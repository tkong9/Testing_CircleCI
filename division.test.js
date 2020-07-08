const divide = require("./division.js");

test("4 / 2 = ", () => {
  const num1 = 4;
  const num2 = 2;
  expect(divide(num1, num2)).toBe(num1 / num2);
});
