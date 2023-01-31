//Setting up color variable and no red variables.
let myColor;
let newColor;
//Setting up canvas and black background color.
function setup() {
    createCanvas(800, 600);
    background('black');
    myColor = fill(170, 200, 150);
}
function draw() {
    circle(400, 300, 50);
    fill(0, 200, 150);
    let newColor = noRed(myColor);
}
//Setting up noRed Function
function noRed() {
    circle(400, 300, 50);
    myColor.setRed(0);
}
