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
// 画刻度 和 数字
const degUnit = 2 * Math.PI / 360
for(var i = 1; i < 61; i++) {
  var len = i % 5 === 0 ? 10 : 4 // 刻度线长度
  var xA,yA,xB,yB
  radius = 180 * 1/30
  if(i <= 30) {
    // 圆上的点A
    xA = Math.sin(Math.PI * i / 30) * r
    yA = Math.cos(Math.PI * i / 30) * r
    
  } else {
    xA = -Math.sin(360 * ((i - 30) / 60) * degUnit) * r
    yA = -Math.cos(360 * ((i - 30) / 60) * degUnit) * r
  }
  
  // 圆里的点B
  xB = xA - Math.sin(Math.PI * i / 30) * len
  yB = yA - Math.cos(Math.PI * i / 30) * len

  
  ctx.moveTo(xA, yA)
  ctx.lineTo(xB, yB)
  ctx.stroke()
  if(i % 5 === 0) {
    var xNum = xA - Math.sin(Math.PI * i / 30) * 14 - 4
    var yNum = yA - Math.cos(Math.PI * i / 30) * 14 + 4
    ctx.fillText(i / 5, xNum, yNum)
  }
}