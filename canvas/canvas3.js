/** @type {HTMLCanvasElement} */
var canvas = document.getElementById('my-canvas')

var ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.arc(20, 100, 40, -Math.PI*1, 0)
ctx.moveTo(60, 100)
ctx.arc(100, 100, 40, -Math.PI*1, 0, true)
ctx.moveTo(140, 100)
ctx.arc(180, 100, 40, -Math.PI*1, 0)
ctx.moveTo(220, 100)
ctx.arc(260, 100, 40, -Math.PI*1, 0, true)
ctx.stroke()