const formatData = (arr) => {
  arr.sort((a,b) => {
    return a.province - b.province || a.city - b.city || a.name - b.name
  })
  let res = []
  for(let i = 0; i < arr.length; i++){
    if(i === 0 || arr[i].province !== arr[i-1].province){
      res.push({
        value: arr[i].province,
        children: [{
          value: arr[i].city,
          children: [{
            value: arr[i].name
          }]
        }]
      })
    } else if(arr[i].city !== arr[i-1].city){
      res[res.length-1].children.push({
        value: arr[i].city,
        children: [{
          value: arr[i].name
        }]
      })
    } else {
      res[res.length-1].children[res[res.length-1].children.length-1].children.push({
        value: arr[i].name
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

var result = formatData(data)
console.log(JSON.stringify(result))