// MDN 上绘制星空的例子
/** @type { HTMLCanvasElement } */
var canvas = document.getElementById('my-canvas')
var ctx = canvas.getContext('2d')

function draw(ctx) {
  ctx.fillRect(0,0,150,150);
  ctx.translate(75,75);

  
  ctx.beginPath();
  ctx.arc(0,0,60,0,Math.PI*2,true);
  ctx.clip();

  // 背景矩形
  var lingrad = ctx.createLinearGradient(0,-75,0,75);
  lingrad.addColorStop(0, '#232256');
  lingrad.addColorStop(1, '#143778');
  
  ctx.fillStyle = lingrad;
  ctx.fillRect(-75,-75,150,150);

  // 画50个大小随机，位置随机的星星
  for (var j=1;j<50;j++){
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.translate(75-Math.floor(Math.random()*150),
                  75-Math.floor(Math.random()*150)); // 通过偏移改变星星位置
    drawStar(ctx,Math.floor(Math.random()*4)+2); // 随机大小
    ctx.restore();
  }
  
}
function drawStar(ctx,r){
  ctx.save();
  ctx.beginPath()
  ctx.moveTo(r,0);
  for (var i=0;i<9;i++){ // 五角星的10个顶点
    ctx.rotate(Math.PI/5);
    if(i%2 == 0) {
      ctx.lineTo((r/0.525731)*0.200811,0);
    } else {
      ctx.lineTo(r,0);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}


draw(ctx);
