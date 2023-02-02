//Setting up color variable and no red variables.
let myColor;
let newColor;
//Setting up canvas and black background color.
function setup() {
    createCanvas(800, 600);
    background('black');
    myColor = fill(170, 200, 150);
}
//
function draw() {
    circle(400, 300, 50);
    noRed(myColor);
}
//Setting up noRed Function
function noRed(myColor) {
    myColor.setRed(0);
    fill(myColor);
}