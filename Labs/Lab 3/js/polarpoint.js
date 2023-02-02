//Initializing my variables for radius, x, and y.
let r = 10;
let res = {x: polarPoint(x), y: polarPoint(y),}
let angle;
//Setting up the Canvas and Background for my circle to be drawn.
function setup() {
    createCanvas(800, 600);
    background('black');
}

//Setting up the draw() function. 
function draw(x, y) {
    translate(100, 100);
    polarPoint(x, y);
}
//Setting up the polarPoint() function.
function polarPoint(x, y) {
    //Initializing x and y variables within the polarPoint() function.
    x = r * Math.sin(mouseX);
    y = r * Math.cos(mouseX);
    //Drawing the circle
    circle(x, y, r);
    return createVector(x, y);
}