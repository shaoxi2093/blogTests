const formatData = (arr, keyArr) => {
  arr.sort((a,b) => {
    for(let key in keyArr) {
      if(a[keyArr[key]] - b[keyArr[key]] !== 0){
        return a[keyArr[key]] - b[keyArr[key]]
      }
    }
    return 0
  })
  let res = initData(arr, [], keyArr)
  return res
}
// 只处理一层的结构
const initData = (arr, parents, keyArr) => {
  const resArr = []
  for(let j in arr){
    let hasItem = false
    let item = arr[j]

    console.log("j",j)
    console.log("item",item)
    for(let i=0; i < parents.length; i++){
      if(item[keyArr[i]] === parents[i]){
        hasItem = true
        break
      }
    }
    if(!hasItem){
      console.log('=========111111========')
      const value = item[keyArr[parents.length]]
      resArr.push({
        value,
        ...parents.length < keyArr.length ? { children: initData(arr, [parents, value], keyArr)} : {}
      })
    }
    
  }
  resArr.filter(item => item !== null)
  return resArr
} 
const arr = [
  {
    value: 'string',
    children: []  //同上arr结构
  }
]

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

debugger
var result = formatData(data, ['province', 'city', 'name'])
console.log(JSON.stringify(result))