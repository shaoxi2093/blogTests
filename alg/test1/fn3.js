const formatData = (arr, keyArr) => {
  const res = []
  for(let i = 0; i < arr.length; i++) {
    console.log("res", res)
    let addr = findAd(res, arr[i], keyArr)
    if(addr.length === 0) {
      let cycleObj = cycleRender(arr[i], keyArr)
      res.push(cycleObj)
    } else {
      let resAd = res
      for(let j = 0; j < addr.length; j++){
        resAd = res[addr[j]].children
      }
      resAd.push({
        value: arr[i][keyArr[addr.length]],
        ...addr.length === keyArr.length ? { children: [] } : {}
      })
    }
  }
  return res
}
const cycleRender = (data, keyArr, index = 0) => {
  const result = {
    value: data[keyArr[index]],
    ...index < keyArr.length - 1 ? { children: [cycleRender(data, keyArr, index+1)]} : {}
  }
  return result
}

const findAd = (children, obj, keyArr, res = []) => {
  for(let i = 0; i < children.length; i++){
    if(children[i].value === obj[keyArr[0]]){
      res.push(i)
      keyArr.shift()
      return findAd(children[i].children, obj, keyArr, res)
    }
  }
  console.log(res)
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