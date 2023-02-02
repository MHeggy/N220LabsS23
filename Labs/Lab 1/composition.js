//This variable represents the desired Radius of the circle used in Composition
let r = 25;
//These Variables represent the two sides of the rectangle used in Composition
let xSide = 65;
let ySide = 25;
//Making a Canvas for the Composition
function setup() {
    createCanvas(1000,800)
    background('black')
}
//Drawing a basic shape by combining rectangle, circles, and triangle
function draw() {
    //Two circles to denote the wheels of the car
    circle(100, 250, r)
    circle(125, 250, r)
    //Rectangle drawn to represent the body of the car
    rect(80, 210, xSide, ySide)
    //Triangle drawn to represent 'Cabin' of the car
    triangle(130, 210, 140, 150, 100, 210)
    //Make the shapes a yellow color
    fill(255, 204, 124)
    //Circle drawn to represent a sun in the top left-hand corner of the Canvas
    circle(900, 10, 250)
}