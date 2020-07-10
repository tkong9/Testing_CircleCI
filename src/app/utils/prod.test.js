const prod = require('./prod.js');

test('multiply 4 * 2 to equal 12', () => {
  const num1 = 4;
  const num2 = 3;
  expect(prod(num1, num2)).toBe(num1 * num2);
});
