const theSum = require(".//sum");

/*
  test(name, fn, timeout)
  it(name, fn, timeout)
*/

test("Return 0 If No Number", () => {
  expect(theSum(2,5)).toBe([2, 3, 4, 5]);
})
