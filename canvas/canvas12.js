/** @type { HTMLCanvasElement } */
var canvas = document.getElementById('my-canvas')
var ctx = canvas.getContext('2d')

var img = new Image()
img.src = '../assets/meinv.jpeg'
img.onload = function() {
  ctx.drawImage(img, 0, 0)

  // ctx.rotate(Math.PI * 0.3)
  ctx.drawImage(img, 220, 230, 200, 200)

  ctx.translate(240, 260)
  ctx.drawImage(img, 20, 30, 160, 160)
}