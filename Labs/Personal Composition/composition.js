let r = 25;

//Making a Canvas for the Composition
function setup() {
    createCanvas(1000,800)
    background('blue')
}
//Drawing a circle for the first object of Composition
function drawCircle() {
    circle(100, 250, r)
    circle(125, 250, r)
}

function drawRectangle() {
    rect(100, 100, 25, 65)
}