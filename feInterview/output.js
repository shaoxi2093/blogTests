// 写出至少两种方案，使输出递增i
var arr = []
for(var i = 0;i < 10;i++){
    var c = i
    arr[i] = function(){
        console.log(c)
    }
}
arr[6]()

// 方法1，
var arr2 = []
for(var i = 0;i < 10;i++){
    var c = i
    arr2[i] = (function(c) {
    return function(){
        console.log(c)
    }})(c)
}
arr2[6]()

// 方法2，let块级作用域
var arr3 = []
for(let i = 0;i < 10;i++){
    arr3[i] = function(){
        console.log(i)
    }
}
arr3[6]()