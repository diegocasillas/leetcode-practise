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

// https://leetcode.com/problems/roman-to-integer/
export const romanToInt = (s: string): number => {
  const map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  const chars = s.split("");
  let total = 0;

  for (let i = 0; i < chars.length; i++) {
    const current = chars[i];
    const next = chars[i + 1];

    if (map[current + next]) {
      total += map[current + next];
      i++;
    } else {
      total += map[current];
    }
  }

  return total;
};
