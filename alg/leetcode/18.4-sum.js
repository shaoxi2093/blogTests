/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const halfNumsLens = nums.length % 2 === 0 ? nums.length / 2 :  nums.length / 2 +1
    const result = []
    for(let i = 0; i < halfNumsLens; i++) {
      for(let j = i + 1; j < nums.length; j++) {
        for(let k = i + 2; k < nums.length; k++) {
          const left = target - nums[i] - nums[j] - nums[k]
          if(nums.includes(left)) {
            result.push([nums[i], nums[j], nums[k], left])
          }
        }
      }
    }
    return result
};
// @lc code=end

