// 只支持较简单的参数，如果传参，对象属性也是function，就要再扩展
Function.prototype.apply1 = function(context) {
  var context = context || window
  context.fn = this // 当前需要执行的function
  var otherArgus = arguments[1] || [] // 是个数组
  var otherArgusStr = ''
  for(var i = 0; i < otherArgus.length; i++ ) {
    if(typeof otherArgus[i] === 'function') {
      otherArgusStr += otherArgus[i].toString()
    } else {
      otherArgusStr += JSON.stringify(otherArgus[i])
    }
    if(i < otherArgus.length) {
      otherArgusStr += ','
    }
  }
  var newFunStr = 'context.fn('+ otherArgusStr + ')' // 把参数展开放入
  var returnValue = eval(newFunStr)
  delete context.fn
  return returnValue
}

var objFaker = {
  name: 'faker',
  sayHello: function(age) {
    console.log('test1=========>>>>', `i am ${this.name}, ${age} years old.`)
  },
  introduceBrothers: function(bros) {
    console.log('test2=========>>>>', `i am ${this.name}, ${bros.toString()} are my brothers`)
  },
  introduceBrothersWithCb: function(bros, cb) {
    console.log('test3=========>>>>', `i am ${this.name}, ${bros.toString()} are my brothers`)
    cb && cb()
  }
}
var objMain = {
  name: 'truth',
}

objFaker.sayHello.apply1(objMain, [3])
objFaker.introduceBrothers.apply1(objMain, [['jack', 'bob']])
objFaker.introduceBrothersWithCb.apply1(objMain, [['jack', 'bob'], function() { console.log('i have one sister, Ana.') }])