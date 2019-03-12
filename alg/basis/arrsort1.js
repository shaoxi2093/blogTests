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