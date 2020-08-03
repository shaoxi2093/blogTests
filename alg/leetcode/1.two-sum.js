/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i];
    const rest = target - v;
    if (rest == v) {
      if (nums.lastIndexOf(rest) > -1 && nums.lastIndexOf(rest) != i) {
        return [i, nums.lastIndexOf(rest)];
      }
    } else if (nums.indexOf(rest) > -1) {
      return [i, nums.indexOf(rest)];
    }
  }
};
// @lc code=end