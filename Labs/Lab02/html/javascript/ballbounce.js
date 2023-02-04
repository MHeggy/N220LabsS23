//Setting up all necessary variables first.
var x = 0;
var y = 0;
var width = 800;
var height = 600;
var speedX = 5;
var speedY = 5;
var directionX = -1;
var directionY = 1;
//Setting up the 800 x 600 px canvas!
function setup() {
    createCanvas(800, 600);
}
//Now setting up the function to draw circle and have it bounce off walls.
function draw() {
    background('black')
    //Making the ball.
    circle(x, y, 40)
    //Motion
    x = x + (directionX * speedX)
    y = y + (directionY * speedY)
    //If statements to change direction
    if(x < 0) {
        directionX = directionX*-1;
    }
    if (y < 0) {
        directionY = directionY*-1;
    }
    if(x > width) {
        directionX = directionX*-1;
    }
    if(y > height) {
        directionY = directionY*-1;
    }

}