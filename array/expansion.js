// 不使用tostring方式来展开成一层 [1,[[4,5,6],2,[[[7,8,9]]],3]]

var arrTest= [1,[[4,5,6],2,[[[7,8,9]]],3]]

function exArr(arr) {
  let result = []
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      result = result.concat(exArr(arr[i]))
      // result = [...result, ...exArr(arr[i])]
    } else {
      result.push(arr[i])
    }
  }
  return result
}

console.log(exArr(arrTest))