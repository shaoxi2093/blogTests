/**
 * 实现模版函数
 */
var tpl = template("<p>My name is {{ name }}</p>")
// var div = document.getElementById('div1')
// div.innerHtml = tpl({name: '张三'})
console.log(tpl({name: '张三'}))

function template(str) {
  var arr = str.match(/{{.+}}/g)
  var arrkeys = arr.map(item => {
      item = item.replace(/{|}/g,'')
      item = item.trim()
      return item
  })
  return function(obj){
      for(var i = 0;i < arrkeys.length;i++){
          str = str.replace(arr[i], obj[arrkeys[i]])
      }
      return str
  }
}