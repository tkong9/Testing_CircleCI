const sub = require('./sub.js');

test('adds 10 - 5 to equal 5', () => {
  const num1 = 10;
  const num2 = 5;

  expect(sub(num1, num2)).toBe(num1 - num2);
});
