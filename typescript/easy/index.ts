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
