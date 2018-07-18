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
function CreatePersonP(name) {

}
CreatePersonP.prototype.name = ''
CreatePersonP.prototype.echoName = function () {
  console.log(this.name)
}

var xg3 = new CreatePersonP();
var xz3 = new CreatePersonP();
xg3.name = 'xiaogang3';

xg3.echoName()
console.log(xg3.echoName == xz3.echoName)   // true
console.log(xg3 instanceof CreatePersonP)   // true



//组合模式 构建+原型
function CreatePersonC(name) {
  this.name = name;
  this.hands = ['left','right'];
}
CreatePersonC.prototype.echoName = function () {
  console.log(this.name)
}

var xg2 = new CreatePersonC('xiaogang2')
var xz2 = new CreatePersonC('xiaoze')

xg2.hands.push('third');
console.log(xz2.hands)

xg2.echoName()
console.log(xg2.echoName == xz2.echoName)   //true，原型方法
console.log(xg2 instanceof CreatePersonC)  //true，与工厂模式不一样的地方
console.log('private:'+(xg2.hands == xz2.hands))