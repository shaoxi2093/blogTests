function Person(name) {
  this.name = name;
  this.sleep = function () {
    console.log(this.name+'正在睡觉');
  }

  this.hands = ['left','right'];
}
Person.prototype.echoName = function () {
  console.log(this.name)
}
Person.prototype.eat = function (sth) {
  console.log(this.name+'正在吃'+sth)
}



//原型链继承
function ChengXuYuan() {

}
ChengXuYuan.prototype = new Person();


var xm = new ChengXuYuan();
xm.name = 'xiaoming'
console.log(xm.name+'\n---------------------');
xm.echoName();
xm.eat('饭');
xm.sleep();
console.log(xm instanceof ChengXuYuan);
console.log(xm instanceof Person);


var xg = new ChengXuYuan();
xg.name = 'xiaogang'
console.log(xg.name+'\n---------------------');

xg.hands[2] = 'third'



console.log(xg.hands)
console.log(xm.hands)    //引用属性复用

console.log(xg.sleep == xm.sleep)