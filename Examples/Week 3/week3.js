let line1 = { x: 0, y: 0 };

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if(mouseIsPressed) {
    line1.x = mouseX;
    line1.y = mouseY;
  }
  
  let zah = distance( line1, { x: mouseX, y: mouseY });
  
  if(zah > 120) {
    stroke("#FF0000");
  } else {
    stroke("#000000");
  }
  
  line(line1.x, line1.y, mouseX, mouseY);
}

function distance(p1, p2) {
  
  let dx = p1.x - p2.x;
  let dy = p1.y - p2.y;
  
  //return the distance
   Math.sqrt(dx*dx + dy*dy);
}