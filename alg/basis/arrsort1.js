// 冒泡排序
function sort(arr){
  var temp
  for(var i = 0; i < arr.length; i++){
    for(var j = 1; j < arr.length; j++ ){
      if(arr[j] < arr[j - 1]){
        temp = arr[j - 1]
        arr[j-1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
var arr = []
for(var i = 0;i < 10000; i++){
  arr.push(Math.round(Math.random()*500))
}
console.time("arrsort1 冒泡耗时")
sort(arr)
console.timeEnd("arrsort1 冒泡耗时")

// 冒泡排序优化方案1
// 考虑到每次冒泡把最大的放在后面
// 之后再去对比时，就不用对比之前已经确认是最大的那些数
// 记录最大数的位置，仅对比之前未被排序的数
function sort1(arr){
  var temp, pos = arr.length - 1
  for(var i = 0; i < arr.length; i++){
    for(var j = 1; j <= pos; j++ ){
      if(arr[j] < arr[j - 1]){
        temp = arr[j - 1]
        arr[j-1] = arr[j]
        arr[j] = temp
      }
    }
    pos -= 1
  }
  return arr
}

console.time("arrsort1 1 冒泡耗时")
sort1(arr)
console.timeEnd("arrsort1 1 冒泡耗时")

console.log(sort1([1,9,7,4,8,12,30,2,15,6,7,19]))

// 冒泡排序优化方案2
// 双向排序
// 一个方向正序冒泡最大数，一个方向倒序排最小数