//Initializing x and y arguments.
let xPos = 0;
let yPos = 0;
//Creating Background and Canvas
function setup() {
    createCanvas(800,600);
    background('black');
}
//Initializing the function to fit proper paremeters.
function draw() {
    drawCar(mouseX, mouseY);
    drawCar(mouseX + 60, mouseY + 60);
    drawCar(mouseX - 60, mouseY - 60);
}
//Setting up the drawCar function.
function drawCar(xPos, yPos) {
    //Back wheel of car.
    circle(xPos + 10, yPos + 30, 25);
    //Front wheel of car.
    circle(xPos + 50, yPos + 30, 25);
    //Body of the car.
    rect(xPos, yPos, 75, 30);
    //"Pilot/Cabin" of the car.
    triangle(xPos + 30, yPos, xPos + 30, yPos - 30, xPos + 60, yPos);
}
