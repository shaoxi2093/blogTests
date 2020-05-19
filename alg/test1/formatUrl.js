function getUrlParam(sUrl, sKey) {
  var obj = {}
  var queryStr = sUrl.split('#')[0].split('?')[1]
  if(queryStr != '') {
      var kvStrArr = queryStr.split('&')
      for(var i = 0; i < kvStrArr.length; i++) {
          const key = kvStrArr[i].split('=')[0]
          const value = kvStrArr[i].split('=')[1]
          if(obj[key]) {
              obj[key] = (obj[key].toString() + ',' + value).split(',')
          } else {
              obj[key] = value
          }
      }
  }
  if(!sKey) {
      return obj
  } else {
      return obj[sKey] || ''
  }
  
}

console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', 'key'))