
//Creating Background and Canvas
function setup() {
    createCanvas(800,600);
    background('black');
}
//Drawing a car.
function draw() {
    rect(400, 300, 100, 30);
    circle(410, 342, 25);
    circle(490, 342, 25);
    triangle(440, 300, 440, 260, 500, 300);
}
