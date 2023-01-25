//Setting up all necessary variables first.
let r = 50;
var x = 5;
var y = -5;
//Setting up the 800 x 600 px canvas!
function setup() {
    createCanvas(800, 600);
    background('black');
}
//Now setting up the function to draw circle and have it bounce off walls.
function draw() {
    circle(700,300, r);
}