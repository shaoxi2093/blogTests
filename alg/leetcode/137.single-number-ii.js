/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let filterArr = []
  for(let i = 0; i < nums.length; i++) {
    filterArr = nums.filter(item => item === nums[i])
    if(filterArr.length === 1) {
      return nums[i]
    }
  }
};
// @lc code=end

