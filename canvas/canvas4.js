/** @type {HTMLCanvasElement} */
var canvas = document.getElementById('my-canvas')

var ctx = canvas.getContext('2d')

ctx.strokeStyle = "rgba(100, 100, 0, 1)"
ctx.strokeRect(100, 50, 100, 60)

ctx.beginPath()
ctx.moveTo(130, 65)
ctx.arc(130, 70, 5, -Math.PI * 0.5, Math.PI * 1.5)
ctx.moveTo(170, 65)
ctx.arc(170, 70, 5, -Math.PI * 0.5, Math.PI * 1.5)

ctx.moveTo(140, 85)
ctx.arc(155, 85, 15, Math.PI * 1, Math.PI * 2, true)

ctx.stroke()

ctx.strokeStyle = "rgba(0, 0, 0, 0.8)"

// body + leg
ctx.moveTo(150, 110)
ctx.lineTo(150, 200)
ctx.lineTo(120, 240)
ctx.moveTo(150, 200)
ctx.lineTo(180, 240)

// 右手
ctx.moveTo(150, 140)
ctx.lineTo(140, 150)
ctx.lineTo(200, 150)
ctx.lineTo(240, 180)

// 左手
ctx.moveTo(150, 140)
ctx.lineTo(210, 140)
ctx.lineTo(230, 125)

ctx.stroke()

ctx.strokeStyle = "rgba(200, 0, 0, 1)"
ctx.beginPath()
ctx.moveTo(280, 140)
ctx.bezierCurveTo(260, 120, 260, 150, 280, 170)
ctx.bezierCurveTo(300, 150, 300, 120, 280, 140)
ctx.stroke()