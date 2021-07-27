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

  const reversedString = Math.abs(x)
    .toString()
    .split("")
    .reduceRight(
      (reversed, cur) => {
        return reversed + cur;
      },
      isNegative ? "-" : ""
    );

  const parsed = parseInt(reversedString);

  return Math.pow(-2, 31) <= parsed && parsed <= Math.pow(2, 31) - 1
    ? parsed
    : 0;
};
