//Initializing my objects with their parameters.
let object_1 = {x: 40, y: 100, width: 40, height: 70, color: 'red', directionX: -1, directionY: 1, speedX: 1, speedY: 3};
let object_2 = {x: 760, y: 100, width: 40, height: 70, color: 'red', directionX: 1, directionY: -1, speedX: 1, speedY: 3};
//Initializing my canvas parameters and variables.
let canvas_2 = {x: 800, y: 600}
//Function setup section.
function setup() {
    createCanvas(canvas_2.x, canvas_2.y);
}
function draw() {
    //Adding background color.
    background('black');
    //Motion
    movedown(object_1, object_2);
    moveup(object_1, object_2);
}
//Setting up the functions to move:
function moveup() {
    if(keyIsDown(UP_ARROW)) {
        //Drawing objects.
        rect(object_1.x, object_1.y + 200, object_1.width, object_1.height);
        rect(object_2.x, object_2.y + 200, object_2.width, object_2.height);
        //Motion.
        object_1.y = (object_1.speedY * object_1.directionY);
        object_2.y = (object_2.speedY * object_2.directionY);
        //Setting up change in direction.
        object_1.directionY = object_1.directionY * -1;
        object_2.directionY = object_2.directionY * -1;
    }
}
function movedown() {
    if(keyIsDown(DOWN_ARROW)) {
        //Drawing objects.
        rect(object_1.x, object_1.y + 200, object_1.width, object_1.height);
        rect(object_2.x, object_2.y + 200, object_2.width, object_2.height);
        //Motion.
        object_1.y = (object_1.speedY * object_1.directionY);
        object_2.y = (object_2.speedY * object_2.directionY);
        //Direction change.
        object_1.directionY = object_1.directionY*-1;
        object_2.directionY = object_2.directionY*-1;
    }
}
