// canvas 绘制时钟动画
/** @type { HTMLCanvasElement } */
var canvas = document.getElementById('my-canvas')
var ctx = canvas.getContext('2d')

var r = 90 // 半径

// 画圆盘 （100, 100） r=90
ctx.beginPath()
ctx.moveTo(100, 10)
ctx.arc(100, 100, r, -0.5 * Math.PI, Math.PI * 1.5)
ctx.stroke()
ctx.moveTo(100, 95)
ctx.arc(100, 100, 5, -0.5 * Math.PI , Math.PI * 1.5)

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

  
  ctx.moveTo(xA, -yA)
  ctx.lineTo(xB, -yB)
  ctx.stroke()
  if(i % 5 === 0) {
    var xNum = xA - Math.sin(Math.PI * i / 30) * 14 - 4
    var yNum = yA - Math.cos(Math.PI * i / 30) * 14 - 4
    ctx.fillText(i / 5, xNum, -yNum)
  }
}
ctx.save()

function getXY(angle, lineLen) {
  var obj = {}
  if(angle > 180) {
    obj.x = -Math.sin((angle - 180) * degUnit) * lineLen
    obj.y = Math.cos((angle - 180) * degUnit) * lineLen
  } else {
    obj.x = Math.sin(angle * degUnit) * lineLen
    obj.y = -Math.cos(angle * degUnit) * lineLen
  }
  return obj
}

// 画时分秒指针 + 动画
setInterval(function(){
  ctx.restore()
  var now = new Date()
  var h = now.getHours() - 12 >= 0 ? now.getHours() - 12 : now.getHours(),
    m = now.getMinutes(),
    s = now. getSeconds()
  
  // 时针
  ctx.beginPath()
  ctx.moveTo(100, 100)
  ctx.strokeStyle = '#333333'
  ctx.lineWidth = '6px'
  var xyH = getXY(h * 30 + m / 2, 40)
  ctx.lineTo(xyH.x, xyH.y)
  ctx.stroke()

  // 分针
  ctx.beginPath()
  ctx.moveTo(100, 100)
  ctx.strokeStyle = '#666666'
  ctx.lineWidth = '4px'
  var xyM = getXY(m * 6, 60)
  ctx.lineTo(xyM.x, xyM.y)
  ctx.stroke()

  // 秒针
  ctx.beginPath()
  ctx.moveTo(100, 100)
  ctx.strokeStyle = '#999'
  ctx.lineWidth = '2px'
  var xyS = getXY(s * 6, 60)
  ctx.lineTo(xyS.x, xyS.y)
  ctx.arc(xyS.x, xyS.y, 1, -Math.PI , Math.PI)
  ctx.stroke()


  ctx.save()

}, 1000)

