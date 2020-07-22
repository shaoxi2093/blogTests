/*
 * @lc app=leetcode id=135 lang=javascript
 *
 * [135] Candy
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const candies = new Array(ratings.length).fill(1)

  for(let i = 1; i < ratings.length; i++) {
    if(ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1
    }
  }
  for(let i = ratings.length - 2; i >= 0; i--){
    if(ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1)
    }
  }
  return candies.reduce((sum, a) => sum + a)
};
// @lc code=end
