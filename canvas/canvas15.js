// canvas 绘制时钟动画
/** @type { HTMLCanvasElement } */
var canvas = document.getElementById('my-canvas')
var ctx = canvas.getContext('2d')

var r = 90 // 半径

// 画圆盘
ctx.beginPath()
ctx.moveTo(100, 10)
ctx.arc(100, 100, r, -0.5 * Math.PI, Math.PI * 1.5)
ctx.stroke()

ctx.translate(100, 100)
// todo 画刻度 和 数字(坐标计算有错)
for(var i = 1; i < 61; i++) {
  var len = i % 5 === 0 ? 12 : 4 // 刻度线长度
  // 圆上的点A
  var xA = Math.cos(360 * (i / 60)) * r
  var yA = Math.sin(360 * (i / 60)) * r
  // 圆里的点B
  var xB = xA - Math.cos(360 * (i / 60)) * len
  var yB = yA - Math.sin(360 * (i / 60)) * len

  if(i % 5 == 0) {
    console.log(xA,yA,xB,yB)
  }
  ctx.moveTo(xA, yA)
  ctx.lineTo(xB, yB)
  ctx.stroke()
}