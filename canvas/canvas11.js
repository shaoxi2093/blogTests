/** @type { HTMLCanvasElement } */
var canvas = document.getElementById('my-canvas')
var ctx = canvas.getContext('2d')

ctx.font = '48px serif'
ctx.direction = 'rtl'
ctx.fillText('Hello Canvas', 100, 100)