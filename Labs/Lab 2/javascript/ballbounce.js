//Setting up all necessary variables first.
let r = 50;
var x = 0;
var y = 0;
var speedX = 5;
var speedY = 5;
//Setting up the 800 x 600 px canvas!
function setup() {
    createCanvas(800, 600);
}
//Now setting up the function to draw circle and have it bounce off walls.
function draw() {
    background('black');
    circle(x+700, y+300, r);
    x = x-speedX;
    y = y+speedY;
    if(y > height) {
    y *= -1;
    }
}