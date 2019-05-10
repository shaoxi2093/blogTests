/** @type { HTMLCanvasElement } */
var canvas = document.getElementById('my-canvas')
var ctx = canvas.getContext('2d')

for(var i = 0; i < 10; i++) {
    for(var j = 0; j < 10; j++) {
        ctx.fillStyle = 'rgb(' + (10 + 20 * i) + ',' + (10 + 20 * j) + ',0)'
        ctx.fillRect(50+40*i, 50+40*j, 40, 40)
    }
    
}
for(var i = 0; i < 10; i++) {
    ctx.globalAlpha = 0.2
    ctx.arc(250, 250, (10 + 40 * i) / 2, 0, Math.PI * 2)
    ctx.fill()
}