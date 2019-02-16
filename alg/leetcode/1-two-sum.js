/** 两层循环
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for(var i = 0; i< nums.length; i++){
      for(var j=i+1; j< nums.length; j++) {
          if(nums[i] + nums[j] === target){
              return [i,j]
          }
      }
  }
  return false;
};


/** 一层循环，但是利用了includes、indexOf，可能耗时更长
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function(nums, target) {
  var arr = []
  for(let i = 0; i< nums.length; i++){
      let needNum = target - nums[i]
      if(arr.includes(needNum)){
          return [arr.indexOf(needNum),i]
      }
      arr.push(nums[i])
  }
  return false;
};