/** @type {HTMLCanvasElement} */
var canvas = document.getElementById('my-canvas')

var ctx = canvas.getContext('2d')

for(var i = 0; i < 25; i++) {
    for(var j = 0; j < 25; j++) {
        ctx.strokeStyle = 'rgb(' + Math.floor(50 + 5 * i) + ',' + Math.floor(50 + 5 * j) + ', 0)'
        ctx.beginPath()
        ctx.arc(10 + 10 * j, 10 + 10 * i, 5, 0, Math.PI * 2)
        ctx.stroke()
    }
}