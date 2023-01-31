

function setup() {
    createCanvas(600,400);
}
function draw() {
    drawPerson(40, 40);
}

function drawPerson(x, y) {
    circle(x, y, 40);
    circle(x-5, y-5, 5);
    circle(x+5, y-5, 5);
    square(x+5, y+15, 10);
    square(x-15, y+15, 10);
}