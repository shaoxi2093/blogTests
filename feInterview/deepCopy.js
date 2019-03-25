// 请写出深拷贝的js方案
function deepCopy(obj){
  var resObj = Array.isArray(obj) ? [] : {}
  for(var key in obj){
    if(obj.hasOwnProperty(key)){
      if(obj[key] == null) {
        resObj[key] = null
      } else if(typeof obj[key] == 'object') {
        resObj[key] = deepCopy(obj[key])
      } else {
        resObj[key] = obj[key]
      } 
    }
  }
  return resObj
}

var obj = {abc: 123, def: 'a', ghi: { a: 1, b: 2, c: { cd: '333'}}, jkl: [12, { jkla: 10 }]}
var copyObj = deepCopy(obj)

console.log('copyObj', copyObj)