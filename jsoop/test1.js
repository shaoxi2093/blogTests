//工厂模式
function CreatePerson(name) {
  var obj = new Object();
  obj.name = name;
  obj.echoName = function () {
    console.log(this.name)
  }
  return obj;
}

var xm = CreatePerson('xiaoming');
var xc = CreatePerson('xiaoce');
xm.echoName();
console.log(xm.echoName == xc.echoName)  //false,因为每个实例都在构建过程中，初始化了个全新的对象obj
console.log(xm instanceof CreatePerson)  //false,无法知道对象的类


//构造函数模式
function CreatePerson2(name) {
  this.name = name;
  this.echoName = function () {
    console.log(this.name)
  }
}
var xg = new CreatePerson2('xiaogang')
var xz = new CreatePerson2('xiaoze')

xg.echoName()
console.log(xg.echoName == xz.echoName)   //false，每个实例都初始化了类方法
console.log(xg instanceof CreatePerson2)  //true，与工厂模式不一样的地方



//原型模式（解决方法复用的问题）
//工厂+原型
function CreatePerson3(name) {
  this.name = name;
}
CreatePerson3.prototype.echoName = function () {
  console.log(this.name)
}

var xg2 = new CreatePerson3('xiaogang2')
var xz2 = new CreatePerson3('xiaoze')

xg2.echoName()
console.log(xg2.echoName == xz2.echoName)   //true，原型方法
console.log(xg2 instanceof CreatePerson3)  //true，与工厂模式不一样的地方
