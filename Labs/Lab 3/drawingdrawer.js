//Setting up object (car)
let car = {
    x: xMouse,
    y: yMouse,
    xSpeed: 6,
    ySpeed: 6,
}

//Creating Background and Canvas
function setup() {
    createCanvas(800,600);
    background('black');
}
//Drawing a car.
function draw() {
    rect(400, 300, 45, 30)
}
