/** @type {HTMLCanvasElement} */
var canvas = document.getElementById('my-canvas')

var ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.moveTo(60, 20)
ctx.lineTo(0, 60)
ctx.lineTo(120, 60)
ctx.fill()