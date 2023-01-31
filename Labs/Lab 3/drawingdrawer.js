//Initializing x and y arguments.
let xPos = 400;
let yPos = 300;
//Creating Background and Canvas
function setup() {
    createCanvas(800,600);
    background('black');
}
//Drawing a car by combining simplistic shapes together.
function draw() {
    rect(xPos, 300, yPos - 200, 30);
    circle(xPos + 10, yPos + 42, 25);
    circle(xPos + 90, yPos + 42, 25);
    triangle(xPos + 40, yPos, xPos + 40, yPos - 40, xPos + 100, yPos);
}
