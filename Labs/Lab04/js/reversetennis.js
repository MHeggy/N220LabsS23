//Initializing my objects with their parameters.
let object_1 = {x: 40, y: 100, width: 40, height: 70, color: 'red', directionX: -1, directionY: 1, speedX: 1, speedY: 1};
let object_2 = {x: 760, y: 100, width: 40, height: 70, color: 'red'};
//Initializing my canvas parameters and variables.
let canvas_2 = {x: 800, y: 600}
//Function setup section.
function setup() {
    createCanvas(canvas_2.x, canvas_2.y);
    fill('black');
}
//Setting up the functions to move:
function moveup(object_1) {
    if(keyIsDown(UP_ARROW)) {
        //Setting up motion.
        object_1.x = (object_1.speedY * object_1.directionX)
    }
}
function movedown() {
    if(keyIsDown(DOWN_ARROW)) {

    }
}
function draw() {
    rect(object_1.)
}