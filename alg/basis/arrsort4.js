// 快速排序
// 1.找基准
// 2.比基准小的放左边，比基准大的放右边
// 3.递归
function sort(arr){
  if(arr.length <= 1){ return arr }
  var mid = Math.floor(arr.length / 2)
  var pivotMid = arr.splice(mid,1)[0] 
  var left = [],right = []
  for(var i = 0; i < arr.length; i++){
    if(arr[i] <= pivotMid){
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return sort(left).concat([pivotMid], sort(right))
}
var arr = []
for(var i = 0;i < 10000; i++){
  arr.push(Math.round(Math.random()*500))
}
console.time("arrsort4 快速排序耗时")
sort(arr)
console.timeEnd("arrsort4 快速排序耗时")

console.log(sort([1,9,7,4,8,12,30,2,15,6,7,19]))

