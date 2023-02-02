//Setting up color variable and no red variables.
let myColor;
let newColor;
//Setting up canvas and black background color.
function setup() {
    createCanvas(800, 600);
    background('black');
    myColor = color(170, 200, 150);
}
//Setting up draw function for my circle.
function draw() {
    myColor = noRed(myColor);
    fill(myColor);
    circle(400, 300, 50);
}
//Setting up noRed Function
function noRed(myColor) {
    myColor.setRed(0);
    return(myColor);
}