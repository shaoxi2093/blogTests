function Person(name) {
  this.name = name;
  this.sleep = function () {
    console.log(this.name+'正在睡觉');
  }
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
ChengXuYuan.prototype.name = 'chengxuyuan';

var xm = new ChengXuYuan();
console.log(xm.name+'\n---------------------');
xm.echoName();
xm.eat('饭');
xm.sleep();
console.log(xm instanceof ChengXuYuan);
console.log(xm instanceof Person);

