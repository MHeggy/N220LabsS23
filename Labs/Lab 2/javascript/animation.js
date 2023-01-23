function setup() {
    createCanvas(400, 300)
    background('black')
}

function draw() {
    circle(mouseX, mouseY, 50);
    if(mouseX > 200) {
        fill(255,0,0);
    }
    if(mouseX < 200) {
        fill(0,0,255);
    }
}