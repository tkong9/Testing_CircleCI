const sum = require("./sum.js");

test("adds 1 + 2 to equal ", () => {
  const num1 = 1;
  const num2 = 2;
  expect(sum(num1, num2)).toBe(num1 + num2);
});
