/** @type { HTMLCanvasElement } */
var canvas = document.getElementById('my-canvas')
var ctx = canvas.getContext('2d')

var linergradient = ctx.createLinearGradient(0,0, 200, 200)
linergradient.addColorStop(0, 'rgba(150, 50, 66, 1)')
linergradient.addColorStop(0.9, 'rgba(250, 150, 66, 1)')
linergradient.addColorStop(1, 'rgba(255, 190, 66, 0.4)')

ctx.fillStyle = linergradient
ctx.fillRect(10, 10, 120, 150)

ctx.strokeStyle = linergradient
ctx.moveTo(200, 200)
ctx.lineTo(250, 280)
ctx.lineTo(200, 250)
ctx.moveTo(250, 280)
ctx.lineTo(270, 230)
ctx.stroke()
