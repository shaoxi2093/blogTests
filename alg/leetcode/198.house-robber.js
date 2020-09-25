/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let n_1 = 0
  let n_2 = 0
  let result = 0
  for(let i = 0; i < nums.length; i++) {
      result = Math.max(n_2 + nums[i], n_1)
      n_2 = n_1
      n_1 = result
  }
  return result
};
// @lc code=end

