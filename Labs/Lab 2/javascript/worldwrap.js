//Setting up variables. One for positioning of the circle on the x axis and then r is the radius of the circle being drawn.
var x = 0;
let r = 50;
//Setting up the 800 x 600 px canvas!
function setup() {
    createCanvas(800,600);
}
//This is the meat of the code. I use the draw function and simple arithmetic to get the ball to move. I included the background in the draw section and not the setup function because it makes it so that the ball only appears on the screen once.
function draw() {
    background('black');
    //Initial circle that appears on the far left-hand side of canvas.
    circle(x, 100, r);
    //This is the code to get the circle to move right at a rate of 5 px/frame.
    x=x+5;
    //This is the if statement that shows if the position of the circle reaches 800, a new circle needs to be drawn on the left-hand side of the screen.
    if(x >= 800) {
        circle(20, 100, r);
    }
}