// https://leetcode.com/problems/two-sum/
export const twoSum = (nums: number[], target: number): number[] => {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const pair = target - num;

    if (hash[pair] !== undefined) {
      return [hash[pair], i];
    }

    hash[num] = i;
  }

  return [];
};

// https://leetcode.com/problems/reverse-integer/
export const reverse = (x: number): number => {
  const isNegative = x < 0;
  const stringified = x.toString();
  const unsigned = isNegative
    ? stringified.substring(1)
    : stringified.toString();

  let reversedString = "";

  for (let i = unsigned.length - 1; i >= 0; i--) {
    reversedString += unsigned[i];
  }

  const parsed = parseInt(isNegative ? `-${reversedString}` : reversedString);

  return Math.pow(-2, 31) <= parsed && parsed <= Math.pow(2, 31) - 1
    ? parsed
    : 0;
};
