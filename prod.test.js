const prod = require("./prod.js");

test("multiply 4 * 2 to equal 12", () => {
  expect(prod(4, 3)).toBe(12);
});
