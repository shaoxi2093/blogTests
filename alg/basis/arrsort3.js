// 插入排序
function sort(arr){
  for(var i = 1; i < arr.length; i++){
    var key = arr[i]
    var j = i - 1
    while(arr[j] > key){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = key
  }
  return arr
}
var arr = []
for(var i = 0;i < 10000; i++){
  arr.push(Math.round(Math.random()*500))
}
console.time("arrsort3 插入排序耗时")
sort(arr)
console.timeEnd("arrsort3 插入排序耗时")

console.log(sort([1,9,7,4,8,12,30,2,15,6,7,19]))

// 插入排序优化
// 因为插入排序前i位已经是排序完成的，因此可以使用二分法优化
// 对比中间数，再二分

function sort1(arr){
  for(var i = 1; i < arr.length; i++){
    var key = arr[i], left = 0, right = i - 1
    while(left <= right){
      var mid = parseInt((left + right)/2)
      if(arr[mid] < key){
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    // 找到位置left|right，将所有右边数据向后挪
    for(var j = i -1; j >= left; j--){
      arr[j+1] = arr[j]
    }
    
    
    arr[left] = key
  }
  return arr
}

console.time("arrsort3 插入排序二分查找优化耗时")
sort1(arr)
console.timeEnd("arrsort3 插入排序二分查找优化耗时")
