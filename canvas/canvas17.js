var canvas = document.getElementById("my-canvas")
var ctx = canvas.getContext("2d")

ctx.save()
ctx.fillStyle = "#f00"
ctx.translate(100,100)
ctx.fillRect(100,100,100,100)
ctx.restore()

ctx.save()
ctx.translate(150, 150)
ctx.rotate(0.5 * Math.PI)
ctx.restore()

ctx.save()
ctx.fillStyle = "#ddd"
ctx.translate(300,100)
ctx.fillRect(100,200,200,100)
ctx.restore()

var ani = setInterval((function(){
  var deg = 0
  return function() {
    if(deg < Math.PI){
      ctx.save()
      ctx.translate(500, 350)
      ctx.clearRect(-200, -200, 400, 400)
      ctx.rotate(deg)
      ctx.fillStyle = "#ddd"
      ctx.fillRect(-100,-50,200,100)
      deg += 2 * Math.PI / 360 * 5
      ctx.restore()
    } else {
      ani && clearInterval(ani)
    }
  }
})(), 20)