/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
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
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber2 = function(nums) {
  return nums.reduce((a, b) => a^b)
}
