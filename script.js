const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

c.strokeStyle = "orangered";
c.lineWidth = 10;
c.lineCap = "round";
c.lineJoin = "round";
let isDrawing = false;


let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
  if(!isDrawing) return;

  c.beginPath();
  c.strokeStyle = `hsl(${hue},100%,50%)`
  c.moveTo(lastX,lastY);
  c.lineTo(e.offsetX,e.offsetY);
  c.stroke();

  lastX = e.offsetX;
  lastY = e.offsetY;

  hue++;

  if(hue >= 360){
    hue = 0;
  }

  if(c.lineWidth >= 100 || c.lineWidth <= 1){
    direction = !direction;
  }

  if(direction){
    c.lineWidth++;
  }else{
    c.lineWidth--;
  }

}


canvas.addEventListener("mousedown",(e) => {
  isDrawing = true
  lastX = e.offsetX;
  lastY = e.offsetY;
});
canvas.addEventListener("mousemove",draw);

canvas.addEventListener("mouseup",() => isDrawing = false);
canvas.addEventListener("mouseout",() => isDrawing = false);

window.addEventListener("resize",() => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
})

