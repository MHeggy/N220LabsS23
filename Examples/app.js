let r = 5;

function setup() {
    createCanvas(800,600)
    background(200,200,100)
}

function draw() {
    circle(mouseX, mouseY, r)

    if(mouseIsPressed) {
        r = 50;
    }
}