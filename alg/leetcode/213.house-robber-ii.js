/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
  if(!nums || !nums.length){
      return 0
  }
  const len = nums.length
  if(len == 1) {
      return nums[0]
  }
  return Math.max(comRob(nums, 0, len - 2), comRob(nums, 1, len - 1))
};
var comRob = function(nums, start, end) {
  let n_1 = 0
  let n_2 = 0
  let result = 0
  for(let i = start; i<= end; i++) {
      result = Math.max(n_2 + nums[i], n_1)
      n_2 = n_1
      n_1 = result
  }
  return result
}
// @lc code=end

