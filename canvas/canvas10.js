/** @type { HTMLCanvasElement } */
var canvas = document.getElementById('my-canvas')
var ctx = canvas.getContext('2d')

var radiusGradient = ctx.createRadialGradient(0, 100, 100, 0, 100, 0)
radiusGradient.addColorStop(0, 'rgb(100, 0 ,0 )')
radiusGradient.addColorStop(0.6, 'rgb(200, 0, 0')
radiusGradient.addColorStop(1, 'rgb(255, 0, 0)')

ctx.fillStyle = radiusGradient
ctx.fillRect(0, 0, 200, 200)


var radiusGradient2 = ctx.createRadialGradient(300, 80, 80, 300, 80, 0)
radiusGradient2.addColorStop(0, 'white')
radiusGradient2.addColorStop(1, 'red')

ctx.fillStyle = radiusGradient2
ctx.fillRect(220, 0, 200, 160)