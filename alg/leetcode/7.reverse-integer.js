/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let s = `${x}`
    let isZs = true
    if(x < 0) {
      s = `${ 0 - x }`
      isZs = false
    }
    const result = s.split('').reverse().join('')

    return isZs ? +result : -result
};
// @lc code=end

