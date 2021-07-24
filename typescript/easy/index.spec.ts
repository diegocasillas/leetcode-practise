const { twoSum, addTwoNumbers } = require("./index");

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
