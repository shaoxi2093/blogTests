/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let n_2 = 0
  let n_1 = 1
  let result = 0
  for(let i = 1; i <= n; i++) {
      result = n_1 + n_2
      n_2 = n_1
      n_1 = result
  }
  return result
};
// @lc code=end

