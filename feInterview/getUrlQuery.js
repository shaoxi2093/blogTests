// 实现函数解析url中的所有query，如`http://www.baidu.com?a=1&b=2&c=3`，最后输出`{a:1,b:2,c:3}`
function getQueryObj(url){
  var queryStr = url.split('?')[1]
  console.log(queryStr)
  var queryArr = queryStr.split('&')
  var res = {}
  for(var i =0;i < queryArr.length;i++){
      var item = queryArr[i].split('=')
      res[item[0]] = item[1]
  }
  return res
}

console.log('query', getQueryObj('http://www.baidu.com?a=1&b=2&c=3'))