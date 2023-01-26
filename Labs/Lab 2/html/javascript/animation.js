//Setting up the 400 x 300 px canvas on the screen with a black background so that the circles and canvas can be more easily seen.
function setup() {
    createCanvas(400, 300)
    background('black')
}
//Setting up the draw() function here so that the circle appears on the screen.
function draw() {
    circle(mouseX, mouseY, 50);
    //First conditional that shows if the mouseX position crosses the 200px threshold, then the circle will be drawn in red.
    if(mouseX > 200) {
        fill(255,0,0);
    }
    //Second conditional that shows if the X position of the mouse crosses the threshould of beneath 200 px, the circles are then drawn in the blue color.
    if(mouseX < 200) {
        fill(0,0,255);
    }
}