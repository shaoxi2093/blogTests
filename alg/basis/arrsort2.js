// 选择排序
function sort(arr){
  var temp, minPos
  for(var i = 0; i < arr.length; i++){
    minPos = i
    for(var j = i+1; j < arr.length; j++){
      if(arr[j] < arr[minPos]){
        minPos = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minPos]
    arr[minPos] = temp
  }
  return arr
}
var arr = []
for(var i = 0;i < 10000; i++){
  arr.push(Math.round(Math.random()*500))
}
console.time("arrsort2 选择排序耗时")
sort(arr)
console.timeEnd("arrsort2 选择排序耗时")

console.log(sort([1,9,7,4,8,12,30,2,15,6,7,19]))
