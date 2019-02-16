const formatData = (arr, keyArr) => {
  arr.sort((a,b) => {
    for(let key in keyArr) {
      if(a[keyArr[key]] - b[keyArr[key]] !== 0){
        return a[keyArr[key]] - b[keyArr[key]]
      }
    }
    return 0
  })
  let res = []
  for(let i = 0; i < arr.length; i++){
    if(i === 0 || arr[i][keyArr[0]] !== arr[i-1][keyArr[0]]){
      res.push({
        value: arr[i][keyArr[0]],
        children: [{
          value: arr[i][keyArr[1]],
          children: [{
            value: arr[i][keyArr[2]]
          }]
        }]
      })
    } else if(arr[i][keyArr[1]] !== arr[i-1][keyArr[1]]){
      res[res.length-1].children.push({
        value: arr[i][keyArr[1]],
        children: [{
          value: arr[i][keyArr[2]]
        }]
      })
    } else {
      res[res.length-1].children[res[res.length-1].children.length-1].children.push({
        value: arr[i][keyArr[2]]
      })
    }
  }
  return res
}

var data = [{
  "province": "浙江",
  "city": "杭州",
  "name": "西湖"
}, {
  "province": "四川",
  "city": "成都",
  "name": "锦里"
}, {
  "province": "四川",
  "city": "成都",
  "name": "方所"
}, {
  "province": "四川",
  "city": "阿坝",
  "name": "九寨沟"
}]

var result = formatData(data, ['province', 'city', 'name'])
console.log(JSON.stringify(result))