const formatData = (tableData, keys) => {
  let res = [], posObj = {}
  for(let i = 0;i < tableData.length;i++){
    let cur = posObj, arr = res
    for(let j = 0;j < keys.length; j++){
      let item = tableData[i][keys[j]]
      if(cur[item]){
        cur = cur[item]
        arr = arr[cur.$pos].children
      } else {
        let pushItem = {
          value: item
        }
        if(j !== keys.length - 1){
          pushItem.children = []
        }
        cur[item] = {$pos: arr.push(pushItem) - 1}
        cur = cur[item]
        arr = pushItem.children
      }
    }
  }
  return res
}

// posObj = {
//   '浙江': {
//     $pos: 0,
//     children: {
//       '杭州': {
//         $pos: 0
//       }
//     }
//   }
// }


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