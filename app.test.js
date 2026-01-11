const { getNumber } = require("./app");

test("getNumber returns expected value", () => {
  expect(getNumber()).toBe(7);
});
