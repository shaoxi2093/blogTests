// canvas 实现图片的局部放大查看
/** @type { HTMLCanvasElement } */
var zoomCanvas = document.createElement('canvas')
zoomCanvas.id = 'zoom-canvas'
zoomCanvas.style.width = '300px'
zoomCanvas.style.height = '300px'
zoomCanvas.style.cssFloat = 'left'
document.body.appendChild(zoomCanvas)

var zoomCtx = zoomCanvas.getContext('2d')
zoomCtx.imageSmoothingEnabled = true
zoomCtx.mozImageSmoothingEnabled = true
zoomCtx.webkitImageSmoothingEnabled = true
zoomCtx.msImageSmoothingEnabled = true

/** @type { HTMLCanvasElement } */
var canvas = document.getElementById('my-canvas')
canvas.style.cursor = 'move'
var ctx = canvas.getContext('2d')

var img = new Image()
img.src = '../assets/meinv.jpeg'
img.onload = function() {
  ctx.drawImage(img, 0, 0)

  function onMove(event) {
    var x = event.layerX
    var y = event.layerY
    if(x <= 700 && y <= 700){
      zoomCtx.drawImage(canvas, Math.abs(x - 40), Math.abs(y - 40), 80, 80, 0, 0, 300, 300)
    }
  }

  canvas.addEventListener('mousemove', onMove)
}
