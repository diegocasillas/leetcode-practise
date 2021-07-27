const { twoSum, reverse } = require("./index");

describe("twoSum", () => {
  it.each([
    [[2, 7, 11, 15], 9, [0, 1]],
    [[3, 2, 4], 6, [1, 2]],
    [[3, 3], 6, [0, 1]],
  ])(
    "returns indexes of numbers that sum to target: given %p, target %p",
    (nums, target, expected) => {
      expect(twoSum(nums, target)).toEqual(expected);
    }
  );
});

describe("reverse", () => {
  it.each([
    [123, 321],
    [-123, -321],
    [120, 21],
    [0, 0],
    [Math.pow(-2, 31) - 1, 0],
    [Math.pow(2, 31), 0],
  ])("reverses integer: given %p, expected %p", (integer, expected) => {
    expect(reverse(integer)).toEqual(expected);
  });
});
