//Initializing two objects, ball and canvas_1.
let ball = {x: 0, y: 0, radius: 50, speedX: 5, speedY: 5, directionX: -1, directionY: 1,}
let canvas_1 = {x: 800, y: 600}
//Setting up the 800 x 600 px canvas!
function setup() {
    createCanvas(canvas_1.x, canvas_1.y);
}
//Now setting up the function to draw circle and have it bounce off walls.
function draw() {
    background('black')
    //Making the ball
    circle(ball.x, ball.y, ball.radius)
    //Motion
    ball.x = ball.x + (ball.directionX * ball.speedX)
    ball.y = ball.y + (ball.directionY * ball.speedY)
    //If statements to change direction
    if(ball.x < 0) {
        ball.directionX = ball.directionX*-1;
    }
    if (ball.y < 0) {
        ball.directionY = ball.directionY*-1;
    }
    if(ball.x > canvas_1.x) {
        ball.directionX = ball.directionX*-1;
    }
    if(ball.y > canvas_1.y) {
        ball.directionY = ball.directionY*-1;
    }
}