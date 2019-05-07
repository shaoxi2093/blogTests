/** @type {HTMLCanvasElement} */
var canvas = document.getElementById('my-canvas')

var ctx = canvas.getContext('2d')

ctx.strokeStyle = 'rgba(200, 0, 0, 1)'
ctx.strokeRect(10, 10, 50, 50)

ctx.strokeStyle = 'rgba(0, 100, 0, 0.5)'
ctx.strokeRect(20, 20, 50, 50)