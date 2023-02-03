let r = 5;

function setup() {
    createCanvas(800, 600);
    background(212, 30, 42);

    fill(252, 45, 187)
    rect( 40,50, 100, 20);
}
//Drawing a circle so that radius can not grow above 50.
function draw() {
    circle(mouseX, mouseY, r);
    
    if(mouseIsPressed) {
        r ++;
    }
}
