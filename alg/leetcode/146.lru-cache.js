/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = new Map()
    this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.cache.has(key)) {
      // 存在则取出并刷新
      const result = this.cache.get(key)
      this.cache.delete(key)
      this.put(key, result)
      return result
    }
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache[key]) {
      this.cache.delete(key)
    } else if(this.cache.size >= this.capacity) {
      // 删除最前面的一条数据（没有被刷新的数据）
      this.cache.delete(this.cache.keys().next().value)
    }

    this.cache.set(key, value)
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

